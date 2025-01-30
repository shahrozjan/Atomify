"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SEOServicesNav from "./SEOServicesNav";
import { usePathname } from "next/navigation";

function PageNav({
  isHeader = false,
  isSidebar = false,
  toggleFunction = () => {},
}: Readonly<{
  isHeader?: boolean;
  isSidebar?: boolean;
  toggleFunction?: () => void;
}>) {
  const pathname = usePathname(); // Grab the current path (e.g., "/about-us/")
  const [markerPosition, setMarkerPosition] = useState<number | null>(null); // Track marker position
  const [markerWidth, setMarkerWidth] = useState<number | null>(null); // Track marker width
  const [isSEOHovered, setIsSEOHovered] = useState(false); // Hover state for SEO Services

  useEffect(() => {
    if (isHeader) {
      // Automatically move marker to the active link on load or path change
      const activeLink = document.querySelector(
        `[data-href="${pathname}"]`
      ) as HTMLElement;
      if (activeLink) {
        setMarkerPosition(activeLink.offsetLeft);
        setMarkerWidth(activeLink.offsetWidth);
      }
    }
  }, [pathname, isHeader]);

  // const isActive = (href: string) => isHeader && pathname === href;

  const handleLinkClick = () => {
    if (isSidebar) {
      toggleFunction();
    }
  };

  const updateMarker = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isHeader) {
      const link = event.currentTarget as HTMLDivElement;
      setMarkerPosition(link.offsetLeft);
      setMarkerWidth(link.offsetWidth);
    }
  };

  const resetMarkerToActive = () => {
    if (isHeader) {
      const activeLink = document.querySelector(
        `[data-href="${pathname}"]`
      ) as HTMLElement;
      if (activeLink) {
        setMarkerPosition(activeLink.offsetLeft);
        setMarkerWidth(activeLink.offsetWidth);
      }
    }
  };

  return (
    <div className="relative">
      {/* Marker for the active link */}
      {isHeader && (
        <div
          className="absolute bottom-0 h-1 bg-blue-800 transition-all duration-300"
          style={{
            left: markerPosition ?? 0,
            width: markerWidth ?? 0,
          }}
        ></div>
      )}

      <nav
        className={clsx(
          isHeader && "flex flex-wrap items-center space-x-4 font-bold"
        )}
      >
        {/* ------------ HOME ------------ */}
        <Link href="/" data-href="/">
          <div
            onMouseEnter={updateMarker}
            onMouseLeave={resetMarkerToActive}
            onClick={handleLinkClick}
            className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
          >
            Home
          </div>
        </Link>

        {/* ------------ SEO SERVICES (Header) ------------ */}
        {isHeader && (
          <div>
            <Link href="/seo-services" data-href="/seo-services/">
              <div
                onMouseEnter={(e) => {
                  setIsSEOHovered(true);
                  updateMarker(e);
                }}
                onMouseLeave={() => {
                  setIsSEOHovered(false);
                  resetMarkerToActive();
                }}
                className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
              >
                SEO Services
              </div>
            </Link>

            {isSEOHovered && (
              <div
                className="absolute p-4 pr-10 bg-white border border-black whitespace-nowrap"
                onMouseEnter={() => setIsSEOHovered(true)}
                onMouseLeave={() => setIsSEOHovered(false)}
              >
                <SEOServicesNav />
              </div>
            )}
          </div>
        )}

        {/* ------------ SEO SERVICES (Sidebar) ------------ */}
        {isSidebar && (
          <>
            <Link href="/seo-services" data-href="/seo-services/">
              <div
                onClick={handleLinkClick}
                className="cursor-pointer px-2 py-1 rounded-2xl text-black"
              >
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
          <div
            onMouseEnter={updateMarker}
            onMouseLeave={resetMarkerToActive}
            onClick={handleLinkClick}
            className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
          >
            SEO Package
          </div>
        </Link>

        {/* ------------ BULK SEO KEYWORDS ------------ */}
        <Link href="/bulk-seo-keywords" data-href="/bulk-seo-keywords/">
          <div
            onMouseEnter={updateMarker}
            onMouseLeave={resetMarkerToActive}
            onClick={handleLinkClick}
            className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
          >
            Bulk SEO Keywords
          </div>
        </Link>

        {/* ------------ ABOUT ------------ */}
        <Link href="/about-us" data-href="/about-us/">
          <div
            onMouseEnter={updateMarker}
            onMouseLeave={resetMarkerToActive}
            onClick={handleLinkClick}
            className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
          >
            About
          </div>
        </Link>

        {/* ------------ CONTACT US ------------ */}
        <Link href="/contact-us" data-href="/contact-us/">
          <div
            onMouseEnter={updateMarker}
            onMouseLeave={resetMarkerToActive}
            onClick={handleLinkClick}
            className="relative cursor-pointer px-2 py-1 rounded-2xl text-black"
          >
            Contact Us
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default PageNav;