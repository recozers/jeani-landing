'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MailchimpForm from './MailchimpForm';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 px-6 relative overflow-hidden"
      >
        {/* Animated gradient background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 relative w-full flex justify-center"
          >
            {/* Bubble effect behind logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[504px] md:h-[242px] bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
            </div>
            
            <img 
              src="/Jeani-Logo-08_04_25.png" 
              alt="Jeani Logo" 
              className="h-28 sm:h-36 md:h-44 lg:h-52 relative z-10"
            />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mb-12 sm:mb-16 leading-relaxed"
          >
            The future of movement starts here.
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              <span className="relative z-10">Join the movement</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      <MailchimpForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero; 