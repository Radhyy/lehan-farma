"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShoppingCart, MessageCircle, Tag, Info } from "lucide-react";
import type { Product } from "@/types/product";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/produk" className="hover:text-primary transition-colors">Produk</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-10">
        {/* Back button */}
        <Link
          href="/produk"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Produk
        </Link>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-10"
            style={{ minHeight: 360 }}
          >
            <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
              <Image
                src={`/FOTO PRODUK/${product.filename}`}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
              <Tag size={14} />
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" />
                Manfaat Produk
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                <ShoppingCart size={22} />
                Pesan via WhatsApp
              </a>
              <a
                href={product.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary/5 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle size={22} />
                Tanya Apoteker
              </a>
            </div>
          </motion.div>
        </div>

        {/* Usage Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-16"
        >
          <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <Info size={20} className="text-accent" />
            Cara Penggunaan
          </h3>
          <p className="text-gray-600 leading-relaxed">{product.usage}</p>

          <div className="mt-6 p-4 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-sm text-primary font-semibold">
              💊 Tersedia di Lehan Farma — Hubungi kami untuk ketersediaan stok dan harga terbaru.
            </p>
          </div>
        </motion.div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produk Serupa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((rel, index) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <Link
                    href={`/produk/${rel.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="relative w-full bg-gray-50 overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                      <Image
                        src={`/FOTO PRODUK/${rel.filename}`}
                        alt={rel.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-primary font-semibold mb-1 uppercase tracking-wide">{rel.category}</p>
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">{rel.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
