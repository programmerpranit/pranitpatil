import { type IBlog } from "@/models/Blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogProps extends IBlog, MongoBase {}

const BlogCard = ({ blog }: { blog: BlogProps }): JSX.Element => {
  return (
    <>
      <div className="my-5 rounded border border-gray-300 shadow-md md:m-5">
        <Image
          className="h-48 rounded-t object-cover"
          src={blog?.image}
          width={500}
          height={400}
          alt={"blog img"}
        />
        <div className="p-4">
          <p className="font-semibold uppercase text-gray-700">
            {blog?.category}
          </p>
          <Link href={`/blogs/${blog?.slug}`}>
            <h3 className="max-lines-3 my-2 leading-normal text-black hover:text-primary">
              {blog?.title}
            </h3>
          </Link>
          {/* <p className="max-lines-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam fuga
            vel asperiores enim debitis
          </p> */}
          <div className="flex justify-between">
            <Link href={`/blogs/${blog?.slug}`}>
              <p className="mt-2 font-semibold text-primary">Read More</p>
            </Link>
            {/* <p className=" mt-2">3 min read</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
