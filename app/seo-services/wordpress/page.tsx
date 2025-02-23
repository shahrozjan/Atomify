import Link from "next/link";

export default function WordPressSEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Unlock Your Website&apos;s Potential with WordPress SEO Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-semibold">
            Your Website, Powered by Search
          </p>
        </div>

        <div className="grid gap-12">
          {/* Section 1 */}
          <section className="relative bg-white text-black flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Tailored SEO Strategies for WordPress Websites
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Your WordPress website deserves a custom SEO approach that fits its unique structure and functionality. Our team specializes in crafting strategies that align with WordPress&apos;s framework, utilizing built-in tools like Yoast SEO, Rank Math, and other plugins. We optimize your content, metadata, and URLs to improve your website&apos;s visibility on search engines.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Comprehensive On-Page Optimization
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Ensure every page of your website is search engine-friendly. From optimizing headings, images, and meta descriptions to integrating schema markup, we cover all aspects of on-page SEO. Our approach enhances user experience while ensuring your website ranks higher for targeted keywords.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Speed, Performance, and Core Web Vitals
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                A fast-loading website is essential for both users and search engines. We optimize your WordPress site&apos;s performance by addressing factors like page load speed, image compression, and caching. By meeting Google&apos;s Core Web Vitals requirements, we ensure your site is primed for top rankings.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Technical SEO for WordPress
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Unlock the full potential of your WordPress website with technical SEO enhancements. We address critical backend elements like XML sitemaps, mobile responsiveness, SSL implementation, and structured data to make your site crawlable and indexable by search engines.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Continuous SEO Monitoring and Reporting
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                SEO is not a one-time task; it&apos;s an ongoing effort. We provide regular performance reports, keyword rankings, and traffic analysis to keep you informed of your website&apos;s progress. Our team constantly refines strategies to adapt to algorithm changes, ensuring consistent growth.
              </p>
            </div>
          </section>

          {/* Section 6 - Why Choose Us */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Why Choose Us for WordPress SEO?
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                With our expertise in WordPress and SEO, we bridge the gap between creativity and technical proficiency. Whether you&apos;re a business owner, blogger, or e-commerce entrepreneur, we help you achieve sustainable growth and increased online visibility.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="p-8 rounded-lg inline-block">
            <h2 className="text-3xl font-bold mb-4">
              Let&apos;s Transform Your WordPress Site into a Traffic Magnet
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Contact us today for tailored SEO solutions that deliver measurable results!
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
