import Link from "next/link";

export default function ShopifySEOServices() {
return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Shopify SEO Services
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Drive Traffic & Boost Sales
          </h2>
          <p className="mx-auto text-lg md:text-xl font-semibold">
            Your Shopify store deserves to shine in search results. With tailored Shopify SEO strategies, we help you attract more visitors, convert them into loyal customers, and skyrocket your online sales. Here&apos;s how we make your store stand out:
          </p>
        </div>

        <div className="grid gap-12">
          {/* Section 1 */}
          <section className="relative bg-white text-black flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Shopify SEO Audit & Analysis
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Every successful SEO campaign begins with a detailed audit. Our team analyzes your store&apos;s current performance, identifying areas to optimize, from technical issues to content gaps. We ensure your site is search-engine-friendly and aligned with the latest SEO best practices.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Customized Keyword Strategy for Shopify Stores
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                We perform in-depth keyword research specific to your niche and target audience. By focusing on high-converting, low-competition keywords, we optimize product pages, collections, and blogs to drive organic traffic that converts into sales.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                On-Page Optimization for Shopify
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                From crafting compelling meta titles and descriptions to improving site navigation and internal linking, we ensure every element of your Shopify store is optimized. Our on-page SEO strategies enhance user experience and improve your search engine rankings.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Speed & Mobile Optimization
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                A fast and mobile-responsive Shopify store ranks higher and delivers better user satisfaction. We optimize your site&apos;s loading speed and ensure a seamless shopping experience across all devices, meeting Google&apos;s Core Web Vitals standards.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Content Marketing for Shopify Success
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Quality content builds trust and drives traffic. We create engaging product descriptions, blogs, and educational content tailored to your brand. This strategy not only attracts new customers but also keeps them coming back for more.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Why Choose Us for Your Shopify SEO Needs?
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                With a proven track record of optimizing Shopify stores, we understand the platform&apos;s unique challenges and opportunities. Our data-driven approach delivers measurable results, helping your business grow.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="p-8 rounded-lg inline-block">
            <h2 className="text-3xl font-bold mb-4">
              Get ready to dominate search rankings and transform your Shopify store into a revenue-generating machine.
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Let&apos;s start optimizing today!
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
