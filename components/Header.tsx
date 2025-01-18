import React from "react";
import PageNav from "./PageNav";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-center items-center bg-white md:space-x-60">
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
    </header>
  );
}

export default Header;
