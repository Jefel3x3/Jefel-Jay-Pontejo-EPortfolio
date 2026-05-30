import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { TESTIMONIALS } from '../utils/constants';

const GRADIENT_MAP = {
  'from-purple-500 to-blue-500': ['#8b5cf6', '#3b82f6'],
  'from-cyan-500 to-teal-500': ['#06b6d4', '#14b8a6'],
  'from-pink-500 to-rose-500': ['#ec4899', '#f43f5e'],
  'from-green-500 to-emerald-500': ['#22c55e', '#10b981'],
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((v) => (v + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = TESTIMONIALS[active];
  const [c1, c2] = GRADIENT_MAP[current.gradient] || ['#8b5cf6', '#3b82f6'];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          tag="Testimonials"
          title="What Clients"
          highlight="Say"
          subtitle="Real feedback from real clients who trusted me with their projects."
        />

        {/* Main carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="glass rounded-3xl p-8 sm:p-12 border border-white/8 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                style={{ background: `${c1}10` }}
              />

              {/* Quote mark */}
              <div
                className="text-8xl font-serif leading-none mb-4 opacity-20 select-none"
                style={{ color: c1 }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <FiStar key={i} size={18} className="fill-current text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 relative z-10">
                "{current.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                >
                  {current.avatar}
                </div>
                <div>
                  <p className="text-white font-bold">{current.name}</p>
                  <p className="text-gray-500 text-sm">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? 'w-8 h-2 bg-violet-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-500/30 transition-all"
              >
                <FiChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-violet-500/30 transition-all"
              >
                <FiChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TESTIMONIALS.map((t, i) => {
            const [tc1] = GRADIENT_MAP[t.gradient] || ['#8b5cf6'];
            return (
              <motion.button
                key={t.id}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                whileHover={{ scale: 1.03 }}
                className={`glass rounded-xl p-3.5 border text-left transition-all duration-300 ${
                  i === active ? 'border-violet-500/30' : 'border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: `linear-gradient(135deg, ${tc1}, #1d4ed8)` }}
                  >
                    {t.avatar}
                  </div>
                  <p className="text-white text-xs font-semibold truncate">{t.name}</p>
                </div>
                <p className="text-gray-600 text-xs truncate">{t.role}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
