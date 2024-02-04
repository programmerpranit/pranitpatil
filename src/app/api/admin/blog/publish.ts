import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Blog, type IBlog } from "@/models/Blog";
import type { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";

export async function PUT(req: NextApiRequest): Promise<Response> {
  const admin = verifyAdmin(req);
  if (admin === null)
    return Response.json({ message: "Unauthorized!" }, { status: 401 });

  try {
    await dbConnect();
    const { published, id } = req.body;

    const blog: IBlog | null = await Blog.findByIdAndUpdate(
      id,
      {
        published,
      },
      { new: true }
    );

    revalidatePath(`/blogs/${blog?.slug}`);
    return Response.json(
      {
        message: `Blog ${
          published === true ? "Published Sucessfully" : "Saved In Draft"
        }`,
        blog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
