"use client";

import React, { useState } from "react";
import PageNav from "./PageNav";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed w-screen top-0 left-0 z-50">
      <div className="flex items-center justify-between md:justify-center px-10 bg-white md:space-x-60 shadow-lg">
        <div className="p-4 flex items-center space-x-2">
          <div>
            <Image
              src="/logo.png"
              alt="Atomify logo"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <div>Atomify</div>
        </div>

        <div className="md:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={toggleNav}
          >
            {/* <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} /> */}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className="hidden md:flex">
          <PageNav isHeader={true} />
        </div>
      </div>

      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform",
          isNavOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out md:hidden"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-bold text-lg">Atomify</div>
          <button
            className="text-black text-2xl focus:outline-none pr-4"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-4">
          <PageNav isSidebar={true} />
        </div>
      </div>
    </header>
  );
}

export default Header;
