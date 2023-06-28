import { request } from "https";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function middleware(req: NextRequest) {
  //Obteniendo la sesion del usuario
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const pathname = req.nextUrl.pathname;
  const url = req.nextUrl.clone();

  console.log("entro en ruta protegida");

  if (session) {
    const isAdmin = session.email?.split("@")[1] === "admin.com";
    if (!isAdmin) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    } else {
      return NextResponse.next();
    }
  }
  pathname.startsWith("/admin")
    ? (url.pathname = "/admin")
    : (url.pathname = "/login");
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/admin/dashboard", "/admin/user", "/admin/plan"],
};
