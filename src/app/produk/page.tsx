import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsClient from "@/components/sections/ProductsClient";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Semua Produk",
  description:
    "Temukan 300+ produk kesehatan original di Lehan Farma: vitamin, obat flu & demam, suplemen, perawatan bayi, herbal, alat kesehatan, dan masih banyak lagi.",
  openGraph: {
    title: "Semua Produk | Lehan Farma",
    description:
      "Temukan 300+ produk kesehatan original di Lehan Farma. Harga terjangkau, kualitas terjamin.",
    url: "https://lehanfarma.com/produk",
  },
};

export default function ProdukPage() {
  const products = getAllProducts();
  return (
    <>
      <Navbar />
      <ProductsClient products={products} />
      <Footer />
    </>
  );
}
