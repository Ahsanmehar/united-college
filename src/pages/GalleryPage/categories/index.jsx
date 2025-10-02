// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-12 container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Complete Gallery
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        variants={containerVariants}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            variants={buttonVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-text hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CategoryFilter;
