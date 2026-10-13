import { NextResponse } from "next/server";
import { daftarProduk } from "@/lib/produk";

export async function GET() {
  return NextResponse.json(daftarProduk);
}