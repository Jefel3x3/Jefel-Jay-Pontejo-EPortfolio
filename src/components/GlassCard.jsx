import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, glow = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`glass rounded-2xl ${
        glow ? 'glow-purple' : ''
      } ${hover ? 'glass-hover cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
