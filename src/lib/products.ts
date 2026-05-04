import fs from "fs";
import path from "path";
import type { Product } from "@/types/product";

export type { Product };

const WA_PHONE = "6281399190333";


export function toSlug(filename: string): string {
  return filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toReadableName(filename: string): string {
  return filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getCategory(filename: string): string {
  const n = filename.toLowerCase();
  if (/vitamin|enervon|becom|redoxon|cdr|biolysin|curcuma|fatigon|curvit|elkana|imboost|stimuno|imunped|eyevit|etabion|livron|evere|sakatonik|biolysin/.test(n)) return "Vitamin & Suplemen";
  if (/batuk|flu|demam|pilek|actifed|bodrex|hufagrip|mixagrip|neozep|decolgen|paratusin|panadol|sanmol|tempra|paramex|oskadon|orkadon|termor|konidin|guanistrep|proris|degirol|ibuprofen/.test(n)) return "Flu & Demam";
  if (/baby|mybaby|ainiepepaya|imboostkids|pedialyte|sgm|bodrexin|kalpanak|biologysin|telon lang 30/.test(n)) return "Bayi & Anak";
  if (/antasida|gastrucid|mylanta|promag|polysilane|diatab|entrostop|laxadine|dulcolax|microlax|silex|neokalana/.test(n)) return "Lambung & Pencernaan";
  if (/kasa|hansapl|kapas|perban|plester|tenso|rivanol|alkohol|betadine|antisep|onemed|onecall|accugence|mission|easytouch/.test(n)) return "Alat & Perawatan Luka";
  if (/anlene|entrasol|hilo|prenagen|anmun|emulsion|bmtsoya|zee|entrasolactive|entrasolgold/.test(n)) return "Susu & Nutrisi";
  if (/balsem|salompa|salon|counterpain|rheuma|voltaren|koyocabe|hotn|geliga|lang mkp|freshcare|plossa|minyak angin|minyakbaby|minyakgandapura|telonlang|trombo/.test(n)) return "Nyeri & Otot";
  if (/kb|andalan|postpil|durex|fiesta|sutra|sensitif|rapetwa/.test(n)) return "Keluarga Berencana";
  if (/resikv|lactacyd|sumber ayu|herborist|caladine|feminine|latacyd|marcks|bedaksali|asepsofresh|asepsoicyco|asepsosu|sumberayu/.test(n)) return "Perawatan Wanita";
  if (/ketoconazole|acnol|jf|daktarin|miconazole|kurap|zalfobat|bedaksali|asepso|marck|peditox|callusol/.test(n)) return "Kulit & Antiseptik";
  if (/madu|kunyit|tolak|antangin|jamu|herba|vermint|madurasa|madurasaa|kunyitasam|sariurma|tahesta|madukurma/.test(n)) return "Herbal & Jamu";
  return "Produk Kesehatan";
}

function buildDescription(name: string, category: string): { description: string; benefits: string[]; usage: string } {
  const templates: Record<string, { description: string; benefits: string[]; usage: string }> = {
    "Vitamin & Suplemen": {
      description: `${name} adalah suplemen kesehatan berkualitas tinggi yang diformulasikan untuk memenuhi kebutuhan nutrisi harian Anda. Mengandung bahan-bahan aktif pilihan yang bekerja sinergis untuk menjaga kesehatan tubuh secara optimal. Diproduksi dengan standar GMP (Good Manufacturing Practice) untuk memastikan keamanan dan efektivitasnya.`,
      benefits: [
        "Membantu memenuhi kebutuhan nutrisi harian",
        "Meningkatkan daya tahan dan vitalitas tubuh",
        "Mendukung metabolisme tubuh yang optimal",
        "Membantu menjaga kesehatan secara menyeluruh",
      ],
      usage: "Konsumsi sesuai petunjuk pada kemasan atau anjuran dokter/apoteker. Simpan di tempat sejuk dan kering, jauh dari jangkauan anak-anak.",
    },
    "Flu & Demam": {
      description: `${name} adalah obat yang efektif untuk mengatasi gejala flu, demam, dan pilek. Diformulasikan dengan bahan aktif pilihan yang bekerja cepat meredakan gejala tidak nyaman sehingga aktivitas Anda dapat kembali normal. Tersedia dalam bentuk yang mudah dikonsumsi.`,
      benefits: [
        "Meredakan demam secara efektif",
        "Mengurangi gejala flu dan pilek",
        "Meredakan sakit kepala akibat flu",
        "Bekerja cepat dan aman dikonsumsi",
      ],
      usage: "Konsumsi sesuai dosis yang tertera pada kemasan. Jangan melebihi dosis yang dianjurkan. Konsultasikan dengan dokter jika gejala tidak membaik dalam 3 hari.",
    },
    "Bayi & Anak": {
      description: `${name} adalah produk kesehatan yang diformulasikan khusus untuk bayi dan anak-anak dengan standar keamanan tertinggi. Menggunakan bahan-bahan yang lembut dan aman untuk si kecil, diproduksi dengan pengawasan ketat untuk memastikan kualitas terbaik.`,
      benefits: [
        "Aman untuk bayi dan anak-anak",
        "Diformulasikan dengan bahan lembut",
        "Mendukung tumbuh kembang optimal",
        "Telah diuji secara klinis untuk keamanannya",
      ],
      usage: "Gunakan sesuai petunjuk penggunaan pada kemasan atau rekomendasi dokter anak. Perhatikan dosis berdasarkan usia dan berat badan anak.",
    },
    "Lambung & Pencernaan": {
      description: `${name} adalah obat yang efektif untuk mengatasi masalah lambung dan pencernaan. Diformulasikan untuk memberikan perlindungan dan kenyamanan pada sistem pencernaan Anda sehingga aktivitas sehari-hari tidak terganggu.`,
      benefits: [
        "Meredakan nyeri dan kram lambung",
        "Mengatasi gangguan pencernaan",
        "Memberikan perlindungan pada lambung",
        "Meredakan mual dan kembung",
      ],
      usage: "Konsumsi sesuai petunjuk pada kemasan, umumnya sebelum atau sesudah makan. Jangan dikonsumsi lebih dari dosis yang dianjurkan tanpa konsultasi dokter.",
    },
    "Alat & Perawatan Luka": {
      description: `${name} adalah produk perawatan medis berkualitas yang digunakan untuk perawatan dan perlindungan luka. Dibuat dengan standar medis tinggi untuk memastikan kebersihan, keamanan, dan efektivitas dalam proses penyembuhan.`,
      benefits: [
        "Membantu proses penyembuhan luka",
        "Mencegah infeksi pada luka",
        "Mudah digunakan dan nyaman",
        "Memenuhi standar medis internasional",
      ],
      usage: "Gunakan sesuai petunjuk penggunaan. Pastikan luka dibersihkan terlebih dahulu sebelum digunakan. Ganti secara berkala sesuai kebutuhan.",
    },
    "Susu & Nutrisi": {
      description: `${name} adalah produk nutrisi berkualitas tinggi yang diformulasikan untuk memenuhi kebutuhan gizi tubuh secara lengkap. Mengandung berbagai vitamin, mineral, dan nutrisi penting yang dibutuhkan untuk mendukung kesehatan dan aktivitas sehari-hari.`,
      benefits: [
        "Melengkapi kebutuhan nutrisi harian",
        "Mengandung vitamin dan mineral esensial",
        "Mendukung kesehatan tulang dan otot",
        "Menjaga energi dan stamina tubuh",
      ],
      usage: "Sajikan sesuai petunjuk pada kemasan. Dapat dikonsumsi sebagai minuman harian untuk melengkapi asupan nutrisi.",
    },
    "Nyeri & Otot": {
      description: `${name} adalah produk pereda nyeri dan otot yang efektif untuk mengatasi rasa sakit, pegal, dan ketegangan otot. Menggunakan formula canggih yang memberikan efek hangat atau dingin untuk meredakan ketidaknyamanan secara cepat dan lembut di kulit.`,
      benefits: [
        "Meredakan nyeri otot dan sendi",
        "Mengurangi rasa pegal dan lelah",
        "Memberikan sensasi hangat yang menenangkan",
        "Bekerja cepat dan tahan lama",
      ],
      usage: "Oleskan tipis-tipis pada area yang sakit dan pijat lembut hingga meresap. Hindari penggunaan pada kulit yang luka atau iritasi. Cuci tangan setelah penggunaan.",
    },
    "Keluarga Berencana": {
      description: `${name} adalah produk keluarga berencana yang terpercaya untuk membantu pasangan dalam merencanakan keluarga dengan bertanggung jawab. Diproduksi dengan standar kualitas internasional untuk memastikan keamanan dan kenyamanan pengguna.`,
      benefits: [
        "Efektif dan terpercaya",
        "Kualitas internasional",
        "Aman digunakan",
        "Membantu perencanaan keluarga",
      ],
      usage: "Gunakan sesuai petunjuk pada kemasan. Konsultasikan dengan tenaga kesehatan untuk informasi lebih lanjut.",
    },
    "Perawatan Wanita": {
      description: `${name} adalah produk perawatan wanita yang diformulasikan khusus untuk menjaga kesehatan dan kebersihan area kewanitaan. Menggunakan bahan-bahan yang lembut dan telah teruji secara dermatologis, cocok untuk kulit sensitif.`,
      benefits: [
        "Menjaga kebersihan area kewanitaan",
        "Formula lembut dan aman",
        "Teruji secara dermatologis",
        "Memberikan perlindungan sepanjang hari",
      ],
      usage: "Gunakan sesuai petunjuk pada kemasan. Hentikan penggunaan jika terjadi iritasi dan konsultasikan dengan dokter.",
    },
    "Kulit & Antiseptik": {
      description: `${name} adalah produk perawatan kulit dan antiseptik yang efektif untuk menjaga kebersihan dan kesehatan kulit. Menggunakan formula yang membunuh kuman dan bakteri penyebab penyakit kulit, sekaligus tetap lembut di kulit.`,
      benefits: [
        "Membunuh kuman dan bakteri",
        "Menjaga kebersihan kulit",
        "Formula lembut dan aman",
        "Membantu mencegah infeksi kulit",
      ],
      usage: "Gunakan sesuai petunjuk penggunaan. Hindari kontak dengan mata. Hentikan penggunaan jika terjadi iritasi.",
    },
    "Herbal & Jamu": {
      description: `${name} adalah produk herbal dan jamu tradisional Indonesia yang telah terbukti secara turun-temurun memberikan manfaat kesehatan. Dibuat dari bahan-bahan alami pilihan yang diproses secara modern dengan standar kualitas tinggi untuk menjaga keaslian manfaatnya.`,
      benefits: [
        "Terbuat dari bahan alami pilihan",
        "Warisan kesehatan tradisional Indonesia",
        "Diproses dengan standar modern",
        "Aman dan terpercaya",
      ],
      usage: "Konsumsi sesuai petunjuk pada kemasan. Umumnya dikonsumsi 1-2 kali sehari untuk hasil optimal.",
    },
    "Produk Kesehatan": {
      description: `${name} adalah produk kesehatan berkualitas yang tersedia di Lehan Farma. Diproduksi oleh produsen terpercaya dengan standar kualitas tinggi untuk memastikan keamanan dan efektivitasnya bagi kesehatan Anda dan keluarga.`,
      benefits: [
        "Produk berkualitas terpercaya",
        "Diproduksi dengan standar tinggi",
        "Tersedia di Lehan Farma",
        "Harga terjangkau dan terjamin keasliannya",
      ],
      usage: "Gunakan sesuai petunjuk pada kemasan atau konsultasikan dengan apoteker kami untuk informasi lebih lanjut.",
    },
  };

  return templates[category] ?? templates["Produk Kesehatan"];
}

function buildWhatsAppUrl(name: string): string {
  const message = encodeURIComponent(`Halo, saya ingin memesan produk *${name}*. Mohon informasi ketersediaan dan harga. Terima kasih 🙏`);
  return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${message}&type=phone_number&app_absent=0`;
}

let _cachedProducts: Product[] | null = null;

export function getAllProducts(): Product[] {
  if (_cachedProducts) return _cachedProducts;

  const produkDir = path.join(process.cwd(), "public", "FOTO PRODUK");
  const files = fs.readdirSync(produkDir).filter((f) =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  _cachedProducts = files.map((file) => {
    const name = toReadableName(file);
    const category = getCategory(file.toLowerCase());
    const { description, benefits, usage } = buildDescription(name, category);
    return {
      filename: file,
      slug: toSlug(file),
      name,
      category,
      description,
      benefits,
      usage,
      whatsappUrl: buildWhatsAppUrl(name),
    };
  });

  return _cachedProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}
