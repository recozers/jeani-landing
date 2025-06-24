'use client';
import { motion } from 'framer-motion';

const Orchestra = () => {
  return (
    <section className="py-24 bg-navy-light px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-medium text-white leading-relaxed"
        >
          "Athletic movement is an orchestra of biomechanics. Jeani helps you conduct every note perfectly."
        </motion.blockquote>
        
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="block mt-8 text-ocean-400 font-mono"
        >
          — Dr. Sarah Chen, Sports Medicine Researcher
        </motion.cite>
      </div>
    </section>
  );
};

export default Orchestra; 