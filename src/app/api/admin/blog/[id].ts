import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Blog, type IBlog } from "@/models/Blog";
import type { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";

export async function PUT(
  req: NextApiRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const admin = verifyAdmin(req);
  if (admin === null)
    return Response.json({ message: "Unauthorized!" }, { status: 401 });

  try {
    await dbConnect();
    const id = params.id;
    const {
      category,
      title = "",
      slug = "",
      image = "",
      desc = "",
      content = "",
    } = req.body;
    const blog: IBlog | null = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        image,
        content,
        desc,
        slug,
        category,
      },
      { new: true }
    );
    if (blog?.published === true) {
      revalidatePath(`/blogs/${blog.slug}`);
    }
    return Response.json(
      { message: "Blog Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
