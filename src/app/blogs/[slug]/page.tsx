import moment from "moment/moment";
import Image from "next/image";
import React from "react";
import { Blog, type IBlog } from "@/models/Blog";
import { BASE_URL } from "@/utils/config";
import dbConnect from "@/middleware/mongo";
import { type Metadata } from "next";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import Highlight from "./Highlight";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("javascript", javascript);

interface BlogProps extends IBlog, MongoBase {}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const res = await fetch(`${BASE_URL}/api/blog/${slug}`);
  const data = await res.json();

  return {
    title: data.blog.title,
    description: data.blog.desc,
  };
}

export async function generateStaticParams(): Promise<any> {
  await dbConnect();
  const blogs = await Blog.find({ published: true }, { slug: 1, _id: 0 });
  return blogs;
}

async function getBlog(slug: string): Promise<BlogProps> {
  const res = await fetch(`${BASE_URL}/api/blog/${slug}`);
  if (!res.ok) {
    throw Error("Unknown error");
  }
  const post = await res.json();
  // console.log(post);
  return post.blog;
}

const BlogPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<JSX.Element> => {
  const blog = await getBlog(slug);

  const getDate = (str: string): string => {
    return moment(str).format("DD MMM YYYY");
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

            {blog?.image.length !== 0 && (
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

// export const getStaticPaths = async () => {
//   await dbConnect();
//   const posts = await Blog.find({ published: true }).select({ content: 0 });

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));
//   // console.log(paths);
//   return {
//     paths,
//     fallback: "blocking", // false or "blocking"
//   };
// };

// export async function getStaticProps(context) {
//   // console.log(context.params);
//   const slug = context.params.slug;
//   try {
//     await dbConnect();
//     const blogData = await Blog.findOne({
//       slug: slug,
//     });
//     if (!blogData.published) {
//       return {
//         props: { blog: null },
//       };
//     }
//     const blog = JSON.parse(JSON.stringify(blogData));
//     return {
//       props: { blog },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: { blog: null },
//     };
//   }
// }
