import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Demo mode configuration
const DEMO_MODE = true;

const StripeCheckout = ({ tier, onClose, quantity = 1, onQuantityChange }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    if (DEMO_MODE) {
      // Demo mode: show message and redirect to contact
      setShowDemoMessage(true);
      
      setTimeout(() => {
        onClose();
        navigate('/contact');
      }, 3000);
      
      setLoading(false);
      return;
    }

    // Original Stripe flow (when DEMO_MODE is false)
    try {
      const stripe = await stripePromise;

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: tier.priceId,
          tierName: tier.title,
          price: tier.price,
          quantity: quantity,
        }),
      });

      const session = await response.json();

      if (session.error) {
        setError(session.error);
        return;
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      onQuantityChange(newQuantity);
    }
  };

  const totalPrice = (parseFloat(tier.price.replace('$', '')) * quantity).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-black border-2 border-yellow-400 rounded-lg p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-heading text-yellow-300 mb-4">
          Purchase {tier.title}
        </h3>

        <div className="mb-6">
          <p className="text-3xl font-bold text-red-500 mb-4">{tier.price}</p>
          <ul className="space-y-2 text-white">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-yellow-400 mr-2">✔️</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded">
            {error}
          </div>
        )}

        {showDemoMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 bg-yellow-600 text-black rounded-lg border-2 border-yellow-400"
          >
            <p className="font-bold text-center">
              🔥 This is a demo site! If you'd like to book Muma's 'Maziness, contact me and I'll get you sizzling with the real thing👇
            </p>
            <p className="text-sm text-center mt-2">Redirecting to contact page...</p>
          </motion.div>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg text-gray-300">Quantity:</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold"
            >
              -
            </button>
            <span className="text-xl font-bold text-white w-12 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= 10}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-white">Total:</span>
            <span className="text-2xl font-bold text-yellow-400">${totalPrice}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-3 px-6 font-heading border-2 border-white transition"
          >
            {loading ? (DEMO_MODE ? 'Redirecting...' : 'Processing...') : 'Complete Purchase'}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-3 border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StripeCheckout;