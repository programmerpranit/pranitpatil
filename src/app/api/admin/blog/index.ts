import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Blog } from "@/models/Blog";
import type { NextApiRequest } from "next";

export async function PUT(req: NextApiRequest): Promise<Response> {
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
    } = req.body;

    await Blog.create({
      title,
      image,
      content,
      desc,
      slug,
      category,
      published,
    });

    return Response.json(
      { message: "Blog Created Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
