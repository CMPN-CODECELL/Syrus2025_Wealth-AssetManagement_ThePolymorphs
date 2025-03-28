import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Products: ['Stocks', 'Mutual Funds', 'US Stocks', 'IPO', 'ETFs'],
    Company: ['About', 'Careers', 'Press', 'Contact'],
    Learn: ['Blog', 'Help Center', 'Guides', 'Research'],
    Legal: ['Terms', 'Privacy', 'Disclosure']
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Social */}
          <div className="md:col-span-2">
            <img 
              src="/logo.svg" 
              alt="Groww Logo" 
              className="h-10 mb-6"
            />
            <p className="text-gray-600 mb-4">
              India's most trusted investment platform
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-gray-800">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t text-center text-gray-500">
          © {new Date().getFullYear()} Groww. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;