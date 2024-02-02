"use client";

import Link from "next/link";
import React from "react";

const Error = (): JSX.Element => {
  return (
    <>
      <div className="flex h-[70vh] flex-col items-center justify-center">
        <h2>Blog Not Found</h2>
        <p className="my-3">Check my other blogs</p>
        <Link href={"/blogs"}>
          <button className="bg-primary">My Blogs</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
