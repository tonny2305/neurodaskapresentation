import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, UserPlus } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import GradientButton from '../ui/GradientButton';

const ClosingSection: React.FC = () => {
  // This would ideally link to the PDF essay
  const downloadEssay = () => {
    alert('Downloads the PDF essay (would be implemented for the actual presentation)');
  };

  const handleRegisterClick = () => {
    window.open('https://neurodaska.vercel.app/', '_blank');
  };

  return (
    <div className="container-section py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-60 h-60 rounded-full bg-indigo-600/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="w-10 h-10 text-indigo-400" />
            </motion.div>
          </div>
          
          <motion.h2 
            className="heading-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Semua Anak Bisa Belajar
          </motion.h2>
        </motion.div>

        <div className="space-y-8 mb-12">
          <AnimatedText 
            text="Teknologi bukan hanya soal pintar. Tapi juga soal peduli."
            className="text-2xl"
            type="sentence"
            delay={0.4}
          />
          
          <AnimatedText 
            text="NEURODASKA bukan sekadar sistem. Ia adalah gerakan."
            className="text-2xl"
            type="sentence"
            delay={0.6}
          />
          
          <AnimatedText 
            text="Gerakan menuju pendidikan yang adil, inklusif, dan penuh empati."
            className="text-2xl"
            type="sentence"
            delay={0.8}
          />
        </div>

        <motion.div
          className="my-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-8 shadow-xl">
            <motion.div
              className="mx-auto max-w-3xl py-6"
              whileInView={{ 
                scale: [0.98, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-400 mr-2" />
                <span>Wujudkan transformasi pendidikan berbasis neurodiversity bersama NEURODASKA!</span>
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <GradientButton 
                  text="Daftar Sekarang" 
                  onClick={handleRegisterClick}
                  icon={<UserPlus className="w-4 h-4" />}
                  className="mx-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/8535620/pexels-photo-8535620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Happy diverse students learning with technology"
            className="rounded-xl shadow-xl max-w-full mx-auto h-auto mb-8"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ClosingSection;