import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowDown, FiGithub, FiMail } from 'react-icons/fi';
import {
  SiReact, SiFirebase, SiTailwindcss, SiNodedotjs, SiCloudflare, SiFlutter,
} from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import profilePhoto from '../assets/profile.png';

const ROLES = ['Full Stack Developer', 'ReactJS Developer', 'LMS Developer', 'Firebase Expert', 'AI Integrator'];

const techStack = [
  { icon: SiReact,       label: 'ReactJS',     color: '#61DAFB' },
  { icon: SiFirebase,    label: 'Firebase',    color: '#FFCA28' },
  { icon: SiTailwindcss, label: 'Tailwind',    color: '#38BDF8' },
  { icon: SiNodedotjs,   label: 'Node.js',     color: '#68A063' },
  { icon: SiCloudflare,  label: 'Cloudflare',  color: '#F48120' },
  { icon: SiFlutter,     label: 'Flutter',     color: '#54C5F8' },
];

function RoleTyper() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="gradient-text font-bold">
      {displayed}<span className="animate-pulse text-violet-400">|</span>
    </span>
  );
}


const floatingCards = [
  { icon: SiReact,    label: 'React Expert', sub: '3+ Years',        color: '#61DAFB', className: 'top-1/4 -left-4 md:left-0',    delay: 0   },
  { icon: SiFirebase, label: 'Firebase Dev',  sub: 'Full Integration', color: '#FFCA28', className: 'bottom-1/3 -right-4 md:right-0', delay: 0.5 },
];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/10 blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm text-violet-300 font-medium mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight"
            >
              Building{' '}
              <span className="gradient-text">Modern</span>
              <br />
              Web{' '}
              <span className="text-white">Experiences</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-xl sm:text-2xl text-gray-300 mb-3 h-8 flex items-center"
            >
              <RoleTyper />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Hi, I'm{' '}
              <span className="text-white font-semibold">Jefel Jay Pontejo</span> — a passionate
              developer crafting beautiful, scalable web applications with cutting-edge technologies
              and a focus on exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="btn-primary flex items-center gap-2 text-base px-7 py-3.5"
              >
                View Projects
                <FiArrowDown className="rotate-[-45deg]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="btn-secondary flex items-center gap-2 text-base px-7 py-3.5"
              >
                <FiMail size={18} />
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub,  href: 'https://github.com/Jefel3x3' },
                  { icon: FaDiscord, href: 'https://discord.com/users/jefeljay_91993' },
                  { icon: FiMail,    href: 'mailto:jefeljay@gmail.com' },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Avatar & Cards */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Outer dashed ring */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-violet-500/20"
                style={{ animation: 'spin-cw 40s linear infinite', willChange: 'transform' }}
              />

              {/* Orbit track ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: '2%',
                  border: '1px solid rgba(139,92,246,0.18)',
                  boxShadow: '0 0 20px rgba(139,92,246,0.08) inset, 0 0 20px rgba(139,92,246,0.08)',
                  animation: 'orbit-pulse 4s ease-in-out infinite',
                }}
              />

              {/* Profile photo in circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
                className="absolute inset-8 rounded-full overflow-hidden border-2 border-violet-500/40"
                style={{ boxShadow: '0 0 50px rgba(139,92,246,0.45), 0 0 100px rgba(139,92,246,0.2)' }}
              >
                <img
                  src={profilePhoto}
                  alt="Jefel Jay Pontejo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating mini cards */}
              {floatingCards.map((card, i) => (
                <div
                  key={i}
                  className={`absolute glass border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2.5 min-w-[140px] ${card.className}`}
                  style={{ animation: `float-bob 4s ease-in-out ${card.delay}s infinite`, willChange: 'transform' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${card.color}20` }}>
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{card.label}</p>
                    <p className="text-gray-500 text-xs">{card.sub}</p>
                  </div>
                </div>
              ))}

              {/* Rotating orbit — icons spin around the circle */}
              <div
                className="absolute inset-0"
                style={{ animation: 'spin-cw 22s linear infinite', willChange: 'transform' }}
              >
                {techStack.map(({ icon: Icon, label, color }, i) => {
                  const angle = (i / techStack.length) * 360 + 30;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 48;
                  const x = Math.cos(rad - Math.PI / 2) * radius + 50;
                  const y = Math.sin(rad - Math.PI / 2) * radius + 50;
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.3 }}
                      title={label}
                      className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-xl glass flex items-center justify-center cursor-default group"
                      style={{ left: `${x}%`, top: `${y}%`, border: `1px solid ${color}35`, boxShadow: `0 0 14px ${color}30` }}
                    >
                      <div
                        style={{ animation: 'spin-ccw 22s linear infinite' }}
                        className="flex items-center justify-center"
                      >
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div
                        className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                        style={{ background: `${color}30`, border: `1px solid ${color}40` }}
                      >
                        {label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Trailing purple glow dot */}
              <div
                className="absolute inset-0"
                style={{ animation: 'spin-cw 14s linear infinite', willChange: 'transform' }}
              >
                <div
                  className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${Math.cos(-Math.PI / 2) * 48 + 50}%`,
                    top: `${Math.sin(-Math.PI / 2) * 48 + 50}%`,
                    background: 'radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 70%)',
                    boxShadow: '0 0 12px rgba(139,92,246,0.8)',
                  }}
                />
              </div>

              {/* Trailing cyan glow dot */}
              <div
                className="absolute inset-0"
                style={{ animation: 'spin-ccw 18s linear infinite', willChange: 'transform' }}
              >
                <div
                  className="absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${Math.cos(Math.PI / 2) * 48 + 50}%`,
                    top: `${Math.sin(Math.PI / 2) * 48 + 50}%`,
                    background: 'radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(34,211,238,0) 70%)',
                    boxShadow: '0 0 10px rgba(34,211,238,0.8)',
                  }}
                />
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-violet-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
