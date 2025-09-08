'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About the Founders', href: '/founders' },
    { title: 'Invisible Forces', href: '/invisible-forces' },
    { title: 'Our Mission', href: '/mission' },
    { title: 'Questions?', href: 'https://chat.jeanihealth.com', external: true },
  ];

  return (
    <>
      {/* Menu Button - Fixed position */}
      <motion.button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 bg-blue-900/30 backdrop-blur-xl border border-blue-300/20 rounded-full p-3 shadow-2xl shadow-blue-900/20 hover:bg-blue-900/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-blue-950/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 md:w-96 max-w-full bg-gradient-to-b from-blue-900/95 via-blue-800/95 to-blue-700/95 backdrop-blur-xl border-l border-blue-400/20 shadow-2xl shadow-blue-900/30 p-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-8 text-cyan-100/70 hover:text-cyan-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              

              {/* Menu Items */}
              <nav className="space-y-4 flex-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-cyan-50 text-lg py-3 px-4 rounded-xl hover:bg-blue-900/40 transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-cyan-50 text-lg py-3 px-4 rounded-xl hover:bg-blue-900/40 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 