import React from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 animate-fadeIn">Présentation Personnelle</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-scaleIn">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white animate-gradient">
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 rounded-full bg-white p-2 animate-pulse-slow">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Ordinateur portable avec code" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-center">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center animate-slideInLeft delay-100">
                  <MapPin size={20} className="mr-3" />
                  <span>Dugny, France</span>
                </div>
                <div className="flex items-center animate-slideInLeft delay-200">
                  <Mail size={20} className="mr-3" />
                  <span>z.chrif@lprs.fr</span>
                </div>
                <div className="flex items-center animate-slideInLeft delay-300">
                  <Phone size={20} className="mr-3" />
                  <span>+33 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center animate-slideInLeft delay-400">
                  <Calendar size={20} className="mr-3" />
                  <span>Disponible pour alternance</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-fadeIn">À propos de moi</h3>
              
              <p className="text-gray-600 mb-6 animate-fadeIn delay-200">
                Je m'appelle Zakaryae Chrif, étudiant en BTS SIO (Services Informatiques aux Organisations), 
                option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) au lycée privé Robert Schuman à Dugny.
              </p>
              
              <h4 className="text-xl font-semibold mb-3 text-gray-800 animate-fadeIn delay-300">Parcours académique</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2 animate-fadeIn delay-400">
                <li>2023 - 2025 : BTS SIO, option SISR au Lycée Robert Schuman</li>
                <li>2020 - 2023 : Baccalauréat professionnel Systèmes Numériques au Lycée Robert Schuman</li>
                <li>Certifications : PIX (compétences numériques)</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-3 text-gray-800 animate-fadeIn delay-500">Objectifs professionnels</h4>
              <p className="text-gray-600 animate-fadeIn delay-600">
                Je souhaite évoluer dans le domaine de l'infrastructure informatique et approfondir mes compétences 
                en administration réseau et en cybersécurité. Mon objectif est d'intégrer une entreprise en alternance 
                pour la période 2025/2026 afin de consolider mon expertise et gagner en expérience terrain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;