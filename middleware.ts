import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("pwa_installed");

  if (cookie && cookie.value === "true") {
    return NextResponse.redirect("https://chat.openai.com");
  }
  return NextResponse.next();
}
