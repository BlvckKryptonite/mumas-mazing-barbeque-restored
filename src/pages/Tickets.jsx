import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import SplitWords from "../components/animations/SplitWords";
import FAQ from "../components/FAQ";
import StripeCheckout from "../components/StripeCheckout";
import chefsBg from "../assets/images/chefs-background.png";

const pricingTiers = [
  {
    title: "GENERAL ADMISSION",
    price: "$25",
    priceId: "price_general_admission", // Replace with actual Stripe Price ID
    features: [
      "Entry to the BBQ Arena",
      "Access to all mouth-watering delights",
      "One BBQ hero plate",
      "Live music & games",
    ],
  },
  {
    title: "VIP PASS",
    price: "$50",
    priceId: "price_vip_pass", // Replace with actual Stripe Price ID
    features: [
      "Everything in General Admission",
      "Priority seating",
      "Muma's legendary wing platter",
    ],
  },
  {
    title: "ULTIMATE BBQ EXPERIENCE",
    price: "$75",
    priceId: "price_ultimate_experience", // Replace with actual Stripe Price ID
    features: [
      "All VIP Pass perks",
      "Backstage grill tour",
      "Access to BBQverse buffet",
      "Limited-edition BBQverse apron",
    ],
  },
];

const Tickets = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = (tier) => {
    setSelectedTier(tier);
    setShowCheckout(true);
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setSelectedTier(null);
  };

  return (
    <motion.section
      style={{ backgroundImage: `url(${chefsBg})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-24 px-6 font-body relative overflow-hidden"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Return Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="bg-yellow-400 text-black p-3 rounded-full shadow-lg border-2 border-white"
          >
            <FaArrowLeft className="text-lg" />
          </motion.button>
        </Link>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-heading text-orange-500 uppercase drop-shadow-lg mb-4 tracking-wider">
          GET TICKETS
        </h1>

        <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto">
          Choose your tier — every ticket comes with legendary flavors, fierce
          vibes, and enough smoke to summon the BBQ gods.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border-2 border-yellow-400 p-6 rounded-lg shadow-lg glow-on-scroll hover:glow-on-hover transition-all duration-300"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-heading text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">
                  {tier.title}
                </h3>
                <div className="text-4xl font-bold text-white mb-6 group-hover:text-yellow-100 transition-colors">
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBuyNow(tier)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 font-heading border-2 border-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                >
                  BUY NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          onClick={() => handleBuyNow(pricingTiers[0])}
          whileHover={{ scale: 1.08 }}
          className="text-white text-xl font-heading bg-red-600 hover:bg-red-700 px-10 py-4 border-2 border-white shadow-lg uppercase tracking-wide"
        >
          Purchase Now
        </motion.button>
      </div>

      {/* Stripe Checkout Modal */}
      {showCheckout && selectedTier && (
        <StripeCheckout
          tier={selectedTier}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onClose={() => {
            setShowCheckout(false);
            setSelectedTier(null);
            setQuantity(1);
          }}
        />
      )}
    </motion.section>
  );
};

export default Tickets;
