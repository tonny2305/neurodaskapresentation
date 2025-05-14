import React from 'react';
import { motion } from 'framer-motion';
import { Map, BarChart3, GraduationCap, GlobeIcon, Building2, Users, BookOpenCheck, Newspaper } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const RoadmapSection: React.FC = () => {
  const roadmapItems = [
    {
      year: "2025",
      title: "Riset & pilot di 10 SLB",
      icon: <Map className="w-6 h-6" />
    },
    {
      year: "2026",
      title: "Integrasi dengan Kurikulum Merdeka (100 sekolah inklusif)",
      icon: <BookOpenCheck className="w-6 h-6" />
    },
    {
      year: "2027",
      title: "Pelatihan guru & kampanye nasional",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2028",
      title: "Implementasi nasional penuh",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      year: "2029",
      title: "Ekspansi ASEAN + AI Multibahasa",
      icon: <GlobeIcon className="w-6 h-6" />
    }
  ];

  const abcgmItems = [
    {
      letter: "A",
      title: "Academic",
      description: "Validasi ilmiah dan pengembangan algoritma",
      icon: <GraduationCap className="w-8 h-8 text-yellow-400" />
    },
    {
      letter: "B",
      title: "Business",
      description: "CSR & model SaaS",
      icon: <Building2 className="w-8 h-8 text-blue-400" />
    },
    {
      letter: "C",
      title: "Community",
      description: "Advokat awal",
      icon: <Users className="w-8 h-8 text-green-400" />
    },
    {
      letter: "G",
      title: "Government",
      description: "Integrasi ke kebijakan",
      icon: <BookOpenCheck className="w-8 h-8 text-red-400" />
    },
    {
      letter: "M",
      title: "Media",
      description: 'Kampanye nasional "Semua Anak Bisa Belajar"',
      icon: <Newspaper className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <div className="container-section bg-background py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4 p-2 rounded-xl bg-purple-500/10"
            whileInView={{ rotate: [0, 10, -10, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Map className="w-10 h-10 text-purple-400" />
          </motion.div>
          
          <h2 className="heading-lg mb-4">
            Langkah Nyata Menuju Masa Depan
          </h2>
        </motion.div>

        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-36 top-0 bottom-0 w-0.5 bg-primary/30 z-0"></div>
            
            {/* Timeline items */}
            <div className="relative z-10 space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="road-map-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="road-map-year">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-background mr-4 sm:mr-8 flex-shrink-0"></div>
                      <div className="card flex-1">
                        <p className="font-medium text-foreground">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="heading-md text-center mb-10">Model Kolaborasi ABCGM</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {abcgmItems.map((item, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-background-secondary flex items-center justify-center"
                    whileInView={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: index
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                
                <div className="mb-3">
                  <span className="text-3xl font-bold neurodaska-gradient-text">{item.letter}</span>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                </div>
                
                <p className="text-sm text-foreground-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapSection;