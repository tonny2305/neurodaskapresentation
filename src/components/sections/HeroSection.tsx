import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Settings, Users } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import GradientButton from '../ui/GradientButton';
import LogoShowcase from '../ui/LogoShowcase';
import { useTheme } from '../../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { dyslexiaMode } = useTheme();
  
  const scrollToNextSection = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
  };

  return (
    <div className="container-section relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl"
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
          className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-accent/20 blur-3xl"
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

      <div className="flex flex-col items-center justify-center text-center relative z-10 min-h-screen py-16">
        {/* Logo Showcase di atas judul */}
        <div className="absolute top-0 w-full">
          <LogoShowcase />
        </div>
        
        <div className="mt-24 md:mt-24"> {/* Menambahkan margin top pada mobile untuk memberi ruang pada logo */}
          <motion.div
            className="mb-8 mx-auto flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-xl shadow-lg shadow-primary/10"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              boxShadow: ["0 4px 12px rgba(79, 70, 229, 0.1)", "0 4px 20px rgba(79, 70, 229, 0.2)", "0 4px 12px rgba(79, 70, 229, 0.1)"]
            }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              boxShadow: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              animate={pulseAnimation}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain className="w-14 h-14 md:w-16 md:h-16 text-primary" />
            </motion.div>
          </motion.div>

          <AnimatedText
            text="NEURODASKA"
            className="heading-xl neurodaska-gradient-text mb-4"
            type="letters"
            duration={0.1}
          />

          <AnimatedText
            text="Neurodiverse Adaptive Learning System for Indonesia"
            className="subtitle mb-3"
            delay={1.5}
            type="sentence"
          />

          <motion.p
            className="text-foreground-secondary text-base md:text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            Platform pembelajaran digital berbasis AI yang disesuaikan untuk peserta didik dengan berbagai profil neurologis.
          </motion.p>

          {dyslexiaMode && (
            <motion.div
              className="my-4 p-4 bg-yellow-100/30 rounded-lg border border-yellow-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <div className="text-left text-foreground">
                <p className="font-medium mb-2 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-yellow-600" />
                  Fitur Aksesibilitas Aktif:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Font ramah disleksia aktif</li>
                  <li>Tekan tombol <kbd className="px-2 py-1 bg-background-secondary rounded text-xs">F</kbd> untuk mode fokus</li>
                  <li>Klik tombol <Settings className="w-4 h-4 inline mx-1 text-yellow-600" /> di kiri bawah untuk opsi lainnya</li>
                </ul>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-6"
          >
            <GradientButton 
              text="Scroll untuk jelajahi" 
              onClick={scrollToNextSection}
              icon={<Sparkles className="w-4 h-4" />}
              showChevron
            />
          </motion.div>
          
          {/* Penambahan kredit pengembang */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="mt-10 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-6 mt-10 mb-2">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 border-2 border-primary/30 shadow-md">
                  <img 
                    src="/public/logos/tonny.jpg" 
                    alt="Tonny Wahyu Aji" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Tonny+Wahyu+Aji&background=random";
                    }}
                  />
                </div>
                <p className="text-base md:text-lg font-medium">Tonny Wahyu Aji</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 border-2 border-primary/30 shadow-md">
                  <img 
                    src="/public/assets/yasir22.jpg" 
                    alt="Ahmad Meijlan Yasir" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://ui-avatars.com/api/?name=Ahmad+Meijlan+Yasir&background=random";
                    }}
                  />
                </div>
                <p className="text-base md:text-lg font-medium">Ahmad Meijlan Yasir</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground-secondary mt-1">
              Sekolah Tinggi Meteorologi Klimatologi dan Geofisika
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;