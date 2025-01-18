import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Atomify",
  description: "ToDo",
};

export default function AboutUsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
