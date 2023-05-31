import { importPosts } from "$lib/utils/posts/server";

export const load = async ({ url }: { url: { pathname: string } }) => {
  const { pathname } = url;
  const slug = pathname.replace("/blog/posts/", "");
  const post = await importPosts().then((posts) => {
    return posts.find((post) => post.slug === slug);
  });

  return {
    post
  };
};
