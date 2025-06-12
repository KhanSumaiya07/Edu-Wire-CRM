// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl;

  // Just check if token exists
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Skip role checks here — do that in your actual page logic
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/counsellor/:path*", "/student/:path*"],
};
