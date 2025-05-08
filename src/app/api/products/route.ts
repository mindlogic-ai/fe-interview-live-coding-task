// File: app/api/products/route.ts
import { NextResponse } from "next/server";
import { Product } from "../../types";

export async function GET() {
  const res = await fetch("https://api.example.com/products");
  const data = await res.json();

  const products = data.map((item: any) => ({
    id: item.id,
    name: item.title, // Renamed from title to name
    price: item.currency === "USD" ? item.price : item.price,
    stock: item.inventory || 0,
    popularity: Math.random() * 10,
  }));

  return new Response(JSON.stringify(products));
}
