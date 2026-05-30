import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FiX, FiMessageCircle } from 'react-icons/fi';

const MESSENGER_URL = 'https://m.me/jefeljaypontejo.pontejo';

export default function FloatingMessenger() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-8 left-6 z-40 flex flex-col items-start gap-3">

      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass rounded-2xl border border-white/10 p-4 w-64 relative"
            style={{ boxShadow: '0 8px 40px rgba(0,149,255,0.2)' }}
          >
            {/* Close */}
            <button
              onClick={() => { setOpen(false); setDismissed(true); }}
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors"
            >
              <FiX size={14} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0099FF, #A033FF)' }}>
                <FaFacebookMessenger size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Jefel Jay Pontejo</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs">Usually replies instantly</span>
                </div>
              </div>
            </div>

            {/* Message bubble */}
            <div className="bg-white/5 rounded-xl rounded-tl-none px-3 py-2.5 mb-4 border border-white/8">
              <p className="text-gray-300 text-xs leading-relaxed">
                Hi! 👋 Feel free to message me about your project. I'd love to help!
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all"
              style={{ background: 'linear-gradient(135deg, #0099FF, #A033FF)' }}
            >
              <FiMessageCircle size={15} />
              Send a Message
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="relative">
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: 'linear-gradient(135deg, #0099FF, #A033FF)' }} />
            <span className="absolute inset-[-4px] rounded-full animate-pulse opacity-15"
              style={{ background: 'linear-gradient(135deg, #0099FF, #A033FF)' }} />
          </>
        )}

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #0099FF, #A033FF)',
            boxShadow: '0 4px 24px rgba(0,149,255,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
          }}
          aria-label="Chat on Messenger"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <FiX size={22} />
              </motion.div>
            ) : (
              <motion.div key="messenger"
                initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <FaFacebookMessenger size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Tooltip — only show when closed & not dismissed */}
        <AnimatePresence>
          {!open && !dismissed && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ delay: 1.5 }}
              className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium text-white pointer-events-none"
              style={{ background: 'rgba(0,149,255,0.25)', border: '1px solid rgba(0,149,255,0.3)', backdropFilter: 'blur(8px)' }}
            >
              💬 Chat with me
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
