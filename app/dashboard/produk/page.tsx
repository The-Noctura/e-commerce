import type { Metadata } from "next";
import { daftarProduk } from "@/lib/produk";

export const metadata: Metadata = {
  title: "E-commerce - Dashboard Produk",
  description: "Kelola daftar produk di dashboard administrasi",
};

export default function DashboardProdukPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Produk</h1>
        <p className="text-gray-600 mt-2">Kelola dan pantau daftar produk toko</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {daftarProduk.map((produk) => (
              <tr key={produk.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{produk.nama}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">Rp {produk.harga.toLocaleString("id-ID")}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {produk.kategori ? (
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {produk.kategori}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-400">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}