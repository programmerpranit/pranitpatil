"use server";

import dbConnect from "@/middleware/mongo";
import { Blog, type IBlog } from "@/models/Blog";

interface BlogType extends IBlog, MongoBase {}

export const fetchBlog = async (blogId: string): Promise<BlogType | null> => {
  await dbConnect();
  const blog: BlogType | null = await Blog.findById(blogId);
  console.log(blog?.content);
  return JSON.parse(JSON.stringify(blog));
};
