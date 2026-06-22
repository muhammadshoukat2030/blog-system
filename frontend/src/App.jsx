import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme-mode') === 'dark' || !('theme-mode' in localStorage);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#030712] dark:text-gray-100 transition-colors duration-300 font-sans flex flex-col justify-between">
        <div>
          {/* Breaking Ticker & Nav Cluster */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;