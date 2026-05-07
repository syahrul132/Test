/**
 * App bootstrap for global styles and theme state.
 */
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setDark(stored === 'dark');
      return;
    }
    setDark(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="min-h-screen text-slate-100 transition-colors duration-300">
      <div className="cyber-grid min-h-screen">
        <Navbar dark={dark} setDark={setDark} />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
          <Component {...pageProps} dark={dark} />
        </main>
      </div>
    </div>
  );
}
