import dbConnect from "@/middleware/mongo";
import Image from "@/models/Image";


const handler = async (req, res) => {
  if (req.method == "GET") {
    await dbConnect();
    const data = await Image.find().sort({_id:-1}).limit(10);

    return res.status(200).json({ message: "Images Fetched Success fully", data });
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
