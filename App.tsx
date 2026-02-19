
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Curriculum from './pages/Curriculum.tsx';
import AIChatAssistant from './components/AIChatAssistant.tsx';

function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

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

        {/* Floating Action Button - Opens AI Chat */}
        <button 
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-8 right-8 z-40 bg-gradient-primary p-4 rounded-2xl shadow-2xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-white font-bold whitespace-nowrap">
            AI 교육 컨설턴트
          </span>
        </button>

        <AIChatAssistant isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
