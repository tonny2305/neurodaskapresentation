import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="container-section bg-background py-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          className="py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium mb-2">Tonny Wahyu Aji & Ahmad Meijlan Yasir</h3>
          <p className="text-foreground-secondary mb-4">Sekolah Tinggi Meteorologi Klimatologi dan Geofisika</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="mailto:tonny.wahyuaji@gmail.com" 
              className="flex items-center text-foreground-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              tonny.wahyuaji@gmail.com
            </a>
            <a 
              href="mailto:yasirahmad220504@gmail.com" 
              className="flex items-center text-foreground-secondary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              yasirahmad220504@gmail.com
            </a>
            <a 
              href="#" 
              className="flex items-center text-foreground-secondary hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Lihat PDF Esai
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-foreground-secondary/60">© 2025 NEURODASKA · Empowering Education 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;