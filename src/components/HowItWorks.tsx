'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Wear',
    description: '10g ultra-light device worn on your wrist during training and daily life.'
  },
  {
    number: '02',
    title: 'Move',
    description: 'High-resolution accelerometer captures movement quality in real-time.'
  },
  {
    number: '03',
    title: 'Analyze',
    description: 'Proprietary AI detects patterns, overuse, and translates wrist motion into joint-level insights.'
  },
  {
    number: '04',
    title: 'Act',
    description: 'Get actionable insights including Musculoskeletal Load Index and Longevity Score to optimize movement patterns.'
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-center border border-white/10"
  >
    <div className="text-cyan-400 font-mono text-sm mb-4">{step.number}</div>
    <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
    <p className="text-gray-300">{step.description}</p>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-900 to-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300">Movement-native design that goes beyond step count and distance to analyze movement quality.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 