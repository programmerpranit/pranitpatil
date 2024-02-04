import type { IBlog } from "@/models/Blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogType extends IBlog, MongoBase {}

const BlogCard = ({ blog }: { blog: BlogType }): JSX.Element => {
  return (
    <>
      <div className="my-5 w-1/4 rounded border border-gray-300 shadow-md md:m-5">
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
          <h3 className="max-lines-3 my-2 leading-normal text-black hover:text-primary">
            {blog?.title}
          </h3>

          <div className="flex justify-between">
            <Link href={`/admin/blogs/${blog._id}`}>
              <p className="mt-2 font-semibold text-primary">Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
