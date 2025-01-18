import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Wordpress SEO Service",
  description: "ToDo",
};

export default function WordPressSEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
