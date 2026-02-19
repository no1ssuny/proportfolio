
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold gradient-text">ProPortfoliX</h2>
            <p className="text-gray-500 text-sm max-w-sm">
              끊임없이 변화하는 기술 세상에서, 교육으로 새로운 가능성을 엽니다. 
              최고의 디지털 리터러시 전문가와 함께 성장하세요.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Sitemap</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Curriculum</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Contact</h3>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>📧 contact@proportfolix.edu</li>
              <li>📍 Seoul, South Korea</li>
              <li>💬 Kakao: digital_master_jimin</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2024 ProPortfoliX. All rights reserved. Designed with Passion for Learning.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
