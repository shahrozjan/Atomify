import clsx from "clsx";
import Link from "next/link";

export default function BlogWritingServices() {
  const cardData = [
    {
      title: "Crafting Blogs that Rank and Engage",
      description:
        "Our SEO blog writing service combines keyword research with storytelling to create content that captivates audiences while adhering to SEO best practices.",
    },
    {
      title: "Strategic Keyword Integration",
      description:
        "Effective SEO blog writing goes beyond sprinkling keywords. We ensure seamless integration of high-ranking keywords that enhance readability and relevance.",
    },
    {
      title: "Tailored Content for Your Industry",
      description:
        "Our expert writers craft blogs for technology, lifestyle, and healthcare niches, helping you connect with your audience.",
    },
    {
      title: "Consistent Blogging for Growth",
      description:
        "We create a content calendar with regular updates to signal activity to search engines and engage your audience.",
    },
    {
      title: "Data-Driven Results",
      description:
        "We track performance and use analytics insights to refine strategies and deliver measurable results.",
    },
  ];

  const benefitsData = [
    {
      title: "Improved Search Engine Visibility",
      description:
        "Boost your website's presence on search engines with high-quality, SEO-optimized content.",
    },
    {
      title: "Tailored Content",
      description:
        "We create blog posts that resonate with your audience and align with your industry.",
    },
    {
      title: "Increased Website Traffic",
      description:
        "Drive more visitors to your site with engaging and informative blog content.",
    },
    {
      title: "Higher Conversions",
      description:
        "Convert readers into customers with compelling and actionable blog posts.",
    },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            SEO Blog Writing Services
          </h1>
          <p className="text-lg md:text-xl font-light">
            Elevate Your Online Presence with Visibility That Drives Opportunity
          </p>
        </div>

        {/* Features Section */}
<section className="mb-16">
  <h2 className="text-3xl font-bold mb-4 text-center">
    Why Choose Our Blog Writing Services?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
    {cardData.map((card, index) => (
      <div
        key={index}
        className={clsx(
          "relative bg-white text-black rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-2 overflow-hidden transform hover:scale-105 transition-transform duration-300",
          index === 4 ? "md:col-start-2" : "",
          index === 3 ? "lg:col-start-2" : ""
        )}
      >
        {/* Gradient Border */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-sm">{card.description}</p>
      </div>
    ))}
  </div>
</section>


        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Benefits of Our Blog Writing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6 flex items-start gap-4"
              >
                <div 
  className="bg-gradient-to-r from-green-500 to-teal-400 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0"                >
                  {/* Number Badge */}
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            Let&rsquo;s Write Your Success Story
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Partner with us for SEO blog writing that drives traffic, builds
            authority, and converts readers into loyal customers.
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold">
            <Link href="/contact-us">
              <div>Contact Us</div>
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
}
