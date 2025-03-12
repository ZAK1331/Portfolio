import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Building, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('resume');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expérience professionnelle
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="col-span-1"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 h-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              <div className="flex items-center mb-6">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-full mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <GraduationCap size={24} className="text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">Formation</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">BTS SIO - Option SISR</h4>
                    <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full flex items-center">
                      <Calendar size={14} className="mr-1" />
                      2023 2025
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Building size={14} className="mr-1 text-gray-400" />
                    Lycée Robert Schuman, Dugny
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">Bac Pro Systèmes Numériques</h4>
                    <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full flex items-center">
                      <Calendar size={14} className="mr-1" />
                      2020 2023
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Building size={14} className="mr-1 text-gray-400" />
                    Lycée Robert Schuman, Dugny
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">Certifications</h4>
                  </div>
                  <p className="text-sm text-gray-600">PIX (compétences numériques)</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 h-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              <div className="flex items-center mb-6">
                <motion.div 
                  className="bg-blue-100 p-3 rounded-full mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Briefcase size={24} className="text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">Expérience professionnelle</h3>
              </div>
              
              <div className="space-y-8 relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <motion.div 
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  
                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800 text-lg">Alternance - SNCF Direction Transiliens</h4>
                      <span className="text-sm bg-blue-100 text-blue-600 py-1 px-2 rounded-full flex items-center mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        2024 2025
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      Saint-denis, France
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 mt-2">
                      <li>Résolution de pannes réseau</li>
                      <li>Interventions terrain sur les automates de vente et bornes de validation</li>
                      <li>Analyse des tickets d'incidents et suivi des interventions via ServiceNow</li>
                      <li>Extraction et analyse des données avec Excel & Power BI pour suivre la disponibilité et l'état des bornes</li>
                      <li>Gestion des accès et diagnostics via Calife</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow"></div>
                  
                  <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800 text-lg">Alternance - École Fidelis</h4>
                      <span className="text-sm bg-purple-100 text-purple-600 py-1 px-2 rounded-full flex items-center mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        2024 (6 semaines)
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      Montreuil, France
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                      <li>Résolution de pannes réseau</li>
                      <li>Installation et configuration PC et d'imprimantes</li>
                      <li>Vérification et maintenance des PC</li>
                      <li>Assistance aux enseignants pour le matériel informatique</li>
                      <li>Suivi et mise à jour des systèmes</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow"></div>
                  
                  <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800 text-lg">CDD - SNCF Gare du Nord (Jeux Olympiques 2024)</h4>
                      <span className="text-sm bg-indigo-100 text-indigo-600 py-1 px-2 rounded-full flex items-center mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        2024
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      Paris, France
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                      <li>Accueil et orientation des voyageurs</li>
                      <li>Assistance personnalisée aux passagers</li>
                      <li>Vente et conseil sur les services et produits de la SNCF</li>
                      <li>Contribution à la fluidité des flux voyageurs et à la sécurité en gare</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative pl-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-teal-500 border-4 border-white shadow"></div>
                  
                  <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800 text-lg">Stages - Direction de l'Ingénierie SNCF</h4>
                      <span className="text-sm bg-teal-100 text-teal-600 py-1 px-2 rounded-full flex items-center mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        2020/2021/2022/2024
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 flex items-center">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      Saint-Denis, France
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                      <li>Masterisation de postes</li>
                      <li>Création de comptes dans le domaine Active Directory</li>
                      <li>Activation de Calife</li>
                      <li>Configuration et gestion des postes sur AD</li>
                      <li>Installation d'imprimantes</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.button
            onClick={handleDownloadCV}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="mr-2" />
            Télécharger mon CV complet
          </motion.button>
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-md p-6 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">Compétences clés acquises en entreprise</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-medium text-blue-700 mb-2">Administration système</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Active Directory</li>
                <li>• Windows Server</li>
                <li>• Droits NTFS</li>
                <li>• Gestion des utilisateurs</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-medium text-purple-700 mb-2">Support technique</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Résolution d'incidents</li>
                <li>• Maintenance matérielle</li>
                <li>• Assistance utilisateurs</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-lg border border-green-100"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-medium text-green-700 mb-2">Réseau</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Diagnostic de pannes</li>
                <li>• Configuration d'équipements</li>
                <li>• Sécurisation des accès</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="font-medium text-amber-700 mb-2">Compétences transversales</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Communication</li>
                <li>• Travail en équipe</li>
                <li>• Gestion de projet</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;