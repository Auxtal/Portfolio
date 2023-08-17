import type { ReadTimeResults } from "reading-time";

export type Post = {
  slug: string;
  title: string;
  published: string;
  updated: string;
  tags: string[];
  excerpt: string;
  hidden: boolean;
  content: {
    html: string;
    css: {
      code: string;
      map: string | null;
    };
  };
  readingTime: ReadTimeResults;
};

type PostModule = {
  default: {
    render: () => {
      html: string;
      css: {
        code: string;
        map: string | null;
      };
    };
  };
  metadata: Omit<Post, "slug">;
};

export type PostModules = Record<string, PostModule>;
