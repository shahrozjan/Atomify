"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function BulkSEOKeywords() {
  const cardData = [
    {
      title: "Why Bulk SEO Keywords Matter",
      description:
        "Bulk SEO keywords help target a wide range of queries, increase your presence in search engine results, and optimize multiple pages for better visibility.",
    },
    {
      title: "Custom Keyword Research",
      description:
        "We perform thorough keyword research tailored to your business, ensuring you target the most relevant and high-impact terms.",
    },
    {
      title: "Efficient Implementation",
      description:
        "Our experts integrate keywords seamlessly across your website, improving SEO performance and driving organic traffic.",
    },
    {
      title: "Why Choose Us",
      description:
        "Proven expertise, Advanced tools and Cost-effective solutions that deliver ROI.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-green-500 to-teal-400 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Unlock the Power of Bulk SEO Keywords
          </h1>
          <p className="text-lg md:text-xl font-semibold max-w-3xl mx-auto">
            Leverage bulk SEO keywords to drive targeted traffic, boost your
            website&apos;s ranking, and achieve maximum online visibility.
          </p>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={clsx(
                  "relative bg-white text-black rounded-lg shadow-lg p-6 overflow-hidden transform hover:scale-105 transition-transform duration-300"
                )}
              >
                {/* Gradient Border */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-md">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <div className="text-white p-8 rounded-lg max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Elevate Your SEO Game</h2>
            <p className="text-lg font-semibold">
              Ready to transform your online presence?
            </p>
            <p className="text-lg font-semibold mb-6">
              Let us help you harness the power of bulk SEO keywords.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold">
            <Link href="/contact-us">
              <div>Contact Us</div>
            </Link>
          </button>
          </div>
        </section>
      </div>
    </div>
  );
}
