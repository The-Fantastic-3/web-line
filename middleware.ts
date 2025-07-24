import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length < 3) {
    return NextResponse.next();
  }

  const shopId = segments[0];
  const liffId = segments[1];
  const page = segments[2];

  const token = request.cookies.get("access_token")?.value;
  const hasToken = !!token;

  const isLoginPage = page === "login";
  const isAdminPage = page === "admin";
  const isUserPage = page === "user";

  // ✅ ถ้า login แล้ว → ห้ามเข้า login page → redirect ไป admin
  if (hasToken && isLoginPage) {
    return NextResponse.redirect(
      new URL(`/${shopId}/${liffId}/admin`, request.url),
    );
  }

  // ✅ ถ้าไม่ได้ login และอยู่ใน admin → redirect ไป login
  if (!hasToken && isAdminPage) {
    return NextResponse.redirect(
      new URL(`/${shopId}/${liffId}/login`, request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
