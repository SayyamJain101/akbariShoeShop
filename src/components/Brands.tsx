import { brands } from '../data/mockData';

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted Brands
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with the world's most respected footwear brands to bring you authentic, high-quality shoes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-slate-50 hover:bg-white border-2 border-slate-100 hover:border-slate-900 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <img
                src={brand.logo_url}
                alt={brand.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/60 transition-colors flex items-center justify-center">
                <span className="text-lg font-bold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Official Authorized Retailer</h3>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto">
            Every product in our store is sourced directly from authorized distributors, ensuring you receive genuine merchandise with full manufacturer warranties and support.
          </p>
        </div>
      </div>
    </section>
  );
}
