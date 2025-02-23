import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function PackageCard({ pkg, isMain = false }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 border-2 border-[#2d92e6] flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
      {/* Top Section: Icon and Title */}
      <div className="flex flex-col items-center">
        <div className="bg-[#0371cd] w-16 h-16 rounded-full border-4 border-[#deeefa] flex items-center justify-center">
          <FontAwesomeIcon icon={pkg.icon} className="text-white w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold mt-2">{pkg.title}</h2>
      </div>

      {/* Description and Details */}
      <div className="text-center mt-2">
        <p className="text-gray-400">{pkg.description}</p>
        <p className="mt-2 text-sm text-gray-600">{pkg.details}</p>
      </div>

      {/* Features - Only shown when not on the main page */}
      {!isMain && (
        <ul className="space-y-2 mt-4">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <div className="bg-[#fff9e4] w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full mr-2">
                <span className="block text-[#ffb383] text-sm text-center leading-none">
                  ✔
                </span>
              </div>
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Best For */}
      <p className="mt-4 text-center text-sm text-gray-500 italic">
        Best For: {pkg.bestFor}
      </p>

      {/* Button - Only shown when not on the main page */}
      {!isMain && (
        <div className="text-center mt-auto pt-10">
          <button className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold">
            <Link href="/contact-us">
              <div>Contact Us</div>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default PackageCard;
