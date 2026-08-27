import BlogCard from "./BlogCard";
import { blogs } from "@/content/blogs";
import React from "react";

const AllBlogs = (): JSX.Element => {
  return (
    <>
      <h2 className="my-5 text-center">Blogs</h2>

      <div className="m-auto flex max-w-6xl flex-col flex-wrap justify-center p-5 md:flex-row">
        {blogs.map((blog) => (
          <div key={blog.slug} className={"w-1/3 max-md:w-full"}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
