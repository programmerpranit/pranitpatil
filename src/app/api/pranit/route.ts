import dbConnect from "@/middleware/mongo";

export async function GET(req: Request): Promise<Response> {
  await dbConnect();
  return Response.json({ name: "Pranit" });
}
