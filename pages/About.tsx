
import React from 'react';
import GlassCard from '../components/GlassCard.tsx';
import { CAREER_HISTORY } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <section className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">Journey of Growth</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          변화하는 기술 환경에 발맞추어 끊임없이 학습하고, 그 가치를 현장에 전달해왔습니다. 
          저의 주요 발자취를 소개합니다.
        </p>
      </section>

      {/* Timeline Section */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent">
        {CAREER_HISTORY.map((item, index) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-slate-900 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-125 transition-transform z-10">
              <span className="text-xs font-bold">{index + 1}</span>
            </div>
            {/* Card Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
              <GlassCard className="!p-0 overflow-hidden">
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">{item.period}</span>
                    <span className="bg-white/5 px-2 py-1 rounded text-[10px] text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-purple-400 text-sm font-medium">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.keywords.map(kw => (
                      <span key={kw} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>

      {/* Skills & Capabilities */}
      <section className="pt-10">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">⚡</span>
          Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="space-y-4">
            <h4 className="font-bold text-lg text-white">기술 전문성</h4>
            <div className="space-y-4">
              {[
                { name: 'Gen AI & Prompt Design', level: '95%' },
                { name: 'Python for Data Analysis', level: '85%' },
                { name: 'No-Code / Low-Code Tools', level: '90%' },
              ].map(skill => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="space-y-4">
            <h4 className="font-bold text-lg text-white">교육/기획 역량</h4>
            <ul className="space-y-3">
              {[
                '교수 설계 (ADDIE, SAM 모델 적용)',
                '에듀테크 활용 하이브리드 수업 설계',
                'PBL 기반 커리큘럼 아키텍처',
                '청중 맞춤형 기술 스토리텔링'
              ].map(cap => (
                <li key={cap} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  {cap}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="pt-10 space-y-8">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">📜</span>
          Certifications & Activities
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            '정보처리기사', '구글 공인 교육자 Level 1&2', 'SW 코딩 강사 자격', 
            'AI 데이터 분석사', '전국 교사 연수 강단 100회+', '에듀테크 포럼 우수 패널'
          ].map((cert) => (
            <div key={cert} className="px-5 py-3 glass rounded-2xl border border-white/10 text-gray-300 font-medium hover:border-blue-500/50 transition-colors">
              {cert}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
