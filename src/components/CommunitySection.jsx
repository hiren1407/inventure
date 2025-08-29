import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Target } from 'lucide-react';

const CommunitySection = () => {
  const communityMembers = [
    { name: "Alex", role: "Senior Recruiter", icon: User },
    { name: "Jordan", role: "HR Manager", icon: Briefcase },
    { name: "Taylor", role: "Talent Acquisition", icon: Target }
  ];

  return (
    <section
      id="community"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-300"
    >
      <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Community (Future)
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-6">
        {communityMembers.map(({ name, role, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl border p-6 shadow-sm bg-white dark:bg-gray-700 transition-colors duration-300"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 mb-4 transition-colors duration-300 flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">{name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-300">
              {role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
