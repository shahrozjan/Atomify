"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import SEOServicesNav from "./SEOServicesNav";

function PageNav({
  isHeader = false,
  isSidebar = false,
}: Readonly<{ isHeader?: boolean; isSidebar?: boolean }>) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav
      className={clsx({
        "flex items-center md:space-x-4 lg:space-x-8 font-bold": isHeader,
      })}
    >
      <Link href="/">
        <div>Home</div>
      </Link>

      {isHeader && (
        <div>
          <Link href="/seo-services">
            <div
              className="cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              SEO Services
            </div>
          </Link>
          {isHovered && (
            <div className="absolute p-4 pr-10 bg-white border-black border">
              <SEOServicesNav />
            </div>
          )}
        </div>
      )}

      {isSidebar && (
        <>
          <Link href="/seo-services">
            <div>SEO Services</div>
          </Link>
          <div className="pl-8">
            <SEOServicesNav />
          </div>
        </>
      )}
      <Link href="/seo-package">
        <div>SEO Package</div>
      </Link>
      <Link href="/bulk-seo-keywords">
        <div>Bulk SEO Keywords</div>
      </Link>
      <Link href="/about-us">
        <div>About</div>
      </Link>
      <Link href="/contact-us">
        <div>Contact Us</div>
      </Link>
    </nav>
  );
}

export default PageNav;
