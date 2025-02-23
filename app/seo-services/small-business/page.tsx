import Link from "next/link";

export default function SmallBusinessSEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Small Business SEO
          </h1>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Unlock Your Growth Potential
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light">
            {/* Optional subheading if needed */}
          </p>
        </div>

        <div className="grid gap-12">
          {/* Section 1 */}
          <section className="relative bg-white text-black flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Get Found Online with Tailored SEO Solutions
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Your customers are searching for you online—let&apos;s make sure they find you! Our small business SEO services are designed specifically to help local and niche businesses rank higher in search results. By optimizing your website, improving local SEO, and targeting the right keywords, we ensure your business stands out in a crowded digital landscape.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Affordable SEO for Growing Businesses
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                We understand the challenges small businesses face with limited budgets. That&apos;s why our SEO packages are affordable yet impactful. From on-page optimizations to local business listings, we focus on cost-effective strategies that drive measurable results without breaking the bank.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Local SEO: Your Ticket to Neighborhood Success
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Most small businesses thrive on local customers, and that&apos;s where our local SEO expertise comes in. We optimize your Google My Business profile, create location-specific content, and ensure you appear in local searches. Whether you&apos;re a boutique, café, or service provider, our strategies will drive foot traffic and calls to your doorstep.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Results That Matter: Higher Traffic and Conversions
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Our approach to SEO is not just about getting clicks—it&apos;s about turning visitors into loyal customers. We track your progress with detailed analytics and adjust strategies for maximum ROI. Watch as your online visibility grows and your business gains a competitive edge.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Partner with Experts Who Care
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                We&apos;re not just another SEO agency; we&apos;re your growth partners. We take the time to understand your business goals and tailor our strategies to meet them. With our support, you can focus on running your business while we handle the complex world of search engine optimization.
              </p>
            </div>
          </section>
        </div>


        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="p-8 rounded-lg inline-block">
            <h2 className="text-3xl font-bold mb-4">
              Start Your SEO Journey Today
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              Ready to elevate your small business?
            </p>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Contact us to discuss how we can help your business climb the search rankings and thrive online.
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
