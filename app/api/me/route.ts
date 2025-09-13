import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie");

  if (!cookieHeader) {
    return NextResponse.json({ user: null });
  }

  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("user="));

  if (!match) {
    return NextResponse.json({ user: null });
  }

  try {
    const value = decodeURIComponent(match.split("=")[1]);
    const user = JSON.parse(value);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
