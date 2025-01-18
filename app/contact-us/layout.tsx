import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Atomify",
  description: "ToDo",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
