import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import gsGownPhoto from '../assets/GSGOWN.jpg';
import sbrTetciPhoto from '../assets/SBRTETCI.jpg';
import jspLendingPhoto from '../assets/JSPLENDING.jpg';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  { name: 'ReactJS', level: 95, icon: 'react', color: '#61DAFB', category: 'Frontend' },
  { name: 'Firebase', level: 90, icon: 'firebase', color: '#FFCA28', category: 'Backend' },
  { name: 'Tailwind CSS', level: 92, icon: 'tailwind', color: '#38BDF8', category: 'Frontend' },
  { name: 'Node.js', level: 85, icon: 'node', color: '#68A063', category: 'Backend' },
  { name: 'Cloudflare', level: 80, icon: 'cloudflare', color: '#F48120', category: 'DevOps' },
  { name: 'EmailJS', level: 88, icon: 'email', color: '#E13C29', category: 'Integration' },
  { name: 'UI/UX Design', level: 87, icon: 'design', color: '#A78BFA', category: 'Design' },
  { name: 'AI Integration', level: 82, icon: 'ai', color: '#22D3EE', category: 'AI' },
  { name: 'LMS Development', level: 91, icon: 'lms', color: '#34D399', category: 'Education' },
  { name: 'Flutter', level: 80, icon: 'flutter', color: '#54C5F8', category: 'Frontend' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'GS Gown Rental Webapp',
    description: 'A full-featured web application for managing gown rentals, reservations, and inventory tracking with real-time Firebase integration and seamless user experience.',
    tech: ['ReactJS', 'Firebase', 'Tailwind CSS', 'Node.js'],
    gradient: 'from-purple-600/20 to-blue-600/20',
    accentColor: '#7c3aed',
    image: project1,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: true,
  },
  {
    id: 2,
    title: 'SBR TETCI LMS',
    description: 'A comprehensive Learning Management System for TETCI institution, featuring course management, student tracking, assessments, and educational content delivery.',
    tech: ['ReactJS', 'Firebase', 'LMS', 'Educational Systems'],
    gradient: 'from-cyan-600/20 to-teal-600/20',
    accentColor: '#06b6d4',
    image: project2,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: true,
  },
  {
    id: 4,
    title: 'C and C++ Learning Tools',
    description: 'Interactive educational platform for learning C and C++ programming with code examples, exercises, quizzes, and real-time code execution environment.',
    tech: ['ReactJS', 'Flutter', 'Node.js', 'AI Integration', 'Education'],
    gradient: 'from-orange-600/20 to-amber-600/20',
    accentColor: '#f97316',
    image: project4,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: false,
  },
  {
    id: 5,
    title: 'Lending Application',
    description: 'A full-featured lending management system built with ReactJS for tracking loans, borrowers, repayment schedules, and financial reports with a clean and intuitive dashboard.',
    tech: ['ReactJS', 'Firebase', 'Tailwind CSS'],
    gradient: 'from-emerald-600/20 to-green-600/20',
    accentColor: '#10b981',
    image: project5,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: false,
  },
  {
    id: 6,
    title: 'SBR TETCI Scholarship Application',
    description: 'A comprehensive scholarship application system for SBR TETCI institution, enabling students to apply for scholarships online with document submission, status tracking, and admin review dashboard.',
    tech: ['ReactJS', 'Firebase', 'Tailwind CSS', 'Educational Systems'],
    gradient: 'from-indigo-600/20 to-violet-600/20',
    accentColor: '#6366f1',
    image: project6,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: false,
  },
  {
    id: 7,
    title: 'JJP AI Tools',
    description: 'A collection of AI-powered tools and utilities designed to boost productivity, featuring smart text generation, image analysis, and intelligent automation built with modern AI integrations.',
    tech: ['ReactJS', 'AI Integration', 'Firebase', 'Tailwind CSS'],
    gradient: 'from-fuchsia-600/20 to-pink-600/20',
    accentColor: '#d946ef',
    image: project7,
    liveUrl: null,
    githubUrl: 'https://github.com/Jefel3x3',
    featured: true,
  },
];

