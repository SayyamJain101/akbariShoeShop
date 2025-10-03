import { products } from '../data/mockData';
import { Tag, Sparkles } from 'lucide-react';

export default function Products() {
  const featuredProducts = products.filter(p => p.is_featured);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Premium Selection
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Handpicked shoes from our extensive collection, featuring the latest releases and timeless classics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag size={14} />
                  <span>In Stock</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                    {product.brand_id === '1' ? 'Nike' :
                     product.brand_id === '2' ? 'Adidas' :
                     product.brand_id === '3' ? 'Puma' :
                     product.brand_id === '4' ? 'New Balance' :
                     product.brand_id === '5' ? 'Converse' : 'Reebok'}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-500">Available in:</span>
                  {product.colors_available.slice(0, 3).map((color) => (
                    <span
                      key={color}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {color}
                    </span>
                  ))}
                  {product.colors_available.length > 3 && (
                    <span className="text-xs text-slate-500">+{product.colors_available.length - 3} more</span>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-500">Sizes:</span>
                  {product.sizes_available.slice(0, 4).map((size) => (
                    <span
                      key={size}
                      className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded text-sm font-medium text-slate-700"
                    >
                      {size}
                    </span>
                  ))}
                  {product.sizes_available.length > 4 && (
                    <span className="text-xs text-slate-500">+{product.sizes_available.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </p>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Discover more styles at our physical store</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-900"
          >
            Visit Store Location
          </a>
        </div>
      </div>
    </section>
  );
}
