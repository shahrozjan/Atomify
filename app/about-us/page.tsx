export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          Elevating Brands with SEO Excellence
        </h1>

        {/* Who We Are Card */}
        <section className="mb-8">
          <div className="bg-white/90 backdrop-blur-md text-black rounded-2xl shadow-2xl p-8 border-l-8 border-gray-500 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed font-semibold">
              Founded in November 2024, Atomify is a cutting-edge SEO marketing agency dedicated to helping businesses achieve digital dominance. We specialize in data-driven SEO services &amp; strategies that amplify your online visibility, drive organic traffic, and boost conversions. With a passion for innovation and a results-oriented approach, we ensure that your brand doesn&apos;t just rank—it thrives.
            </p>
          </div>
        </section>

        {/* Our Mission Card */}
        <section className="mb-8">
          <div className="bg-white/90 backdrop-blur-md text-black rounded-2xl shadow-2xl p-8 border-l-8 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg font-semibold leading-relaxed">
              At Atomify, we believe in powering growth through precision SEO. Our mission is to break barriers, optimize digital footprints, and craft strategies that transform search rankings into sustainable success. Whether you&apos;re a startup, an enterprise, or an eCommerce brand, we are here to accelerate your online presence across the globe.
            </p>
          </div>
        </section>

        {/* Let's Optimize Your Growth Card */}
        <section className="mb-8">
          <div className="bg-white/90 backdrop-blur-md text-black rounded-2xl shadow-2xl p-8 border-l-8 border-orange-500 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Optimize Your Growth</h2>
            <p className="text-lg font-semibold leading-relaxed">
              Your SEO journey begins here! Join forces with Atomify and let&apos;s turn search engines into your brand&apos;s growth engine.
            </p>
            <p className="text-lg font-semibold leading-relaxed mt-4">
              Your brand deserves the spotlight. Connect with us today!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
