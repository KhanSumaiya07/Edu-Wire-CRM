import { NextResponse } from "next/server";
import { verifyToken } from "@/utils/jwt";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const user = verifyToken(token);
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Example: only admin can access /admin route
  if (url.pathname.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // You can add more route-specific access here
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/counsellor/:path*", "/student/:path*"],
};
