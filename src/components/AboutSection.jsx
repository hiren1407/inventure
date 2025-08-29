import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 text-center transition-colors duration-300 bg-white dark:bg-gray-900">
      <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        About
      </h4>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
        A minimalist, scalable design system that balances clarity with future-ready flexibility. Features like community integration, AI chat, and systems integrations are designed to grow seamlessly as the platform scales.
      </p>
    </section>
  );
};

export default AboutSection;
