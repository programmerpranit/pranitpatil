import BlogCard from "@/components/BlogCard";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import Link from "next/link";
import React from "react";

const AllBlogs = ({ blogs }) => {
  return (
    <>
      <h2 className="text-center my-5">Blogs</h2>

      <div className="max-w-6xl m-auto p-5 flex flex-col md:flex-row flex-wrap justify-center">
        {blogs &&
          blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blogs/${blog.slug}`}
              className={"w-1/3 max-md:w-full"}
            >
              <BlogCard blog={blog} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default AllBlogs;

export async function getServerSideProps(context) {
  try {
    await dbConnect();
    const data = await Blog.find({ published: true });
    console.log(data);
    const blogs = JSON.parse(JSON.stringify(data));
    return {
      props: { blogs },
    };
  } catch (error) {
    return {
      props: { blogs: [] },
    };
  }
}
