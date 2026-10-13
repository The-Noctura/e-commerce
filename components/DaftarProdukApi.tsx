"use client";

import { useEffect, useState } from "react";
import { Produk } from "@/lib/produk";

export default function DaftarProdukApi() {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/produk");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProduk(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchProduk();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Memuat produk...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {produk.map((item) => (
        <li key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900">{item.nama}</h3>
          <p className="text-gray-600 mt-1">Rp {item.harga.toLocaleString("id-ID")}</p>
          {item.kategori && (
            <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              {item.kategori}
            </span>
          )}
        </li>
      ))}
      {produk.length === 0 && (
        <li className="text-center text-gray-500 py-8">tidak ada produk</li>
      )}
    </ul>
  );
}