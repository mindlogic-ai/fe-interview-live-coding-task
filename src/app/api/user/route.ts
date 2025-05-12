import { NextResponse } from "next/server";

// With App Router, you export HTTP method functions directly
export async function GET() {
  return NextResponse.json({ user: { name: "홍길동" } });
}
