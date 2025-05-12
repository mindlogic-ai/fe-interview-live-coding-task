// File: app/api/products/route.ts
import { NextResponse } from "next/server";
import { Product } from "./Product.types";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    currency: "USD",
    inventory: 100,
    popularity: Math.random() * 100,
  },
  {
    id: 2,
    title: "Product 2",
    price: 200,
    currency: "USD",
    inventory: 200,
    popularity: Math.random() * 100,
  },
  {
    id: 3,
    title: "Product 3",
    price: 300,
    currency: "USD",
    inventory: 300,
    popularity: Math.random() * 100,
  },
  {
    id: 4,
    title: "Product 4",
    price: 400,
    currency: "USD",
    inventory: 400,
    popularity: Math.random() * 100,
  },
];

// With App Router, you export HTTP method functions directly
export async function GET() {
  return NextResponse.json({ products: SAMPLE_PRODUCTS });
}

// If you want to handle other methods
export async function POST() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
