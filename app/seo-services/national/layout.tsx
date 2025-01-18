import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify National SEO Service",
  description: "ToDo",
};

export default function NationalSEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
