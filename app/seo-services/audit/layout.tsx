import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomify SEO Audit Service",
  description: "ToDo",
};

export default function AuditServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
