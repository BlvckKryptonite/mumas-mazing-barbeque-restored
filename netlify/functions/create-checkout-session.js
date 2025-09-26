import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Build CORS headers with restricted origins
const getAllowedOrigins = () => {
  return [
    process.env.URL,
    process.env.DEPLOY_URL,
    process.env.DEPLOY_PRIME_URL,
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002'
  ].filter(Boolean);
};

const getCorsHeaders = (origin) => {
  const allowedOrigins = getAllowedOrigins();
  const isAllowed = allowedOrigins.includes(origin);
  
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0] || 'null',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
    'Vary': 'Origin'
  };
};

export const handler = async (event, context) => {
  const origin = event.headers.origin;
  const headers = getCorsHeaders(origin);

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { ticketType, quantity } = JSON.parse(event.body);
    
    const prices = {
      'early-bird': 2500,
      'general': 3500,
      'vip': 7500
    };

    // Properly derive the origin for success/cancel URLs
    const requestOrigin = event.headers.origin || 
      (event.rawUrl ? new URL(event.rawUrl).origin : 
        `${event.headers['x-forwarded-proto'] || 'https'}://${event.headers.host}`) ||
      process.env.URL || process.env.DEPLOY_URL || process.env.DEPLOY_PRIME_URL;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${ticketType.charAt(0).toUpperCase() + ticketType.slice(1)} Ticket - Muma's 'Mazing BBQ`,
            },
            unit_amount: prices[ticketType],
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${requestOrigin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${requestOrigin}/tickets`,
      metadata: {
        ticketType,
        quantity: quantity.toString()
      }
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to create checkout session' }),
    };
  }
};