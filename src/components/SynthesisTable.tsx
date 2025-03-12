import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Download } from 'lucide-react';

const SynthesisTable = () => {
  const handleDownloadTable = () => {
    const link = document.createElement('a');
    link.href = '/tableau-competences.xlsx';
    link.download = 'tableau-competences.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="bg-[#217346] p-3 rounded-lg mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <FileSpreadsheet size={32} className="text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Tableau de Synthèse BTS SIO</h2>
                <p className="text-gray-600 mt-1">Référentiel de compétences</p>
              </div>
            </motion.div>
            
            <motion.button
              onClick={handleDownloadTable}
              className="flex items-center px-6 py-3 bg-[#217346] text-white rounded-lg hover:bg-[#1a5c38] transition-colors shadow-lg"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(33, 115, 70, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Télécharger le tableau de synthèse
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SynthesisTable;