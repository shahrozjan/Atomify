import PackageCard from "@/components/PackageCard";
import { SEOPackages } from "@/public/data";

export default function SEOServices() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">SEO Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SEOPackages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
