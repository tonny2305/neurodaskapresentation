import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, ZoomIn, ZoomOut, Volume2, BookOpen, SunMoon, Headphones, ToggleLeft, ToggleRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const AccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, dyslexiaMode, toggleDyslexiaMode } = useTheme();
  const [textSize, setTextSize] = useState(100);
  const [autoReadSelected, setAutoReadSelected] = useState(false);

  // Set up text selection reader
  useEffect(() => {
    // Handler untuk membaca teks yang disorot
    const handleTextSelection = () => {
      if (!autoReadSelected) return;

      const selectedText = window.getSelection()?.toString() || '';
      if (selectedText.length > 0) {
        readText(selectedText);
      }
    };

    // Pasang event listener untuk mendeteksi seleksi teks
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('keyup', handleTextSelection);

    // Bersihkan event listener
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
      document.removeEventListener('keyup', handleTextSelection);
    };
  }, [autoReadSelected]);

  const increaseTextSize = () => {
    if (textSize < 150) {
      const newSize = textSize + 10;
      setTextSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const decreaseTextSize = () => {
    if (textSize > 80) {
      const newSize = textSize - 10;
      setTextSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  
  // Fungsi untuk membaca teks tertentu
  const readText = (text: string) => {
    // Hentikan pembacaan sebelumnya jika ada
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    
    // Buat utterance baru
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0; // Kecepatan normal
    utterance.pitch = 1.0; // Nada normal
    
    // Mulai pembacaan
    speechSynthesis.speak(utterance);
  };
  
  // Fungsi untuk membaca teks tersorot saat ini
  const readSelectedText = () => {
    const selectedText = window.getSelection()?.toString() || '';
    if (selectedText.length > 0) {
      readText(selectedText);
    } else {
      // Notifikasi jika tidak ada teks yang disorot
      alert('Silakan sorot teks terlebih dahulu untuk dibacakan.');
    }
  };
  
  // Fungsi ini akan dibuat untuk membaca teks di halaman (text-to-speech)
  const speakPage = () => {
    const textToRead = document.body.textContent || '';
    readText(textToRead);
  };

  const stopSpeaking = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  };

  // Toggle mode auto-baca teks tersorot
  const toggleAutoRead = () => {
    setAutoReadSelected(prev => !prev);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-5 left-5 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Buka panel aksesibilitas"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background rounded-xl max-w-md w-full p-6 m-4 shadow-xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                className="absolute top-4 right-4 text-foreground-secondary hover:text-foreground"
                onClick={() => setIsOpen(false)}
                aria-label="Tutup panel aksesibilitas"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-4">Panel Aksesibilitas</h2>
              <p className="text-foreground-secondary mb-6">Sesuaikan tampilan untuk memenuhi kebutuhan Anda</p>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-3 text-primary" />
                    <span>Mode Ramah Disleksia</span>
                  </div>
                  <button
                    className={`w-12 h-6 rounded-full transition-colors ${
                      dyslexiaMode ? 'bg-green-500' : 'bg-gray-300'
                    } relative focus:outline-none focus:ring-2 focus:ring-primary`}
                    onClick={toggleDyslexiaMode}
                    aria-pressed={dyslexiaMode}
                    aria-label={dyslexiaMode ? 'Nonaktifkan mode disleksia' : 'Aktifkan mode disleksia'}
                  >
                    <span
                      className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                        dyslexiaMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <SunMoon className="w-5 h-5 mr-3 text-primary" />
                    <span>Mode {theme === 'dark' ? 'Terang' : 'Gelap'}</span>
                  </div>
                  <button
                    className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'dark' ? 'bg-blue-500' : 'bg-gray-300'
                    } relative focus:outline-none focus:ring-2 focus:ring-primary`}
                    onClick={toggleTheme}
                    aria-pressed={theme === 'dark'}
                    aria-label={theme === 'dark' ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
                  >
                    <span
                      className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
                        theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <ZoomIn className="w-5 h-5 mr-3 text-primary" />
                    <span>Ukuran Teks: {textSize}%</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="p-2 rounded-lg bg-background-secondary/80 hover:bg-background-secondary flex-1 flex items-center justify-center"
                      onClick={decreaseTextSize}
                      aria-label="Perkecil ukuran teks"
                      disabled={textSize <= 80}
                    >
                      <ZoomOut className="w-5 h-5" />
                      <span className="ml-2">Perkecil</span>
                    </button>
                    <button
                      className="p-2 rounded-lg bg-background-secondary/80 hover:bg-background-secondary flex-1 flex items-center justify-center"
                      onClick={increaseTextSize}
                      aria-label="Perbesar ukuran teks"
                      disabled={textSize >= 150}
                    >
                      <ZoomIn className="w-5 h-5" />
                      <span className="ml-2">Perbesar</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Volume2 className="w-5 h-5 mr-3 text-primary" />
                    <span>Pembacaan Teks</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-3">
                    <button
                      className="p-2 rounded-lg bg-background-secondary/80 hover:bg-background-secondary flex-1 flex items-center justify-center"
                      onClick={speakPage}
                      aria-label="Baca teks di halaman"
                    >
                      <Volume2 className="w-5 h-5" />
                      <span className="ml-2">Baca Halaman</span>
                    </button>
                    <button
                      className="p-2 rounded-lg bg-background-secondary/80 hover:bg-background-secondary flex-1 flex items-center justify-center"
                      onClick={stopSpeaking}
                      aria-label="Hentikan pembacaan"
                    >
                      <X className="w-5 h-5" />
                      <span className="ml-2">Berhenti</span>
                    </button>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-background-secondary/80">
                      <div className="flex items-center">
                        <Headphones className="w-5 h-5 mr-2 text-primary" />
                        <span>Baca teks tersorot</span>
                      </div>
                      <button
                        className="flex items-center"
                        onClick={readSelectedText}
                        aria-label="Baca teks yang disorot"
                      >
                        <span className="mr-2 text-sm">Baca</span>
                        <Volume2 className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 mt-2 rounded-lg bg-background-secondary/80">
                      <div className="flex items-center">
                        {autoReadSelected ? (
                          <ToggleRight className="w-5 h-5 mr-2 text-green-500" />
                        ) : (
                          <ToggleLeft className="w-5 h-5 mr-2 text-foreground-secondary" />
                        )}
                        <span>Baca otomatis saat disorot</span>
                      </div>
                      <button
                        className={`w-10 h-5 rounded-full transition-colors ${
                          autoReadSelected ? 'bg-green-500' : 'bg-gray-300'
                        } relative focus:outline-none focus:ring-2 focus:ring-primary`}
                        onClick={toggleAutoRead}
                        aria-pressed={autoReadSelected}
                        aria-label={autoReadSelected ? 'Nonaktifkan pembacaan otomatis' : 'Aktifkan pembacaan otomatis'}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
                            autoReadSelected ? 'translate-x-5' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Tutup Panel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityPanel; 