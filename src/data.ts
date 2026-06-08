import { Skill, Experience, Project, Education } from './types';

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'Frontend', glowingColor: '#e34f26', level: 95, iconName: 'FileCode' },
  { name: 'CSS', category: 'Frontend', glowingColor: '#1572b6', level: 92, iconName: 'Layers' },
  { name: 'JavaScript', category: 'Frontend', glowingColor: '#f7df1e', level: 90, iconName: 'Cpu' },
  { name: 'Bootstrap', category: 'Frontend', glowingColor: '#7952b3', level: 88, iconName: 'Grid' },
  { name: 'React.js', category: 'Frontend', glowingColor: '#61dafb', level: 91, iconName: 'Atom' },

  // Backend
  { name: 'Node.js', category: 'Backend', glowingColor: '#339933', level: 87, iconName: 'Server' },
  { name: 'Express.js', category: 'Backend', glowingColor: '#828282', level: 85, iconName: 'Activity' },

  // Database
  { name: 'MongoDB', category: 'Database', glowingColor: '#47a248', level: 86, iconName: 'Database' },

  // Tools
  { name: 'Git', category: 'Tools', glowingColor: '#f05032', level: 89, iconName: 'GitBranch' },
  { name: 'GitHub', category: 'Tools', glowingColor: '#ffffff', level: 90, iconName: 'Github' },
  { name: 'VS Code', category: 'Tools', glowingColor: '#007acc', level: 93, iconName: 'Terminal' },
  { name: 'Thunder Client', category: 'Tools', glowingColor: '#7c3aed', level: 85, iconName: 'Zap' },

  // Other
  { name: 'REST APIs', category: 'Other', glowingColor: '#10b981', level: 88, iconName: 'Link2' },
  { name: 'Responsive Design', category: 'Other', glowingColor: '#ec4899', level: 94, iconName: 'Smartphone' },
  { name: 'Debugging', category: 'Other', glowingColor: '#ef4444', level: 85, iconName: 'Bug' },
  { name: 'UI/UX Basics', category: 'Other', glowingColor: '#3b82f6', level: 80, iconName: 'Palette' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'AVISH EDUCOM',
    role: 'Web Development Certification Course',
    duration: 'June 2025 – May 2026',
    achievements: [
      'Learned and mastered the MERN Stack development paradigm',
      'Developed end-to-end Full Stack Applications with secure user sessions',
      'Built efficient, lightweight REST APIs using Express.js and MongoDB Node SDK',
      'Created modern, responsive user interfaces centering fluid and intuitive user experiences',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Job Portal Website',
    description: 'Developed an immersive, fully featured job search and applicant tracking portal leveraging full-stack database integrations.',
    features: [
      'JWT-based secure client-server user authentication and session management',
      'Interactive job listings, custom categorization, and keyword search',
      'Application tracking dashboard for employers and applicants with live status changes',
      'Responsive, high-density dashboard layouts optimized for all interface screens',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    imageTheme: 'purple',
    githubUrl: 'https://github.com/sanjaysahu-fullstack',
  },
  {
    title: 'Responsive Portfolio Website',
    description: 'Designed and implemented an elegant personal portfolio utilizing clean styles, seamless transitions, and optimized loading speed.',
    features: [
      'Comprehensive CSS grid layouts for liquid fluidity across desktop, tablet, and mobile',
      'Smooth micro-interactions and transitions driving user engagement',
      'Interactive form verification system ensuring clean data delivery',
      'Optimized lightweight asset footprint ensuring instant initial load speeds',
    ],
    techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    imageTheme: 'blue',
    githubUrl: 'https://github.com/sanjaysahu-fullstack',
  },
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Diploma in Computer Science Engineering',
    institution: 'Government Polytechnic, Durg',
    duration: '2023 – Present',
    grade: 'Pursuing (CSE Core)',
  },
  {
    degree: 'Higher Secondary School Certification',
    institution: 'Gyan Vidya Higher Secondary School',
    duration: 'Graduated',
    grade: 'Score: 77.8%',
  },
  {
    degree: 'High School Certification',
    institution: 'Gyan Vidya Higher Secondary School',
    duration: 'Graduated',
    grade: 'Score: 97%',
  },
];
