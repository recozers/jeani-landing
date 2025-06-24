'use client';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-cyan-50 to-blue-100 px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Move better
          </span>
          <br />
          for longer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed"
        >
          Just as we practice dental hygiene to prevent cavities, movement hygiene protects against injury and extends longevity. By continuously monitoring your movement health, we help you maintain optimal patterns that keep you active for decades, not just seasons. Taking care of your movement today is an investment in your future self.
        </motion.p>

        {/* Vision pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 md:mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Career Longevity</h3>
            <p className="text-sm md:text-base text-gray-600">Extending athletic careers through predictive movement monitoring and movement optimization.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 md:mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Lifelong Wellness</h3>
            <p className="text-sm md:text-base text-gray-600">Building movement patterns that protect joint health and promote active aging beyond sport.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 md:mb-6 mx-auto flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Find Your Peak</h3>
            <p className="text-sm md:text-base text-gray-600">Optimize for performance that matters to you, whether that's speed, endurance, power, or simply moving pain-free.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision; 