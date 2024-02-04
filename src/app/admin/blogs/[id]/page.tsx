import dbConnect from "@/middleware/mongo";
import { Blog, type IBlog } from "@/models/Blog";
import React from "react";
import BlogEditor from "./BlogEditor";

interface BlogType extends IBlog, MongoBase {}
const fetchBlog = async (blogId: string): Promise<BlogType | null> => {
  "use server";
  await dbConnect();
  const blog: BlogType | null = await Blog.findById(blogId);
  console.log(blog?.content);
  return JSON.parse(JSON.stringify(blog));
};

const BlogEditorPage = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const blog = await fetchBlog(params.id);

  return (
    <>
      <BlogEditor blogObj={blog} />
    </>
  );
};

export default BlogEditorPage;
