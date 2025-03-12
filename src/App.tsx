import React, { useState, useEffect } from 'react';
import { User, FileText, Briefcase, Rss, Award, Github, Linkedin, Mail, ChevronRight, Home, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import TechWatch from './components/TechWatch';
import Skills from './components/Skills';
import Footer from './components/Footer';
import HiddenGame from './components/HiddenGame';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showGame, setShowGame] = useState(false);
  
  const secretKey = 'q';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -20% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === secretKey) {
        setShowGame(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const sections = [
    { id: 'home', title: 'Accueil', icon: <Home size={18} /> },
    { id: 'about', title: 'À propos', icon: <User size={18} /> },
    { id: 'resume', title: 'CV', icon: <FileText size={18} /> },
    { id: 'projects', title: 'Projets', icon: <Briefcase size={18} /> },
    { id: 'skills', title: 'Compétences', icon: <Award size={18} /> },
    { id: 'techwatch', title: 'Veille', icon: <Rss size={18} /> },
  ];

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const gameButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 10,
      boxShadow: "0 10px 15px -5px rgba(59, 130, 246, 0.5)"
    },
    tap: { scale: 0.9 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-1.5 bg-white/90' 
          : 'py-2 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white'
      } backdrop-blur-md shadow-lg`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className={`text-lg font-bold flex items-center ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={scrolled ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text' : 'text-white'}>Z</span>
              <span className="hidden sm:inline">akaryae Chrif</span>
            </motion.h1>
            
            <motion.div 
              className={`flex justify-center space-x-1 py-1 px-2 mx-auto ${
                scrolled 
                  ? 'bg-blue-50/50 rounded-full' 
                  : 'bg-white/10 rounded-full backdrop-blur-sm'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`flex items-center space-x-1 px-2 py-1.5 rounded-full transition-all text-xs sm:text-sm font-medium nav-item-hover ${
                    activeSection === section.id
                      ? scrolled 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                        : 'bg-white text-blue-700 shadow-md'
                      : scrolled 
                        ? 'text-gray-700 hover:bg-blue-100/70' 
                        : 'text-white hover:bg-white/20'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="flex items-center justify-center">{section.icon}</span>
                  <span className="hidden xs:inline">{section.title}</span>
                </motion.button>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-1.5 rounded-full transition-all transform hover:scale-110 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                }`}
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-1.5 rounded-full transition-all transform hover:scale-110 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                }`}
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:z.chrif@lprs.fr" 
                className={`p-1.5 rounded-full transition-all transform hover:scale-110 ${
                  scrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                }`}
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>
      
      <div className="pt-14"></div>
      
      <Header />
      
      <main>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="techwatch">
          <TechWatch />
        </section>
      </main>
      
      <Footer />
      
      <AnimatePresence>
        {showGame && <HiddenGame onClose={() => setShowGame(false)} />}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setShowGame(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-full shadow-lg z-40"
        variants={gameButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        aria-label="Quiz du Portfolio"
      >
        <Gamepad2 size={18} />
      </motion.button>
    </div>
  );
}

export default App;