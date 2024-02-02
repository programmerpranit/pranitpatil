import dbConnect from "@/middleware/mongo";
import { Blog } from "@/models/Blog";

/**
 * Retrieves published blogs from the database.
 * @param req - The request object.
 * @returns A promise that resolves to a response object containing the fetched blogs.
 */

export async function GET(req: Request): Promise<Response> {
  try {
    await dbConnect();
    const blogs = await Blog.find({ published: true });

    return Response.json(
      { message: "Blogs Fetched Sucessfully", blogs },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
