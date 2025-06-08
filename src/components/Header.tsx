
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              Rapido
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#safety" className="text-gray-700 hover:text-primary transition-colors">
              Safety
            </a>
            <a href="#support" className="text-gray-700 hover:text-primary transition-colors">
              Support
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Support
            </Button>
            <Button className="gradient-primary text-white flex items-center gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Services
              </a>
              <a href="#safety" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Safety
              </a>
              <a href="#support" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Support
              </a>
              <div className="pt-2 space-y-2">
                <Button variant="outline" className="w-full">
                  Call Support
                </Button>
                <Button className="w-full gradient-primary text-white">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
