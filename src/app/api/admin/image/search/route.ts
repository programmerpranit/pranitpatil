import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Image } from "@/models/Image";
import type { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { searchParams }: { searchParams: { search?: string } }
): Promise<Response> {
  const admin = verifyAdmin(req);
  if (admin === null)
    return Response.json({ message: "Unauthorized!" }, { status: 401 });

  try {
    await dbConnect();
    let images;
    if (searchParams.search?.length === 0) {
      images = await Image.find({}).limit(10).sort({ _id: -1 });
    } else {
      images = await Image.find({
        $text: { $search: searchParams.search ?? "" },
      })
        .limit(10)
        .sort({ _id: -1 });
    }
    return Response.json(
      { message: "Images Fetched Successfully", images },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
