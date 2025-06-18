
import React from 'react';
import { MapPin, Search, Car, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      step: "01",
      title: "Set Your Location",
      description: "Enter your pickup and drop location"
    },
    {
      icon: Search,
      step: "02", 
      title: "Choose Vehicle",
      description: "Select from bike, auto, or cab options"
    },
    {
      icon: Car,
      step: "03",
      title: "Get Matched",
      description: "We'll find the nearest driver for you"
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Enjoy Your Ride",
      description: "Track your ride and pay seamlessly"
    }
  ];

  return (
    <section className="py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How <span className="text-gradient">Biro Cabs</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting around the city has never been this easy
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 transform translate-x-8 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}
              
              {/* Step Circle */}
              <div className="relative z-10 bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-primary/20">
                <step.icon className="h-10 w-10 text-primary" />
                <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6">
              Download the Biro cabs app and experience the future of urban mobility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='https://apps.apple.com/in/app/biro-captain/id1661752241'>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="h-12"
              />
              </a>
                <a href='https://play.google.com/store/apps/details?id=com.birocabs&hl=en_IN'>
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12 "
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
