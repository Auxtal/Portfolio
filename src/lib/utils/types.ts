export type Post = {
  id: number;
  layout: string;
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  readingTime: string;
  hidden: boolean;
  render: () => { html: string };
};
