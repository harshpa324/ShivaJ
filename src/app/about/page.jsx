"use client";

export default function Unauthorized() {
  return (
    <div>
    <div className="container mx-auto pt-20 mt-8 p-8 bg-white shadow-lg">
  <h1 className="text-3xl font-bold mb-6">About Shiva Jewellers</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
    {/* Left Column - Text */}
    <div>
      <p className="text-gray-700 leading-relaxed">
        Shiva Jewellers, established in 1995, has been a trusted name in the
        jewellery business for over two decades. From our humble beginnings, we
        have come a long way, building a legacy of craftsmanship, quality, and
        trust.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Our commitment to providing the finest gold and silver ornaments,
        crafted with precision and adorned with authenticity, has made us a
        preferred choice for discerning customers seeking timeless elegance.
      </p>
    </div>
    {/* Right Column - Image */}
    <div>
      <img
        src="images/store2.jpg"
        alt="Shiva Jewellers Store"
        className="w-full rounded-lg"
      />
    </div>
  </div>
  {/* Additional Information Section */}
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
    <p className="text-gray-700 leading-relaxed">
      Over the years, Shiva Jewellers has evolved, adapting to changing trends
      while staying true to our core values. We take pride in our extensive
      collection, showcasing designs that celebrate tradition and embrace
      modernity.
    </p>
    <p className="text-gray-700 leading-relaxed mt-4">
      With a team of skilled artisans and a commitment to ethical business
      practices, we continue to create masterpieces that resonate with the
      emotions and stories of our customers.
    </p>
  </div>
</div>
</div>
  );
}