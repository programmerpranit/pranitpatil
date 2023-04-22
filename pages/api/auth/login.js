import { isValidEmail } from "@/helpers/validations";
import Admin from "@/models/Admin";
import { sign } from "jsonwebtoken";
import { enc, AES } from "crypto-js";
import dbConnect from "@/middleware/mongo";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { email = "", password = "" } = req.body;

      if (email.length == 0 || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }

      await dbConnect();

      const admin = await Admin.findOne({ email: email });

      if (!admin) {
        return res
          .status(400)
          .json({ message: "No user found with given email" });
      }

      if (!admin.verified) {
        return res.status(400).json({ message: "Email is not verified" });
      }
      const bytes = AES.decrypt(admin.password, process.env.ADMIN_SEC);
      const pass = bytes.toString(enc.Utf8);

      if (pass == password) {
        const token = sign({ admin }, process.env.JWT_SEC, {
          expiresIn: "10d",
        });
        return res
          .status(200)
          .json({ message: "Successfully Logged In", token });
      } else {
        return res.status(400).json({ message: "Failed to login" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
