import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Stocks', href: '/stocks' },
    { label: 'Mutual Funds', href: '/mutual-funds' },
    { label: 'US Stocks', href: '/us-stocks' },
    { label: 'Gold', href: '/gold' },
    { label: 'Learn', href: '/learn' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-6xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center cursor-pointer select-none"
        >
          <span className="text-2xl font-bold text-green-600">FinWise</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 text-sm font-semibold"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-semibold"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-green-600 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white md:hidden z-40 pt-20 animate-fade-in">
            <div className="container mx-auto px-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="text-gray-800 text-xl hover:text-green-600 transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="flex flex-col space-y-4 pt-6">
                  <button 
                    className="w-full px-4 py-3 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 text-base font-semibold"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                  <button 
                    className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-base font-semibold"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-700 hover:text-green-600 transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <X size={32} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;