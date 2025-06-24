'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About the Founders', href: '/founders' },
    { title: 'Invisible Forces', href: '/invisible-forces' },
    { title: 'Our Mission', href: '/mission' },
  ];

  return (
    <>
      {/* Menu Button - Fixed position */}
      <motion.button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 shadow-2xl shadow-white/10 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 md:w-96 max-w-full bg-gradient-to-b from-cyan-500/95 via-cyan-600/95 to-blue-600/95 backdrop-blur-xl border-l border-cyan-300/30 shadow-2xl shadow-cyan-500/20 p-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end mb-8 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="text-center mb-8">
                <Image 
                  src="/Jeani-Logo-08_04_25.png" 
                  alt="Jeani" 
                  width={120}
                  height={45}
                  className="h-12 w-auto mx-auto"
                />
              </div>

              {/* Menu Items */}
              <nav className="space-y-4 flex-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      {item.title}
                    </Link>
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