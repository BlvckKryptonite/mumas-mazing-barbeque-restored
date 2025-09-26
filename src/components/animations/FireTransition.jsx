
import React from 'react';
import { motion } from 'framer-motion';

const FireTransition = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)"
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default FireTransition;
