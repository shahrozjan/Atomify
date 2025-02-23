import Link from "next/link";

export default function SEOServices() {
  const seoServices = [
    {
      title: "SEO Audit Services",
      path: "/seo-services/audit",
      description:
        "Comprehensive review of your website's SEO performance and actionable insights.",
    },
    {
      title: "Small Business SEO",
      path: "/seo-services/small-business",
      description:
        "Tailored strategies to improve online presence and drive traffic for small businesses.",
    },
    {
      title: "Local SEO",
      path: "/seo-services/local",
      description:
        "Optimize your website to dominate local search results and attract nearby customers.",
    },
    {
      title: "E-commerce SEO",
      path: "/seo-services/ecommerce",
      description:
        "Boost online sales by optimizing product pages, categories, and content.",
    },
    {
      title: "SEO Blog Writing",
      path: "/seo-services/blog-writing",
      description:
        "Engaging, keyword-rich blog content to drive organic traffic and build authority.",
    },
    {
      title: "National SEO",
      path: "/seo-services/national",
      description:
        "Expand your reach with strategies designed to rank on a national scale.",
    },
    {
      title: "Global SEO",
      path: "/seo-services/global",
      description:
        "Improve your website's visibility and rankings in international markets.",
    },
    {
      title: "WordPress SEO",
      path: "/seo-services/wordpress",
      description:
        "Custom SEO strategies optimized specifically for WordPress websites.",
    },
  ];

  const icons = [
    // 0: SEO Audit Services – Clipboard with check
    (
      <svg
        key="icon-0"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 7h10M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
      </svg>
    ),
    // 1: Small Business SEO – Briefcase
    (
      <svg
        key="icon-1"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 7h14M5 7a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"
        />
      </svg>
    ),
    // 2: Local SEO – Location Marker
    (
      <svg
        key="icon-2"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M12 2C9.243 2 7 4.243 7 7c0 3.866 5 9 5 9s5-5.134 5-9c0-2.757-2.243-5-5-5z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
    // 3: E-commerce SEO – Shopping Cart (Updated)
    (
      <svg
        key="icon-3"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1.5 9H3.5L5 11z"
        />
      </svg>
    ),
    // 4: SEO Blog Writing – Pencil (Edit)
    (
      <svg
        key="icon-4"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.414 2.586a2 2 0 010 2.828L8.414 14.414a1 1 0 01-.293.207l-4 2a1 1 0 01-1.316-1.316l2-4a1 1 0 01.207-.293L14.586 2.586a2 2 0 012.828 0z" />
      </svg>
    ),
    // 5: National SEO – Flag
    (
      <svg
        key="icon-5"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v18M5 3l14 6-14 6"
        />
      </svg>
    ),
    // 6: Global SEO – Globe
    (
      <svg
        key="icon-6"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2 12h20"
        />
      </svg>
    ),
    // 7: WordPress SEO – "W" in a Circle
    (
      <svg
        key="icon-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-8 w-8 text-teal-500"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="6" fill="none" />
        <text
          x="50%"
          y="66%"
          textAnchor="middle"
          fill="currentColor"
          fontSize="85"
          fontWeight="bold"
          dy=".3em"
          fontFamily="Times New Roman"
        >
          W
        </text>
      </svg>
    ),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white p-4">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {seoServices.map((service, index) => (
          <Link key={service.path} href={service.path}>
            <div className="flex justify-center">
              <div className="aspect-square w-full max-w-[250px] bg-white shadow-lg rounded-lg border border-slate-400 hover:border-teal-400 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-3">
                {/* Icon */}
                <div className="mb-2">{icons[index]}</div>
                <h3 className="text-xl text-black font-bold text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-s text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
