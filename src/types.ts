export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
  glowingColor: string; // Tailwind glow or hex
  level: number; // Percentage
  iconName: string; // Lucide icon mapping
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageTheme: 'blue' | 'purple' | 'emerald' | 'orange';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
}
