import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify Small Business SEO Service",
  description: "ToDo",
};

export default function SmallBusinessSEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
