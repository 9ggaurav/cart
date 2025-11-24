export function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">About Us</h1>

        <div className="space-y-6 text-gray-700">
          <p className="text-base leading-relaxed">
            Welcome to Exclusive, your premier destination for quality products
            and exceptional service. We've been dedicated to providing our
            customers with the best shopping experience since our founding.
          </p>

          <p className="text-base leading-relaxed">
            Our mission is simple: to offer a curated selection of products at
            competitive prices, backed by outstanding customer service. We
            believe in transparency, reliability, and putting our customers
            first.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Quality products from trusted brands</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Fast and reliable shipping</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Customer-focused support and service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-400">•</span>
                <span>Competitive and transparent pricing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
