import React from 'react';
import { ShieldCheck, AlertTriangle, UserCheck } from 'lucide-react';

const Safety = () => {
  const safetyMeasures = [
    {
      icon: ShieldCheck,
      title: "Verified Drivers",
      description: "Every driver undergoes a strict background check and regular verification."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Support",
      description: "24/7 emergency helpline and SOS button inside the app for your safety."
    },
    {
      icon: UserCheck,
      title: "Live Tracking",
      description: "Share your live ride location with friends or family anytime."
    }
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">
          Your <span className="text-gradient">Safety</span> is Our Priority
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          At Biro Cabs, we go the extra mile to ensure a secure and comfortable journey. 
          From driver background checks to real-time tracking and emergency features, 
          we prioritize your safety at every step of your ride.
        </p>

        {/* Safety Measures */}
        <div className="grid md:grid-cols-3 gap-10">
          {safetyMeasures.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Safety;
