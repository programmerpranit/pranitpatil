import Link from "next/link";
import React from "react";

const Blog404 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h2>Blog Not Found</h2>
        <p className="my-3">Check my other blogs</p>
        <Link href={"/blogs"}>
          <button className="bg-primary">My Blogs</button>
        </Link>
      </div>
    </>
  );
};

export default Blog404;
