import React from "react";
import SEOServicesNav from "./SEOServicesNav";
import PageNav from "./PageNav";

function Footer() {
  return (
    <footer className="bg-slate-700 text-gray-300 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4">
        {/* Navigation Section */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <div className="font-bold text-lg pb-2">Quick Links</div>
            <hr className="w-64 border-t border-gray-300 mb-4 mx-0" />
            <PageNav isFooter={true} />
          </div>
          <div>
            <div className="font-bold text-lg pb-2">Services</div>
            <hr className="w-64 border-t border-gray-300 mb-4 mx-0" />
            <SEOServicesNav isFooter={true} />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-4 md:mt-0 text-lg text-left">
          <div className="font-bold text-lg pb-2">Contact</div>
          <hr className="w-64 border-t border-gray-300 mb-4 mx-0" />
          <p className="mb-1">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@atomify.com"
              className="text-gray-300 hover:underline"
            >
              info@atomify.com
            </a>
          </p>
          <p className="mb-1">
            <span className="font-semibold">Phone:</span> +91 97703232 - +91 95960 19337
          </p>
          <p className="mb-1">
            <span className="font-semibold">Address:</span> Hyderpora, Bypass, Kashmir, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
