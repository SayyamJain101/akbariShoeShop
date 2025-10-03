import { ShoppingBag, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>07947430526</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin size={14} />
              <span>Near Kevelram Petrol Pump Chowraha, Bombay Bazar, Khandwa HO-450001</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm">
            Open Mon-Sat: 9AM - 9PM
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-slate-900" size={32} strokeWidth={2} />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Akbari Shoe Shop</h1>
              <p className="text-xs text-slate-600">Premium Footwear Collection</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 mr-10">
            <a href="#home" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Home
            </a>
            <a href="#brands" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Brands
            </a>
            <a href="#products" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Collection
            </a>
            <a href="#about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Contact
            </a>
          </div>

         
        </div>
      </nav>
    </header>
  );
}
