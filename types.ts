
export interface CareerItem {
  id: string;
  year: string;
  period: string;
  role: string;
  company: string;
  description: string;
  keywords: string[];
}

export interface CurriculumItem {
  id: string;
  title: string;
  target: string;
  goal: string;
  category: 'AI' | 'Coding' | 'Business' | 'Automation';
  targetType: 'Elementary' | 'Middle' | 'Teacher' | 'Adult' | 'Corporate';
  modules: string[];
  outcomes: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export interface SlideItem {
  image: string;
  title: string;
  description: string;
}
