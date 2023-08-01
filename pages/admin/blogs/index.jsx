import BlogCard from "@/components/BlogCard";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllBlogs = ({ blogs }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <>
        <div className="p-10">
          <div className="flex flex-col md:flex-row justify-around items-center mb-10">
            <h2 className="text-center">All Blogs</h2>
            <Link href={"/admin/blogs/add"}>
              <button className="bg-primary">Add Blog</button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/admin/blogs/${blog._id}`}
                className={"w-1/4 max-md:w-full md:mx-2"}
              >
                <BlogCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      </>
    );
};

export default AllBlogs;

export async function getServerSideProps(context) {
  try {
    await dbConnect();
    const blogData = await Blog.find();

    const blogs = JSON.parse(JSON.stringify(blogData));

    return {
      props: { blogs },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { blogs: null },
    };
  }
}
