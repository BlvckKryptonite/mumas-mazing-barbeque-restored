
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, tierName, price } = req.body;

    // Convert price string to cents (remove $ and convert to number)
    const priceInCents = Math.round(parseFloat(price.replace('$', '')) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${tierName} - Muma's Mazing BBQ Event`,
              description: 'BBQ Event Ticket - Saturday, August 9, 1:00PM CDT',
              images: [`${process.env.VITE_APP_URL || 'http://localhost:3000'}/attached_assets/muma-logo.png`],
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.VITE_APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || 'http://localhost:3000'}/tickets`,
      metadata: {
        tier: tierName,
        event: 'Mumas Mazing BBQ',
        date: 'August 9, 2025',
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
}
