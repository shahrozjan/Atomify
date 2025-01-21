import React from "react";
import PageNav from "./PageNav";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed w-screen top-0 left-0 z-50">
      <div className="flex justify-center items-center bg-white md:space-x-60 shadow-lg">
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
        <PageNav isHeader={true} />
      </div>
    </header>
  );
}

export default Header;
