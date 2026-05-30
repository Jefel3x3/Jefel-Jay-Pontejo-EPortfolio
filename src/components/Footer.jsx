import { motion } from 'framer-motion';
import { FiGithub, FiFacebook, FiMail, FiHeart } from 'react-icons/fi';
import { FaTelegram, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { SOCIAL_LINKS, NAV_LINKS } from '../utils/constants';
import profilePhoto from '../assets/profile.webp';

const socialLinks = [
  { icon: FiGithub, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: FaDiscord, href: SOCIAL_LINKS.discord, label: 'Discord' },
  { icon: FiFacebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: FaTelegram, href: SOCIAL_LINKS.telegram, label: 'Telegram' },
  { icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-violet-500/40 shadow-lg shadow-violet-500/30 flex-shrink-0">
                <img src={profilePhoto} alt="Jefel Jay Pontejo" className="w-full h-full object-cover" style={{ objectPosition: '50% 15%' }} />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Jefel Jay Pontejo</p>
                <p className="text-gray-500 text-xs">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building modern web experiences with passion, precision, and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-500 hover:text-violet-400 text-sm transition-colors text-left py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h3>
            <p className="text-gray-500 text-sm mb-2">jefeljay@gmail.com</p>
            <p className="text-gray-500 text-sm mb-5">Available for freelance projects</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 border border-white/5 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Jefel Jay Pontejo. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Made with <FiHeart className="text-rose-500" size={14} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
