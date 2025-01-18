import SEOServicesNav from "@/components/SEOServicesNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "ToDo",
};

export default function SEOServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SEOServicesNav />
      {children}
    </div>
  );
}
