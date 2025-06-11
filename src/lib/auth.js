import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwt";

export function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  return verifyToken(token);
}
