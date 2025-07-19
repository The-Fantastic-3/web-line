import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length < 3) return NextResponse.next();
  const shopId = segments[0];
  const liffId = segments[1];
  const role = segments[2];

  const accessToken = request.cookies.get("access_token")?.value;
  const isAdminPath = role === "admin";

  if (accessToken) {
    if (pathname === `/${shopId}/${liffId}/admin/login`) {
      return NextResponse.redirect(
        new URL(`/${shopId}/${liffId}/admin`, request.url)
      );
    } else if (!isAdminPath) {
      return NextResponse.redirect(
        new URL(`/${shopId}/${liffId}/admin`, request.url)
      );
    }
  }

  if (!accessToken && isAdminPath) {
    return NextResponse.redirect(
      new URL(`/${shopId}/${liffId}/admin/login`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:shopId/:liffId/:role(user|admin)"],
};
