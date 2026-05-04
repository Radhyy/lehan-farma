"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowLeft, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";

const CATEGORIES = [
  "Semua",
  "Vitamin & Suplemen",
  "Flu & Demam",
  "Bayi & Anak",
  "Lambung & Pencernaan",
  "Alat & Perawatan Luka",
  "Susu & Nutrisi",
  "Nyeri & Otot",
  "Keluarga Berencana",
  "Perawatan Wanita",
  "Kulit & Antiseptik",
  "Herbal & Jamu",
  "Produk Kesehatan",
];

export default function ProductsClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "Semua" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Produk Kami</h1>
          <p className="text-primary-light text-lg">
            {products.length} produk tersedia — temukan yang Anda butuhkan
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-10">
        {/* Search + Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-gray-800 shadow-sm"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-200 bg-white shadow-sm text-gray-700 hover:border-primary hover:text-primary transition-all md:hidden"
          >
            <SlidersHorizontal size={18} /> Filter Kategori
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`md:block md:w-56 shrink-0 ${showFilter ? "block" : "hidden"}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 px-2">Kategori</h3>
              <ul className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => { setActiveCategory(cat); setShowFilter(false); }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500 text-sm">
                Menampilkan <span className="font-semibold text-gray-900">{filtered.length}</span> produk
                {activeCategory !== "Semua" && (
                  <span> di <span className="text-primary font-semibold">{activeCategory}</span></span>
                )}
              </p>
              {activeCategory !== "Semua" && (
                <button onClick={() => setActiveCategory("Semua")} className="text-sm text-primary hover:underline flex items-center gap-1">
                  <X size={14} /> Reset
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 text-gray-400">
                <Search size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-xl font-semibold">Produk tidak ditemukan</p>
                <p className="mt-2">Coba kata kunci lain atau pilih kategori berbeda.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.015, 0.3) }}
                  >
                    <Link
                      href={`/produk/${product.slug}`}
                      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 flex flex-col h-full"
                    >
                      <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                        <Image
                          src={`/FOTO PRODUK/${product.filename}`}
                          alt={product.name}
                          fill
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full w-fit mb-2">
                          {product.category}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2 leading-snug flex-1">
                          {product.name}
                        </h3>
                        <span className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-1.5">
                          Detail <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
