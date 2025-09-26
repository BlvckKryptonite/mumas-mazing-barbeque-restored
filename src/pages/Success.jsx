
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [sessionData, setSessionData] = useState(null);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Fetch session details from Stripe
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => setSessionData(data))
        .catch(err => console.error('Error fetching session:', err));
    }
  }, [sessionId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black text-white flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mb-8"
        >
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
        </motion.div>

        <h1 className="text-4xl font-heading text-yellow-400 mb-4">
          Payment Successful! 🔥
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Your BBQ ticket has been purchased successfully!
        </p>

        <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-heading text-yellow-300 mb-3">
            Event Details
          </h3>
          <div className="text-left space-y-2">
            <p><strong>Event:</strong> Muma's Mazing BBQ</p>
            <p><strong>Date:</strong> Saturday, August 9, 2025</p>
            <p><strong>Time:</strong> 1:00 PM CDT</p>
            <p><strong>Location:</strong> Brazosport College</p>
            {sessionData && (
              <p><strong>Confirmation:</strong> {sessionData.id}</p>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          A confirmation email has been sent to your email address.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-heading border-2 border-white flex items-center gap-2 mx-auto"
          >
            <FaHome />
            Back to Home
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Success;
