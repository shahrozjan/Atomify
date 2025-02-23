import clsx from "clsx";
import Link from "next/link";
export default function EthicalLinkBuildingServices() {

  const cardData = [
    {
      title: "Content-Driven Outreach",
      description:
        "Creating valuable content that earns natural backlinks.",
    },
    {
      title: "Industry-Specific Connections",
      description:
        "Partnering with authoritative sites in your niche to ensure relevance and quality.",
    },
    {
      title: "Transparent Practices",
      description:
        " Keeping you informed of every backlink we secure, so you know exactly where your traffic comes from.",
    }
  ];

  const benefitsData = [
    {
      title: "Sustainable Results",
      description:
        "Avoid penalties and maintain consistent rankings.",
    },
    {
      title: "Enhanced Reputation",
      description:
        "Build credibility with backlinks from respected websites.",
    },
    {
      title: "Organic Traffic Growth",
      description:
        "Drive high-quality traffic that converts.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Ethical Link Building Services
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            In the ever-evolving world of SEO, ethical link building is the
            cornerstone of a sustainable online presence. At Atomify, we focus
            on providing white-hat link-building strategies that adhere to
            Google&apos;s guidelines, ensuring long-term growth and credibility for
            your website.
          </p>
        </div>

        {/* What is Ethical Link Building */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            What is Ethical Link Building?
          </h2>
          <p className="text-lg md:text-xl font-semibold text-center">
            Ethical link building is the practice of acquiring high-quality
            backlinks through legitimate and transparent methods. It avoids
            black-hat tactics such as spamming, paid links, and link farming,
            ensuring your website&apos;s reputation remains intact while improving
            your search engine rankings.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
          Our Approach to Ethical Link Building
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

        {/* Why Choose Ethical Link Building */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Ethical Link Building?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className={clsx(
                  "bg-white text-black rounded-lg shadow-lg p-6 flex items-start gap-4",
                  index === 2 && "md:col-span-2 md:max-w-md mx-auto"
                )}
              >
                <div 
                  className="bg-gradient-to-r from-green-500 to-teal-400 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0"
                >
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

        {/* Our Commitment to Quality */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Our Commitment to Quality
          </h2>
          <p className="text-lg md:text-xl font-semibold text-center">
            At Atomify, we prioritize quality over quantity. Every link we
            build is carefully vetted to ensure it aligns with your business
            goals. From guest posting to broken link building, our methods are
            tailored to deliver impactful results without compromising your
            brand&apos;s integrity.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Trustworthy Backlinks?
          </h2>
          <p className="text-lg md:text-xl font-semibold">
            Let us help you establish a robust online presence with our ethical
            link-building services.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-8">
            Contact us today to discuss how we can drive
            sustainable growth for your business.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold">
            <Link href="/contact-us">
              <div>Contact Us</div>
            </Link>
          </button>
        </section>
      </div>
    </div>
  );
}
