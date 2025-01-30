import React from "react";
import Link from "next/link";

const Home = () => {
  const seoServices = [
    { title: "SEO Audit Services", path: "/seo-services/audit" },
    { title: "Small Business SEO", path: "/seo-services/small-business" },
    { title: "Local SEO", path: "/seo-services/local" },
    { title: "E-commerce SEO", path: "/seo-services/ecommerce" },
    { title: "SEO Blog Writing", path: "/seo-services/blog-writing" },
    { title: "National SEO", path: "/seo-services/national" },
    { title: "Global SEO", path: "/seo-services/global" },
    { title: "WordPress SEO", path: "/seo-services/wordpress" },
  ];
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SEO That Delivers Results, Not Promises
          </h1>
          <p className="text-lg md:text-xl font-light my-6">
            Unleash the full potential of your website and watch it soar with
            our expert SEO services.
          </p>
          <Link
            href="mailto:info@yourwebsite.com?subject=Get a Proposal"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Proposal
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Our SEO Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🚀 Higher Rankings, Better Traffic",
                description:
                  "Get your website ranked on the first page of search engines with targeted strategies tailored to your business.",
              },
              {
                title: "🔍 Enhanced Online Visibility",
                description:
                  "Ensure your customers find you at the top when they search for your products or services.",
              },
              {
                title: "💡 Expert Insights, Proven Results",
                description:
                  "Benefit from our years of experience, detailed analytics, and proven techniques that guarantee ROI.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="mailto:info@yourwebsite.com?subject=Free Website Audit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Us: Your Trusted SEO Partner
          </h2>
          <p className="text-lg md:text-xl font-light text-center mb-6">
            At Atomify, we specialize in delivering customized SEO solutions
            that meet the unique needs of businesses of all sizes. Whether
            you&lsquo;re a startup or an established enterprise, our data-driven
            approach helps you achieve long-term success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {seoServices.map((service, index) => (
    <Link key={index} href={service.path}>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer">
        <h3 className="text-lg font-bold">{service.title}</h3>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* Monthly Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Monthly SEO Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Business",
                price: "$299/mo",
                description:
                  "Perfect for startups and small businesses looking to improve their online visibility.",
              },
              {
                title: "Midsize Business",
                price: "$599/mo",
                description:
                  "Ideal for growing businesses ready to scale their SEO efforts.",
              },
              {
                title: "Enterprise",
                price: "$999/mo",
                description:
                  "Comprehensive solutions for large organizations seeking maximum results.",
              },
            ].map((packageItem, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{packageItem.title}</h3>
                <p className="text-teal-500 font-bold text-2xl mb-4">
                  {packageItem.price}
                </p>
                <p className="text-gray-700 mb-6">{packageItem.description}</p>
                <Link
                  href="mailto:info@yourwebsite.com?subject=Get a Proposal"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors block text-center"
                >
                  Get Proposal
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Make Your Website Unstoppable…
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Don’t wait—take the first step toward SEO success today!
          </p>
          <Link
            href="mailto:info@yourwebsite.com?subject=Get a Free Quote"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
