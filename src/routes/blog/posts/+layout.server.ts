import { importPosts } from "$utils/posts";

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace("/blog/posts/", "");
  const post = importPosts(true).find((post) => post.slug === slug);

  return {
    post
  };
}
