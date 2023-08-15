export type Post = {
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  excerpt: string;
  hidden: boolean;
  readingTime: string | undefined;
  render: () => { html: string };
};
