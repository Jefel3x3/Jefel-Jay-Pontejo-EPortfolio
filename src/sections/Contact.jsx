import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiMapPin, FiGithub, FiFacebook, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaTelegram, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { SOCIAL_LINKS } from '../utils/constants';

// ── Paste your EmailJS credentials here ──────────────────────────
const EMAILJS_SERVICE_ID  = 'service_l8sndt7';   // e.g. service_abc123
const EMAILJS_TEMPLATE_ID = 'template_9cwdd1r';  // e.g. template_xyz456
const EMAILJS_PUBLIC_KEY  = 'qkFeE1njcYOsePWHw';   // e.g. aBcDeFgHiJkLmNoP
// ─────────────────────────────────────────────────────────────────

const socials = [
  { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub', color: '#9ca3af' },
  { icon: FaDiscord, href: SOCIAL_LINKS.discord, label: 'Discord', color: '#5865F2' },
  { icon: FiFacebook, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: '#1877F2' },
  { icon: FaTelegram, href: SOCIAL_LINKS.telegram, label: 'Telegram', color: '#26A5E4' },
  { icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: '#25D366' },
];

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'jefeljay@gmail.com', href: 'mailto:jefeljay@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Philippines', href: null },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.from_name.trim()) e.from_name = 'Name is required';
    if (!form.from_email.trim() || !/\S+@\S+\.\S+/.test(form.from_email)) e.from_email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full glass rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 border transition-all duration-300 outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 bg-transparent ${
      errors[field] ? 'border-red-500/50' : 'border-white/8 hover:border-white/15'
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          tag="Contact"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? Let's talk. I'm available for freelance projects, collaborations, and full-time opportunities."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-7 border border-white/5">
              <h3 className="text-white font-bold text-xl mb-2">Get in Touch</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-violet-400 flex-shrink-0">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-200 text-sm hover:text-violet-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-gray-200 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-green-500/15">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currently accepting new projects. Response time: within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">Connect with me</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl glass border border-white/5 hover:border-white/15 transition-all"
                  >
                    <Icon size={16} style={{ color }} />
                    <span className="text-gray-400 text-xs font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass('from_name')}
                  />
                  {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
                </div>
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass('from_email')}
                  />
                  {errors.from_email && <p className="text-red-400 text-xs mt-1">{errors.from_email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <FiCheck size={18} />
                  Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <FiAlertCircle size={18} />
                  Something went wrong. Please try again or email directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className="w-full btn-primary py-4 flex items-center justify-center gap-3 text-base disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-gray-600 text-xs text-center">
                By submitting, you agree that I may contact you about your inquiry.
                Your data is kept private and never shared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
