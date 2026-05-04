"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Enervon-C Multivitamin", category: "Vitamin & Suplemen", image: "/FOTO PRODUK/Enervonce-CMultivitamin.jpg", badge: "Terlaris", slug: "enervonce-cmultivitamin" },
  { id: 2, name: "Panadol Extra", category: "Flu & Demam", image: "/FOTO PRODUK/PanadolExtra.jpg", badge: null, slug: "panadolextra" },
  { id: 3, name: "Imboost Force Kids", category: "Bayi & Anak", image: "/FOTO PRODUK/ImboostForceKids.jpg", badge: "Populer", slug: "imboostforcekids" },
  { id: 4, name: "Tolak Angin", category: "Herbal", image: "/FOTO PRODUK/TolakAngin.jpg", badge: null, slug: "tolakangin" },
  { id: 5, name: "Bodrex Extra", category: "Flu & Demam", image: "/FOTO PRODUK/BodrexExtra.jpg", badge: null, slug: "bodrexextra" },
  { id: 6, name: "Stimuno Forte", category: "Vitamin & Suplemen", image: "/FOTO PRODUK/StimunoForte.jpg", badge: "Rekomendasi", slug: "stimunoforte" },
  { id: 7, name: "Betadine Antiseptik", category: "Alat Kesehatan", image: "/FOTO PRODUK/BetadineAntiseptic.jpg", badge: null, slug: "betadineantiseptic" },
  { id: 8, name: "Salonpas Cream", category: "Nyeri & Otot", image: "/FOTO PRODUK/SalonpasCream.jpg", badge: null, slug: "salonpascream" },
];

export default function FeaturedProducts() {
  return (
    <section id="produk" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-3"
            >
              ★ Pilihan Terbaik
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Produk <span className="text-primary">Unggulan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-500 text-lg mt-3"
            >
              Produk kesehatan paling banyak dicari oleh pelanggan kami.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-primary font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm group"
            >
              Lihat Semua Produk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/produk/${product.slug}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
              >
                {/* Image area */}
                <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-4 line-clamp-2 leading-snug flex-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-400">Lihat detail</span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                      Detail <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
