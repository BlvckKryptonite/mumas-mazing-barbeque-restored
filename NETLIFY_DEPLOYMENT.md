# Netlify Deployment Guide

This guide explains how to deploy your Muma's 'Mazing BBQ website to Netlify.

## Prerequisites

1. A Netlify account
2. A Stripe account with API keys
3. Your code repository pushed to Git (GitHub, GitLab, or Bitbucket)

## Environment Variables

You'll need to set up the following environment variables in your Netlify dashboard:

### Required Environment Variables

#### `STRIPE_SECRET_KEY`
- **Description**: Your Stripe secret API key for processing payments
- **Where to find it**: Stripe Dashboard → Developers → API keys
- **Example**: `sk_test_...` (test) or `sk_live_...` (production)
- **Required**: Yes

### How to Set Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add variable**
4. Set the variable name and value
5. Click **Save**

## Deployment Steps

### Step 1: Connect Your Repository

1. Log in to Netlify
2. Click "New site from Git"
3. Choose your Git provider and repository
4. Select the branch to deploy (usually `main` or `master`)

### Step 2: Configure Build Settings

Netlify should automatically detect your build settings from `netlify.toml`, but verify:

- **Base directory**: Leave empty (root)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### Step 3: Set Environment Variables

Add the required environment variables as described above.

### Step 4: Deploy

1. Click "Deploy site"
2. Wait for the build to complete
3. Your site will be available at a generated Netlify URL

## Custom Domain (Optional)

To use your own domain:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

## Build Process

The build process will:

1. Install dependencies with `npm install`
2. Build the React app with `npm run build`
3. Deploy the built files to Netlify's CDN
4. Deploy the serverless functions for payment processing

## API Endpoints

After deployment, your API endpoints will be available at:

- `https://yoursite.netlify.app/api/create-checkout-session`
- `https://yoursite.netlify.app/api/checkout-session/:session_id`
- `https://yoursite.netlify.app/api/health`

## Testing

1. Visit your deployed site
2. Test the payment flow by clicking "Buy Tickets"
3. Use Stripe test card numbers to verify payment processing
4. Check the Netlify function logs for any errors

## Troubleshooting

### Common Issues

1. **Environment variables not set**: Ensure `STRIPE_SECRET_KEY` is configured
2. **Build failures**: Check the build logs in Netlify dashboard
3. **Function errors**: Check function logs in Netlify dashboard
4. **CORS issues**: The functions are configured for your Netlify domain

### Build Logs

To view build logs:
1. Go to your site dashboard
2. Click on a deployment
3. View the deploy log for detailed information

### Function Logs

To view function logs:
1. Go to **Functions** tab in your site dashboard
2. Click on a function to view its logs
3. Monitor real-time logs during testing

## Security Notes

- Never commit your `STRIPE_SECRET_KEY` to version control
- Use Stripe test keys during development
- Switch to live keys only when ready for production
- The CORS configuration restricts API access to your domain

## Performance

Your site is optimized for Netlify with:

- Code splitting for faster loading
- Optimized image delivery
- Global CDN distribution
- Automatic HTTPS
- Gzip compression

## Support

If you encounter issues:

1. Check Netlify's documentation
2. Review function logs
3. Test with Stripe's test environment
4. Verify environment variables are set correctly