import type { IPayload } from "@/types/mongo";
import { verify } from "jsonwebtoken";
import type { NextRequest } from "next/server";

export const verifyAdmin = (req: NextRequest): any | null => {
  try {
    const token = req.cookies.get("authorization")?.value;

    if (token === undefined) {
      throw Error("JWT Token Not Found");
    }

    const adminSec = process.env.JWT_SEC;
    if (adminSec === undefined) {
      throw Error("Add JWT_SEC in env");
    }

    const admin = verify(token, adminSec);
    const typedPayload = admin as IPayload;
    if (typedPayload.admin.verified) {
      return typedPayload;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
