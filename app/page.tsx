import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce - Beranda",
  description: "Selamat datang di aplikasi e-commerce sederhana. Jelajahi produk kami atau akses dashboard.",
};

export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Selamat Datang di E-Commerce</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Aplikasi e-commerce sederhana yang dibangun dengan Next.js App Router.
        Menampilkan daftar produk, detail produk, pencarian real-time, dan area dashboard.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/produk"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Lihat Produk
        </Link>
        <Link
          href="/dashboard"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Buka Dashboard
        </Link>
      </div>
    </div>
  );
}