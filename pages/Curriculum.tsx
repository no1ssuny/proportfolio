
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard.tsx';
import { CURRICULUM_DATA, Icons } from '../constants.tsx';

const Curriculum: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Teacher' | 'Adult' | 'Corporate'>('All');

  const filteredData = filter === 'All' 
    ? CURRICULUM_DATA 
    : CURRICULUM_DATA.filter(item => item.targetType === filter || (filter === 'Corporate' && item.targetType === 'Corporate'));

  const categories = [
    { label: '전체', value: 'All' },
    { label: '교원 연수', value: 'Teacher' },
    { label: '성인 교육', value: 'Adult' },
    { label: '기업/취준', value: 'Corporate' },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Educational Programs</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          이론부터 실무까지, 실제 성과를 만들어내는 구조화된 커리큘럼을 제공합니다. 
          각 과정은 기관 및 기업의 니즈에 맞춰 커스터마이징이 가능합니다.
        </p>
      </section>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value as any)}
            className={`px-6 py-2 rounded-full border transition-all ${
              filter === cat.value 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Curriculum Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((course) => (
          <GlassCard key={course.id} className="flex flex-col h-full !p-0 overflow-hidden group">
            <div className="h-2 w-full bg-gradient-primary"></div>
            <div className="p-6 flex-grow space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">{course.category} EDUCATION</span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">{course.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded font-bold text-gray-300 shrink-0">대상</span>
                  <p className="text-sm text-gray-400">{course.target}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs bg-white/10 px-2 py-1 rounded font-bold text-gray-300 shrink-0">목표</span>
                  <p className="text-sm text-gray-400">{course.goal}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase">핵심 커리큘럼</p>
                <ul className="space-y-2">
                  {course.modules.slice(0, 3).map((mod, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      {mod}
                    </li>
                  ))}
                  {course.modules.length > 3 && (
                    <li className="text-[10px] text-gray-600 pl-3">외 {course.modules.length - 3}개 모듈...</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10 flex justify-between items-center">
               <span className="text-xs text-gray-500">성과물: {course.outcomes[0]}</span>
               <button className="text-blue-400 hover:text-white flex items-center gap-1 text-sm font-bold transition-colors">
                 상세 보기 <Icons.ExternalLink />
               </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* CTA Section */}
      <section className="pt-20 text-center">
        <GlassCard className="p-10 border-dashed border-2 border-white/20 !bg-transparent">
          <h3 className="text-2xl font-bold mb-4">맞춤형 교육이 필요하신가요?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            위 커리큘럼 외에도 귀 기관의 인원수, 기술 수준, 목표에 최적화된 맞춤형 교육 과정을 제안해 드립니다.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-primary px-10 py-4 rounded-xl font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
              제안서 요청하기
            </button>
            <button className="glass px-10 py-4 rounded-xl font-bold text-gray-300 hover:bg-white/10 transition-colors">
              오픈 카톡 문의
            </button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Curriculum;
