import {
  FiHome,
  FiUser,
  FiFolder,
  FiMail,
  FiLayers,
  FiBarChart2,
  FiCrosshair,
  FiLayout,
} from 'react-icons/fi';

export const profile = {
  name: 'Reeven Yray',
  role: 'BSIT student specializing in System Development',
  intro:
    'I design and build web systems, from campus emergency reporting to e-commerce storefronts and farm management tools.',

  // HEADSHOT: put a forward-facing photo in /public (e.g. headshot.jpg), then
  // set photo: '/headshot.jpg'. Leave it empty to show the placeholder frame.
  photo: '',
  photoAlt: 'Portrait of Reeven Yray',
  resume: '/Reeven_Yray_Resume.pdf',

  school: 'Central Luzon State University',
  schoolShort: 'CLSU',
  program: 'Bachelor of Science in Information Technology',
  track: 'System Development',

  // The bio, broken into short, scannable chunks.
  // lead = the one-line takeaway, detail = supporting sentence,
  // points = optional quick-scan keywords.
  story: [
    {
      id: 'who',
      label: 'Who I am',
      lead: 'A BSIT student who turns rough ideas into working systems.',
      detail:
        'I study System Development at CLSU and like taking a problem from first sketch to something real people can actually use.',
    },
    {
      id: 'how',
      label: 'How I work',
      lead: 'I care about the whole software lifecycle, not just the code.',
      detail:
        'Strict QA and systems analysis principles guide my projects, so what I ship is built to handle real-world edge cases.',
      points: ['Thoroughly documented', 'Systematically tested', 'Edge-case ready'],
    },
    {
      id: 'beyond',
      label: 'Beyond the code',
      lead: 'I also design intuitive user experiences.',
      detail:
        'A strong interest in UI/UX design has taught me how to empathize with users, translate their needs into clean wireframes, and build accessible, user-friendly interfaces.',
      points: ['Wireframing & Prototyping', 'User-centered design'],
    },
  ],
};

// Replace with your real details. These feed the Contact page.
export const contact = {
  email: 'your.email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
};

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
    id: 'prototyping',
    title: 'Wireframing & Prototyping',
    description:
      'Creating structured layouts and interactive prototypes to map out user journeys, test functionality, and bridge the gap between design and development.',
    icon: FiLayout,
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
      'Ensuring flawless execution through comprehensive technical documentation, systematic troubleshooting, and rigorous testing.',
    icon: FiBarChart2,
  },
];

// Optional per project:
//   link  - repository or live demo URL (shows a "View project" button)
//   image - screenshot path, e.g. '/safeclsu.png' (replaces the generated visual)
//   hue   - 0-360, tints that project's carousel slide
//   kind  - mock UI drawn when there is no image: 'dashboard' | 'store' | 'tracker' | 'mobile'
// categories - one or more; each shows as a coloured pill and a filter chip
export const projects = [
  {
    id: 'safe-clsu',
    title: 'SafeCLSU',
    categories: ['Web App', 'Mobile App', 'Dashboard'],
    summary:
      'A centralized emergency response application designed for Central Luzon State University to streamline campus incident reporting and improve response times.',
    highlights: [
      'Enables real-time incident reporting across the university campus',
      'Supports direct photo uploads for immediate situational awareness',
      'Provides a centralized dashboard for security and medical responders',
    ],
    tags: ['System Development', 'Real-time', 'Web-based'],
    link: '',
    image: '',
    hue: 8,
    kind: 'dashboard',
  },
  {
    id: 'techno-hub',
    title: 'TechnoHub',
    categories: ['E-commerce'],
    summary:
      'A specialized digital storefront tailored for PC builders and tech enthusiasts to efficiently source, compare, and purchase computer components.',
    highlights: [
      'Advanced hardware filtering by specific component specifications',
      'Streamlined digital cart and secure checkout architecture',
      'Clean, tech-focused interface designed for high-information density',
    ],
    tags: ['E-commerce', 'UI/UX', 'Full-stack'],
    link: '',
    image: '',
    hue: 42,
    kind: 'store',
  },
  {
    id: 'hog-tracker',
    title: 'HogTracker',
    categories: ['Management System'],
    summary:
      'A digital management system built for swine farms to track livestock health, monitor inventory, and analyze growth metrics.',
    highlights: [
      'Automates weight and growth tracking across multiple livestock batches',
      'Organizes health records and vaccination scheduling',
      'Centralizes feed inventory and resource management',
    ],
    tags: ['Database Design', 'Dashboard', 'Analytics'],
    link: '',
    image: '',
    hue: 168,
    kind: 'tracker',
  },
  {
    id: 'i-tour',
    title: 'iTour',
    categories: ['Mobile App'],
    summary:
      'A native Android tourism application designed to help travelers seamlessly discover local destinations, navigate with interactive maps, and manage attraction bookings in one platform.',
    highlights: [
      'Features interactive maps for effortless navigation to local tourist spots',
      'Showcases curated attraction listings with detailed destination info',
      'Enables direct in-app booking and reservation management for travelers',
    ],
    tags: ['Android Studio', 'Mobile App', 'UI/UX Design'],
    link: '',
    image: '',
    hue: 212,
    kind: 'mobile',
  },
];
