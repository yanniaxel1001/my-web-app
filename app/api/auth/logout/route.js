// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Sesión cerrada' }, { status: 200 });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
  });
  return response;
}