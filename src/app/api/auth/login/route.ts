import { sign } from "jsonwebtoken";
import { enc, AES } from "crypto-js";
import dbConnect from "@/middleware/mongo";
import { z } from "zod";
import { Admin, type IAdmin } from "@/models/Admin";
/**
 * Retrieves published blogs from the database.
 * @param req - The request object.
 * @returns A promise that resolves to a response object containing the fetched blogs.
 */
export async function POST(req: Request): Promise<Response> {
  try {
    const { email, password } = await req.json();

    const LoginCredentials = z.object({
      email: z.string().email("Not a Valid Email"),
      password: z.string(),
    });

    const validation = LoginCredentials.safeParse({ email, password });
    if (!validation.success) {
      return Response.json(
        { message: "Invalid Login Credentials", validation },
        { status: 400 }
      );
    }

    await dbConnect();
    const admin: IAdmin | null = await Admin.findOne({ email });

    if (admin === null) {
      return Response.json(
        { message: "No user found with given email" },
        { status: 400 }
      );
    }

    if (!admin.verified) {
      return Response.json(
        { message: "Email is not verified" },
        { status: 400 }
      );
    }

    const passwordSec = process.env.PASS_SEC ?? "";
    const jwtSec = process.env.JWT_SEC ?? "";

    const bytes = AES.decrypt(admin.password, passwordSec);
    const pass = bytes.toString(enc.Utf8);

    if (pass === password) {
      const token = sign({ admin }, jwtSec, {
        expiresIn: "1d",
      });
      return Response.json(
        { message: "Successfully Logged In", token },
        { status: 200 }
      );
    } else {
      return Response.json({ message: "Failed to login" }, { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
}
