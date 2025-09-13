import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password, role } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Usuario y contraseña son requeridos" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("TestCluster");

    const existing = await db.collection("users").findOne({ username });
    if (existing) {
      return NextResponse.json({ error: "El usuario ya existe" }, { status: 400 });
    }

    await db.collection("users").insertOne({
      username,
      password,
      role: role === "admin" ? "admin" : "usuario",
    });

    return NextResponse.json({ message: "Usuario registrado exitosamente" });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
