import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiFirebase, SiTailwindcss, SiNodedotjs, SiCloudflare, SiFlutter,
} from 'react-icons/si';
import { FiMail, FiLayout, FiCpu, FiBook } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { SKILLS } from '../utils/constants';

const ICON_MAP = {
  react: SiReact,
  firebase: SiFirebase,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  cloudflare: SiCloudflare,
  flutter: SiFlutter,
  email: FiMail,
  design: FiLayout,
  ai: FiCpu,
  lms: FiBook,
};

const CATEGORIES = ['All', 'Frontend', 'Backend', 'DevOps', 'Integration', 'Design', 'AI', 'Education'];

function SkillCard({ skill, index }) {
  const Icon = ICON_MAP[skill.icon] || FiCpu;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-2 group"
      style={{
        boxShadow: hovered ? `0 8px 40px ${skill.color}20, 0 0 0 1px ${skill.color}15` : 'none',
      }}
    >
      {/* Icon */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
        >
          <Icon size={28} style={{ color: skill.color }} />
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: `${skill.color}15`, color: skill.color }}
        >
          {skill.category}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-lg mb-1">{skill.name}</h3>
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-500 text-sm">Proficiency</span>
        <motion.span
          className="font-bold text-sm"
          style={{ color: skill.color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 + index * 0.05 }}
        />
      </div>

      {/* Glow dot */}
      <motion.div
        className="mt-4 h-px w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}50, transparent)` }}
      />
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          tag="Skills & Technologies"
          title="Tools I Work"
          highlight="With"
          subtitle="A curated set of technologies I use to build modern, scalable, and high-quality web applications."
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : 'glass border border-white/8 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block rounded-2xl p-8 border border-violet-500/15 max-w-xl">
            <p className="text-gray-400 leading-relaxed">
              Always learning and expanding my tech stack. Currently exploring{' '}
              <span className="text-violet-400 font-medium">Next.js</span>,{' '}
              <span className="text-cyan-400 font-medium">TypeScript</span>, and advanced{' '}
              <span className="text-green-400 font-medium">AI/ML integrations</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
