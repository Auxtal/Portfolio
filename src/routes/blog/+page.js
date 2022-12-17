export const load = () => {
  let body = [];
  let allPosts = import.meta.glob("./**/*.svelte.md");
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
      }
      ));
  }

  let posts = Promise.all(body)
  return { posts };
}
