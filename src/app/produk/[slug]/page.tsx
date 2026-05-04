import { getAllProducts, getProductBySlug } from "@/lib/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetail from "@/components/sections/ProductDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  const title = `${product.name}`;
  const description = product.description.slice(0, 155);
  const url = `https://lehanfarma.com/produk/${product.slug}`;
  const image = `/FOTO PRODUK/${product.filename}`;

  return {
    title,
    description,
    keywords: [product.name, product.category, "apotek", "Lehan Farma", "beli obat", "obat online"],
    openGraph: {
      title: `${product.name} | Lehan Farma`,
      description,
      url,
      type: "website",
      images: [{ url: image, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Lehan Farma`,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
    return null; // TypeScript narrowing
  }

  const allProducts = getAllProducts();
  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <ProductDetail product={product} related={related} />
      <Footer />
    </>
  );
}
