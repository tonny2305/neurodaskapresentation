import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  dyslexiaMode: boolean;
  toggleDyslexiaMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Periksa preferensi tema yang tersimpan atau gunakan preferensi sistem
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    
    // Periksa preferensi sistem
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Periksa mode disleksia yang tersimpan
  const [dyslexiaMode, setDyslexiaMode] = useState<boolean>(() => {
    return localStorage.getItem('dyslexiaMode') === 'true';
  });

  useEffect(() => {
    // Simpan tema ke localStorage
    localStorage.setItem('theme', theme);
    
    // Terapkan tema ke dokumen
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Simpan mode disleksia ke localStorage
    localStorage.setItem('dyslexiaMode', dyslexiaMode.toString());
    
    // Terapkan mode disleksia ke dokumen
    const root = document.documentElement;
    if (dyslexiaMode) {
      root.classList.add('dyslexia-mode');
    } else {
      root.classList.remove('dyslexia-mode');
    }
  }, [dyslexiaMode]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleDyslexiaMode = () => {
    setDyslexiaMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, dyslexiaMode, toggleDyslexiaMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 