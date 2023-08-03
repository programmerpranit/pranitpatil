import Blog404 from "@/components/Blog404";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import moment from "moment/moment";
import Image from "next/image";
import React from "react";

const BlogPage = ({ blog }) => {
  const getDate = (str) => {
    return moment(str).format("DD MMM YYYY");
  };

  const getTime = (str = "") => {
    let words = str.split(" ");
    if (words.length / 200 < 1) {
      return 1;
    } else {
      return words.length / 200;
    }
  };

  if (!blog) return <Blog404 />;

  return (
    <>
      <div className="flex max-w-6xl m-auto">
        <div className="w-2/12"></div>
        <div className="md:w-8/12  ">
          <article className="ProseMirror">
            <p className="text-secondary uppercase font-semibold">
              {blog.category}
            </p>

            <h1 className="text-5xl leading-tight mt-5">{blog.title}</h1>

            <div className="flex gap-5 my-5 cursor-pointer">
              <p className="text-secondary hover:text-primary">
                {getDate(blog.createdAt)}
              </p>
              <p className="text-secondary hover:text-primary">
                {getTime(blog.content)} Min Read
              </p>
            </div>

            {blog.image && (
              <Image
                src={blog.image}
                width={800}
                height={400}
                alt={blog.title}
                className=""
              />
            )}

            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="content my-5"
            ></div>
          </article>
        </div>
        <div className="w-2/12"></div>
      </div>
    </>
  );
};

export default BlogPage;

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  try {
    await dbConnect();
    const blogData = await Blog.findOne({ slug: slug, published: true });
    const blog = JSON.parse(JSON.stringify(blogData));

    return {
      props: { blog },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { blog: null },
    };
  }
}
