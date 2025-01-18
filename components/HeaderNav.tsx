import Link from "next/link";
import React from "react";

function HeaderNav() {
  return (
    <nav>
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

export default HeaderNav;
