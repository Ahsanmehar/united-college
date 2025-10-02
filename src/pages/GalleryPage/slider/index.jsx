// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React, { useState, useMemo } from 'react';
import SIcons from '@/components/SIcons';
import { Badge } from '@/components/ui/badge';

const ImageSlider = ({ images }) => {
  const sliderImages = useMemo(() => {
    const seen = new Set();
    return images.filter(img => {
      if (!seen.has(img.category)) {
        seen.add(img.category);
        return true;
      }
      return false;
    });
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-16 container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Gallery
      </motion.h2>

      <motion.p
        className="text-text text-center mb-12 max-w-2xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Explore highlights of our beautiful campus and vibrant student life.
      </motion.p>

      {/* Slider */}
      <motion.div
        className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderImages.map((image, i) => (
            <motion.div
              key={image.id}
              className="min-w-full relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                <Badge
                  variant="verify"
                  className={`${image.badgeColor} text-white text-xs`}
                >
                  {image.category}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <SIcons name="chevron-left" className="w-6 h-6" />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <SIcons name="chevron-right" className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;