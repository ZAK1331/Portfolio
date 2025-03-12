import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Award, Brain, Lightbulb, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

const HiddenGame = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  // Questions du quiz sur l'informatique générale
  const questions = [
    {
      question: "Quel protocole est principalement utilisé pour les pages web sécurisées ?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: 1,
      explanation: "HTTPS (HyperText Transfer Protocol Secure) est la version sécurisée de HTTP qui utilise le chiffrement SSL/TLS pour protéger les communications entre le navigateur et le serveur web."
    },
    {
      question: "Qu'est-ce qu'un VLAN dans un réseau informatique ?",
      options: ["Virtual Local Area Network", "Very Large Area Network", "Virtual Link Access Node", "Variable Length Address Network"],
      correctAnswer: 0,
      explanation: "Un VLAN (Virtual Local Area Network) est un réseau local virtuel qui permet de segmenter logiquement un réseau physique pour améliorer la sécurité et les performances."
    },
    {
      question: "Quelle technologie permet de faire fonctionner plusieurs systèmes d'exploitation sur une même machine physique ?",
      options: ["Multiprocessing", "Multithreading", "Virtualisation", "Containerisation"],
      correctAnswer: 2,
      explanation: "La virtualisation permet d'exécuter plusieurs systèmes d'exploitation sur une même machine physique en créant des machines virtuelles isolées qui partagent les ressources matérielles."
    },
    {
      question: "Quel service est responsable de la résolution des noms de domaine en adresses IP ?",
      options: ["DHCP", "DNS", "NAT", "SNMP"],
      correctAnswer: 1,
      explanation: "Le DNS (Domain Name System) est le service qui traduit les noms de domaine lisibles par les humains (comme google.com) en adresses IP utilisées par les ordinateurs pour communiquer."
    },
    {
      question: "Quelle est la principale différence entre un hub et un switch réseau ?",
      options: ["Le prix", "La vitesse", "La gestion du trafic", "La taille physique"],
      correctAnswer: 2,
      explanation: "La principale différence est la gestion du trafic. Un hub diffuse les données à tous les appareils connectés, tandis qu'un switch envoie les données uniquement à l'appareil destinataire, ce qui améliore les performances et la sécurité."
    }
  ];

  // Informations techniques à débloquer
  const secretInfo = [
    {
      title: "Tendances en cybersécurité",
      content: "L'authentification multi-facteurs (MFA) devient la norme pour sécuriser les accès. Les entreprises adoptent de plus en plus des solutions Zero Trust qui vérifient continuellement l'identité des utilisateurs et des appareils."
    },
    {
      title: "Évolution des infrastructures",
      content: "Les architectures de microservices et les technologies sans serveur (serverless) transforment le développement d'applications en permettant une meilleure scalabilité et une réduction des coûts d'infrastructure."
    },
    {
      title: "Intelligence artificielle dans l'IT",
      content: "L'IA est de plus en plus intégrée dans les outils de surveillance et de gestion des infrastructures IT, permettant une détection proactive des problèmes et une automatisation des tâches répétitives."
    },
    {
      title: "Compétences IT recherchées",
      content: "Les professionnels maîtrisant à la fois le cloud, la sécurité et l'automatisation sont particulièrement recherchés. La capacité à orchestrer des environnements hybrides est devenue une compétence clé."
    }
  ];

  // Empêcher le défilement de la page principale lorsque le jeu est ouvert
  useEffect(() => {
    const handleBodyScroll = (e) => {
      if (e.target.closest('.quiz-content-scrollable') === null) {
        e.preventDefault();
      }
    };

    // Désactiver le défilement sur le body quand le jeu est ouvert
    document.body.style.overflow = 'hidden';
    
    // Nettoyer lors du démontage du composant
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Timer pour chaque question
    let interval = null;
    if (timerActive && timer > 0 && !showScore && !showExplanation) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !showScore && !showExplanation) {
      // Si le temps est écoulé, passer à la question suivante
      setIsCorrect(false);
      setShowExplanation(true);
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timer, timerActive, showScore, showExplanation]);

  const handleAnswerClick = (answerIndex) => {
    if (showExplanation) return; // Empêcher de répondre pendant l'explication
    
    setSelectedAnswer(answerIndex);
    setTimerActive(false);
    
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTimer(30);
    setTimerActive(true);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else {
      setShowScore(true);
      // Si le score est bon, montrer la récompense
      if (score >= Math.floor(questions.length * 0.6)) {
        setShowReward(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setShowReward(false);
    setTimer(30);
    setTimerActive(true);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Brain size={24} className="text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Quiz Informatique</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="quiz-content-scrollable overflow-y-auto flex-1 pr-2">
          {!showScore ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Question {currentQuestion + 1}/{questions.length}</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    timer > 10 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {timer} secondes
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">{questions[currentQuestion].question}</h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedAnswer === index 
                          ? isCorrect 
                            ? 'bg-green-100 border-green-500 text-green-800' 
                            : 'bg-red-100 border-red-500 text-red-800'
                          : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                      }`}
                      disabled={selectedAnswer !== null}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 text-sm font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                        {selectedAnswer === index && (
                          isCorrect 
                            ? <CheckCircle size={20} className="ml-auto text-green-600" /> 
                            : <XCircle size={20} className="ml-auto text-red-600" />
                        )}
                        {selectedAnswer !== null && index === questions[currentQuestion].correctAnswer && selectedAnswer !== index && (
                          <CheckCircle size={20} className="ml-auto text-green-600" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {showExplanation && (
                <motion.div 
                  className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start">
                    <Lightbulb size={20} className={`mr-2 mt-0.5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
                    <div>
                      <h4 className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'} mb-1`}>
                        {isCorrect ? 'Bonne réponse!' : 'Pas tout à fait...'}
                      </h4>
                      <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {showExplanation && (
                <div className="flex justify-end">
                  <motion.button
                    onClick={handleNextQuestion}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir le résultat'}
                    <ChevronRight size={18} className="ml-1" />
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                  <Award size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz terminé!</h3>
                <p className="text-gray-600 mb-4">Vous avez obtenu {score} sur {questions.length} points</p>
                
                <div className="w-64 h-64 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-600">{Math.round((score / questions.length) * 100)}%</div>
                  </div>
                  <svg className="absolute top-0 left-0" width="256" height="256" viewBox="0 0 256 256">
                    <circle 
                      cx="128" 
                      cy="128" 
                      r="120" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="12"
                    />
                    <circle 
                      cx="128" 
                      cy="128" 
                      r="120" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="12"
                      strokeDasharray={2 * Math.PI * 120}
                      strokeDashoffset={2 * Math.PI * 120 * (1 - score / questions.length)}
                      transform="rotate(-90 128 128)"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                
                {showReward ? (
                  <motion.div 
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6 text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Informations techniques exclusives débloquées!</h4>
                    <div className="space-y-4">
                      {secretInfo.map((info, index) => (
                        <motion.div 
                          key={index}
                          className="bg-white p-4 rounded-md shadow-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + (index * 0.2) }}
                        >
                          <h5 className="font-medium text-gray-800 mb-1">{info.title}</h5>
                          <p className="text-gray-600">{info.content}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-amber-800">
                      Obtenez au moins 60% de bonnes réponses pour débloquer des informations exclusives sur les tendances IT!
                    </p>
                  </motion.div>
                )}
                
                <div className="flex justify-center space-x-4">
                  <motion.button
                    onClick={restartQuiz}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Rejouer
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Fermer
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HiddenGame;