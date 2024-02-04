import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import { Blog } from "@/models/Blog";

const handler = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) return res.status(401).json({ message: "Unauthorized!" });

  if (req.method == "PUT") {
    try {
      const { published, id } = req.body;

      await dbConnect();

      const blog = await Blog.findByIdAndUpdate(
        id,
        {
          published: published,
        },
        { new: true }
      );
      res.revalidate(`/blogs/${blog.slug}`);
      return res.status(201).json({
        message: `Blog ${
          published ? "Published Sucessfully" : "Saved In Draft"
        }`,
        blog,
      });
    } catch (error) {
      return res.status(500).json({ message: "Unknown Error occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;
