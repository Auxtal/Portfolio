import { importPosts } from "$utils/posts/server";
import { sortPosts } from "$lib/utils";
import dateformat from "dateformat";

import type { Post } from "$utils/types";

export const prerender = true;

export async function GET() {
  const allPosts = await importPosts();
  const sortedPosts = sortPosts(allPosts);

  const body = xml(sortedPosts);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };

  return new Response(body, { headers });
}

const xml = (posts: Post[]) => `
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
>
  <channel>
    <atom:link href="https://www.auxtal.xyz/rss.xml" rel="self" type="application/rss+xml" />
    <title>Ethan's Portfolio</title>
    <link>https://www.auxtal.xyz</link>
    <description>Hey I'm Ethan, come and check out my site!</description>
    <image>
      <url>https://www.auxtal.xyz/images/Logo-Round.webp</url>
      <title>Ethan's Portfolio</title>
      <link>https://www.auxtal.xyz</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${posts
      .map(
        (post) => `
        <item>
          <guid>https://www.auxtal.xyz/blog/posts/${post.slug}</guid>
          <title>${post.title}</title>
          <description>${post.excerpt}</description>
          <link>https://www.auxtal.xyz/blog/posts/${post.slug}</link>
          <pubDate>${dateformat(post.published, "ddd, dd mmm yyyy HH:MM:ss o")}</pubDate>
          ${post.tags ? post.tags.map((tag) => `<category>${tag}</category>`).join("") : ""}
          <content:encoded><![CDATA[
            <div style="margin: 50px 0; font-style: italic;">
              If anything looks wrong, 
              <strong>
                <a href="https://www.auxtal.xyz/blog/posts/${post.slug}">
                  read on the site!
                </a>
              </strong>
            </div>

            ${post.render()?.html}
          ]]></content:encoded>
        </item>
      `
      )
      .join("")}
  </channel>
</rss>`;
