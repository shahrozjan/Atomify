"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faLayerGroup,
  faCube,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

export default function SEOServices() {
  const packages = [
    {
      title: "Lite",
      description: "Boost your visibility and drive initial growth",
      features: [
        "500 Keywords tracked weekly",
        "30 pages optimized",
        "Bi-Annual reviews with Seniors",
      ],
      buttonText: "Get Proposal",
      icon: faBolt,
    },
    {
      title: "Standard",
      description: "Elevate your website to achieve higher visibility",
      features: [
        "1000 Keywords tracked weekly",
        "50 pages optimized",
        "Quarterly reviews with Seniors",
      ],
      buttonText: "Get Proposal",
      icon: faLayerGroup,
    },
    {
      title: "Pro",
      description: "Supercharge your website's growth by advanced strategies",
      features: [
        "1500 Keywords tracked weekly",
        "70 pages optimized",
        "Monthly reviews with Seniors",
      ],
      buttonText: "Get Proposal",
      icon: faCube,
    },
    {
      title: "Enterprise",
      description: "Unleash the full potential of your website's presence",
      features: [
        "2500 Keywords tracked weekly",
        "200 pages optimized",
        "Monthly reviews with Seniors",
      ],
      buttonText: "Get Proposal",
      icon: faCrown,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">SEO Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 border-2 border-[#2d92e6] flex flex-col h-full justify-between transform transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center items-center">
                <div className="bg-[#0371cd] w-16 h-16 rounded-full border-4 border-[#deeefa] flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={pkg.icon}
                    className="text-white text-3xl"
                  />
                </div>
              </div>

              {/* Title and Description */}
              <div className="flex flex-col items-center text-center mt-4">
                <h2 className="text-3xl font-bold">{pkg.title}</h2>
                <p className="text-[#aeafae] mt-2">{pkg.description}</p>
                {pkg.description.length <= 46 && <div className="h-6"></div>}
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
                <button
                  className="relative bg-gradient-to-r from-[#0a00e4] to-[#2d92e6] text-white px-6 py-2 rounded-lg border-2 border-transparent bg-clip-padding hover:from-[#0700b8] hover:to-[#217bbf] transition-all duration-300"
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
