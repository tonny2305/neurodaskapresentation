import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const ProblemSection: React.FC = () => {
  return (
    <div className="container-section relative bg-background py-20">
      {/* Glitch effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(var(--color-foreground), 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
            animate={{ 
              x: [0, -10, 5, -5, 0],
              y: [0, 5, -10, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-red-500/10 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </motion.div>

        <motion.h2
          className="heading-lg text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Masalah yang Tidak Terlihat
        </motion.h2>

        <div className="space-y-8 text-center">
          <AnimatedText 
            text="Transformasi digital pendidikan terlalu fokus pada teknologi, tapi lupa pada keragaman cara berpikir."
            className="text-xl leading-relaxed text-foreground-secondary"
            type="sentence"
            delay={0.2}
          />
          
          <AnimatedText 
            text="Sistem e-learning saat ini terlalu seragam: teks panjang, video pasif, kuis standar."
            className="text-xl leading-relaxed text-foreground-secondary"
            type="sentence"
            delay={0.4}
          />
          
          <AnimatedText 
            text="Apa dampaknya?"
            className="text-2xl font-medium text-foreground"
            type="sentence"
            delay={0.6}
          />
          
          <motion.blockquote
            className="relative p-6 mt-10 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border-l-4 border-red-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-xl italic text-foreground">
              Siswa dengan autisme, ADHD, disleksia... merasa gagal, terasing, tertinggal.
            </p>
          </motion.blockquote>
          
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.img
              src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Confused student looking at computer"
              className="rounded-lg shadow-xl max-w-full h-auto max-h-80 object-cover"
              whileInView={{
                filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                opacity: [1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;