"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Pill } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Layanan", href: "/#layanan" },
  { name: "Tentang", href: "/#tentang" },
  { name: "Kontak", href: "/#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Lehan Farma Logo" 
              width={160} 
              height={48} 
              className="h-12 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "font-medium transition-colors hover:text-accent",
                  isScrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=6281399190333&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-sm"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={clsx(
              "md:hidden p-2 rounded-lg",
              isScrolled ? "text-gray-900" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=6281399190333&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white text-center py-3 rounded-xl font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Konsultasi Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
