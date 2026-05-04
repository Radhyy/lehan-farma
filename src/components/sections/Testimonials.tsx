"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    content: "Layanan di Lehan Farma sangat profesional. Apotekernya ramah dan sangat detail menjelaskan fungsi setiap obat yang saya tebus.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    content: "Layanan antar obatnya penyelamat banget! Saat anak sakit tengah malam, saya pesan lewat WA dan obatnya langsung diantar dengan cepat.",
    rating: 5,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    role: "Pekerja Kantoran",
    content: "Harga produknya kompetitif dan stoknya selalu lengkap. Beli vitamin rutin sekarang selalu di Lehan Farma.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rina Kusuma",
    role: "Mahasiswa",
    content: "Apotek yang sangat modern. Tempatnya bersih dan nyaman kalau harus antri nunggu resep. Mantap!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Apa Kata <span className="text-primary">Mereka?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman mereka bersama Lehan Farma.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !bg-gray-300 !w-3 !h-3 !mx-1", bulletActiveClass: "!bg-primary !w-6 !rounded-full transition-all duration-300" }}
            className="pb-16 px-4 pt-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-50 flex flex-col relative group">
                  <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote size={64} />
                  </div>
                  <div className="flex items-center gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-gray-300" : ""} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-8 flex-grow relative z-10 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
