"use client";

import { useState } from "react";
import Link from "next/link";
import { Produk } from "@/lib/produk";

interface PencarianProdukProps {
  produk: Produk[];
}

export default function PencarianProduk({ produk }: PencarianProdukProps) {
  const [query, setQuery] = useState("");

  const hasilFilter = produk.filter((p) =>
    p.nama.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="search" className="sr-only">
          Cari produk
        </label>
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari produk berdasarkan nama..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {query.trim() && hasilFilter.length === 0 ? (
        <p className="text-center text-gray-500 py-8">produk tidak ditemukan</p>
      ) : (
        <ul className="space-y-3">
          {hasilFilter.map((item) => (
            <li key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <Link
                href={`/produk/${item.id}`}
                className="block"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.nama}</h3>
                <p className="text-gray-600 mt-1">Rp {item.harga.toLocaleString("id-ID")}</p>
                {item.kategori && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {item.kategori}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!query.trim() && produk.length === 0 && (
        <p className="text-center text-gray-500 py-8">tidak ada produk</p>
      )}
    </div>
  );
}