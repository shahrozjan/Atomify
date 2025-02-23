import Link from "next/link";

export default function EcommerceServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            E-Commerce SEO
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Drive More Traffic, Boost Sales, and Outrank the Competition
          </h2>
          <p className="mx-auto text-lg md:text-xl font-semibold">
            E-commerce SEO is the backbone of your online store&apos;s success. By optimizing your website for search engines, you can attract high-intent customers, increase visibility, and maximize conversions. Let us help you turn clicks into customers.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Section 1 */}
          <section className="relative bg-white text-black flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Why Your E-Commerce Store Needs SEO
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                In today&apos;s digital age, competition in the e-commerce space is fierce. Without proper SEO, your store risks being lost in the sea of competitors. Our tailored E-commerce SEO services ensure your products rank high in search results, attracting shoppers actively searching for what you offer. From keyword research to technical SEO, we cover every aspect to make your store shine.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Optimized Product Listings for Maximum Visibility
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Your product pages are the heart of your store. We enhance them with keyword-rich titles, compelling meta descriptions, and well-structured content that appeals to both search engines and customers. This ensures your products stand out and drive more organic traffic.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Comprehensive Technical SEO for a Seamless Shopping Experience
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                A slow-loading or poorly structured site can turn away potential customers. Our team focuses on technical SEO aspects like site speed, mobile optimization, and clean navigation to provide a seamless shopping experience. With search engines prioritizing user experience, these optimizations ensure your store ranks higher.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Building Authority with Strategic Link Building
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Authority matters in the e-commerce world. Our E-commerce SEO strategy includes building high-quality backlinks from trusted websites to improve your domain authority and boost your rankings. This positions your store as a trusted destination for shoppers.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="relative bg-white text-black backdrop-blur-lg flex flex-col items-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            {/* Left Gradient Border */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
            <div className="ml-4 w-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Analytics-Driven Results for Continuous Growth
              </h2>
              <p className="text-lg md:text-xl font-light text-center">
                Our work doesn&apos;t stop at implementation. We track and analyze key metrics like traffic, conversions, and rankings to fine-tune strategies and ensure consistent growth. You&apos;ll receive detailed reports that show how our efforts translate into tangible results for your business.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="p-8 rounded-lg inline-block">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Online Store?
            </h2>
            <p className="text-lg md:text-xl font-semibold">
              Partner with us for E-commerce SEO that delivers measurable results.
            </p>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Let&apos;s work together to put your store at the top of search results and keep it there!
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
