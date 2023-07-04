export type Post = {
  id: number;
  layout: string;
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  hidden: boolean;
  readingTime: string | undefined;
  render: () => { html: string };
};
