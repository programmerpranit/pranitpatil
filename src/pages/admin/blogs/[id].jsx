import BlogSideBar from "@/components/BlogSideBar";
import ImageSideBar from "@/components/ImageSideBar";
import TextEditor from "@/components/TextEditor";
import { handleApiError } from "@/helpers/apierror";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import { BASE_URL } from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import MenuBar from "@/components/MenuBar";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

const BlogEditor = ({ blogObj }) => {
  const [saving, setSaving] = useState(false);
  const [blog, setBlog] = useState(blogObj);
  const [content, setcontent] = useState(
    blogObj?.content ? blogObj?.content : "<p>Start Typing Here</p>"
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        rel: "dofollow",
        HTMLAttributes: {
          class: " bg-primary bg-opacity-10",
        },
      }),
    ],
    content: content,
  });

  const router = useRouter();

  function saveBlog(t) {
    // setBlog({...blog, content: content})
    console.log("saving");
    if (blog?._id) {
      updateBlog(t);
      console.log("PUT");
      console.log(blog);
      console.log(content);
    } else {
      console.log("POST");
      createBlog();
    }
  }

  const toggleDraft = async () => {
    try {
      const url = `${BASE_URL}/api/admin/blog/publish`;

      const data = {
        id: blog?._id,
        published: !blog.published,
      };

      const res = await axios.put(url, data);
      setBlog(res.data.blog);
      toast.success(res.data.message);
    } catch (error) {
      handleApiError();
    }
  };

  const createBlog = async () => {
    setSaving(true);
    try {
      const url = `${BASE_URL}/api/admin/blog`;

      const data = {
        category: blog.category,
        title: blog.title,
        slug: blog.slug.trim(),
        image: blog.image,
        desc: blog.desc,
        content: content,
      };

      const res = await axios.post(url, data);
      setBlog(res.data.blog);
      toast.success(res.data.message);
      router.push(`/admin/blogs/${res.data.blog._id}`);
    } catch (error) {
      handleApiError();
    }
    setSaving(false);
  };

  const updateBlog = async (t) => {
    setSaving(true);
    try {
      const url = `${BASE_URL}/api/admin/blog/${blog._id}`;

      const data = {
        category: blog.category,
        title: blog.title,
        slug: blog.slug.trim(),
        image: blog.image,
        desc: blog.desc,
        content: content,
      };

      console.log(data);
      const res = await axios.put(url, data);
      setBlog(res.data.blog);
      if (t) {
        toast.success(res.data.message);
      }
    } catch (error) {
      handleApiError();
    }
    setSaving(false);
  };

  const handleTextarea = (e) => {
    e.target.style.height = "auto";
    let scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col mt-5">
        <div className="md:w-1/4 ">
          <ImageSideBar />
        </div>
        <div className="relative max-w-3xl md:w-1/2 p-5">
          <input
            type="text"
            value={blog?.category ? blog?.category : ""}
            onChange={(e) => {
              setBlog({ ...blog, category: e.target.value });
            }}
            placeholder="category"
            className="p-2 uppercase  font-semibold outline-none"
          />

          <textarea
            name="title"
            value={blog?.title ? blog?.title : ""}
            onKeyUp={handleTextarea}
            onChange={(e) => {
              setBlog({ ...blog, title: e.target.value });
            }}
            className=" w-full max-h-screen leading-normal text-4xl p-2 font-bold resize-none outline-none "
            placeholder="Title"
          ></textarea>

          <div className="sticky top-0 py-5 bg-white z-50">
            <MenuBar editor={editor} />
          </div>

          <TextEditor
            content={content}
            setContent={setcontent}
            saveBlog={saveBlog}
            editor={editor}
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

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (id == "add") {
    return {
      props: { blogObj: null }, // will be passed to the page component as props
    };
  }

  var blogObj;

  try {
    await dbConnect();
    const data = await Blog.findById(id);
    blogObj = JSON.parse(JSON.stringify(data));
  } catch (error) {
    blogObj = null;
  }

  return {
    props: { blogObj },
  };
}
