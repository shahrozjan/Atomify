import React from "react";
import SEOServicesNav from "./SEOServicesNav";
import PageNav from "./PageNav";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-slate-700 text-gray-300">
      <div className="p-8">
        <div className="font-bold text-xl pb-4">Pages</div>
        <PageNav />
      </div>
      <div className="p-8">
        <div className="font-bold text-xl pb-4">Services</div>
        <SEOServicesNav isFooter={true} />
      </div>
    </footer>
  );
}

export default Footer;
