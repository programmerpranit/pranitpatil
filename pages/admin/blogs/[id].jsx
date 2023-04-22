import BlogSideBar from "@/components/BlogSideBar";
import ImageSideBar from "@/components/ImageSideBar";
import TextEditor from "@/components/TextEditor";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import React, { useState } from "react";

const BlogEditor = ({ blogObj }) => {
  const [blog, setBlog] = useState(blogObj);
  const [content, setcontent] = useState("<p>Start Typing Here</p>")

  const handleTextarea = (e) => {
    e.target.style.height = "auto";
    let scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  };

  return (
    <>
      <div className="flex max-md:flex-col mt-5">
        <div className="md:w-1/4">
          <ImageSideBar/>
        </div>
        <div className=" max-w-3xl md:w-1/2 p-5">
          <input
            type="text"
            placeholder="category"
            className="p-2 uppercase font-semibold outline-none"
          />

          <textarea
            name="title"
            value={blog?.title ? blog.title : ""}
            onKeyUp={handleTextarea}
            onChange={(e) => {
              setBlog({ ...blog, title: e.target.value });
            }}
            className=" w-full max-h-screen leading-normal text-4xl p-2 font-bold resize-none outline-none "
            placeholder="Title"
          ></textarea>
          
          <TextEditor content={content} setContent={setcontent}/>

        </div>
        <div className="md:w-1/4">

          <BlogSideBar blog={blog} setBlog={setBlog} /> 

        </div>
      </div>
    </>
  );
};

export default BlogEditor;

export async function getServerSideProps(context) {

  console.log(context);

  const id = context.query.id;

  if(id == 'add') {
    return {
      props: {blogObj: null}, // will be passed to the page component as props
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
    props: {blogObj},
  };
}
