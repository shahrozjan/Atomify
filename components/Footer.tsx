import React from "react";
import SEOServicesNav from "./SEOServicesNav";
import PageNav from "./PageNav";

function Footer() {
  return (
    <footer className="flex bg-slate-700 text-gray-300">
      <div className="p-8">
        <div className="font-bold text-xl pb-2">Pages</div>
        <PageNav />
      </div>
      <div className="p-8">
        <div className="font-bold text-xl pb-2">Services</div>
        <SEOServicesNav />
      </div>
    </footer>
  );
}

export default Footer;
