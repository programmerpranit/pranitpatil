"use client";

import { handleApiError } from "@/helpers/apierror";
import { type IBlog } from "@/models/Blog";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TextEditor from "./TextEditor";
import BlogSideBar from "./BlogSideBar";
import ImageSideBar from "./ImageSideBar";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

interface BlogType extends IBlog, MongoBase {}

const BlogEditor = ({ blogObj }: { blogObj: BlogType | null }): JSX.Element => {
  //   const fetchedBlog: BlogType | null = await fetchBlog(params.id);

  const [saving, setSaving] = useState(false);
  const [blog, setBlog] = useState<BlogType | null>(blogObj);
  const [content, setcontent] = useState<string>(
    blogObj?.content ?? "<p>Start Typing Here</p>"
  );
  const router = useRouter();

  function saveBlog(t: boolean): void {
    // setBlog({...blog, content: content})
    console.log("saving");
    if (blog?._id !== undefined) {
      void updateBlog(t);
      console.log("PUT");
      console.log(blog);
      console.log(content);
    } else {
      console.log("POST");
      void createBlog();
    }
  }

  const toggleDraft = async (): Promise<void> => {
    try {
      const url = `${BASE_URL}/api/admin/blog/publish`;

      const data = {
        id: blog?._id,
        published: blog?.published,
      };

      const res = await axios.put(url, data, {
        headers: {
          Authorization: "Bearer psp",
        },
      });
      setBlog(res.data.blog as BlogType);
      toast.success(res.data.message as string);
    } catch (error) {
      handleApiError();
    }
  };

  const createBlog = async (): Promise<void> => {
    setSaving(true);
    try {
      const url = `${BASE_URL}/api/admin/blog`;

      const data = {
        category: blog?.category,
        title: blog?.title,
        slug: blog?.slug.trim(),
        image: blog?.image,
        desc: blog?.desc,
        content,
      };

      const res = await axios.post(url, data);
      setBlog(res.data.blog as BlogType);
      toast.success(res.data.message as string);
      console.log(res.data);
      router.push(`/admin/blogs/${res.data.blog._id}`);
    } catch (error) {
      handleApiError(error);
    }
    setSaving(false);
  };

  const updateBlog = async (t: boolean): Promise<void> => {
    setSaving(true);
    try {
      const url = `${BASE_URL}/api/admin/blog/${blog?._id}`;

      const data = {
        category: blog?.category,
        title: blog?.title,
        slug: blog?.slug.trim(),
        image: blog?.image,
        desc: blog?.desc,
        content,
      };

      console.log(data);
      const res = await axios.put(url, data);
      setBlog(res.data.blog as BlogType);
      if (t) {
        toast.success(res.data.message as string);
      }
    } catch (error) {
      handleApiError();
    }
    setSaving(false);
  };

  const handleTextarea = (e: any): void => {
    e.target.style.height = "auto";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="mt-5 flex flex-col md:flex-row">
        <div className="md:w-1/4 ">
          <ImageSideBar />
        </div>
        <div className="relative max-w-3xl p-5 md:w-1/2">
          <input
            type="text"
            value={blog?.category !== undefined ? blog?.category : ""}
            onChange={(e) => {
              const newBlog = { ...blog, category: e.target.value };
              setBlog(newBlog as BlogType);
            }}
            placeholder="category"
            className="p-2 font-semibold  uppercase outline-none"
          />

          <textarea
            name="title"
            value={blog?.title != null ? blog?.title : ""}
            onKeyUp={handleTextarea}
            onChange={(e) => {
              const newBlog = { ...blog, title: e.target.value };
              setBlog(newBlog as BlogType);
            }}
            className=" max-h-screen w-full resize-none p-2 text-4xl font-bold leading-normal outline-none "
            placeholder="Title"
          ></textarea>

          <TextEditor
            content={content}
            setContent={setcontent}
            saveBlog={saveBlog}
          />
        </div>
        <div className="md:w-1/4 ">
          {saving && <p className="text-xl text-blue-500">saving</p>}
          <BlogSideBar
            blog={blog}
            setBlog={setBlog}
            saveBlog={saveBlog}
            toggleDraft={toggleDraft}
          />
        </div>
      </div>
    </>
  );
};

export default BlogEditor;
