// middleware.js
import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.redirect('https://chat.openai.com');
}
