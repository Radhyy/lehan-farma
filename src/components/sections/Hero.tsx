"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2070&auto=format&fit=crop",
    tag: "Kesehatan Keluarga",
    title: "Kesehatan Anda,\nPrioritas Utama Kami",
    subtitle: "Dapatkan layanan kesehatan terbaik dan obat berkualitas original di Lehan Farma.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop",
    tag: "Konsultasi Gratis",
    title: "Konsultasi Apoteker\nProfesional",
    subtitle: "Tanya jawab langsung dengan apoteker kami untuk solusi tepat masalah kesehatan Anda.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tag: "Layanan Cepat",
    title: "Antar Obat\nLangsung ke Rumah",
    subtitle: "Pesan obat dari rumah, kami antar dengan aman dan cepat sampai tujuan.",
  },
];

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="home" className="relative w-full h-screen">
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "inline-block w-2 h-2 rounded-full bg-white/40 cursor-pointer transition-all duration-300 mx-1",
          bulletActiveClass: "!w-8 !bg-primary !rounded-full",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                  <div className="max-w-2xl">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block bg-primary/80 backdrop-blur-sm text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide"
                    >
                      {slide.tag}
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-base md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link
                        href="/produk"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 text-center"
                      >
                        Beli Obat
                      </Link>
                      <a
                        href="https://api.whatsapp.com/send/?phone=6281399190333&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-0.5 text-center"
                      >
                        Konsultasi Sekarang
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white rounded-2xl items-center justify-center transition-all duration-200 hover:-translate-x-0.5 active:scale-95 shadow-lg"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white rounded-2xl items-center justify-center transition-all duration-200 hover:translate-x-0.5 active:scale-95 shadow-lg"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* Pagination Dots */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1" />
    </section>
  );
}
