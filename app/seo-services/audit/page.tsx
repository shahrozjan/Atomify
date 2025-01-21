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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Unlock Your Website’s Full Potential with Expert SEO Audit Services
          </h1>
          <p className="text-lg md:text-xl font-light">
            Is your website delivering the traffic, engagement, and conversions
            you expect? Discover hidden opportunities with our comprehensive SEO
            Audit Services.
          </p>
        </div>

        {/* Why Choose Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Choose an SEO Audit?
          </h2>
          <p className="text-lg md:text-xl text-center font-light mb-8">
            An SEO audit is more than just a health check for your website—it’s
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
                  "bg-white text-black rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-2",
                  index === 4 ? "md:col-start-2" : "",
                  index === 3 ? "lg:col-start-2" : "",
                )}
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Benefits of Our SEO Audit
          </h2>
          <ul className="list-disc list-inside text-lg font-light space-y-4 max-w-3xl mx-auto">
            <li>Higher search engine rankings.</li>
            <li>Improved website speed and performance.</li>
            <li>Enhanced user experience and engagement.</li>
            <li>Increased organic traffic and conversion rates.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Optimize Your Website Today!
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Don’t let hidden SEO issues hold your business back. Contact us
            today for a tailored SEO Audit and step-by-step plan to achieve your
            goals!
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
