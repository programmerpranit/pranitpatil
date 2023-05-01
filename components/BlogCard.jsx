import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="md:m-5 my-5 border border-gray-300 shadow-md rounded">
        <Image
          className="rounded-t h-48 object-cover"
          src={blog?.image}
          width={500}
          height={400}
          alt={"blog img"}
        />
        <div className="p-4">
          <p className="font-semibold text-gray-700 uppercase">
            {blog.category}
          </p>
          <h3 className="max-lines-3 my-2 leading-normal hover:text-primary">
            {blog.title}
          </h3>
          {/* <p className="max-lines-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam fuga
            vel asperiores enim debitis
          </p> */}
          <div className="flex justify-between">
            <Link href={`/blogs/${blog.slug}`}>
              <p className="text-primary font-semibold mt-2">Read More</p>
            </Link>
            <p className=" mt-2">3 min read</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
