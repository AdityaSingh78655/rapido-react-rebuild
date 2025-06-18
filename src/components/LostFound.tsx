
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bike, Car, Truck, Clock, Shield, DollarSign } from 'lucide-react';

const LostFound = () => {
  const services = [
    {
      icon: Bike,
      title: "Bike Taxi",
      description: "Quick and affordable rides through traffic",
      price: "₹25",
      time: "2-5 min",
      color: "bg-green-500"
    },
    {
      icon: Car,
      title: "Auto Rickshaw",
      description: "Comfortable rides for short distances",
      price: "₹35",
      time: "3-7 min",
      color: "bg-yellow-500"
    },
    {
      icon: Truck,
      title: "Cab",
      description: "Premium rides with AC comfort",
      price: "₹65",
      time: "5-10 min",
      color: "bg-blue-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book rides in under 30 seconds"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Verified drivers and live tracking"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Transparent pricing with no hidden costs"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient">Ride</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            lost and fonrdkjdkdjkjdkjd
          </p>
        </div>

        {/* Service Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{service.time}</div>
                    <div className="text-sm text-gray-500">ETA</div>
                  </div>
                </div>
                <Button className="w-full gradient-primary text-white">
                  Book {service.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LostFound;
