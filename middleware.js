import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside

// const isAdminRoute = (pathname) => {
//   return pathname.startsWith('/admin');
// }

export async function middleware(req) {
  // console.log(req);
  const token = req.cookies.get("authorization");
  // const {pathname} = req.nextUrl;
  try {
    var key = process.env.ADMIN_SEC;
    const sec = new TextEncoder().encode(key);

    var admin = await jwtVerify(token.value, sec);

    if (admin.payload.admin.verified) {
      // req.admin = admin;
      return NextResponse.next();
    }
  } catch (error) {
     console.log(error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.redirect(new URL("/auth/login", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
