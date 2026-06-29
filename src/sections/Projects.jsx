import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight, FiImage, FiX, FiZoomIn } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { PROJECTS } from '../utils/constants';

const TECH_COLORS = {
  ReactJS: { bg: '#61DAFB15', text: '#61DAFB' },
  Firebase: { bg: '#FFCA2815', text: '#FFCA28' },
  'Tailwind CSS': { bg: '#38BDF815', text: '#38BDF8' },
  'Node.js': { bg: '#68A06315', text: '#68A063' },
  LMS: { bg: '#34D39915', text: '#34D399' },
  'Educational Systems': { bg: '#34D39915', text: '#34D399' },
  PWA: { bg: '#A78BFA15', text: '#A78BFA' },
  'AI Integration': { bg: '#22D3EE15', text: '#22D3EE' },
  Flutter: { bg: '#54C5F815', text: '#54C5F8' },
  Education: { bg: '#34D39915', text: '#34D399' },
  Python: { bg: '#3776AB15', text: '#4B9CD3' },
  'Machine Learning': { bg: '#10b98115', text: '#10b981' },
  OpenCV: { bg: '#5C3EE815', text: '#7C6AF5' },
  TensorFlow: { bg: '#FF6F0015', text: '#FF8C00' },
};

/* ── Lightbox Modal ── */
function ImageModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
        style={{ background: 'rgba(5,5,8,0.92)', backdropFilter: 'blur(16px)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10"
          style={{ boxShadow: `0 0 60px ${project.accentColor}25, 0 30px 80px rgba(0,0,0,0.6)` }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              <p className="text-gray-500 text-xs mt-0.5">Project Preview</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={18} />
            </motion.button>
          </div>

          {/* Full image */}
          <div className="relative bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[70vh] object-contain"
            />
            {/* Subtle corner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at bottom, ${project.accentColor}10, transparent 70%)` }}
            />
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between px-5 py-3 flex-wrap gap-3"
            style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => {
                const s = TECH_COLORS[tech] || { bg: '#ffffff10', text: '#9ca3af' };
                return (
                  <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: s.bg, color: s.text }}>
                    {tech}
                  </span>
                );
              })}
            </div>
            {project.githubUrl && project.githubUrl !== '#' && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                <FiGithub size={15} />
                View on GitHub
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, index, onPreview }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl border border-white/5 overflow-hidden group transition-all duration-500 hover:-translate-y-2 flex flex-col"
      style={{ boxShadow: hovered ? `0 20px 60px ${project.accentColor}15` : 'none' }}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} border-b border-white/5 overflow-hidden`}
        onClick={() => project.image && !project.liveUrl && onPreview(project)}
        style={{ cursor: project.image && !project.liveUrl ? 'zoom-in' : 'default' }}
      >
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Zoom hint for image-only projects */}
            {!project.liveUrl && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-xs font-medium"
                  style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <FiZoomIn size={14} />
                  Click to preview
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center select-none">
              <div className="text-5xl font-black mb-2 opacity-30" style={{ color: project.accentColor }}>
                {project.title.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-gray-600 text-xs font-mono">preview coming soon</div>
            </div>
          </div>
        )}

        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{ top: `${20 + i * 15}%`, background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
            />
          ))}
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6 flex-1 content-start">
          {project.tech.map((tech) => {
            const style = TECH_COLORS[tech] || { bg: '#ffffff10', text: '#9ca3af' };
            return (
              <span key={tech} className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ background: style.bg, color: style.text }}>
                {tech}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          {project.liveUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}15)`,
                border: `1px solid ${project.accentColor}30`,
              }}
            >
              <FiExternalLink size={15} />
              Live Demo
            </motion.a>
          ) : (
            <motion.button
              onClick={() => project.image && onPreview(project)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}15)`,
                border: `1px solid ${project.accentColor}30`,
              }}
            >
              <FiImage size={15} />
              View Project
            </motion.button>
          )}

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FiGithub size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [previewProject, setPreviewProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          tag="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of projects I've built — from gown rental platforms to learning management systems and educational tools."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPreview={setPreviewProject}
            />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Jefel3x3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 btn-secondary px-8 py-3.5 text-base"
          >
            <FiGithub size={20} />
            View All Projects on GitHub
            <FiArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {previewProject && (
        <ImageModal project={previewProject} onClose={() => setPreviewProject(null)} />
      )}
    </section>
  );
}
