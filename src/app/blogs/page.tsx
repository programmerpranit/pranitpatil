import BlogCard from "./BlogCard";
import { type IBlog } from "@/models/Blog";
import { BASE_URL } from "@/utils/config";
import React from "react";

interface BlogType extends IBlog, MongoBase {}

/**
 * Fetches the blogs from the API on build time.
 * This is similar to getStaticProps in the pages directory.
 */

const fetchBlogs = async (): Promise<BlogType[]> => {
  const res = await fetch(`${BASE_URL}/api/blog`);
  const body = await res.json();
  return body.blogs;
};

const AllBlogs = async (): Promise<JSX.Element> => {
  const blogs: BlogType[] = await fetchBlogs();

  return (
    <>
      <h2 className="my-5 text-center">Blogs</h2>

      <div className="m-auto flex max-w-6xl flex-col flex-wrap justify-center p-5 md:flex-row">
        {blogs.map((blog) => (
          <div key={blog._id} className={"w-1/3 max-md:w-full"}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
