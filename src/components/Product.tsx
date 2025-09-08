'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Product = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 7l-10 10-3-3-7 7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7h6v6" />
        </svg>
      ),
      title: "Movement Native",
      description: "Designed specifically for athletic motion. Captures biomechanics in real-time without interfering with your natural movement patterns."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Never Needs Charging",
      description: "Revolutionary energy harvesting technology means you never have to worry about battery life. Just wear it and train."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 8-2 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m2 22 7-7" />
        </svg>
      ),
      title: "Ultra-Lightweight",
      description: "At just 20 grams, you'll forget you're wearing it. Engineered for athletes who demand performance without compromise."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* What We Monitor - moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-blue-400/20 shadow-lg mb-16 md:mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl text-blue-700 mb-2">Joint-Specific</div>
              <div className="text-gray-600 text-sm md:text-base">Monitor movement at the individual joint level for precise biomechanical analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl text-blue-600 mb-2">Multi-Plane Impact</div>
              <div className="text-gray-600 text-sm md:text-base">Track impact forces across different movement planes and directions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl text-blue-700 mb-2">Actionable Insights</div>
              <div className="text-gray-600 text-sm md:text-base">Get personalized recommendations and data-driven insights on your movement patterns</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Product Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-white/60 rounded-3xl flex items-center justify-center shadow-2xl p-6 md:p-8">
              <Image 
                src="/jeanimockup.png" 
                alt="Jeani Device Mockup" 
                width={500}
                height={500}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg border border-blue-400/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl text-blue-700">20g</div>
                <div className="text-xs text-gray-600">Ultra-light</div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-white/80 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg border border-blue-400/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl text-blue-600">∞</div>
                <div className="text-xs text-gray-600">Battery life</div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product; 