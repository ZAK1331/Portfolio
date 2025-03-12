import React, { useState, useEffect } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "Projet LPRS: Infrastructure réseau d'une école",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      description: "Conception et mise en place de l'infrastructure réseau complète pour un établissement scolaire, incluant la segmentation, la sécurisation et l'optimisation des ressources.",
      skills: ["Réseau", "Switching", "VLAN", "Sécurité"],
      link: "#"
    },
    {
      id: 2,
      title: "Projet Chef d'œuvre: Plateforme de cours et exercices",
      category: "Développement Web",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Développement d'une plateforme web permettant aux enseignants de partager des cours et des exercices avec leurs élèves, facilitant l'apprentissage à distance.",
      skills: ["HTML/CSS", "JavaScript", "Base de données", "UX/UI"],
      link: "#"
    },
    {
      id: 3,
      title: "Projet PHP: Site pour une compagnie aérienne",
      category: "Développement Web",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description: "Création d'un site web dynamique pour une compagnie aérienne permettant la réservation de vols, la gestion des comptes clients et l'affichage des informations de vol.",
      skills: ["PHP", "MySQL", "JavaScript", "Responsive Design"],
      link: "#"
    }
  ];
  
  const nextProject = () => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setIsChanging(false);
    }, 300);
  };
  
  const prevProject = () => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsChanging(false);
    }, 300);
  };

  // Auto-rotation des projets
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 animate-fadeIn">Mes Projets</h2>
        
        <div className="relative">
          {/* Project Carousel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-scaleIn">
            <div className="md:flex">
              {/* Project Image */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title} 
                  className={`w-full h-full object-cover transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full animate-fadeIn">
                  {projects[activeProject].category}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="md:w-1/2 p-8">
                <h3 className={`text-2xl font-semibold mb-4 text-gray-800 transition-all duration-300 ${isChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  {projects[activeProject].title}
                </h3>
                
                <p className={`text-gray-600 mb-6 transition-all duration-300 delay-100 ${isChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  {projects[activeProject].description}
                </p>
                
                <div className={`mb-6 transition-all duration-300 delay-200 ${isChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  <h4 className="text-lg font-medium mb-3 text-gray-800">Compétences utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded-full transition-all hover:bg-blue-100 hover:text-blue-700"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`flex justify-between items-center transition-all duration-300 delay-300 ${isChanging ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  <a 
                    href={projects[activeProject].link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all hover:translate-x-1"
                  >
                    Voir la documentation
                    <ExternalLink size={18} className="ml-1" />
                  </a>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {activeProject + 1} / {projects.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevProject}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Project Thumbnails */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeProject === index ? 'ring-2 ring-blue-600 scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-24 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;