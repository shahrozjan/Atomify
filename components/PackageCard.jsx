import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function PackageCard({ pkg }) {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 border-2 border-[#2d92e6] flex flex-col h-full justify-between transform transition-transform duration-300 hover:scale-105">
      {/* Icon */}
      <div className="flex justify-center items-center">
        <div className="bg-[#0371cd] w-16 h-16 rounded-full border-4 border-[#deeefa] flex items-center justify-center">
          <FontAwesomeIcon icon={pkg.icon} className="text-white w-8 h-8" />
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-col items-center text-center mt-4">
        <h2 className="text-3xl font-bold">{pkg.title}</h2>
        <p className="text-[#aeafae] mt-2 h-auto lg:h-16 xl:h-auto">{pkg.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mt-4">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-start">
            <div className="bg-[#fff9e4] w-6 h-6 flex justify-center items-center rounded-full mr-2">
              <span className="text-[#ffb383]">✔</span>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="text-center mt-auto pt-10">
        <button className="relative bg-gradient-to-r from-[#0a00e4] to-[#2d92e6] text-white px-6 py-2 rounded-lg border-2 border-transparent bg-clip-padding hover:from-[#0700b8] hover:to-[#217bbf] transition-all duration-300">
          {pkg.buttonText}
        </button>
      </div>
    </div>
  );
}

export default PackageCard;
