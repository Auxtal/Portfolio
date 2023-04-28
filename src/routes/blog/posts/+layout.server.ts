import { posts } from "$lib/utils/server";

export const load = ({ url }: { url: { pathname: string } }) => {
  const { pathname } = url;
  const slug = pathname.replace("/blog/posts/", "");
  const post = posts.find((post) => post.slug === slug);

  return {
    post
  };
};
