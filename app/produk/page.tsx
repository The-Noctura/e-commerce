import type { Metadata } from "next";
import { daftarProduk } from "@/lib/produk";
import PencarianProduk from "@/components/PencarianProduk";
import DaftarProdukApi from "@/components/DaftarProdukApi";

export const metadata: Metadata = {
  title: "E-commerce - Daftar Produk",
  description: "Daftar semua produk yang tersedia di toko kami",
};

export default function ProdukPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Daftar Produk</h1>
        <p className="text-gray-600 mt-2">Temukan produk yang Anda butuhkan</p>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pencarian Produk</h2>
          <PencarianProduk produk={daftarProduk} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data dari API</h2>
          <DaftarProdukApi />
        </div>
      </section>
    </div>
  );
}