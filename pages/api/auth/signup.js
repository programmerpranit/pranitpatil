import { isValidEmail } from "@/helpers/validations";
import dbConnect from "@/middleware/mongo";
import Admin from "@/models/Admin";
import { enc, AES } from "crypto-js";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const { email = "", password = "", name = "" } = req.body;

      if (email.length == 0 || !isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid Email" });
      }
      if (password.length == 0) {
        return res.status(400).json({ message: "Invalid Password" });
      }
      if (name.length == 0) {
        return res.status(400).json({ message: "Invalid Name" });
      }

      // add logic to check email is already exists

      const pass = AES.encrypt(password, process.env.ADMIN_SEC).toString();

      await dbConnect();

      await Admin.create({ name, email, password: pass });

      return res
        .status(201)
        .json({ message: "User Created Successfully, Please verify." });
    } catch (error) {
      console.log(error);
      if (error.code == 11000) {
        return res.status(400).json({ message: "Email id is already in use" });
      }
      return res.status(500).json({ message: "Unkown Error Occured" });
    }
  } else {
    return res.status(405).json({ message: "This method is not allowed" });
  }
};

export default handler;
