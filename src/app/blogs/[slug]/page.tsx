import Image from "next/image";
import React from "react";
import { blogs, getBlogBySlug } from "@/content/blogs";
import { type Metadata } from "next";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import Highlight from "./Highlight";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("javascript", javascript);

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const blog = getBlogBySlug(params.slug);
  if (blog === undefined) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.desc,
  };
}

export function generateStaticParams(): Array<{ slug: string }> {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

const BlogPage = ({
  params: { slug },
}: {
  params: { slug: string };
}): JSX.Element => {
  const blog = getBlogBySlug(slug);

  if (blog === undefined) {
    throw new Error("Blog Not Found");
  }

  const getDate = (str: string): string => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(str));
  };

  const getTime = (str: string = ""): number => {
    const words = str.split(" ");
    if (words.length < 200) {
      return 1;
    } else {
      return Math.ceil(words.length / 200);
    }
  };

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
      {/* Schema Data  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <Highlight />
      <main className="m-auto flex max-w-6xl">
        <div className="w-2/12 max-md:hidden"></div>
        <div className="w-full md:w-8/12">
          <article className="ProseMirror">
            <p className="font-semibold uppercase text-secondary">
              {blog.category}
            </p>

            <h1 className="mt-4 text-[40px] leading-[50px]">{blog.title}</h1>

            <div className="my-5 flex cursor-pointer gap-5">
              <p className="text-secondary hover:text-primary">
                {getDate(blog.createdAt)}
              </p>
              <p className="text-secondary hover:text-primary">
                {getTime(blog.content)} Min Read
              </p>
            </div>

            {blog.image.length !== 0 && (
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
      </main>
    </>
  );
};

export default BlogPage;
