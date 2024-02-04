import type { IBlog } from "@/models/Blog";
import Image from "next/image";
import React, {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import slugify from "slugify";

interface BlogType extends IBlog, MongoBase {}

interface BlogSideBarProps {
  blog: BlogType | null;
  setBlog: Dispatch<SetStateAction<BlogType | null>>;
  saveBlog: (t: boolean) => void;
  toggleDraft: () => Promise<void>;
}

const BlogSideBar = ({
  blog,
  setBlog,
  saveBlog,
  toggleDraft,
}: BlogSideBarProps): JSX.Element => {
  const generateSlug = (): void => {
    if (blog === null || blog === undefined) return;
    const slug = slugify(blog?.title, {
      lower: true,
    });
    setBlog({ ...blog, slug });
  };

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg")) {
      console.log("Perfect");
      if (blog === null) return;
      const newBlog = { ...blog, image: url };
      setBlog(newBlog as BlogType);
    }
  }, [url]);

  return (
    <>
      <div className="mt-20 pr-10">
        <div className="flex justify-between">
          <button
            onClick={() => {
              void toggleDraft();
            }}
            className="rounded border border-primary text-black "
          >
            {blog?.published === true ? "Published" : "Draft"}
          </button>
          <button
            onClick={() => {
              saveBlog(true);
            }}
            className="bg-primary"
          >
            Save
          </button>
        </div>
        <div className="slug my-5 ">
          <p>Slug</p>
          <input
            type="text"
            value={blog?.slug != null ? blog.slug : ""}
            onChange={(e) => {
              const newBlog = { ...blog, slug: e.target.value };
              setBlog(newBlog as BlogType);
            }}
            className="my-2 w-full border p-1 px-2 outline-none"
          />
          <button onClick={generateSlug} className="w-full bg-primary">
            Generate Slug
          </button>
        </div>
        <div className="slug my-5 ">
          <p>Short Description</p>
          <textarea
            className="my-2 w-full border p-1 px-2 outline-none"
            value={blog?.desc != null ? blog.desc : ""}
            onChange={(e) => {
              const newBlog = { ...blog, desc: e.target.value };
              setBlog(newBlog as BlogType);
            }}
            cols={30}
            rows={5}
          ></textarea>
        </div>

        <div className="slug my-5 ">
          <p>Featured Image</p>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            placeholder="url"
            className="my-2 w-full border p-1 px-2 outline-none"
          />
          <Image
            src={blog?.image != null ? blog.image : ""}
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
