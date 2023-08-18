import dbConnect from "@/middleware/mongo";
import { verifyAdmin } from "@/middleware/verifyToken";
import Blog from "@/models/Blog";

const handler = async (req, res) => {
  const admin = verifyAdmin(req);
  if (!admin) return res.status(401).json({ message: "Unauthorized!" });

  if (req.method == "PUT") {
    const { id } = req.query;

    const {
      category,
      title = "",
      slug = "",
      image = "",
      desc = "",
      content = "",
    } = req.body;

    try {
      await dbConnect();

      const blog = await Blog.findByIdAndUpdate(
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
      res.revalidate(`/blogs/${blog.slug}`);
      return res
        .status(200)
        .json({ message: "Blog Updated Successfully", blog });
    } catch (error) {
      return res.status(500).json({ message: "Unknown Error occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
