import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { daftarProduk } from "@/lib/produk";

interface ProdukDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProdukDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const produk = daftarProduk.find((p) => p.id === id);

  if (!produk) {
    return {
      title: "E-commerce - Produk Tidak Ditemukan",
      description: "Produk yang Anda cari tidak ada",
    };
  }

  return {
    title: `E-commerce - ${produk.nama}`,
    description: produk.deskripsi,
  };
}

export default async function ProdukDetailPage({ params }: ProdukDetailProps) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  if (isNaN(id)) {
    notFound();
  }

  const produk = daftarProduk.find((p) => p.id === id);

  if (!produk) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link
        href="/produk"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kembali ke Daftar Produk
      </Link>

      <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">{produk.nama}</h1>
          <p className="text-2xl font-semibold text-blue-600 mt-2">Rp {produk.harga.toLocaleString("id-ID")}</p>
          {produk.kategori && (
            <span className="inline-block mt-3 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              {produk.kategori}
            </span>
          )}
        </header>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h2>
          <p className="text-gray-600 leading-relaxed">{produk.deskripsi}</p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Detail Produk</h2>
          <dl className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <dt className="font-medium">ID</dt>
              <dd>{produk.id}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Nama</dt>
              <dd>{produk.nama}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium">Harga</dt>
              <dd>Rp {produk.harga.toLocaleString("id-ID")}</dd>
            </div>
            {produk.kategori && (
              <div className="flex justify-between">
                <dt className="font-medium">Kategori</dt>
                <dd>{produk.kategori}</dd>
              </div>
            )}
          </dl>
        </div>
      </article>
    </div>
  );
}