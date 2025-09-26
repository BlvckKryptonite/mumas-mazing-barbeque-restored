import React from "react";
import { motion } from "framer-motion";
import SplitWords from "./animations/SplitWords";
import bgImage from "../assets/images/chefs-background.png";
import { Link } from "react-router-dom"; // Tickets page

// Gallery images
import img1 from "../assets/images/food 1.png";
import img2 from "../assets/images/food 5.png";
import img3 from "../assets/images/food 7.png";
import img4 from "../assets/images/food 11.png";
import img5 from "../assets/images/food 10.png";
import img6 from "../assets/images/food 4.png";
import img7 from "../assets/images/food 3.png";
import img8 from "../assets/images/food 2.png";
import img9 from "../assets/images/food 6.png";
import img10 from "../assets/images/food 12.png";
import img11 from "../assets/images/food 13.png";
import img12 from "../assets/images/food 14.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const Gallery = () => {
  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative text-white py-20 px-6 md:px-12 font-body gallery-bg bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-heading text-[#db2626] uppercase drop-shadow-md">
            The Grillery 📸
          </h2>
        </div>

        <div className="text-center text-lg md:text-xl text-yellow-400 mb-10 font-bold max-w-3xl mx-auto leading-relaxed">
          <SplitWords speed={3}>
            Get a peek behind the smoke — where grills blaze, meat sizzles, and
            heroes pose with ribs like they’re trophies.
          </SplitWords>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border-[3px] border-[#F4E0B9] shadow-lg transform hover:scale-105 transition duration-300 bg-black max-w-[95%] mx-auto aspect-[3/4] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory px-2 mt-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] snap-center rounded-lg border-[3px] border-[#F4E0B9] shadow-md bg-black aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/tickets">
            <motion.button
              whileHover={{
                scale: 1.07,
                rotate: [-1, 1, 0],
                transition: { yoyo: Infinity, duration: 0.3 },
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-12 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-heading text-xl rounded-none border-2 border-white shadow-lg transition-transform"
            >
              Get Tickets
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile background override */}
      <style>
        {`
          @media (max-width: 768px) {
            section.gallery-bg {
              background-image: url('${bgImage}') !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
              background-size: cover !important;
            }
          }
        `}
      </style>
    </motion.section>
  );
};

export default Gallery;
