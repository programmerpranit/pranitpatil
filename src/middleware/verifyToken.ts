import type { IPayload } from "@/types/mongo";
import { verify } from "jsonwebtoken";
import type { NextApiRequest } from "next";

export const verifyAdmin = (req: NextApiRequest): any | null => {
  try {
    const { authorization } = req.headers;

    const bearer = authorization?.split(" ");
    if (bearer === undefined) return null;
    const token = bearer[1];

    const adminSec = process.env.ADMIN_SEC;
    if (adminSec === undefined) {
      throw Error("Add ADMIN_SEC in env");
    }

    const admin = verify(token, adminSec);

    const typedPayload = admin as IPayload;
    if (typedPayload.admin.verified) {
      return typedPayload;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
