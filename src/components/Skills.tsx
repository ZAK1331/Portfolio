import React, { useEffect, useState, useRef } from 'react';
import { Server, Network, Shield } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import SynthesisTable from './SynthesisTable';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setIsVisible(true);
    }
  }, [controls, inView]);

  const skillCategories = [
    {
      id: 1,
      title: "Systèmes d'exploitation",
      icon: <Server size={24} className="text-blue-600" />,
      skills: [
        { name: "Windows 10/11", level: 70 },
        { name: "Windows Server", level: 70 },
        { name: "Linux", level: 70 },
        { name: "Active Directory", level: 80 }
      ]
    },
    {
      id: 2,
      title: "Réseau",
      icon: <Network size={24} className="text-blue-600" />,
      skills: [
        { name: "Adressage IP", level: 85 },
        { name: "Switching", level: 75 },
        { name: "Routage", level: 70 },
        { name: "VLAN", level: 65 }
      ]
    },
    {
      id: 3,
      title: "Sécurité",
      icon: <Shield size={24} className="text-blue-600" />,
      skills: [
        { name: "Firewall", level: 75 },
        { name: "VPN", level: 70 },
        { name: "Antivirus", level: 80 },
        { name: "Politique de sécurité", level: 65 }
      ]
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
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

  return (
    <>
      <section id="skills" className="py-16 bg-gray-50" ref={ref}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Compétences Acquises
          </motion.h2>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                className="bg-white rounded-xl shadow-md p-6"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-blue-100 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Synthesis Table Section */}
      <SynthesisTable />
    </>
  );
};

export default Skills;