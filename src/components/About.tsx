import { storeInfo } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <Heart size={16} />
              <span>About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Your Trusted Footwear Destination
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {storeInfo.about}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Award className="mx-auto mb-3 text-emerald-600" size={32} />
                <p className="text-2xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-3 text-emerald-600" size={32} />
                <p className="text-2xl font-bold text-slate-900">10K+</p>
                <p className="text-sm text-slate-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-3 text-emerald-600" size={32} />
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-600">Authentic</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Store interior"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shoe collection"
              className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Premium shoes"
              className="rounded-xl shadow-lg w-full h-64 object-cover -mt-8"
            />
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Athletic footwear"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        <div id="contact" className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Our Store
            </h3>
            <p className="text-slate-300 text-lg">
              Experience our collection in person and get expert fitting assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <MapPin className="mb-4 text-emerald-400" size={32} />
              <h4 className="font-semibold text-lg mb-2">Location</h4>
              <p className="text-slate-300">{storeInfo.address}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Phone className="mb-4 text-emerald-400" size={32} />
              <h4 className="font-semibold text-lg mb-2">Phone</h4>
              <p className="text-slate-300">{storeInfo.phone}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Mail className="mb-4 text-emerald-400" size={32} />
              <h4 className="font-semibold text-lg mb-2">Email</h4>
              <p className="text-slate-300">{storeInfo.email}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Clock className="mb-4 text-emerald-400" size={32} />
              <h4 className="font-semibold text-lg mb-2">Hours</h4>
              <div className="text-slate-300 space-y-1">
                {Object.entries(storeInfo.hours).map(([day, hours]) => (
                  <p key={day} className="text-sm">
                    <span className="font-medium">{day}:</span> {hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={`tel:${storeInfo.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg"
            >
              <Phone size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
