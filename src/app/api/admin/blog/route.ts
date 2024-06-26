import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Blog } from "@/models/Blog";
import type { NextRequest } from "next/server";

export const revalidate = -1;

// update blog
export async function POST(req: NextRequest): Promise<Response> {
  const admin = verifyAdmin(req);
  if (admin === null)
    return Response.json({ message: "Unauthorized!" }, { status: 401 });

  try {
    await dbConnect();
    const {
      category = "",
      title = "",
      slug = "",
      published = false,
      image = "",
      desc = "",
      content,
    } = await req.json();

    const blog = await Blog.create({
      title,
      image,
      content,
      desc,
      slug,
      category,
      published,
    });

    return Response.json(
      { message: "Blog Created Successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
