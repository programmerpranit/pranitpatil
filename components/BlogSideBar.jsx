import Image from "next/image";
import React, { useEffect, useState } from "react";
import slugify from "slugify";

const BlogSideBar = ({ blog, setBlog, saveBlog, toggleDraft }) => {
  const generateSlug = () => {
    if (!blog) return;
    const slug = slugify(blog?.title, {
      lower: true,
    });
    setBlog({ ...blog, slug: slug });
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg")) {
      console.log("Perfect")
      setBlog({ ...blog, image: url });
    }
  }, [url]);

  return (
    <>
      <div className="pr-10 mt-20">
        <div className="flex justify-between">
          <button
            onClick={toggleDraft}
            className="text-black border border-primary rounded "
          >
            {blog?.published ? "Published" : "Draft"}
          </button>
          <button onClick={saveBlog} className="bg-primary">
            Save
          </button>
        </div>
        <div className="slug my-5 ">
          <p>Slug</p>
          <input
            type="text"
            value={blog?.slug ? blog.slug : ""}
            onChange={(e) => {
              setBlog({ ...blog, slug: e.target.value });
            }}
            className="border p-1 px-2 my-2 w-full outline-none"
          />
          <button onClick={generateSlug} className="bg-primary w-full">
            Generate Slug
          </button>
        </div>
        <div className="slug my-5 ">
          <p>Short Description</p>
          <textarea
            className="border p-1 px-2 my-2 w-full outline-none"
            value={blog?.desc ? blog.desc : ""}
            onChange={(e) => {
              setBlog({ ...blog, desc: e.target.value });
            }}
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <div className="slug my-5 ">
          <p>Featured Image</p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="url"
            className="border p-1 px-2 my-2 w-full outline-none"
          />
          <Image
            src={blog?.image ? blog.image : ""}
            width={500}
            height={300}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BlogSideBar;
