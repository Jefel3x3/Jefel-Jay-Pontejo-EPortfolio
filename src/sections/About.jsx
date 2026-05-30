import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiBookOpen } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { STATS } from '../utils/constants';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';

function StatCard({ label, value, suffix, delay, isActive }) {
  const count = useCounter(value, 2000, 0, isActive);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="glass rounded-2xl p-6 text-center border border-white/8 hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
        {count}{suffix}
      </div>
      <p className="text-gray-500 text-sm">{label}</p>
    </motion.div>
  );
}

const infoCards = [
  {
    icon: FiCode,
    title: 'Frontend Mastery',
    desc: 'ReactJS, Tailwind CSS, and modern JavaScript for crafting pixel-perfect UIs.',
    color: '#a78bfa',
  },
  {
    icon: FiServer,
    title: 'Backend Integration',
    desc: 'Firebase, Node.js, and RESTful APIs for robust, scalable server-side solutions.',
    color: '#22d3ee',
  },
  {
    icon: FiBookOpen,
    title: 'LMS Specialist',
    desc: 'Designing educational systems and learning platforms for institutions.',
    color: '#34d399',
  },
  {
    icon: FiCpu,
    title: 'AI Integration',
    desc: 'Embedding AI capabilities into web applications for smarter user experiences.',
    color: '#f97316',
  },
];

const timeline = [
  { year: '2021', title: 'Started Development Journey', desc: 'Began learning web development and fell in love with ReactJS.' },
  { year: '2022', title: 'First Freelance Projects', desc: 'Delivered web applications for local businesses and educational institutions.' },
  { year: '2023', title: 'LMS Development', desc: 'Built comprehensive Learning Management Systems for TETCI and other clients.' },
  { year: '2024', title: 'AI Integration & Advanced Systems', desc: 'Expanded into AI integration and developed complex full-stack applications.' },
  { year: '2025', title: 'Full Stack Excellence', desc: 'Delivering premium web experiences with Firebase, AI, and modern React patterns.' },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          tag="About Me"
          title="Passionate Developer,"
          highlight="Problem Solver"
          subtitle="I build modern, scalable web applications that make a real difference. With expertise in ReactJS, Firebase, and educational technology, I bring ideas to life."
        />

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {infoCards.map((card, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
              >
                <card.icon size={22} style={{ color: card.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat, i) => (
            <StatCard
              key={i}
              {...stat}
              delay={i * 0.1}
              isActive={statsInView}
            />
          ))}
        </div>

        {/* Timeline & Bio */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Who am I?
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Jefel Jay Pontejo</span>, a passionate Full Stack Developer
                specializing in ReactJS, Firebase, and educational technology systems. I transform complex
                ideas into elegant, user-friendly web experiences.
              </p>
              <p>
                My expertise spans from crafting glassmorphism-inspired UIs to building enterprise-grade
                Learning Management Systems for educational institutions. I'm deeply passionate about
                the intersection of technology and education.
              </p>
              <p>
                When I'm not coding, I'm exploring the latest in AI integration, contributing to open-source
                projects, and continuously leveling up my skills to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="mt-8 p-5 glass rounded-2xl border border-violet-500/15">
              <p className="text-violet-300 text-sm font-mono leading-relaxed">
                <span className="text-gray-600">// core values</span>
                <br />
                const developer = &#123;
                <br />
                &nbsp;&nbsp;passion: <span className="text-green-400">"always learning"</span>,
                <br />
                &nbsp;&nbsp;quality: <span className="text-yellow-400">"pixel-perfect"</span>,
                <br />
                &nbsp;&nbsp;mindset: <span className="text-cyan-400">"user-first"</span>,
                <br />
                &#125;;
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 pl-10 relative"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 glow-purple z-10">
                      {item.year.slice(2)}
                    </div>
                    <div className="glass rounded-xl p-4 flex-1 border border-white/5 hover:border-violet-500/20 transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-violet-400 text-xs font-mono">{item.year}</span>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
