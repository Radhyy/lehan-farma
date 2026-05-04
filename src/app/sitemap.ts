import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

const SITE_URL = "https://lehanfarma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts();

  const productUrls = products.map((p) => ({
    url: `${SITE_URL}/produk/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productUrls,
  ];
}
