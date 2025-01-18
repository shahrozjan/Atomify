import clsx from "clsx";
import Link from "next/link";
import React from "react";

function PageNav({ isHeader = false }: Readonly<{ isHeader?: boolean }>) {
  return (
    <nav
      className={clsx({
        "flex space-x-8 font-bold": isHeader,
      })}
    >
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/seo-services">
        <div>SEO Services</div>
      </Link>
      <Link href="/seo-package">
        <div>SEO Package</div>
      </Link>
      <Link href="/bulk-seo-keywords">
        <div>Bulk SEO Keywords</div>
      </Link>
      <Link href="/about-us">
        <div>About Us</div>
      </Link>
      <Link href="/contact-us">
        <div>Contact</div>
      </Link>
    </nav>
  );
}

export default PageNav;
