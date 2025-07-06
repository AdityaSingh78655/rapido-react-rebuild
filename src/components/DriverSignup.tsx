
// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { TrendingUp, Clock, Shield, DollarSign, Phone, User, Car, FileText } from 'lucide-react';

// const DriverSignup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     vehicleType: '',
//     vehicleNumber: ''
//   });

//   const benefits = [
//     {
//       icon: DollarSign,
//       title: "Earn ₹25,000+",
//       description: "Monthly earning potential"
//     },
//     {
//       icon: Clock,
//       title: "Flexible Hours",
//       description: "Work on your own schedule"
//     },
//     {
//       icon: Shield,
//       title: "Insurance Coverage",
//       description: "Comprehensive protection"
//     },
//     {
//       icon: TrendingUp,
//       title: "Growth Opportunities",
//       description: "Performance-based incentives"
//     }
//   ];

//   const requirements = [
//     "Valid driving license",
//     "Vehicle registration documents",
//     "Aadhar card verification",
//     "Police verification clearance",
//     "Vehicle insurance",
//     "PUC certificate"
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section className="py-20 gradient-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             <div>
//               <Badge className="bg-primary text-white mb-4">Driver Partner Program</Badge>
//               <h2 className="text-4xl font-bold mb-4">
//                 Drive with <span className="text-gradient">Biro Cabs</span>
//               </h2>
//               <p className="text-xl text-gray-600">
//                 Join thousands of driver partners and start earning today. 
//                 Be your own boss and grow your income with flexible working hours.
//               </p>
//             </div>

//             {/* Benefits */}
//             <div className="grid grid-cols-2 gap-4">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
//                   <benefit.icon className="h-8 w-8 text-primary mb-2" />
//                   <h3 className="font-semibold mb-1">{benefit.title}</h3>
//                   <p className="text-sm text-gray-600">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Requirements */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                 <FileText className="h-5 w-5 text-primary" />
//                 Requirements
//               </h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {requirements.map((req, index) => (
//                   <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
//                     <div className="w-2 h-2 bg-primary rounded-full"></div>
//                     {req}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Signup Form */}
//           <Card className="bg-white shadow-xl">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold mb-6">Start Your Journey</h3>
//               <form className="space-y-4">
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <Input
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="pl-10 h-12"
//                   />
//                 </div>
                
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <Input
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="pl-10 h-12"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="relative">
//                     <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <select
//                       name="vehicleType"
//                       value={formData.vehicleType}
//                       onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
//                       className="w-full pl-10 h-12 border border-input rounded-md px-3 py-2 text-sm bg-background"
//                     >
//                       <option value="">Vehicle Type</option>
//                       <option value="bike">Bike</option>
//                       <option value="auto">Auto Rickshaw</option>
//                       <option value="cab">Cab</option>
//                     </select>
//                   </div>
                  
//                   <Input
//                     name="vehicleNumber"
//                     placeholder="Vehicle Number"
//                     value={formData.vehicleNumber}
//                     onChange={handleInputChange}
//                     className="h-12"
//                   />
//                 </div>

//                 <Button className="w-full h-12 gradient-primary text-white text-lg font-semibold">
//                   Apply as Driver Partner
//                 </Button>

//                 <p className="text-xs text-gray-500 text-center">
//                   By signing up, you agree to our Terms of Service and Privacy Policy
//                 </p>
//               </form>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="text-center">
//                   <p className="text-sm text-gray-600 mb-2">Quick Onboarding Process</p>
//                   <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
//                     <span>Application</span>
//                     <div className="w-4 h-0.5 bg-primary"></div>
//                     <span>Verification</span>
//                     <div className="w-4 h-0.5 bg-primary"></div>
//                     <span>Training</span>
//                     <div className="w-4 h-0.5 bg-primary"></div>
//                     <span>Start Earning</span>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DriverSignup;
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Shield, DollarSign, Phone, User, Car, FileText } from 'lucide-react';

const DriverSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: '',
    vehicleNumber: ''
  });

  const [loading, setLoading] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn ₹25,000+",
      description: "Monthly earning potential"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work on your own schedule"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive protection"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Performance-based incentives"
    }
  ];

  const requirements = [
    "Valid driving license",
    "Vehicle registration documents",
    "Aadhar card verification",
    "Police verification clearance",
    "Vehicle insurance",
    "PUC certificate"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData,'~~~~~~formData~~~~~');
    

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxnyY6Q2VpWLhZn7vsNTiWTna0VLSOzfNHkpZlLVBCnXv3GCtn5UCtlixZCgGROKQ0/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        // headers: {
        //   "Content-Type": "application/json"
        // }
      });

      const result = await response.text();

      console.log(result,'~~~result~~~~');
      
      if (result === "Success") {
        alert("Application submitted successfully!");
        setFormData({
          name: '',
          phone: '',
          vehicleType: '',
          vehicleNumber: ''
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting application.");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary text-white mb-4">Driver Partner Program</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Drive with <span className="text-gradient">Biro Cabs</span>
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of driver partners and start earning today. 
                Be your own boss and grow your income with flexible working hours.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                  <benefit.icon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Requirements
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Signup Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Start Your Journey</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 h-12"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 h-12"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full pl-10 h-12 border border-input rounded-md px-3 py-2 text-sm bg-background"
                      required
                    >
                      <option value="">Vehicle Type</option>
                      <option value="bike">Bike</option>
                      <option value="auto">Auto Rickshaw</option>
                      <option value="cab">Cab</option>
                    </select>
                  </div>
                  
                  <Input
                    name="vehicleNumber"
                    placeholder="Vehicle Number"
                    value={formData.vehicleNumber}
                    onChange={handleInputChange}
                    className="h-12"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 gradient-primary text-white text-lg font-semibold" disabled={loading}>
                  {loading ? "Submitting..." : "Apply as Driver Partner"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Quick Onboarding Process</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span>Application</span>
                    <div className="w-4 h-0.5 bg-primary"></div>
                    <span>Verification</span>
                    <div className="w-4 h-0.5 bg-primary"></div>
                    <span>Training</span>
                    <div className="w-4 h-0.5 bg-primary"></div>
                    <span>Start Earning</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DriverSignup;
