import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import GradientButton from '../ui/GradientButton';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-section relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-sky-500/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center relative z-10 h-screen">
        <motion.div
          className="mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600/20 to-sky-500/20 backdrop-blur-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Brain className="w-12 h-12 text-indigo-400" />
        </motion.div>

        <AnimatedText
          text="NEURODASKA"
          className="heading-xl neurodaska-gradient-text mb-4"
          type="letters"
          duration={0.1}
        />

        <AnimatedText
          text="Transformasi Digital Inklusif untuk Semua Otak"
          className="subtitle mb-8"
          delay={1.5}
          type="sentence"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <GradientButton 
            text="Scroll untuk jelajahi" 
            onClick={scrollToNextSection}
            icon={<Sparkles className="w-4 h-4" />}
            showChevron
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white/60 rounded-full"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;