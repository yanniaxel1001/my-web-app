import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: "Credenciales incompletas" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("TestCluster");

    const user = await db.collection("users").findOne({ username });

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    const res = NextResponse.json({ message: "Login exitoso", role: user.role });
    res.cookies.set("user", JSON.stringify({ username, role: user.role }), {
      httpOnly: true,
      path: "/",
    });

    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
