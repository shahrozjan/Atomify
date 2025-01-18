import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Bulk SEO Keywords",
  description: "ToDo",
};

export default function BulkSEOKeywordsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
