// app/api/auth/register/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const { email, password, role } = await request.json();
    const client = await clientPromise;
    const db = client.db();

    // Verificar si el usuario ya existe
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'El usuario ya existe' }, { status: 400 });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el usuario en la base de datos
    await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({ message: 'Usuario creado exitosamente' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}