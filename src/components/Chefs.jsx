import React from "react";
import { motion } from "framer-motion";
import headChefImg from "../assets/images/headchef.png";
import flamebeardImg from "../assets/images/flamebeard-frank.png";
import sandraImg from "../assets/images/saucy-sandra.png";
import charlieImg from "../assets/images/charcoal-charlie.png";
import chefsBg from "../assets/images/chefs-background.png";
import SplitWords from "./animations/SplitWords";
import { Link } from "react-router-dom"; // Tickets page

const chefs = [
  {
    name: "Muma the Grillmaster",
    role: "Head Chef & Chief Firebender",
    img: headChefImg,
    desc: "Wields tongs like Thor wields Mjölnir. His legendary flame grilled buffalo wings once caused a standing ovation at a silent retreat.",
  },
  {
    name: "Flamebeard Frank",
    role: "Smoker Supreme",
    img: flamebeardImg,
    desc: "Can smoke a whole rack of ribs with just a glance. Rubbed ribs so perfectly, even vegetarians shed a tear.",
  },
  {
    name: "Saucy Sandra",
    role: "Condiment Conjurer",
    img: sandraImg,
    desc: "Invented 37 secret sauces. All of them perfect. They say her chili is so hot, it once grilled the bun.",
  },
  {
    name: "Charcoal Charlie",
    role: "Pit Magician",
    img: charlieImg,
    desc: "Charcoal lights itself when he enters. Once grilled in a snowstorm — turned it into summer. No one knows how.",
  },
];

const Chefs = () => {
  const headChef = chefs[0];
  const otherChefs = chefs.slice(1);

  return (
    <motion.section
      className="relative chefs-bg text-white py-20 px-4 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${chefsBg})`,
        willChange: 'transform, opacity'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Mobile-only absolute <img> fallback */}
      <img
        src={chefsBg}
        alt="Chefs Background"
        className="md:hidden absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 tracking-wide text-[#b91c1c] drop-shadow-md">
          Meet Our Chefs
        </h2>

        <div className="max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-black border-4 border-yellow-400 p-6 rounded-lg shadow-lg min-h-[400px] head-chef-glow hover:head-chef-glow-hover transition-all duration-200"
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src={headChef.img}
              alt={headChef.name}
              className="w-full object-contain mb-4 rounded-md max-h-[400px]"
            />
            <h3 className="text-2xl font-heading text-yellow-300">
              {headChef.name}
            </h3>
            <p className="italic text-sm">{headChef.role}</p>
            <p className="mt-2 font-body">
              <SplitWords text={headChef.desc} />
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherChefs.map((chef, idx) => (
            // Card Background Glow Effect
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-black border-2 border-white p-6 rounded-lg shadow-md min-h-[360px] glow-on-scroll hover:glow-on-hover transition-all duration-200"
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full object-contain mb-4 rounded-md max-h-[400px]"
              />
              <h3 className="text-xl font-heading text-yellow-300">
                {chef.name}
              </h3>
              <p className="italic text-sm">{chef.role}</p>
              <p className="mt-2 font-body">
                <SplitWords text={chef.desc} />
              </p>
            </motion.div>
          ))}
        </div>

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
    </motion.section>
  );
};

export default Chefs;