import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Global SEO Service",
  description: "ToDo",
};

export default function GlobalSEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
