
import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import GlassCard from '../components/GlassCard';
import { Icons } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <Icons.Sparkles />
            <span>Digital Learning Architect</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            기술과 교육을 잇는 <br />
            <span className="gradient-text">미래 인재 마스터</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            AI 리터러시, 소프트웨어 교육, 그리고 창의적 문제해결을 위한 
            최적의 교육 경험을 설계하고 전달합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-gradient-primary rounded-xl text-center font-bold text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              나의 소개 보기
            </Link>
            <Link 
              to="/curriculum" 
              className="px-8 py-4 glass rounded-xl text-center font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/10"
            >
              커리큘럼 탐색
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="glow -top-10 -right-10"></div>
          <ImageSlider />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <GlassCard className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
          <h3 className="text-xl font-bold">생성형 AI 전문가</h3>
          <p className="text-gray-400">프롬프트 엔지니어링 및 AI 실무 자동화 교육 전문 역량을 보유하고 있습니다.</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
            <span className="text-3xl">👨‍🏫</span>
          </div>
          <h3 className="text-xl font-bold">1,000+ 시간 강의</h3>
          <p className="text-gray-400">초등학생부터 교사, 기업 임원까지 다양한 연령대를 아우르는 교육 경험이 있습니다.</p>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold">실전 중심 PBL</h3>
          <p className="text-gray-400">단순 지식 전달이 아닌, 실제 결과물을 만들어내는 프로젝트 중심 수업을 지향합니다.</p>
        </GlassCard>
      </div>

      {/* Summary Profile Card */}
      <div className="relative">
        <div className="glow bottom-0 left-0 opacity-50"></div>
        <GlassCard hoverEffect={false} className="p-8 md:p-12 border-l-4 border-l-blue-500">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <img 
                src="https://picsum.photos/id/64/300/300" 
                alt="Profile" 
                className="w-48 h-48 rounded-3xl object-cover ring-4 ring-white/10"
              />
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h2 className="text-3xl font-bold">김지민 (Jimin Kim)</h2>
                  <p className="text-blue-400 font-medium">SW & AI 교육 기획자 / 시니어 강사</p>
                </div>
                <p className="text-gray-400 max-w-2xl">
                  "교육은 미래를 준비하는 가장 혁신적인 도구입니다." 
                  10년 이상의 IT 교육 경력을 바탕으로 복잡한 기술을 누구나 이해하기 쉬운 언어로 풀어냅니다. 
                  디지털 전환(DX) 시대의 필수 역량을 함께 쌓아갑니다.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {['교육공학 석사', '정보처리기사', '구글 공인 교육전문가', 'AI 분석사'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
           </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Home;
