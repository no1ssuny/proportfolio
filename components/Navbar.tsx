
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: '메인', path: '/' },
    { label: '나의 소개', path: '/about' },
    { label: '교육 커리큘럼', path: '/curriculum' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">ProPortfoliX</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="bg-gradient-primary hover:opacity-90 transition-opacity px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
            강의 문의
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
