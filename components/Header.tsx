"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import PageNav from "./PageNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="sticky top-0 left-0 z-50 bg-white shadow">
      {/* Main horizontal bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Atomify logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg sm:text-xl">Atomify</span>
        </div>

        {/* Centered navigation (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <PageNav isHeader />
        </div>

        {/* Right side: "Get Proposal" button (desktop) and hamburger (mobile) */}
        <div className="flex items-center ml-4">
          {/* Desktop button */}
          <a
            href="mailto:info@yourwebsite.com?subject=Get a Proposal"
            className="hidden md:inline-block whitespace-nowrap bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors"
          >
            Get Proposal
          </a>

          {/* Mobile hamburger button (shown below md) */}
          
        </div>
        {!isNavOpen && (<button
            onClick={toggleNav}
            className="md:hidden text-black text-2xl ml-auto"
          >
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>) }
      </div>

      {/* Mobile sidebar navigation */}
      <div
        className={clsx(
          "fixed top-0 right-0 w-64 bg-white shadow-xl z-50 transform",
          isNavOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out md:hidden"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-bold text-lg">Atomify</div>
          <button
            className="text-black text-2xl"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-4">
          <PageNav isSidebar />
        </div>
      </div>
    </header>
  );
}

export default Header;
