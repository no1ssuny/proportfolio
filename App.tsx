
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-[#030712]">
        {/* Abstract Background Elements */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full -z-10"></div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Button (Sticky CTA) */}
        <button className="fixed bottom-8 right-8 z-40 bg-gradient-primary p-4 rounded-2xl shadow-2xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-white font-bold whitespace-nowrap">
            강의 문의하기
          </span>
        </button>
      </div>
    </Router>
  );
}

export default App;
