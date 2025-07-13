import React from 'react';
import { Search, ClipboardList, Box } from 'lucide-react';
import BackButton from './BackButton';

const LostAndFound = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Your Trip",
      description: "Easily find your recent rides through the app."
    },
    {
      icon: ClipboardList,
      title: "Report Lost Item",
      description: "To report a lost item, call 99992 99625 or email BiroCabsFaridabad@gmail.com."
    },
    {
      icon: Box,
      title: "Track & Recover",
      description: "We'll contact the driver and help reunite you with your belongings."
    }
  ];

  return (
    <section id="lost-and-found" className="py-10 bg-white">
      <BackButton />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">
          Lost & <span className="text-gradient">Found</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Left something behind on your ride? Don’t worry — Biro Cabs is here to help you get it back.
          Our dedicated Lost & Found system ensures a smooth and reliable process to recover your belongings.
          We care about your peace of mind even after your ride ends.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LostAndFound;
