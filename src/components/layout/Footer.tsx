import Link from "next/link";
import Image from "next/image";
import { Pill, Phone, Mail, MapPin, MessageCircle, Globe, Navigation } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="Lehan Farma Logo" 
                width={160} 
                height={48} 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Apotek modern terpercaya yang menyediakan layanan kesehatan terbaik dengan produk original dan konsultasi profesional.
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <a href="https://api.whatsapp.com/send/?phone=6281399190333&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 bg-gray-50 rounded-full hover:bg-primary/10">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-gray-50 rounded-full hover:bg-primary/10">
                <Globe size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors p-2 bg-gray-50 rounded-full hover:bg-primary/10">
                <Navigation size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Tautan Cepat</h3>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-gray-600 hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link href="#produk" className="text-gray-600 hover:text-primary transition-colors">Produk Kami</Link></li>
              <li><Link href="#layanan" className="text-gray-600 hover:text-primary transition-colors">Layanan Apotek</Link></li>
              <li><Link href="#tentang" className="text-gray-600 hover:text-primary transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Layanan</h3>
            <ul className="space-y-4">
              <li className="text-gray-600">Konsultasi Apoteker</li>
              <li className="text-gray-600">Penebusan Resep</li>
              <li className="text-gray-600">Layanan Antar Obat</li>
              <li className="text-gray-600">Cek Kesehatan Darah</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>Jl. Kesehatan No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a
                  href="https://api.whatsapp.com/send/?phone=6281399190333&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +62 813-9919-0333
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail size={20} className="text-primary shrink-0" />
                <span>halo@lehanfarma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lehan Farma. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
