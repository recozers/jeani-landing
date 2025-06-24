'use client';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-gray-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-300">Where elite athletics meets cutting-edge science.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-gray-300 border border-white/10"
          >
            <p className="text-lg leading-relaxed mb-6">
              Born from the Duke University Sports Medicine program, Jeani represents years of research into biomechanics and movement monitoring. Our team combines decades of clinical experience with cutting-edge AI to solve one of sport's biggest challenges.
            </p>
            <p className="text-lg leading-relaxed">
              We believe that every athlete deserves to train at their peak while staying injury-free. That's why we're building technology that doesn't just react to injuries – it prevents them.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
          >
            <p className="text-gray-400 font-mono">[Team Photo / Lab Image]</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 