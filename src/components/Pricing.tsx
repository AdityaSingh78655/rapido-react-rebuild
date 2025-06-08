
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const pricingData = [
    {
      distance: "0-5 km",
      bike: "₹25-45",
      auto: "₹35-65", 
      cab: "₹65-120",
      popular: false
    },
    {
      distance: "5-10 km",
      bike: "₹45-85",
      auto: "₹65-120",
      cab: "₹120-200",
      popular: true
    },
    {
      distance: "10-15 km",
      bike: "₹85-125",
      auto: "₹120-180",
      cab: "₹200-300",
      popular: false
    },
    {
      distance: "15+ km",
      bike: "₹125+",
      auto: "₹180+",
      cab: "₹300+",
      popular: false
    }
  ];

  const factors = [
    {
      icon: Clock,
      title: "Time of Day",
      description: "Peak hours may have surge pricing"
    },
    {
      icon: MapPin,
      title: "Distance",
      description: "Fare calculated based on route distance"
    },
    {
      icon: TrendingUp,
      title: "Demand",
      description: "High demand areas may cost more"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden charges. Know exactly what you'll pay before you book.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="gradient-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Distance</th>
                      <th className="px-6 py-4 text-center font-semibold">Bike Taxi</th>
                      <th className="px-6 py-4 text-center font-semibold">Auto Rickshaw</th>
                      <th className="px-6 py-4 text-center font-semibold">Cab</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <tr key={index} className={`border-b ${row.popular ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
                        <td className="px-6 py-4 font-medium flex items-center gap-2">
                          {row.distance}
                          {row.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                        </td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">{row.bike}</td>
                        <td className="px-6 py-4 text-center font-semibold text-yellow-600">{row.auto}</td>
                        <td className="px-6 py-4 text-center font-semibold text-blue-600">{row.cab}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Factors */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Factors Affecting Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {factors.map((factor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-green-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <factor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{factor.title}</h4>
                  <p className="text-gray-600">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 text-center">
            * Prices are estimates and may vary based on traffic, weather conditions, and demand. 
            Final fare will be calculated based on actual distance and time taken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
