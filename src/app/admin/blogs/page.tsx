import dbConnect from "@/middleware/mongo";
import { Blog, type IBlog } from "@/models/Blog";
import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import type { MongoBase } from "@/types/mongo";

interface BlogType extends IBlog, MongoBase {}

const fetchBlogs = async (): Promise<BlogType[]> => {
  "use server";
  await dbConnect();
  const blogs = await Blog.find();
  return JSON.parse(JSON.stringify(blogs));
};

const AllBlogs = async (): Promise<JSX.Element> => {
  const blogs: BlogType[] = await fetchBlogs();
  return (
    <>
      <div className="p-10">
        <div className="mb-10 flex flex-col items-center justify-around md:flex-row">
          <h2 className="text-center">All Blogs</h2>
          <Link href={"/admin/blogs/add"}>
            <button className="bg-primary">Add Blog</button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
