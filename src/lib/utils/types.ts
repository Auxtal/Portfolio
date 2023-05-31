export type Post = {
  id: number;
  layout: string;
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  cover: any;
  readingTime: string;
  hidden: boolean;
};

export interface Metadata {
  id: number;
  layout: string;
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  readingTime: string;
  hidden: boolean;
}
