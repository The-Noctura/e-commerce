import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce - Dashboard Pengaturan",
  description: "Konfigurasi pengaturan toko dan preferensi administrasi",
};

export default function DashboardPengaturanPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pengaturan</h1>
        <p className="text-gray-600 mt-2">Konfigurasi toko dan preferensi administrasi</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Pengaturan Umum</h2>
        <p className="text-gray-600">
          Halaman ini berisi pengaturan untuk mengelola konfigurasi toko, notifikasi, dan preferensi lainnya.
          Fitur pengaturan detail akan ditambahkan di versi mendatang.
        </p>
      </div>
    </div>
  );
}