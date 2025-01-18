import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify E-commerce SEO",
  description: "ToDo",
};

export default function EcommerceServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
