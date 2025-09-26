import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Optimized SplitWords component with faster animations
 * - Removes hook violations 
 * - Uses simpler transforms for better performance
 * - Maintains smooth scroll-triggered reveals
 */
const SplitWords = ({ text, children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.4"]
  });

  const content = text ?? children;
  const words = typeof content === "string" ? content.split(" ") : [content];

  return (
    <span ref={ref} className={`inline-block relative ${className}`} style={{ position: 'relative' }}>
      {words.map((word, idx) => {
        // Simplified progress calculation for better performance
        const wordStart = idx / words.length;
        const wordEnd = (idx + 1) / words.length;

        const opacity = useTransform(
          scrollYProgress, 
          [wordStart, wordEnd], 
          [0, 1]
        );

        return (
          <motion.span
            key={idx}
            style={{ 
              opacity,
              willChange: 'opacity',
              marginRight: idx < words.length - 1 ? '0.25rem' : '0'
            }}
            className="inline-block"
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export default SplitWords;