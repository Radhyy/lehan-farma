"use client";

import { motion } from "framer-motion";
import { Stethoscope, Pill, FileText, Truck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Obat Resep",
    description: "Tebus obat resep dokter Anda dengan mudah, aman, dan terjamin keasliannya.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Obat Bebas",
    description: "Tersedia berbagai macam obat bebas, vitamin, dan suplemen untuk kebutuhan harian.",
    icon: Pill,
  },
  {
    id: 3,
    title: "Konsultasi Apoteker",
    description: "Tanya jawab langsung dengan apoteker profesional untuk solusi kesehatan yang tepat.",
    icon: Stethoscope,
  },
  {
    id: 4,
    title: "Antar Obat",
    description: "Layanan pengiriman obat cepat dan aman langsung ke alamat rumah Anda.",
    icon: Truck,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Layanan <span className="text-primary">Apotek</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Kami hadir untuk memberikan solusi kesehatan terlengkap dengan pelayanan profesional dan produk terpercaya.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
