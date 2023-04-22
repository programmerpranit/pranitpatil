import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import React from "react";

const AllBlogs = () => {
  return (
    <>
      <h2 className="text-center my-5">Blogs</h2>

      <div className="max-w-6xl m-auto p-5 flex flex-col md:flex-row flex-wrap justify-center">
        <Link href={"/blogs/bbb"} className={"w-1/3 max-md:w-full"}>
          <BlogCard />
        </Link>
        <Link href={"/"} className={"w-1/3 max-md:w-full"}>
          <BlogCard />
        </Link>
        <Link href={"/"} className={"w-1/3 max-md:w-full"}>
          <BlogCard />
        </Link>
        <Link href={"/"} className={"w-1/3 max-md:w-full"}>
          <BlogCard />
        </Link>
      </div>
    </>
  );
};

export default AllBlogs;
