import Blog404 from "@/components/Blog404";
import dbConnect from "@/middleware/mongo";
import Blog from "@/models/Blog";
import Image from "next/image";
import React from "react";

const BlogPage = ({blog}) => {


  if(!blog) return <Blog404/>;

  return (
    <>
      <div className="flex max-w-6xl m-auto">
        <div className="w-2/12"></div>
        <div className="w-8/12  ">
          <article>
            <p className="text-secondary uppercase font-semibold">Category</p>

            <h1 className="text-5xl leading-tight mt-5">
              Blog Title Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h1>

            <div className="flex gap-5 my-5 cursor-pointer">
              <p className="text-secondary hover:text-primary">May 1 2023</p>
              <p className="text-secondary hover:text-primary">5 Min Read</p>
            </div>

            <Image
              src={"/talks/webdev101.jpg"}
              width={800}
              height={400}
              alt="blog image"
              className="object-cover max-h-96"
            />

            <div className="content my-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iure suscipit perferendis dignissimos, asperiores
                atque ratione officia repudiandae, culpa vero neque adipisci?
                Nulla voluptatem vitae id odio fugiat quam? Recusandae?
              </p>
              <br />
              <h2>Heading 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iure suscipit perferendis dignissimos, asperiores
                atque ratione officia repudiandae, culpa vero neque adipisci?
                Nulla voluptatem vitae id odio fugiat quam? Recusandae?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iure suscipit perferendis dignissimos, asperiores
                atque ratione officia repudiandae, culpa vero neque adipisci?
                Nulla voluptatem vitae id odio fugiat quam? Recusandae?
              </p>
              <br />{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iure suscipit perferendis dignissimos, asperiores
                atque ratione officia repudiandae, culpa vero neque adipisci?
                Nulla voluptatem vitae id odio fugiat quam? Recusandae?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iure suscipit perferendis dignissimos, asperiores
                atque ratione officia repudiandae, culpa vero neque adipisci?
                Nulla voluptatem vitae id odio fugiat quam? Recusandae?
              </p>
            </div>
          </article>
        </div>
        <div className="w-2/12"></div>
      </div>
    </>
  );
};

export default BlogPage;

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  try {
    await dbConnect();
    const blogData = await Blog.findOne({ slug: slug });

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
