import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) {
  const [time, setTime] = useState(new Date().toUTCString().replace('GMT', 'UTC'));
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toUTCString().replace('GMT', 'UTC'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = (path) => location.pathname === path ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'hover:text-blue-500 transition-colors';

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Dynamic News Wire Ticker */}
      <div className="bg-[#0d1527] border-b border-gray-800 text-[11px] font-mono py-2 px-4 flex items-center justify-between text-gray-400">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="bg-red-600 text-white font-black px-2 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse">BREAKING</span>
          <div className="truncate text-gray-300">
            ⚡ International Desks Live: UAE Infrastructure Scaling High Tech Milestones... 🇬🇧 London FTSE Gains Stream... 🇺🇸 Silicon Valley Reports Breakthrough Ecosystems...
          </div>
        </div>
        <div className="hidden md:block flex-shrink-0 text-gray-500 font-bold ml-4">
          <span>{time}</span>
        </div>
      </div>

      {/* Main Bar Display */}
      <div className="bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-800/60 transition-colors h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 text-left">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl font-black text-white text-sm">
              CG
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">CHRONICLE GLOBAL</h1>
              <span class="text-[9px] font-mono tracking-widest text-blue-500 block font-bold uppercase">International Media Matrix</span>
            </div>
          </Link>

          <nav class="hidden md:flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-gray-400">
            <Link to="/" className={isActive('/')}>🌐 Home Feed</Link>
            <Link to="/blogs" className={isActive('/blogs')}>📰 Global Bureaus</Link>
            <Link to="/about" className={isActive('/about')}>🏢 About Matrix</Link>
            <Link to="/contact" className={isActive('/contact')}>✉️ Newsroom Desk</Link>
          </nav>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-gray-950/60 border border-slate-200 dark:border-gray-800 flex items-center justify-center hover:border-blue-500 transition-all text-lg"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;