import { AES } from "crypto-js";
import dbConnect from "@/middleware/mongo";
import { z } from "zod";
import { Admin, type IAdmin } from "@/models/Admin";

interface SignupProp {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, password }: SignupProp = await req.json();

    const LoginCredentials = z.object({
      name: z.string(),
      email: z.string().email("Not a Valid Email"),
      password: z.string(),
    });

    const validation = LoginCredentials.safeParse({ name, email, password });
    if (!validation.success) {
      return Response.json(
        { message: "Invalid Credentials", validation },
        { status: 400 }
      );
    }

    await dbConnect();
    const admin: IAdmin | null = await Admin.findOne({ email });

    if (admin !== null) {
      return Response.json(
        { message: "Email Already Exists" },
        { status: 400 }
      );
    }

    const passwordSec = process.env.PASS_SEC ?? "";

    const pass = AES.encrypt(password, passwordSec).toString();

    await Admin.create({ name, email, password: pass });

    return Response.json(
      { message: " User Created Successfully, Please verify." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
}
