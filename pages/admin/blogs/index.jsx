import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import React from "react";

const AllBlogs = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex flex-col md:flex-row justify-around items-center mb-10">
          <h2 className="text-center">All Blogs</h2>
          <Link href={'/admin/blogs/add'}>
          <button className="bg-primary">Add Blog</button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center">
          <Link href={"/"} className={"w-1/4 max-md:w-full md:mx-2"}>
            <BlogCard />
          </Link>
          <Link href={"/"} className={"w-1/4 max-md:w-full md:mx-2"}>
            <BlogCard />
          </Link>
          <Link href={"/"} className={"w-1/4 max-md:w-full md:mx-2"}>
            <BlogCard />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
