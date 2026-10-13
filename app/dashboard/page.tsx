import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce - Dashboard",
  description: "Panel administrasi untuk mengelola toko e-commerce",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Selamat datang di panel administrasi</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ringkasan</h3>
          <p className="text-gray-600">Lihat ringkasan performa toko Anda di sini.</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Manajemen Produk</h3>
          <p className="text-gray-600">Kelola produk, kategori, dan stok.</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengaturan</h3>
          <p className="text-gray-600">Konfigurasi toko dan preferensi.</p>
        </div>
      </div>
    </div>
  );
}