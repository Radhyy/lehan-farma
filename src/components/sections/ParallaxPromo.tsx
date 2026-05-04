"use client";

import { motion } from "framer-motion";

export default function ParallaxPromo() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      {/* Background Image with Parallax effect via css background-attachment: fixed */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2069&auto=format&fit=crop')" }}
      />
      
      <div className="relative container mx-auto px-4 md:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm border border-accent/30">
            Promo Spesial Bulan Ini
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Diskon <span className="text-primary-light">Hingga 30%</span> Untuk Vitamin & Suplemen
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jaga daya tahan tubuh Anda dengan berbagai pilihan vitamin dan suplemen terbaik. Penawaran terbatas!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg hover:shadow-primary/50">
              Klaim Promo Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
