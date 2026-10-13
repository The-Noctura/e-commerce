export interface Produk {
  id: number;
  nama: string;
  harga: number;
  deskripsi: string;
  kategori?: string;
}

export const daftarProduk: Produk[] = [
  {
    id: 1,
    nama: "Laptop Gaming",
    harga: 15000000,
    deskripsi: "Laptop performa tinggi untuk gaming dan pekerjaan berat",
    kategori: "Elektronik",
  },
  {
    id: 2,
    nama: "Smartphone Android",
    harga: 5000000,
    deskripsi: "Smartphone terbaru dengan kamera canggih",
    kategori: "Elektronik",
  },
  {
    id: 3,
    nama: "Headphone Wireless",
    harga: 1200000,
    deskripsi: "Headphone nirkabel dengan noise cancelling",
    kategori: "Aksesoris",
  },
  {
    id: 4,
    nama: "Mechanical Keyboard",
    harga: 800000,
    deskripsi: "Keyboard mekanis RGB untuk typing nyaman",
    kategori: "Aksesoris",
  },
  {
    id: 5,
    nama: "Monitor 27 Inch",
    harga: 3500000,
    deskripsi: "Monitor 4K dengan refresh rate tinggi",
    kategori: "Elektronik",
  },
];