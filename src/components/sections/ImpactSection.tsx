import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, PieChart, Users, Sparkles } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import AnimatedCounter from '../ui/AnimatedCounter';
import GradientButton from '../ui/GradientButton';

const ImpactSection: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      label: "Peningkatan nilai siswa dari 68 → 82 setelah pakai sistem adaptif berbasis AI",
      value: 82,
      prefix: "",
      suffix: "%",
      startValue: 68
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-400" />,
      label: "Peningkatan efektivitas pembelajaran ketika materi disesuaikan",
      value: 20,
      prefix: "+",
      suffix: "%"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      label: "Peningkatan motivasi & kepercayaan diri siswa neurodivergen",
      value: 35,
      prefix: "+",
      suffix: "%"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      label: "Keterlibatan guru & orang tua meningkat melalui dashboard kolaboratif",
      value: 100,
      prefix: "",
      suffix: "%"
    }
  ];

  const handleNeuroScanClick = () => {
    window.open('https://neurodaska.vercel.app/neuroscan', '_blank');
  };

  return (
    <div className="container-section bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4 p-2 rounded-xl bg-green-500/10"
            whileInView={{ scale: [0.9, 1.1, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp className="w-10 h-10 text-green-400" />
          </motion.div>
          
          <h2 className="heading-lg mb-4">
            Bukan Teori. Ini Dampaknya.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(var(--color-primary), 0.2)'
              }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-background-secondary rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="flex items-baseline mb-2">
                    {stat.startValue ? (
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-light line-through text-foreground-secondary">
                          {stat.startValue}{stat.suffix}
                        </span>
                        <span className="text-4xl font-bold text-green-400">
                          <AnimatedCounter
                            end={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            className="text-4xl font-bold"
                          />
                        </span>
                      </div>
                    ) : (
                      <span className="text-4xl font-bold text-indigo-400">
                        <AnimatedCounter
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          className="text-4xl font-bold"
                        />
                      </span>
                    )}
                  </div>
                  <p className="text-foreground-secondary">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <blockquote className="text-2xl italic text-foreground-secondary mb-10">
            "Angka-angka ini bukan sekadar statistik. Ini adalah perbedaan nyata antara pendidikan yang mengabaikan dan pendidikan yang merangkul semua pelajar."
          </blockquote>
          
          <GradientButton 
            text="Coba NeuroScan Test" 
            onClick={handleNeuroScanClick}
            icon={<Sparkles className="w-4 h-4" />}
            className="mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImpactSection;