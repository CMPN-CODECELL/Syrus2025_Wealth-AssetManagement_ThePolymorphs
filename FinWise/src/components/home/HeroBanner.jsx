import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-4 mb-4">
              <span className="text-sm font-medium text-gray-600">
                Revolutionize Your Investment Strategy
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Smart Investing, 
              <br />
              <span className="text-black/70">Simplified Experience</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Discover a modern approach to investing with our cutting-edge platform. Intelligent insights, zero complexity.
            </p>
            
            <div className="flex space-x-4 pt-6">
              <button className="group flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Start Investing
                <ArrowUpRight 
                  className="ml-2 group-hover:rotate-45 transition-transform" 
                  size={20} 
                />
              </button>
              
              <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="pt-10 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Total Users', value: '2M+' },
                  { label: 'Assets Under Management', value: '₹50,000 Cr' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 p-4 rounded-md">
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex justify-center relative">
            <div className="w-full max-w-md aspect-square relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl -rotate-6"></div>
              <div className="absolute -inset-2 bg-gray-200 rounded-2xl -rotate-3"></div>
              <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqh2ABPhbZ795mrKDD853dYnFH_U1DcUykTA&s" 
  alt="Investment Illustration" 
  className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-full"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;