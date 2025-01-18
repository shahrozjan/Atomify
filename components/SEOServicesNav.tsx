import clsx from "clsx";
import Link from "next/link";
import React from "react";

function SEOServicesNav({ isHeader = false }: Readonly<{ isHeader?: boolean }>) {
  return (
    <div
      className={clsx({
        "p-4 flex justify-center space-x-8 bg-gray-200": isHeader,
      })}
    >
      <Link href="/seo-services/audit">
        <div>SEO Audit Services</div>
      </Link>
      <Link href="/seo-services/small-business">
        <div>Small Business SEO</div>
      </Link>
      <Link href="/seo-services/local">
        <div>Local SEO</div>
      </Link>
      <Link href="/seo-services/ecommerce">
        <div>E-commerce SEO</div>
      </Link>
      <Link href="/seo-services/blog-writing">
        <div>SEO Blog Writing</div>
      </Link>
      <Link href="/seo-services/national">
        <div>National SEO</div>
      </Link>
      <Link href="/seo-services/global">
        <div>Global SEO</div>
      </Link>
      <Link href="/seo-services/shopify">
        <div>Shopify SEO</div>
      </Link>
      <Link href="/seo-services/wordpress">
        <div>WordPress SEO</div>
      </Link>
      <Link href="/seo-services/ethical-link-building">
        <div>Ethical Link Building</div>
      </Link>
    </div>
  );
}

export default SEOServicesNav;
