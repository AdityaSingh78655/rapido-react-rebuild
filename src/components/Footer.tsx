
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import appStoreBadge from '../../src/assets/ic_google_play.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/AboutUs" },
      // { name: "Careers", href: "#" },
      // { name: "Press", href: "#" },
      // { name: "Blog", href: "#" }
    ],
    services: [
      { name: "Bike Taxi",  },
      { name: "Auto Rickshaw",  },
      { name: "Cab Service",  },
      { name: "Auto Share",  }
    ],
    support: [
      { name: "Help Center", href: "/HelpCenter" },
      { name: "Services", href: "/Safety" },
      // { name: "Contact Us", href: "#" },
      { name: "Lost & Found", href: "/LostAndFound" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/PrivacyPolicy" },
      { name: "Terms of Service", href: "/TermsOfService" },
      { name: "Refund Policy", href: "/RefundPolicy" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100084774127059&mibextid=wwXIfr&rdid=9cdsLAgUugSJt9ZJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CBBPBydmU%2F%3Fmibextid%3DwwXIfr#", name: "Facebook" },
    { icon: Twitter, href: "https://x.com/cabsbiro?s=21", name: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/biro.cabs/?igsh=bHMxZXE0eDN2NTA2&utm_source=qr#", name: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/biro-cabs/", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">Biro Cabs</div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Making urban mobility simple, safe, and affordable for everyone. 
              Your trusted ride partner across the city.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9999299625</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span>Birocabsfaridabad@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download Apps Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Download the Biro Cabs App</h3>
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
                src={appStoreBadge}
                alt="Get it on Google Play"
                className="h-12"
              />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Biro Cabs. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
