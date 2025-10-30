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
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      >
        

        <div className="max-w-5xl text-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 relative w-full flex justify-center"
          >
            
            <img 
              src="/Jeani_png.png" 
              alt="Jeani Logo" 
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto relative z-10"
            />
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl text-blue-500 mb-12 sm:mb-16 leading-relaxed"
          >
            The future of movement starts here.
          </motion.h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <a
              href="https://buy.stripe.com/28E28k3z357j1DdcwbdEs02"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-950 px-12 py-6 sm:px-16 sm:py-8 text-2xl sm:text-3xl rounded-full hover:bg-blue-900/20 transition-all duration-300 overflow-hidden block"
            >
              <div className="absolute inset-0 bg-cyan-100/30 backdrop-blur-xl border border-cyan-100/40 shadow-2xl shadow-blue-900/20 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              <span className="relative z-10">Preorder now</span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      <MailchimpForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero; 