import clsx from "clsx";
import Link from "next/link";

export default function LocalSEOServices() {
  const cardData = [
    {
      title: "Google My Business (GMB) Optimization",
      description:
        "We optimize your GMB profile with accurate business information, engaging descriptions, and review management to enhance your online reputation.",
    },
    {
      title: "Localized Keyword Research",
      description:
        "We identify and target high-intent keywords relevant to your business and location to resonate with local search queries",
    },
    {
      title: "On-Page SEO for Local Pages",
      description: "Metadata optimization, location-specific landing pages, and schema markup to boost your local relevance.",
    },
    {
      title: "NAP Consistency Across Platforms",
      description:
        "Consistent Name, Address, and Phone Number information across directories builds trust with search engines and customers.",
    },
    {
      title: "Hyperlocal Content Creation",
      description:
        "Blogs and resources focused on your local area to establish authority and drive organic traffic.",
    },
  ];

  const benefitsData = [
    {
      title: "Increased Foot Traffic",
      description:
        "Capture the attention of nearby customers ready to buy.",
    },
    {
      title: "Higher Local Rankings",
      description:
        "Stand out in map packs and organic local search results.",
    },
    {
      title: "Enhanced Reputation Management",
      description:
        "Build trust with positive reviews and a strong local presence.",
    },
    {
      title: "Targeted Marketing",
      description:
        "Attract customers specifically searching for services in your area.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Local SEO Services
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Boost Your Business Visibility in Your Community
          </h2>
          <p className="text-lg md:text-xl font-semibold">
            In today&rsquo;s competitive digital landscape, Local SEO or GMB is
            essential for businesses aiming to attract nearby customers. By
            optimizing your online presence, we help ensure your business ranks
            higher in local search results, driving foot traffic and increasing
            sales.
          </p>
        </div>

        {/* Why Local SEO Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Local SEO Matters
          </h2>
          <p className="text-lg md:text-xl font-semibold text-center">
            Over 46% of all Google searches are for local businesses. Whether
            you&rsquo;re running a café, a retail shop, or offering services,
            appearing in local search results is crucial. Local SEO ensures
            potential customers find your business when they search for services
            near them, giving you an edge over competitors.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Key Features of Our Local SEO Services
          </h2>
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

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
          Benefits of Choosing Our Local SEO Services
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
          <h2 className="text-3xl font-bold mb-4">
            Take the First Step in Dominating Your Local Market
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-8">
            Contact us today to enhance your business&apos;s visibility and connect
            with your local audience!
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
