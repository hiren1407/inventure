import React from 'react';
import { motion } from 'framer-motion';

const AIChatbot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      >
        <p className="text-sm mb-2 font-medium">AI Assistant</p>
        <div className="text-sm bg-gray-100 dark:bg-gray-600 rounded-lg p-2 transition-colors duration-300">
          Ask me about hiring!
        </div>
      </motion.div>
    </div>
  );
};

export default AIChatbot;
