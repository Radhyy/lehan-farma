import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandMarquee from "@/components/sections/BrandMarquee";
import ParallaxPromo from "@/components/sections/ParallaxPromo";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Lehan Farma | Apotek Modern & Terpercaya",
  description:
    "Lehan Farma — apotek modern dan terpercaya. Tersedia 300+ produk kesehatan, konsultasi apoteker gratis, dan layanan antar obat. Hubungi kami via WhatsApp.",
  openGraph: {
    title: "Lehan Farma | Apotek Modern & Terpercaya",
    description:
      "Lehan Farma — apotek modern dan terpercaya. Tersedia 300+ produk kesehatan, konsultasi apoteker gratis, dan layanan antar obat.",
    url: "https://lehanfarma.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BrandMarquee />
        <Services />
        <ParallaxPromo />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
