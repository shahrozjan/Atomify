import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify SEO Blog Writing",
  description: "ToDo",
};

export default function BlogWritingServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