export const SERVICES = [
  {
    title: 'Web Development',
    description: 'Building modern, scalable, and high-performance web applications using ReactJS, Next.js, and cutting-edge technologies.',
    icon: 'web',
    gradient: 'from-purple-500 to-blue-500',
    features: ['ReactJS & Next.js', 'REST & GraphQL APIs', 'Performance Optimization', 'SEO-Ready'],
  },
  {
    title: 'LMS Development',
    description: 'Custom Learning Management Systems tailored for educational institutions with course management, assessments, and student tracking.',
    icon: 'lms',
    gradient: 'from-cyan-500 to-teal-500',
    features: ['Course Management', 'Student Tracking', 'Assessment Tools', 'Progress Analytics'],
  },
  {
    title: 'Firebase Setup',
    description: 'Complete Firebase backend setup including authentication, real-time database, cloud functions, and storage configuration.',
    icon: 'firebase',
    gradient: 'from-yellow-500 to-orange-500',
    features: ['Authentication', 'Firestore DB', 'Cloud Functions', 'File Storage'],
  },
  {
    title: 'UI/UX Design',
    description: 'Creating stunning, user-centered interfaces with glassmorphism aesthetics, smooth animations, and exceptional user experiences.',
    icon: 'design',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Wireframing', 'Prototyping', 'Design Systems', 'Responsive UI'],
  },
  {
    title: 'Educational Systems',
    description: 'Developing specialized systems for educational environments including grading tools, curriculum management, and student portals.',
    icon: 'education',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Grading Systems', 'Student Portals', 'Curriculum Tools', 'Reports & Analytics'],
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI capabilities into web applications including chatbots, content generation, smart recommendations, and automation.',
    icon: 'ai',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Chatbot Integration', 'AI Content Gen', 'Smart Recommendations', 'Process Automation'],
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications using Flutter for Android and iOS with beautiful UI, smooth performance, and native-like experiences.',
    icon: 'mobile',
    gradient: 'from-sky-500 to-blue-500',
    features: ['Flutter Apps', 'Android & iOS', 'Cross-Platform', 'Native Performance'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ivan Edward O. Cantaros',
    role: 'Vr/President, BOT/School Director',
    email: 'ivan.sbrtetci@gmail.com',
    text: 'Jefel delivered an exceptional LMS that transformed how our trainers and trainees interact. The system is intuitive, fast, and exactly what we needed.',
    rating: 5,
    avatar: 'IC',
    photo: sbrTetciPhoto,
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    name: 'Jerah Manuel Sarabia',
    role: 'Business Owner',
    email: 'sarabiajerahmanuel@gmail.com',
    text: 'The gown rental webapp exceeded all our expectations. Real-time inventory tracking and a seamless booking system has made our operations so much smoother.',
    rating: 5,
    avatar: 'JS',
    photo: gsGownPhoto,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 3,
    name: 'Ana Villanueva',
    role: 'Instructor, C++ Programming',
    text: 'The C and C++ learning tools created by Jefel are outstanding. My students engagement has significantly improved with the interactive exercises.',
    rating: 5,
    avatar: 'AV',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    name: 'Jefty Q. Pontejo',
    role: 'Business Owner',
    email: 'pjefty@gmail.com',
    text: 'Jefel built exactly what our lending business needed. Tracking loans, borrowers, and repayment schedules is now effortless. The dashboard is clean, the reports are accurate, and it has saved us hours of manual work every single day.',
    rating: 5,
    avatar: 'JP',
    photo: jspLendingPhoto,
    gradient: 'from-green-500 to-emerald-500',
  },
];

export const STATS = [
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Technologies', value: 12, suffix: '+' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Jefel3x3',
  discord: 'https://discord.com/users/jefeljay_91993',
  facebook: 'https://www.facebook.com/jefeljaypontejo.pontejo',
  telegram: 'https://t.me/jefeljay',
  whatsapp: 'https://wa.me/09384708946',
  email: 'mailto:jefeljay@gmail.com',
};
