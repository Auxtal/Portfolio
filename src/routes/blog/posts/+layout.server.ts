import { importPosts } from "$lib/utils/server/posts";

export const load = ({ url }: { url: { pathname: string } }) => {
  const { pathname } = url;
  const slug = pathname.replace("/blog/posts/", "");
  const post = () => importPosts(true).find((post) => post.slug === slug);

  return {
    post: post()
  };
};
