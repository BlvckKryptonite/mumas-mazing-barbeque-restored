# Overview

Muma's 'Mazing Barbeque is a comic book-inspired, animated landing page built as a React single-page application for a fictional BBQ event. The project showcases modern frontend development with rich animations, Stripe payment integration, and a responsive design optimized for entertainment and user engagement. It serves as both a marketing site and ticket booking platform for a themed BBQ event.

<<<<<<< HEAD
## Recent Changes
- **September 26, 2025**: Resolved merge conflicts and fixed Netlify build issues
  - Added `terser` dependency to fix Netlify production build minification error
  - Configured Vite for Replit environment (host 0.0.0.0, port 5000)
  - Resolved merge conflicts in package.json, vite.config.js, index.html, netlify.toml, and replit.md
  - Project is now fully functional in Replit with working build process

=======
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384
# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based architecture built with Vite as the build tool and development server. The component structure follows a single-page application pattern with React Router DOM for client-side navigation. Key architectural decisions include:

- **React 18 with functional components** - Leverages modern React features including hooks and concurrent rendering
- **Vite build system** - Chosen for fast development server and optimized production builds with manual code splitting for vendor, animations, and Stripe modules
- **Tailwind CSS for styling** - Utility-first approach with custom theme extensions for comic-style fonts (Bangers, Poppins) and flame animations
- **Framer Motion for animations** - Provides scroll-triggered animations and complex UI transitions throughout the site
- **Component-based organization** - Separates concerns with dedicated components for different sections (hero, chef cards, FAQ, etc.)

## Payment Processing
The application integrates Stripe for payment processing with multiple deployment strategies:

- **Stripe Checkout Sessions** - Uses Stripe's hosted checkout for secure payment processing
- **Multiple backend options** - Supports both Express.js server and Netlify Functions for serverless deployment
- **Demo mode capability** - Includes provisions for demo mode that bypasses Stripe and redirects to contact forms

## Routing and Navigation
Implements client-side routing for a multi-page experience:

- **React Router DOM v7** - Handles navigation between main landing page, tickets page, success page, and contact page
- **Hash-based routing consideration** - Configured to work with static hosting platforms like GitHub Pages
- **Responsive navigation** - Mobile-friendly navigation patterns throughout

## Styling and Animation System
The visual design emphasizes a comic book aesthetic with performance-optimized animations:

- **Custom CSS animations** - Includes flame effects, glow animations, and comic-style transitions
- **Performance optimizations** - Uses transform-based animations and reduced-motion considerations
- **Responsive design** - Mobile-first approach with custom breakpoints including 'xs' at 475px
- **Font loading strategy** - Google Fonts integration with display=swap for performance

## Build and Deployment Strategy
Supports multiple deployment targets with environment-specific configurations:

- **Netlify-first architecture** - Optimized for Netlify deployment with serverless functions
- **GitHub Pages compatibility** - Includes gh-pages deployment scripts and proper base path configuration
- **Environment variable management** - Centralized configuration for API keys and deployment URLs
- **Asset optimization** - Implements code splitting, CSS minification, and sourcemap management for production builds

# External Dependencies

## Payment Processing
- **Stripe** - Payment processing platform requiring STRIPE_SECRET_KEY environment variable
- **@stripe/stripe-js** - Client-side Stripe integration library for checkout sessions

## Animation and UI Libraries
- **Framer Motion** - Animation library for scroll-triggered and component animations
- **React Icons** - Icon library for consistent iconography throughout the application
- **Grapheme Splitter** - Text manipulation utility for advanced animation effects

## Development and Build Tools
- **Vite** - Modern build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with PostCSS and Autoprefixer
- **React Router DOM** - Client-side routing solution
<<<<<<< HEAD
- **Terser** - JavaScript minification tool for production builds (added to fix Netlify deployment)
=======
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384

## Deployment Services
- **Netlify** - Primary deployment platform with serverless function support
- **GitHub Pages** - Alternative static hosting option
- **Google Fonts** - External font delivery for Bangers and Poppins font families

## Runtime Dependencies
- **Express.js and CORS** - Backend server capabilities for local development and alternative deployment
- **Node.js environment** - Requires Node.js runtime for build processes and optional server deployment

<<<<<<< HEAD
The application is designed to work in multiple deployment scenarios, from static hosting to full-stack serverless deployment, with Stripe integration as the primary external service dependency.
=======
The application is designed to work in multiple deployment scenarios, from static hosting to full-stack serverless deployment, with Stripe integration as the primary external service dependency.
>>>>>>> 4f72be58eead862b21e683ea988cac433ab2c384
