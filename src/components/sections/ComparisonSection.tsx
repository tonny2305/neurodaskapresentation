import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, XCircle, CheckCircle2 } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      old: "Teks panjang",
      new: "Visual, audio, interaktif"
    },
    {
      old: "Semua siswa = satu pendekatan",
      new: "Personalisasi tiap siswa"
    },
    {
      old: "Tidak inklusif",
      new: "Ramah neurodivergen"
    },
    {
      old: "Statik dan pasif",
      new: "Adaptif, aktif, empatik"
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
            className="inline-block mb-4 p-2 rounded-xl bg-orange-500/10"
            whileInView={{ rotate: [0, 15, -15, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeftRight className="w-10 h-10 text-orange-400" />
          </motion.div>
          
          <h2 className="heading-lg mb-4">
            Kenapa NEURODASKA Beda?
          </h2>
        </motion.div>

        <div className="mb-10">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="comparison-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="comparison-item comparison-old"
                whileHover={{ x: -5 }}
              >
                <div className="flex items-center">
                  <XCircle className="text-red-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Sistem Lama</h4>
                    <p className="text-foreground-secondary">{item.old}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="comparison-item comparison-new"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">NEURODASKA</h4>
                    <p className="text-foreground-secondary">{item.new}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card rounded-xl overflow-hidden shadow-xl">
              <div className="bg-red-900/20 p-4 text-center">
                <h3 className="font-bold text-lg">Pendekatan Konvensional</h3>
              </div>
              <motion.img
                src="https://images.pexels.com/photos/8423967/pexels-photo-8423967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Conventional learning approach"
                className="w-full h-48 object-cover border-b border-border"
              />
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <XCircle className="text-red-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Pengalaman belajar yang membosankan</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <XCircle className="text-red-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Konten tidak menyesuaikan kemampuan</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <XCircle className="text-red-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Siswa dengan kebutuhan khusus terabaikan</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="card rounded-xl overflow-hidden shadow-xl">
              <div className="bg-primary/30 p-4 text-center">
                <h3 className="font-bold text-lg">Pendekatan NEURODASKA</h3>
              </div>
              <motion.img
                src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NEURODASKA approach"
                className="w-full h-48 object-cover border-b border-border"
                whileInView={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Konten yang menarik dan interaktif</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Penyesuaian otomatis untuk tiap siswa</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle2 className="text-green-500 w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Dukungan khusus untuk neurodivergen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonSection;