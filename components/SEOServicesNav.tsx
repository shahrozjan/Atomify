"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

function SEOServicesNav({
  isHeader = false,
  isFooter = false,
}: Readonly<{ isHeader?: boolean; isFooter?: boolean }>) {
  return (
    <div
      className={clsx({
        // For header: hidden below md, then a single-row flex (no wrap) from md up
        "hidden md:flex md:flex-nowrap md:items-center md:space-x-6 bg-gray-200 p-2 md:justify-around":
          isHeader,

        // For footer: a vertical stack
        "flex flex-col space-y-2": isFooter,
      })}
    >
      <Link href="/seo-services/audit">
        <div className="hover:text-blue-400">SEO Audit Services</div>
      </Link>
      <Link href="/seo-services/small-business">
        <div className="hover:text-blue-400">Small Business SEO</div>
      </Link>
      <Link href="/seo-services/local">
        <div className="hover:text-blue-400">Local SEO</div>
      </Link>
      <Link href="/seo-services/ecommerce">
        <div className="hover:text-blue-400">E-commerce SEO</div>
      </Link>
      <Link href="/seo-services/blog-writing">
        <div className="hover:text-blue-400">SEO Blog Writing</div>
      </Link>
      <Link href="/seo-services/national">
        <div className="hover:text-blue-400">National SEO</div>
      </Link>
      <Link href="/seo-services/global">
        <div className="hover:text-blue-400">Global SEO</div>
      </Link>
      <Link href="/seo-services/shopify">
        <div className="hover:text-blue-400">Shopify SEO</div>
      </Link>
      <Link href="/seo-services/wordpress">
        <div className="hover:text-blue-400">WordPress SEO</div>
      </Link>
      <Link href="/seo-services/ethical-link-building">
        <div className="hover:text-blue-400">Ethical Link Building</div>
      </Link>
    </div>
  );
}

export default SEOServicesNav;
