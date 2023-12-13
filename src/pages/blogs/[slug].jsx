import Blog404 from "@/components/Blog404";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import moment from "moment/moment";
import Image from "next/image";
import React, { useEffect } from "react";

// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import Head from "next/head";
import { useRouter } from "next/router";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

const BlogPage = ({ blog }) => {
  // const router = useRouter();

  const getDate = (str) => {
    return moment(str).format("DD MMM YYYY");
  };

  const getTime = (str = "") => {
    let words = str.split(" ");
    if (words.length < 200) {
      return 1;
    } else {
      return Math.ceil(words.length / 200);
    }
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // if (router.isFallback) {
  //   return (
  //     <>
  //       {" "}
  //       <p> Loading...</p>
  //     </>
  //   );
  // }

  if (!blog) return <Blog404 />;

  const schema = `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://pranitpatil.com/blogs/${blog.slug}"
  },
  "headline": "${blog.title}",
  "description": "${blog.desc}",
  "image": "${blog.image}",  
  "author": {
    "@type": "Person",
    "name": "Pranit Patil",
    "url": "https://pranitpatil.com"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Pranit Patil",
    "logo": {
      "@type": "ImageObject",
      "url": ""
    }
  },
  "datePublished": "${blog.createdAt}",
  "dateModified": "${blog.updatedAt}"
}`;

  return (
    <>
      <Head>
        <title key="title">{blog.title} | Pranit Patil</title>
        {/* <meta property="og:title" content="My new title" key="title" /> */}
        <meta key="desc" name="description" content={blog.desc} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      </Head>
      <div className="flex max-w-6xl m-auto">
        <div className="w-2/12 max-md:hidden"></div>
        <div className="md:w-8/12 w-full">
          <article className="ProseMirror">
            <p className="text-secondary uppercase font-semibold">
              {blog.category}
            </p>

            <h1 className="text-5xl leading-tight mt-5">{blog.title}</h1>

            <div className="flex gap-5 my-5 cursor-pointer">
              <p className="text-secondary hover:text-primary">
                {getDate(blog.createdAt)}
              </p>
              <p className="text-secondary hover:text-primary">
                {getTime(blog.content)} Min Read
              </p>
            </div>

            {blog.image && (
              <Image
                src={blog.image}
                width={800}
                height={400}
                alt={blog.title}
                className=""
                loading="lazy"
              />
            )}

            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="content my-5"
            ></div>
          </article>
        </div>
        <div className="w-2/12"></div>
      </div>
    </>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  await dbConnect();
  const posts = await Blog.find({ published: true }).select({ content: 0 });

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: "blocking", // false or "blocking"
  };
};

export async function getStaticProps(context) {
  // console.log(context.params);
  const slug = context.params.slug;
  try {
    await dbConnect();
    const blogData = await Blog.findOne({
      slug: slug,
    });
    if (!blogData.published) {
      return {
        props: { blog: null },
      };
    }
    const blog = JSON.parse(JSON.stringify(blogData));
    return {
      props: { blog },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { blog: null },
    };
  }
}
