"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import SEOServicesNav from "./SEOServicesNav";
import { usePathname } from "next/navigation";

function PageNav({
  isHeader = false,
  isSidebar = false,
}: Readonly<{ isHeader?: boolean; isSidebar?: boolean }>) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname(); // Grab the current path (e.g., "/about-us")

  // Helper: only highlight if 'isHeader' AND the path matches
  const isActive = (href: string) => {
    return isHeader && pathname === href;
  };

  return (
    <nav
      className={clsx(
        // For the header, use a horizontal wrap
        isHeader && "flex flex-wrap items-center space-x-4 font-bold"
      )}
    >
      {/* ------------ HOME ------------ */}
      <Link href="/">
        <div
          className={clsx(
            "cursor-pointer px-2 py-1 transition-colors rounded-2xl",
            // Only highlight if it's in header & route matches "/"
            isActive("/") ? "bg-blue-800 text-white" : "hover:bg-gray-100"
          )}
        >
          Home
        </div>
      </Link>

      {/* ------------ SEO SERVICES (Header) ------------ */}
      {isHeader && (
        <div className="relative">
          <Link href="/seo-services">
            <div
              className={clsx(
                "cursor-pointer px-2 py-1 rounded-2xl transition-colors",
                // Only highlight if route matches "/seo-services"
                isActive("/seo-services/")
                  ? "bg-blue-800 text-white"
                  : "hover:bg-gray-100"
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              SEO Services
            </div>
          </Link>

          {isHovered && (
            <div
              className="absolute p-4 pr-10 bg-white border border-black whitespace-nowrap"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered(false)}
            >
              <SEOServicesNav />
            </div>
          )}
        </div>
      )}

      {/* ------------ SEO SERVICES (Sidebar) ------------ */}
      {isSidebar && (
        <>
          <Link href="/seo-services">
            <div className="cursor-pointer px-2 py-1 rounded transition-colors hover:bg-gray-100">
              SEO Services
            </div>
          </Link>
          <div className="pl-8">
            <SEOServicesNav />
          </div>
        </>
      )}

      {/* ------------ SEO PACKAGE ------------ */}
      <Link href="/seo-package">
        <div
          className={clsx(
            "cursor-pointer px-2 py-1 rounded-2xl transition-colors",
            isActive("/seo-package/")
              ? "bg-blue-800 text-white rounded-2xl"
              : "hover:bg-gray-100"
          )}
        >
          SEO Package
        </div>
      </Link>

      {/* ------------ BULK SEO KEYWORDS ------------ */}
      <Link href="/bulk-seo-keywords">
        <div
          className={clsx(
            "cursor-pointer px-2 py-1 rounded-2xl transition-colors",
            isActive("/bulk-seo-keywords/")
              ? "bg-blue-800 text-white"
              : "hover:bg-gray-100"
          )}
        >
          Bulk SEO Keywords
        </div>
      </Link>

      {/* ------------ ABOUT ------------ */}
      <Link href="/about-us">
        <div
          className={clsx(
            "cursor-pointer px-2 py-1 rounded-2xl transition-colors",
            isActive("/about-us/")
              ? "bg-blue-800 text-white"
              : "hover:bg-gray-100"
          )}
        >
          About
        </div>
      </Link>

      {/* ------------ CONTACT US ------------ */}
      <Link href="/contact-us">
        <div
          className={clsx(
            "cursor-pointer px-2 py-1 rounded-2xl transition-colors",
            isActive("/contact-us/")
              ? "bg-blue-800 text-white"
              : "hover:bg-gray-100"
          )}
        >
          Contact Us
        </div>
      </Link>
    </nav>
  );
}

export default PageNav;
