import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify SEO Package",
  description: "ToDo",
};

export default function SEOPackageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
