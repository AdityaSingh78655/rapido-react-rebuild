import React from 'react';
import { Mail, Phone } from 'lucide-react';
import BackButton from './BackButton';

const HelpCenter = () => {
  return (
    <section id="help-center" className="py-10 bg-white">
      <BackButton />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4">
          Help <span className="text-gradient">Center</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-10">
          We’re here to assist you with any questions or concerns. Whether it's about bookings, lost items, driver issues,
          or app features — our support team is just a message away. Please reach out using the contact details below.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-6 text-lg font-medium">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-xl">
              Birocabsfaridabad@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-xl">
              +91 9999299625
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
