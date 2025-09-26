import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is this a family-friendly event?",
    answer:
      "Absolutely! We welcome grill-lovers of all ages. There’s even a mini BBQ hero play zone for the kiddos!",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just your appetite and your BBQ spirit! We provide the rest — food, drinks, music, and fun.",
  },
  {
    question: "Are vegetarian/vegan options available?",
    answer:
      "Yes! We’ve got grilled veggie skewers, Beyond Burgers, and smoked tofu. Even plant-based fans can join the BBQverse.",
  },
  {
    question: "Where can I park?",
    answer:
      "We’ve got plenty of on-site parking and superhero valet support. Capes optional.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-20 px-6 md:px-12 z-10 font-body overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-heading text-[#db2626] uppercase mb-10 drop-shadow-md">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border-4 ${
                openIndex === index ? "border-red-600" : "border-[#f6e5c3]"
              } p-6 cursor-pointer bg-gray-900 hover:bg-gray-800 transition`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold font-heading text-white">
                  {faq.question}
                </h3>
                <span className="text-2xl font-bold text-yellow-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-gray-300 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            section#faq {
              background-image: none !important;
              background-color: #000 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
