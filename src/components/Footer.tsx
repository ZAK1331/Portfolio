import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a href="mailto:z.chrif@lprs.fr" className="hover:text-blue-400 transition-colors">
                  z.chrif@lprs.fr
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                <span>+33 6 XX XX XX XX</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <span>Dugny, France</span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:z.chrif@lprs.fr" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">À propos</a>
              </li>
              <li>
                <a href="#resume" className="hover:text-blue-400 transition-colors">CV</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a>
              </li>
              <li>
                <a href="#techwatch" className="hover:text-blue-400 transition-colors">Veille Technologique</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Compétences</a>
              </li>
              <li>
                <a href="/cv.pdf" target="_blank" className="hover:text-blue-400 transition-colors">Télécharger mon CV</a>
              </li>
            </ul>
          </div>
          
          {/* About Site */}
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos de ce site</h3>
            <p className="text-gray-300 mb-4">
              Ce portfolio a été créé dans le cadre de mon BTS SIO option SISR pour présenter mes compétences, 
              projets et expériences professionnelles.
            </p>
            <p className="text-gray-300">
              Technologies utilisées : React, Tailwind CSS, Vite
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zakaryae Chrif. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;