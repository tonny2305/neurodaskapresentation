import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Tambahkan class 'dark' ke dokumen jika preferensi pengguna adalah dark mode
if (localStorage.theme === 'dark' || 
   (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Tambahkan class 'using-keyboard' ke body ketika pengguna menggunakan keyboard untuk navigasi
function handleFirstTab(e: KeyboardEvent) {
  if (e.key === 'Tab') {
    document.body.classList.add('using-keyboard');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('using-keyboard');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);

// Tambahkan class 'dyslexia-mode' ke dokumen jika preferensi pengguna adalah mode disleksia
if (localStorage.getItem('dyslexiaMode') === 'true') {
  document.documentElement.classList.add('dyslexia-mode');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
