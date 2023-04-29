import dbConnect from "@/middleware/mongo";
import Image from "@/models/Image";
const handler = async (req, res) => {
  if (req.method == "GET") {
    const { search = "" } = req.query;

    try {
      await dbConnect();
      let images;
      if (search.length == 0) {
        images = await Image.find({});
      } else {
        images = await Image.find({ $text: { $search: search } }).limit(10).sort({_id: -1});
      }

      return res
        .status(200)
        .json({ message: "Images Fetched Successfully", images });
    } catch (error) {
      return res.status(500).json({ message: "Unknown Error occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};
export default handler;
