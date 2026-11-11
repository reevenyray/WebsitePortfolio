import {
  FiHome,
  FiUser,
  FiFolder,
  FiMail,
  FiLayers,
  FiBarChart2,
  FiCrosshair,
  FiMonitor,
} from 'react-icons/fi';

export const profile = {
  name: 'Reeven Yray',
  role: 'BSIT student · Web Development & Software Engineering',
  intro:
    'I build web systems end to end, from database design to the interface. My latest work is an emergency reporting system for my university campus.',
  availability: 'Open to job opportunities',
  // TODO: fill these in. Empty values are hidden automatically.
  email: '',
  github: '',
  linkedin: '',
  resumeUrl: '/Reeven_Yray_Resume.pdf',
  about: [
    'I am a BSIT student at Central Luzon State University (CLSU), specializing in System Development. I like taking a problem from a rough idea to a working system that real people can use.',
    'I care about the whole software lifecycle, not just the code. I document my systems, test them against edge cases, and design them around what users actually need.',
    'I also enjoy troubleshooting. Tracking down hardware and software problems has taught me to isolate issues quickly and explain fixes in plain language.',
  ],
  school: 'Central Luzon State University',
  schoolShort: 'CLSU',
  program: 'Bachelor of Science in Information Technology',
  track: 'System Development',
};

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'MySQL'] },
  { group: 'Mobile', items: ['Flutter'] },
  { group: 'Tools & Cloud', items: ['Git', 'GitHub', 'AWS'] },
];

export const navItems = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'about', label: 'About', icon: FiUser },
  { id: 'projects', label: 'Projects', icon: FiFolder },
  { id: 'contact', label: 'Contact', icon: FiMail },
];

export const focusAreas = [
  {
    id: 'system-dev',
    title: 'System Development',
    description:
      'Building robust web systems and managing databases, prioritizing technical competencies and modern developer workflows.',
    icon: FiLayers,
  },
  {
    id: 'tech-support',
    title: 'Tech Support & Help Desk',
    description:
      'Providing hands-on hardware and software troubleshooting, resolving technical issues efficiently, and supporting end-users with clear communication.',
    icon: FiMonitor,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Crafting clean interfaces using modern design tooling, with a strong focus on user empathy and usability.',
    icon: FiCrosshair,
  },
  {
    id: 'qa-analysis',
    title: 'QA & Systems Analysis',
    description:
      'Writing clear documentation, testing systematically, and tracing problems to their cause.',
    icon: FiBarChart2,
  },
];

// Add `link` (live demo) and/or `repo` (GitHub) to any project and
// ProjectCard shows the buttons automatically. Replace the tags with the
// exact tech stack of each project.
export const projects = [
  {
    id: 'safe-clsu',
    title: 'SafeCLSU',
    category: 'Web App',
    summary:
      'A centralized emergency response application designed for Central Luzon State University to streamline campus incident reporting and improve response times.',
    highlights: [
      'Enables real-time incident reporting across the university campus',
      'Supports direct photo uploads for immediate situational awareness',
      'Provides a centralized dashboard for security and medical responders',
    ],
    tags: ['Flutter', 'PHP', 'MySQL'],
    link: '',
    repo: '',
  },
  {
    id: 'techno-hub',
    title: 'TechnoHub',
    category: 'E-commerce',
    summary:
      'A specialized digital storefront tailored for PC builders and tech enthusiasts to efficiently source, compare, and purchase computer components.',
    highlights: [
      'Advanced hardware filtering by specific component specifications',
      'Streamlined digital cart and secure checkout architecture',
      'Clean, tech-focused interface designed for high-information density',
    ],
    tags: ['E-commerce', 'UI/UX', 'Full-stack'],
    link: '',
    repo: '',
  },
  {
    id: 'hog-tracker',
    title: 'HogTracker',
    category: 'Management System',
    summary:
      'A digital management system built for swine farms to track livestock health, monitor inventory, and analyze growth metrics.',
    highlights: [
      'Automates weight and growth tracking across multiple livestock batches',
      'Organizes health records and vaccination scheduling',
      'Centralizes feed inventory and resource management',
    ],
    tags: ['Database Design', 'Dashboard', 'Analytics'],
    link: '',
    repo: '',
  },
];
