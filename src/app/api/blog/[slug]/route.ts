import dbConnect from "@/middleware/mongo";
import { Blog, type IBlog } from "@/models/Blog";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
): Promise<Response> {
  try {
    await dbConnect();
    const slug = params.slug;
    const blog: IBlog | null = await Blog.findOne({ slug });

    if (blog !== null && blog.published) {
      return Response.json(
        { message: "Blogs Fetched Sucessfully", blog },
        { status: 200 }
      );
    }
    return Response.json({ message: "Blogs Not found" }, { status: 404 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
