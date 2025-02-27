import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ContentSection from './components/ContentSection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CryptoPriceTracker from './components/CryptoPriceTracker';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero />
      
      <Features />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <ContentSection />
            </div>
            <div className="lg:w-1/3">
              <CryptoPriceTracker />
            </div>
          </div>
        </div>
      </div>
      
      <Testimonials />
      
      <CallToAction />
      
      <Footer />
    </div>
  );
}

export default App;