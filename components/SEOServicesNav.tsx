"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function SEOServicesNav({
  isHeader = false,
  isFooter = false,
}: Readonly<{ isHeader?: boolean; isFooter?: boolean }>) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/seo-services/audit", label: "SEO Audit Services" },
    { href: "/seo-services/small-business", label: "Small Business SEO" },
    { href: "/seo-services/local", label: "Local SEO" },
    { href: "/seo-services/ecommerce", label: "E-commerce SEO" },
    { href: "/seo-services/blog-writing", label: "SEO Blog Writing" },
    { href: "/seo-services/national", label: "National SEO" },
    { href: "/seo-services/global", label: "Global SEO" },
    { href: "/seo-services/shopify", label: "Shopify SEO" },
    { href: "/seo-services/wordpress", label: "WordPress SEO" },
    { href: "/seo-services/ethical-link-building", label: "Ethical Link Building" },
  ];

  return (
    <div
      className={clsx({
        // For header: hidden below md, then a single-row flex (no wrap) from md up
        "hidden md:flex md:flex-nowrap md:items-center md:space-x-6 bg-gray-200 p-2 md:justify-around text-black": isHeader,
        // For footer: a vertical stack
        "flex flex-col space-y-2 text-white": isFooter,
      })}
    >
      {navLinks.map((link, index) => {
        const active = pathname.startsWith(link.href);
        return (
          <Link key={index} href={link.href}>
            <div className="relative">
              {/* Visible label, bold only if active */}
              <span
                className={clsx("hover:text-blue-400",
                  isHeader ? (active ? "text-blue-900 font-bold " : "text-gray-700") : "",
                  "block"
                )}
              >
                {link.label}
              </span>
              {/* Invisible duplicate in bold to reserve space */}
              <span className="absolute inset-0 invisible pointer-events-none font-bold">
                {link.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SEOServicesNav;
