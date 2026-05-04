"use client";

import Image from "next/image";

const brands = [
  { name: "Adem Sari", src: "/brand/Adem_sari.webp" },
  { name: "Antangin", src: "/brand/Antangin.webp" },
  { name: "Bodrex", src: "/brand/Bodrex.webp" },
  { name: "CDR", src: "/brand/CDR.webp" },
  { name: "Enervon", src: "/brand/Enervon-logo.webp" },
  { name: "Entrostop", src: "/brand/Entrostop_logo.webp" },
  { name: "Komix", src: "/brand/Logo_komix.webp" },
  { name: "Procold", src: "/brand/Logo_procold.webp" },
  { name: "Promag", src: "/brand/Promag_2019.webp" },
  { name: "Ultraflu", src: "/brand/Ultraflu.webp" },
  { name: "Hufagrip", src: "/brand/hufagrip.png" },
  { name: "Panadol", src: "/brand/panadol-logo.png" },
  { name: "Tolak Angin", src: "/brand/tolakkangin.jpg" },
];

export default function BrandMarquee() {
  // Duplicate for seamless loop
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
        Dipercaya oleh brand kesehatan terkemuka
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-16"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {marqueeItems.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

