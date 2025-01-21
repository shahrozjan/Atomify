export default function LocalSEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Local SEO Services: Boost Your Business Visibility in Your Community
          </h1>
          <p className="text-lg md:text-xl font-light">
            In today’s competitive digital landscape, Local SEO or GMB is
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
          <p className="text-lg md:text-xl font-light text-center">
            Over 46% of all Google searches are for local businesses. Whether
            you're running a café, a retail shop, or offering services,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Google My Business (GMB) Optimization
              </h3>
              <p className="text-sm">
                We optimize your GMB profile with accurate business
                information, engaging descriptions, and review management to
                enhance your online reputation.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Localized Keyword Research
              </h3>
              <p className="text-sm">
                We identify and target high-intent keywords relevant to your
                business and location to resonate with local search queries.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                On-Page SEO for Local Pages
              </h3>
              <p className="text-sm">
                Metadata optimization, location-specific landing pages, and
                schema markup to boost your local relevance.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                NAP Consistency Across Platforms
              </h3>
              <p className="text-sm">
                Consistent Name, Address, and Phone Number information across
                directories builds trust with search engines and customers.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Hyperlocal Content Creation
              </h3>
              <p className="text-sm">
                Blogs and resources focused on your local area to establish
                authority and drive organic traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Benefits of Choosing Our Local SEO Services
          </h2>
          <ul className="list-disc list-inside text-lg font-light space-y-4 max-w-3xl mx-auto">
            <li>Increased Foot Traffic: Capture the attention of nearby customers ready to buy.</li>
            <li>Higher Local Rankings: Stand out in map packs and organic local search results.</li>
            <li>
              Enhanced Reputation Management: Build trust with positive reviews
              and a strong local presence.
            </li>
            <li>
              Targeted Marketing: Attract customers specifically searching for
              services in your area.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Take the First Step in Dominating Your Local Market
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Contact us today to enhance your business’s visibility and connect
            with your local audience!
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}
