import React from "react";
import { motion } from "framer-motion";
import eventBg from "../assets/images/chefs-background.png"; // imported image
import SplitWords from "./animations/SplitWords";
import { Link } from "react-router-dom"; // Tickets page

const EventDetails = () => {
  return (
    <motion.section
      id="event-details"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-black text-white py-20 px-6 md:px-12 font-body event-bg"
      style={{
        backgroundImage: `url(${eventBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      {/* Mobile override for background */}
      <style>
        {`
          @media (max-width: 768px) {
            section.event-bg {
              background-image: url('${eventBg}') !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
              background-size: cover !important;
            }
          }
        `}
      </style>

      {/* Event content layer */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 tracking-wide text-[#b91c1c] drop-shadow-md">
            Event Details
          </h2>

          <p className="text-2xl font-bold text-yellow-300 leading-tight">
            🔥 Saturday, August 9<br />
            🍖 1:00PM CDT
          </p>

          <div className="text-lg leading-relaxed text-gray-200 space-y-2">
            <p className="font-bold text-white">
              📍 The Grill Grounds — Dow Academic Center
            </p>
            <p>
              <SplitWords text="Brazosport College" />
              <br />
              <SplitWords text="500 College Blvd" />
              <br />
              <SplitWords text="Lake Jackson, TX 77566" />
            </p>
            <p className="italic text-sm text-gray-400 pt-2">
              <SplitWords text="Brought to you by The League of Flame-Wielding Foodies™" />
            </p>
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
              Reserve Your Spot
            </motion.button>
          </Link>
        </div>

        {/* Google Map */}
        <div className="border-4 border-red-600 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="BBQ Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.987713507736!2d-95.40828046550254!3d29.049488273854728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86404213fa62f5ff%3A0x1a1db666b512d5ab!2sBrazosport%20College!5e0!3m2!1sen!2szm!4v1752074238430!5m2!1sen!2szm"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default EventDetails;