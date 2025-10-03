import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star size={16} fill="currentColor" />
              <span>Trusted by 10,000+ customers</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Step Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                Premium Style
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Discover authentic footwear from the world's leading brands. From athletic performance to casual elegance, find your perfect pair at Sole Haven.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Collection
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200"
              >
                Visit Our Store
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Shield size={20} className="text-emerald-600" />
                  <span>100% Authentic</span>
                </div>
                <p className="text-sm text-slate-600">Guaranteed genuine products</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Star size={20} className="text-emerald-600" />
                  <span>Top Brands</span>
                </div>
                <p className="text-sm text-slate-600">Premium selections</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Clock size={20} className="text-emerald-600" />
                  <span>15+ Years</span>
                </div>
                <p className="text-sm text-slate-600">Industry experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Premium sneakers collection"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 text-emerald-700 p-3 rounded-lg">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">2000+</p>
                  <p className="text-sm text-slate-600">Shoes in Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShoppingBag({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
