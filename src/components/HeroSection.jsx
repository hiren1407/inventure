import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <main
      id="home"
      className="flex-1 flex items-center justify-center px-6 py-20 text-center transition-colors duration-300 bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-gray-100">
          Recruiting Without Limits.
        </h2>
        <h3 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          Speed and Scale.
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
          We're building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform. This is recruitment rewritten for the modern era.
        </p>
      </motion.div>
    </main>
  );
};

export default HeroSection;
