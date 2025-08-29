import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsSection = () => {
  const integrations = ["CRM", "Payments", "Scheduling", "Analytics"];

  return (
    <section
      id="integrations"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-300"
    >
      <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Integrations (Future)
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {integrations.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl border p-6 shadow-sm bg-white dark:bg-gray-700 transition-colors duration-300"
          >
            <p className="font-medium mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">{tool}</p>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 transition-colors duration-300">
              Connected
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
