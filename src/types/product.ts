// Shared type definitions — no Node.js imports here so safe for client components

export type Product = {
  filename: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  usage: string;
  whatsappUrl: string;
};
