import React from 'react';
import { 
  TrendingUp, Coins, Building, BarChart, 
  ShieldCheck, Globe 
} from 'lucide-react';

const InvestmentOptions = () => {
  const options = [
    {
      icon: TrendingUp,
      title: 'Direct Stocks',
      description: 'High-potential equity investments with direct ownership',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Coins,
      title: 'Mutual Funds',
      description: 'Diversified portfolios managed by financial experts',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Building,
      title: 'IPO Investments',
      description: 'Early access to promising company offerings',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart,
      title: 'ETF Funds',
      description: 'Low-cost funds tracking market indices',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Diversify internationally across markets',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Options',
      description: 'Capital protection with steady returns',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Investment Opportunities
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore a diverse range of investment avenues tailored to your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div className={`rounded-lg p-3 inline-flex ${option.bgColor} mb-4`}>
                <option.icon className={`h-8 w-8 ${option.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {option.description}
              </p>
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group-hover:underline"
                >
                  Learn more
                  <svg 
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm">
            View all investment options
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOptions;