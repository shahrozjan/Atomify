"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState, useRef } from "react";
import SEOServicesNav from "./SEOServicesNav";
import { usePathname } from "next/navigation";

function PageNav({
  isHeader = false,
  isSidebar = false,
  isFooter = false,
  toggleFunction = () => {},
}: Readonly<{
  isHeader?: boolean;
  isSidebar?: boolean;
  isFooter?: boolean;
  toggleFunction?: () => void;
}>) {
  const pathname = usePathname();

  // When clicking a link in the sidebar, call the toggle function.
  const handleLinkClick = () => {
    if (isSidebar) {
      toggleFunction();
    }
  };

  // Helper to determine link classes.
  // For SEO Services, the link is considered active if the pathname starts with '/seo-services'
  const getLinkClasses = (href: string) => {
    if (isFooter) {
      // If footer, disable underline completely.
      return "relative cursor-pointer rounded-2xl text-white hover:text-blue-400";
    }
    let isActive = false;
    if (href === "/seo-services/") {
      isActive = pathname.startsWith("/seo-services");
    } else {
      isActive = pathname === href;
    }
    return clsx(
      "relative cursor-pointer px-2 py-1 rounded-2xl text-black transition-all duration-300",
      isActive && "border-b-2 border-blue-800",
      "hover:border-b-2 hover:border-blue-800"
    );
  };

  // Manage the SEO Services submenu hover state with a delay.
  const [isSEOHovered, setIsSEOHovered] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  // Helper functions to handle mouse enter/leave with delay.
  const handleSEOEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setIsSEOHovered(true);
  };

  const handleSEOLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setIsSEOHovered(false);
    }, 200); // delay in milliseconds
  };

  return (
    <div className="relative">
      <nav
        className={clsx(
          isHeader && "flex flex-wrap items-center space-x-4 font-bold",
          isFooter && "flex flex-col space-y-2 text-white"
        )}
      >
        {/* ------------ HOME ------------ */}
        <Link href="/" data-href="/">
          <div onClick={handleLinkClick} className={getLinkClasses("/")}>
            Home
          </div>
        </Link>

        {/* ------------ SEO SERVICES ------------ */}
        {isHeader && (
          <div
            className="relative inline-block"
            onMouseEnter={handleSEOEnter}
            onMouseLeave={handleSEOLeave}
          >
            <Link href="/seo-services" data-href="/seo-services/">
              <div onClick={handleLinkClick} className={getLinkClasses("/seo-services/")}>
                SEO Services
              </div>
            </Link>
            {isSEOHovered && (
              <div
                className="absolute top-full left-0 mt-1 p-4 bg-white border border-gray-300 shadow-md whitespace-nowrap z-10"
                onMouseEnter={handleSEOEnter}
                onMouseLeave={handleSEOLeave}
              >
                <SEOServicesNav/>
              </div>
            )}
          </div>
        )}

        {isSidebar && (
          <>
            <Link href="/seo-services" data-href="/seo-services/">
              <div onClick={handleLinkClick} className={getLinkClasses("/seo-services/")}>
                SEO Services
              </div>
            </Link>
            <div className="pl-8">
              <SEOServicesNav />
            </div>
          </>
        )}

        {/* ------------ SEO PACKAGE ------------ */}
        <Link href="/seo-package" data-href="/seo-package/">
          <div onClick={handleLinkClick} className={getLinkClasses("/seo-package/")}>
            SEO Package
          </div>
        </Link>

        {/* ------------ BULK SEO KEYWORDS ------------ */}
        <Link href="/bulk-seo-keywords" data-href="/bulk-seo-keywords/">
          <div onClick={handleLinkClick} className={getLinkClasses("/bulk-seo-keywords/")}>
            Bulk SEO Keywords
          </div>
        </Link>

        {/* ------------ ABOUT ------------ */}
        <Link href="/about-us" data-href="/about-us/">
          <div onClick={handleLinkClick} className={getLinkClasses("/about-us/")}>
            About
          </div>
        </Link>

        {/* ------------ CONTACT US ------------ */}
        <Link href="/contact-us" data-href="/contact-us/">
          <div onClick={handleLinkClick} className={getLinkClasses("/contact-us/")}>
            Contact Us
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default PageNav;
