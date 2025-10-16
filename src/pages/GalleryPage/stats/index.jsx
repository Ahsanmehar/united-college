// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import SIcons from '@/components/SIcons';

const AnimatedCounter = ({ number, duration = 2, className }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);

      let start = null;
      const startValue = 0;
      const endValue = number;

      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, hasStarted, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {count}+
    </motion.div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const StatsSection = () => {
  return (
    <motion.div
      className="container mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        Our Statistics
      </motion.h3>

      {/* Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <motion.div
          className="p-6 bg-bg rounded-xl flex flex-col items-center"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SIcons name="users" className="text-primary text-4xl mb-2" />
          <AnimatedCounter
            number={1000}
            duration={2}
            className="text-3xl font-bold text-primary mb-2"
          />
          <div className="text-text font-medium">Students</div>
        </motion.div>

        <motion.div
          className="p-6 bg-bg rounded-xl flex flex-col items-center"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SIcons name="book" className="text-primary text-4xl mb-2" />
          <AnimatedCounter
            number={20}
            duration={2}
            className="text-3xl font-bold text-primary mb-2"
          />
          <div className="text-text font-medium">Courses</div>
        </motion.div>

        <motion.div
          className="p-6 bg-bg rounded-xl flex flex-col items-center"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SIcons name="teacher" className="text-primary text-4xl mb-2" />
          <AnimatedCounter
            number={15}
            duration={2}
            className="text-3xl font-bold text-primary mb-2"
          />
          <div className="text-text font-medium">Faculty</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
