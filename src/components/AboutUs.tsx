import React from 'react';
import { ShieldCheck, DollarSign, ThumbsUp } from 'lucide-react';
import founder from '../assets/founder.jpg'

const AboutUs = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description: "No ride cancellations — count on us every time."
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "Lower pricing than our competitors, guaranteed."
    },
    {
      icon: ThumbsUp,
      title: "Customer First",
      description: "Hassle-free rides and seamless travel experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* Founder Info - Top Left */}
        <div className="flex items-center space-x-4 mb-12">
  <img src={founder} alt="Founder" className="w-40 h-40 rounded-full object-conatin" />
  <div className="flex flex-col justify-center">
    <div className="text-sm font-bold text-black-500 text-center">CEO</div>
    <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
      Naveen Dalal
    </div>
  </div>
</div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Biro Cabs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Biro Cabs is a dynamic transportation company offering a range of vehicles including cabs, autos, and bikes. 
            We are committed to providing affordable and reliable transportation services. 
            Our unique value proposition lies in offering lower rates compared to our competitors, 
            ensuring our customers enjoy cost-effective and hassle-free rides. 
            With Biro Cabs, you can count on no ride cancellations and a seamless travel experience, 
            making us the go-to choice for all your commuting needs.
          </p>
    <div className="mt-6 text-lg font-bold">
  {/* <div className="bg-gradient-to-r text-black bg-clip-text text-transparent text-2xl">
    CEO
  </div>
  <div className="bg-gradient-to-r text-gradient bg-clip-text text-transparent text-3xl">
    Naveen Dalal
  </div> */}
</div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

export default AboutUs;
