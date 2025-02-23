import Link from "next/link";

export default function GlobalSEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Global SEO Services
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Expand Your Reach Beyond Borders
          </h2>
          <p className="text-lg md:text-xl text-white font-semibold">
            In the era of globalization, establishing a powerful online presence
            across international markets is no longer optional—it&apos;s essential.
            Our Global SEO Services are designed to help your brand transcend
            geographic boundaries, connect with diverse audiences, and drive
            measurable growth worldwide.
          </p>
        </div>

        {/* Section 1 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Tailored SEO Strategies for Global Markets
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              No two markets are the same. Our team conducts in-depth research to
              understand the unique trends, behaviors, and search patterns in your
              target regions. By optimizing your website for country-specific
              search engines like Google, Baidu, and Yandex, we ensure your brand
              resonates with local audiences while maintaining a global appeal.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Multilingual and Multiregional SEO Expertise
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Speak the language of your audience with our multilingual SEO
              solutions. We optimize your content in multiple languages,
              considering cultural nuances and preferences, ensuring relevance and
              relatability. Additionally, our multiregional SEO approach
              structures your website to target multiple geographic areas
              effectively.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              International Keyword Research and Optimization
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Success in global SEO begins with identifying the right keywords for
              each market. Our experts use advanced tools to analyze international
              keyword trends, search volumes, and competition, ensuring your
              content ranks high in diverse regions.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Geo-Targeted Content and Technical SEO
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              We enhance your global visibility through geo-targeted content and
              technical optimizations. From implementing hreflang tags to
              customizing local landing pages, we ensure your website delivers a
              seamless experience for users, regardless of their location.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Performance Tracking Across Borders
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Track your success globally with our comprehensive analytics and
              reporting. We monitor traffic, rankings, and conversions across
              different countries, providing actionable insights to refine your
              strategy and maximize ROI.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-2 rounded-lg inline-block text-white">
            <h2 className="text-3xl font-bold mb-4">
              Take Your Business Global Today!
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-8">
              With our Global SEO Services, your brand can conquer international
              markets, drive traffic, and build a lasting connection with
              audiences worldwide.
              Ready to expand your horizons? Let&apos;s make your
              business a global success story!
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
