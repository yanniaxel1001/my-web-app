// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const client = await clientPromise;
    const db = client.db();

    // Buscar el usuario por email
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 400 });
    }

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 400 });
    }

    // Crear el token JWT
    const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Configurar la cookie con el token
    const response = NextResponse.json({ message: 'Inicio de sesión exitoso' }, { status: 200 });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hora
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}