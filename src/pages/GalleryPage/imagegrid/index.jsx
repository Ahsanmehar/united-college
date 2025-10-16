// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ImageGrid = ({ images, onImageClick }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      key={images.map((img) => img.id).join('-')}
      className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {images.map((image, index) => ( 
        <motion.div
          key={image.id}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative bg-white rounded-xl overflow-hidden shadow-two hover:shadow-one transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
          onClick={() => onImageClick(image, index)} 
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg mb-1">{image.title}</h3>
            <Badge
              variant="verify"
              className={`${image.badgeColor} text-white text-xs`}
            >
              {image.category}
            </Badge>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageGrid;
