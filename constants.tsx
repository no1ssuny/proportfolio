
import React from 'react';
import { CareerItem, CurriculumItem, SlideItem } from './types.ts';

export const HERO_SLIDES: SlideItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    title: 'AI 교육 설계 및 운영',
    description: '최신 생성형 AI 기술을 활용한 교육 커리큘럼을 제안합니다.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    title: '현장 중심 교사 연수',
    description: '전국 교원 대상 디지털 리터러시 및 SW 교육 전문성을 강화합니다.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    title: '프로젝트 기반 학습(PBL)',
    description: '이론을 넘어 실질적인 결과물을 도출하는 프로젝트를 리딩합니다.'
  }
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: 'c1',
    year: '2024',
    period: '2024.01 - 현재',
    role: 'Senior AI Educator',
    company: 'TechEdu Lab',
    description: '생성형 AI 기반 교육 솔루션 설계 및 기업 맞춤형 워크숍 운영 총괄.',
    keywords: ['GenAI', 'Prompt Engineering', 'Corporate Training']
  },
  {
    id: 'c2',
    year: '2022',
    period: '2022.03 - 2023.12',
    role: 'SW Education Specialist',
    company: 'Global Software Academy',
    description: '초/중등 SW 융합 교육 과정 개발 및 디지털 새싹 캠프 리딩.',
    keywords: ['PBL', 'Scratch', 'Python', 'Digital Literacy']
  },
  {
    id: 'c3',
    year: '2020',
    period: '2020.06 - 2022.02',
    role: 'EdTech Consultant',
    company: 'Future School Partners',
    description: '학교 현장 스마트 기기 도입 및 교수 설계 컨설팅 지원.',
    keywords: ['Smart Classroom', 'UX Design', 'Teacher Support']
  }
];

export const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'curr1',
    title: '생성형 AI로 시작하는 스마트 업무 자동화',
    target: '일반 성인 및 직장인',
    goal: 'ChatGPT와 Claude를 활용해 반복 업무의 80%를 자동화합니다.',
    category: 'AI',
    targetType: 'Adult',
    modules: [
      '생성형 AI의 이해와 프롬프트 디자인 기초',
      'AI를 활용한 문서 초안 및 보고서 자동 생성',
      '이미지 생성 및 영상 편집 AI 도구 마스터',
      '나만의 AI 에이전트 구축 실습'
    ],
    outcomes: ['업무 보고서 템플릿', 'AI 생성 콘텐츠 포트폴리오']
  },
  {
    id: 'curr2',
    title: '교원을 위한 디지털 리터러시 & AI 융합 수업',
    target: '전국 초·중·고 교사',
    goal: '교실에서 바로 활용 가능한 AI 보조 도구 사용법과 수업 사례 공유.',
    category: 'AI',
    targetType: 'Teacher',
    modules: [
      '교육 현장의 AI 트렌드 및 윤리 교육',
      '교과별 AI 보조 도구 활용 수업 설계',
      '에듀테크를 활용한 맞춤형 학습 피드백 시스템',
      '사례 기반 AI 융합 수업 기획안 작성'
    ],
    outcomes: ['교과 연계 AI 수업 지도안', '수업용 워크시트 꾸러미']
  },
  {
    id: 'curr3',
    title: '데이터로 읽는 파이썬 기초 프로젝트',
    target: 'SW 입문 희망 대학생 및 취준생',
    goal: '데이터 분석의 기초부터 시각화까지, 실제 공공 데이터를 분석해봅니다.',
    category: 'Coding',
    targetType: 'Corporate',
    modules: [
      '파이썬 기초 문법 및 환경 설정',
      'Pandas/Matplotlib를 활용한 데이터 핸들링',
      '서울시 교통 데이터 실전 분석 프로젝트',
      '결과 공유를 위한 스트림릿 웹 대시보드 제작'
    ],
    outcomes: ['데이터 분석 리포트', '개인용 데이터 대시보드']
  }
];

export const Icons = {
  ChevronLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
};
