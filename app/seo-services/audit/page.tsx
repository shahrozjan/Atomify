import clsx from "clsx";
import Link from "next/link";

export default function SEOServices() {
  const cardData = [
    {
      title: "Competitor Analysis",
      description:
        "Discover how your competitors are outperforming you and identify areas for growth.",
    },
    {
      title: "Technical Audit",
      description:
        "Detect broken links, slow loading pages, and other technical glitches.",
    },
    {
      title: "On-Page SEO Analysis",
      description: "Ensure proper use of keywords, meta tags, and headers.",
    },
    {
      title: "Backlink Profile Audit",
      description:
        "Evaluate your link-building efforts to eliminate harmful links.",
    },
    {
      title: "Content Audit",
      description:
        "Find content gaps and keyword opportunities to strengthen your strategy.",
    },
  ];

  const benefitsData = [
    {
      title: "Improved Search Engine Visibility",
      description:
        "Higher search engine rankings.",
    },
    {
      title: "Tailored Content",
      description:
        "Improved website speed and performance.",
    },
    {
      title: "Increased Website Traffic",
      description:
        "Enhanced user experience and engagement.",
    },
    {
      title: "Higher Conversions",
      description:
        "Increased organic traffic and conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Unlock Your Website&apos;s Full Potential with Expert SEO Audit Services
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Is your website delivering the traffic, engagement, and conversions
            you expect?
          </p>
          <p className="text-lg md:text-xl font-medium">
            Discover hidden opportunities with our comprehensive SEO
            Audit Services.
          </p>
        </div>

        {/* Why Choose Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Choose an SEO Audit?
          </h2>
          <p className="text-lg md:text-xl text-center font-medium mb-8">
            An SEO audit is more than just a health check for your website—it&apos;s
            a roadmap to success. We analyze key factors like on-page SEO,
            technical issues, and content gaps to empower you with actionable
            insights.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={clsx(
                  "relative bg-white text-black rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-2 overflow-hidden transform hover:scale-105 transition-transform duration-300",
                  index === 4 ? "md:col-start-2" : "",
                  index === 3 ? "lg:col-start-2" : "",
                )}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-teal-400"></div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
          Benefits of Our SEO Audit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6 flex items-center gap-4"
              >
                <div 
  className="bg-gradient-to-r from-green-500 to-teal-400 text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0"                >
                  {/* Number Badge */}
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2 items-center justify-center">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Optimize Your Website Today!
          </h2>
          <p className="text-lg md:text-xl font-semibold">
            Don&apos;t let hidden SEO issues hold your business back.
          </p>
          <p className="text-lg md:text-xl font-semibold mb-8">
            Contact us
            today for a tailored SEO Audit and step-by-step plan to achieve your
            goals!
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
