import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Local SEO Service",
  description: "ToDo",
};

export default function LocalSEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
