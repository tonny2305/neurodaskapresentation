import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Bot, Palette, BarChart3, ExternalLink } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import FeatureCard from '../ui/FeatureCard';
import GradientButton from '../ui/GradientButton';

const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <Brain />,
      title: "NeuroScan Test",
      description: "Tes awal berbasis gamifikasi untuk mendeteksi gaya belajar (visual, audio, kinestetik)."
    },
    {
      icon: <BookOpen />,
      title: "Konten Adaptif AI",
      description: "Materi otomatis menyesuaikan gaya belajar pengguna."
    },
    {
      icon: <Bot />,
      title: "NeuroCompanion",
      description: "Asisten AI personal yang bisa menjelaskan ulang, memberi semangat, dan menyarankan istirahat."
    },
    {
      icon: <Palette />,
      title: "SafeMode Interface",
      description: "Tampilan ramah disleksia, bebas distraksi, dengan navigasi sederhana."
    },
    {
      icon: <BarChart3 />,
      title: "Dashboard Kolaboratif",
      description: "Pemantauan progres real-time oleh guru & orang tua."
    }
  ];

  const handleExploreClick = () => {
    window.open('https://neurodaska.vercel.app/', '_blank');
  };

  return (
    <div className="container-section bg-gradient-to-b from-background to-primary/10 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4 p-2 rounded-xl bg-primary/10"
            whileInView={{ scale: [0.9, 1.1, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="heading-lg mb-4">
            Solusi: <span className="neurodaska-gradient-text">NEURODASKA</span>
          </h2>
          
          <p className="subtitle mb-6 text-center">
          Neurodiverse Adaptive Learning System for Indonesia
          </p>
          
          <AnimatedText
            text="NEURODASKA mengubah cara belajar jadi lebih manusiawi, inklusif, dan cerdas. Platform ini membaca gaya belajar unik setiap anak, lalu menyesuaikan kontennya secara otomatis."
            className="text-lg text-foreground-secondary max-w-3xl mx-auto"
            type="sentence"
          />

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <GradientButton 
              text="Mulai Belajar" 
              onClick={handleExploreClick}
              icon={<ExternalLink className="w-4 h-4" />}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl">
          </div>
          <div className="relative card rounded-2xl p-8 text-center">
            <h3 className="heading-md mb-4">Teknologi di Balik NEURODASKA</h3>
            <p className="text-foreground-secondary mb-6">
              Perpaduan antara AI generatif, sistem adaptif, dan desain inklusif yang dioptimalkan untuk berbagai gaya belajar.
            </p>
            <motion.img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Learning Technology"
              className="rounded-lg max-w-full mx-auto h-auto"
              whileInView={{ 
                y: [0, -5, 0],
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 4,
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

export default SolutionSection;