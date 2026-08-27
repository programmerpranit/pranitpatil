import { type Blog } from "./types";
import whatIsServerSideRendering from "./what-is-server-side-rendering";
import architectureOfElasticsearch from "./architecture-of-elasticsearch";

export const blogs: Blog[] = [
  whatIsServerSideRendering,
  architectureOfElasticsearch,
];

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find((blog) => blog.slug === slug);
};

export type { Blog };
