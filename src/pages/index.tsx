import Hero from '../components/Hero';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Excel2Pdf from '@/components/Excel2pdf';
import Image2Pdf from '@/components/Image2pdf';
import Word2Pdf from '@/components/Word2Pdf';
import Pdf2Word from '@/components/Pdf2Word';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
    
      <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">OUR CONVERSION FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <Excel2Pdf />
          </div>
          <div className="border rounded-lg p-6">
            <Image2Pdf />
          </div>
        </div>
      </div>
    </div>
      
      
      <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
          <Word2Pdf/>
          </div>
          <div className="border rounded-lg p-6">
          <Pdf2Word/>
          </div>
        </div>
      </div>
    </div>
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}


