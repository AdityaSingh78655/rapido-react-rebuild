
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Fast</span>, Safe & 
                <br />
                <span className="text-gradient">Affordable</span> Rides
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Book a bike taxi, auto, or cab in seconds. Get anywhere in the city 
                quickly and safely with our trusted partners.
              </p>
            </div>

            {/* Booking Form */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Book Your Ride</h3>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="relative">
                  <Navigation className="absolute left-3 top-3 h-5 w-5 text-accent" />
                  <Input
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button className="w-full h-12 gradient-primary text-white text-lg font-semibold">
                  Book Now
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2M+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Daily Rides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration/Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Ride booking app"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">2 min arrival</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹45</div>
                <div className="text-sm text-gray-600">Estimated fare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
