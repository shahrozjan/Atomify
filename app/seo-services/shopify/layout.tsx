import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Shopify SEO Service",
  description: "ToDo",
};

export default function ShopifySEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
