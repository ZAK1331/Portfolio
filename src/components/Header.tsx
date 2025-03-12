import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const videoVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo en arrière-plan avec animation */}
      <motion.video
        variants={videoVariants}
        initial="hidden"
        animate="visible"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-lines-of-code-appearing-on-a-computer-screen-48299-large.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </motion.video>

      {/* Overlay gradient avec animation */}
      <motion.div 
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 z-10"
      />

      <motion.div 
        className="z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          Zakaryae Chrif
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-white"
        >
          Étudiant en BTS SIO - Option SISR
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center gap-4 mb-12"
        >
          <motion.button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir mon profil
          </motion.button>
          
          <motion.a 
            href="/cv.pdf" 
            target="_blank" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Télécharger mon CV
          </motion.a>
        </motion.div>
        
        <motion.button 
          onClick={scrollToContent}
          className="animate-bounce bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={24} className="text-white" />
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;