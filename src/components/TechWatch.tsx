import React from 'react';
import { Calendar, Clock, Tag, ExternalLink } from 'lucide-react';

const TechWatch = () => {
  const articles = [
    {
      id: 1,
      title: "L'impact de l'IA dans la cybersécurité en 2025",
      date: "15 mars 2025",
      readTime: "8 min",
      category: "Intelligence Artificielle",
      summary: "Comment l'intelligence artificielle révolutionne la détection des menaces et la réponse aux incidents de sécurité dans les entreprises modernes.",
      link: "#"
    },
    {
      id: 2,
      title: "Zero Trust : L'avenir de la sécurité réseau",
      date: "28 février 2025",
      readTime: "6 min",
      category: "Sécurité",
      summary: "Analyse approfondie de l'architecture Zero Trust et son adoption croissante dans les entreprises pour renforcer la sécurité des systèmes.",
      link: "#"
    },
    {
      id: 3,
      title: "Les innovations en authentification biométrique",
      date: "10 février 2025",
      readTime: "10 min",
      category: "Authentification",
      summary: "Les dernières avancées en matière d'authentification biométrique et leur impact sur la sécurité des systèmes d'information.",
      link: "#"
    },
    {
      id: 4,
      title: "L'évolution des attaques par ransomware",
      date: "25 janvier 2025",
      readTime: "7 min",
      category: "Menaces",
      summary: "Analyse des nouvelles tendances dans les attaques par ransomware et les stratégies de protection recommandées.",
      link: "#"
    }
  ];

  return (
    <section id="techwatch" className="py-12 bg-gray-50 dark:bg-dark-primary">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-dark-text">Veille Technologique</h2>
        
        <div className="mb-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm">
            En tant que professionnel de l'informatique, je maintiens une veille technologique active 
            pour rester informé des dernières évolutions dans les domaines de l'infrastructure réseau, 
            de la cybersécurité et des systèmes d'information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center bg-blue-100 dark:bg-dark-accent/20 text-blue-800 dark:text-dark-accent text-xs font-medium px-2 py-0.5 rounded-full">
                    <Tag size={12} className="mr-1" />
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Calendar size={12} className="mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-dark-text">{article.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{article.summary}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>{article.readTime} de lecture</span>
                  </div>
                  
                  <a 
                    href={article.link} 
                    className="inline-flex items-center text-blue-600 dark:text-dark-accent hover:text-blue-800 dark:hover:text-dark-accent/80 text-sm font-medium"
                  >
                    Lire
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-dark-text text-center">Mes sources de veille</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-gray-50 dark:bg-dark-border/30 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-dark-text mb-1 text-sm">Sites spécialisés</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                <li>ZDNet, The Register</li>
                <li>Krebs on Security</li>
                <li>ANSSI</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-border/30 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-dark-text mb-1 text-sm">Newsletters</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                <li>CERT-FR, Microsoft Security</li>
                <li>Cisco Security</li>
                <li>Dark Reading</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-border/30 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-dark-text mb-1 text-sm">Réseaux sociaux</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                <li>Twitter/X Tech</li>
                <li>LinkedIn, Reddit r/sysadmin</li>
                <li>Discord tech</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-border/30 p-3 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-dark-text mb-1 text-sm">Événements</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-0.5">
                <li>FIC (Cybersécurité)</li>
                <li>IT Partners</li>
                <li>Microsoft Ignite, Cisco Live</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nouvelle section conclusion */}
        <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-dark-accent/10 dark:to-dark-accent/5 rounded-lg p-6 border border-blue-100 dark:border-dark-border">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-dark-text text-center">
            Conclusion et Impact
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            Grâce à cette veille technologique active, je peux mieux anticiper les évolutions technologiques 
            dans l'informatique embarquée et la cybersécurité, ce qui me permet d'adapter mes compétences 
            aux besoins du marché. Cette approche proactive me permet de rester à la pointe des nouvelles 
            technologies et de proposer des solutions innovantes et sécurisées à mes futurs employeurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechWatch;