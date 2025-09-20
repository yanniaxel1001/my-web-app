// app/api/auth/verify/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function GET(request) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ email: decoded.email, role: decoded.role }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
  }
}