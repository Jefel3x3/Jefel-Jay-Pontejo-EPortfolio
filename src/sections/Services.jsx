import { motion } from 'framer-motion';
import { FiCode, FiBook, FiDatabase, FiLayout, FiMonitor, FiCpu, FiCheck, FiSmartphone } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../utils/constants';

const ICON_MAP = {
  web: FiCode,
  lms: FiBook,
  firebase: FiDatabase,
  design: FiLayout,
  education: FiMonitor,
  ai: FiCpu,
  mobile: FiSmartphone,
};

const GRADIENT_MAP = {
  'from-purple-500 to-blue-500': ['#8b5cf6', '#3b82f6'],
  'from-cyan-500 to-teal-500': ['#06b6d4', '#14b8a6'],
  'from-yellow-500 to-orange-500': ['#eab308', '#f97316'],
  'from-pink-500 to-rose-500': ['#ec4899', '#f43f5e'],
  'from-green-500 to-emerald-500': ['#22c55e', '#10b981'],
  'from-violet-500 to-purple-500': ['#8b5cf6', '#a855f7'],
  'from-sky-500 to-blue-500': ['#0ea5e9', '#3b82f6'],
};

function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] || FiCode;
  const [c1, c2] = GRADIENT_MAP[service.gradient] || ['#8b5cf6', '#3b82f6'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-7 border border-white/5 group relative overflow-hidden transition-all duration-300 hover:border-white/10"
      style={{
        '--c1': c1,
        '--c2': c2,
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${c1}08, transparent 60%)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${c1}20, ${c2}10)`,
          border: `1px solid ${c1}30`,
        }}
      >
        <Icon size={24} style={{ color: c1 }} />
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${c1}20` }}
            >
              <FiCheck size={11} style={{ color: c1 }} />
            </div>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${c1}60, ${c2}60, transparent)` }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          tag="What I Offer"
          title="Services I"
          highlight="Provide"
          subtitle="Comprehensive development services tailored to bring your vision to life with modern technologies and best practices."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass rounded-3xl p-10 border border-violet-500/15 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">
            Need a custom solution?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
            Let's discuss your project requirements and build something amazing together.
            I'm available for freelance work and collaboration.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-3.5 text-base relative z-10"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
