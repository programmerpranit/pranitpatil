import { verify } from "jsonwebtoken";

export const verifyAdmin = (req) => {
  try {
    const { authorization } = req.headers;

    const bearer = authorization.split(" ");
    const token = bearer[1];

    const admin = verify(token, process.env.ADMIN_SEC);

    if (!admin.admin.verified) {
      return null;
    } else {
      return admin;
    }
  } catch (error) {
    return null;
  }
};
