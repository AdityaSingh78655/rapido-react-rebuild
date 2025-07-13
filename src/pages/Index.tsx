
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import DriverSignup from '../components/DriverSignup';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <DriverSignup />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
