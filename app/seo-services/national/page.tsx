import Link from "next/link";

export default function NationalSEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            National SEO Services
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
           Expanding Your Business Across the Nation
          </h2>
          <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
            In the competitive digital landscape, targeting a nationwide audience requires more than just a strong online presence. National SEO strategies ensure your business ranks at the top of search engine results, reaching customers from every corner of the country. Our tailored National SEO services are designed to maximize your visibility, drive high-quality traffic, and establish your brand as a market leader.
          </p>
        </div>

        {/* Section 1 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              What Is National SEO and Why Does Your Business Need It?
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              National SEO focuses on optimizing your website to rank for broader, location-independent keywords. Unlike local SEO, which targets specific areas, National SEO helps you compete on a larger scale. If you&apos;re an eCommerce store, a SaaS provider, or any business looking to scale nationwide, our strategies can help you dominate search results, ensuring your brand reaches the right audience across the country.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Comprehensive Keyword Research and Optimization
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              We identify high-volume, relevant keywords that align with your business goals and nationwide reach. From crafting engaging meta tags to optimizing your content and internal links, our keyword strategy is tailored to boost your rankings for competitive search terms, keeping you ahead of your competitors.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Content Marketing That Resonates Nationwide
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Great content is the backbone of any successful SEO campaign. We create informative, engaging, and SEO-optimized blogs, articles, and website copy that appeal to your target audience. Our content strategies not only improve your website&apos;s authority but also help in building trust with customers across the nation.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Building a Strong Nationwide Backlink Profile
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Backlinks from authoritative websites are key to establishing credibility. Our team works on securing high-quality backlinks that elevate your domain authority and improve search engine rankings. This ensures your website is viewed as a trustworthy source, no matter where your customers are located.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 mb-16">
          {/* Left Gradient Border */}
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
          <div className="ml-4 w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Regular Performance Tracking and Reporting
            </h2>
            <p className="text-lg md:text-xl font-light text-center">
              Transparency is at the core of our services. We provide regular reports showcasing keyword rankings, traffic growth, and other essential metrics. Our data-driven approach ensures your SEO campaign stays on track, delivering measurable results.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-8 rounded-lg inline-block text-wgtue">
            <h2 className="text-3xl font-bold mb-4">
              Achieve Nationwide Success with Our National SEO Services
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              Your business deserves to thrive on a national scale. 
            </p>
            <p className="text-lg md:text-xl font-semibold">
            Let our experts take care of your SEO needs while you focus on scaling your business.
            </p>
            <p className="text-lg md:text-xl font-semibold mb-8">
             Contact us today to learn more about how we can help you conquer the nation&apos;s search results!
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
