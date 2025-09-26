import React from "react";
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";
import heroBanner from "../assets/images/herobanner.png";
import heroBannerVertical from "../assets/images/herobannervertical.png";

const splitter = new GraphemeSplitter();
const headlineChars = splitter.splitGraphemes("🔥 Muma’s ‘Mazing BBQ 🔥");

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
      className="relative w-full min-h-[80vh] md:h-screen bg-cover bg-no-repeat bg-center flex items-center px-4 sm:px-6 md:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        willChange: "transform",
      }}
    >
      {/* Mobile background override */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              background-image: url(${heroBannerVertical}) !important;
              background-position: center top !important;
              background-size: cover !important;
              background-repeat: no-repeat !important;
            }
          }
        `}
      </style>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 w-full h-10 bg-gradient-to-b from-transparent to-black z-10"></div>

      {/* Headline and Tagline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-[4rem] font-heading text-white mb-4 leading-tight tracking-wider whitespace-nowrap overflow-hidden text-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          style={{
            willChange: "transform, opacity",
            minWidth: "fit-content",
          }}
        >
          <span className="animate-glow">🔥Muma's 'Mazing BBQ🔥</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl font-body italic text-white px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          "Where the grill meets greatness & steak saves the day!"
        </motion.p>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default HeroBanner;
