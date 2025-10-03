import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Brands />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
