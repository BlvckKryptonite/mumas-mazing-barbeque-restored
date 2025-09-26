# Muma’s ‘Mazing Barbeque 🍖🔥

Welcome to **Muma’s ‘Mazing Barbeque** — a comic book-inspired, over-the-top landing page designed to excite, entertain, and entice food lovers to RSVP to the (fictional) hottest grill party in the multiverse.

---

## 📸 Live Preview

> Deployed with [Vite](https://vitejs.dev/) + React with the original version hosted via [GitHub Pages](https://blvckkryptonite.github.io/mumas-mazing-barbeque/).

 - **July 2025 Update:** Enhanced full stack version is [live here](https://mumas-mazing-barbeque.replit.app/).

---

## 🎯 Project Purpose

This project was created as a fun, high-impact frontend application using React, Tailwind CSS, and animation libraries. It allowed exploration of complex UI, animation techniques, and theme integration — all styled to feel like a comic book hero event.

---

## 🦸‍♂️ Features

- **Animated Hero Banner** with comic-style heading and slogan
- **Full-screen background image** with styled text offset
- **Scroll-animated sections** using Framer Motion
- **Chef Bio Cards** with creative one-liners and hover interactions
- **Ticket CTA Buttons** repeated for emphasis
- **Comic-themed fonts** and custom styling
- **Gallery Section**
- **FAQ Section**
- **Google Map Embed** for venue
- **Dark Theme with Fire/Red Gradients**
- **Fully Responsive & Accessible**
- **Stripe integration for ticket sales (planned)**

---

## 🛠️ Technologies Used

### Core Tech Stack
- **React.js** – Component-based frontend framework
- **Vite** – Fast build tool and dev server
- **Node.js / npm** – Package management
- **Tailwind CSS** - Utility-first custom styling
- **Framer Motion** - Animation library for scroll and element animation
- **React Router DOM** - Routing (for multi-page ticket integration)
- **SplitWords** - For word-based & emoji animation handling

### Fonts & Assets
- **Bangers** (for comic-style headers)
- **Poppins** (for body)
- **AI-Generated Comic Art** using Midjourney and reference images

---

## 📱 Responsiveness

Muma’s ‘Mazing BBQ is fully responsive and optimized for seamless viewing across all devices. Whether you're browsing on a large desktop screen or a small mobile phone, the layout adapts beautifully to ensure clarity, usability, and fun.

Responsive design was achieved using **Tailwind CSS** with custom breakpoints, fluid typography, and flexible layout structures to preserve the comic-style vibe on any screen size.

### Desktop & Mobile Mockups


![Desktop & Mobile Device Mockup](src/assets/images/mmb-mockup.png) 


---


## 🔲 Wireframes

Below is the initial wireframe sketch and a refined digital wireframe for the Muma’s ‘Mazing BBQ landing page. These mockups were created to outline the structure, flow, and content hierarchy of the site in a fun and intuitive way.

### 📝 Hand-written draft structure

![Wireframe Sketch](src/assets/images/wireframe-original-mmb.jpg)

*Original hand-drawn layout showing section flow and content plans.*

---

### 💻 AI Enhanced Wireframe Sketch (Low-Fidelity)

![Enhanced Wireframe](src/assets/images/wireframe-enhanced-mmb.png)

*Comic-style low-fidelity wireframe representing key sections:*

- **Hero Banner:** Title and a funny slogan
- **Invitation:** Event details and a CTA button
- **Meet Our Chefs:** Visual grid of featured chefs
- **Event Details:** Time, location, and schedule info
- **Gallery:** Highlight reels and photos
- **FAQ:** Common questions answered
- **Section Separators:** Comic-style dividers between each section

---

These wireframes were used to guide layout and component structure before styling and animations were added with Tailwind CSS, React, and Framer Motion.

---

## 🗂️ Folder Structure

```
mumas-mazing-barbeque/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HeroBanner.jsx
│   │   ├── Invitation.jsx
│   │   ├── Chefs.jsx
│   │   ├── Gallery.jsx
│   │   ├── FAQ.jsx
│   │   └── Location.jsx
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json

```

---

## Design Notes

### Fonts
- `font-heading`: Bangers
- `font-body`: Poppins

### Colors
- **Primary**: Black/Dark Gray
- **Secondary**: Red, Yellow-Orange (Flame Gradient)

---

## 📦 Installation Instructions

```bash
git clone https://github.com/BlvckKryptonite/mumas-mazing-barbeque.git
cd mumas-mazing-barbeque
npm install
npm run dev
```

Open `http://localhost:5003/` or whichever port Vite assigns.

---

## Development Notes

### Challenges Encountered 🚧

1. **Localhost 404 Errors**
   - **Cause**: Vite expected `index.html` in `public/`, but it was mistakenly placed in the root.
   - **Fix**: Moved `index.html` into the root directory and ensured correct project structure.

2. **Vite Not Loading**
   - **Cause**: Conflicting Vite version or missing dependencies.
   - **Fix**: Clean install and port change detection.

3. **Missing Image Rendering**
   - **Cause**: Background image placement in hero banner required careful positioning.
   - **Fix**: Absolute/relative layout with Tailwind and flexbox.

4. **Font Configuration Not Applying**
   - **Cause**: Misnamed font class or missing import from Google Fonts.
   - **Fix**: Imported Bangers and Poppins properly and extended Tailwind config.

5. **Animations Not Working**
   - **Cause**: Incorrect import or Framer Motion not installed.
   - **Fix**: Ran `npm install framer-motion` and ensured correct component usage.
6. **Hero image not displaying correctly**
   - **Fix**:** Used bg-cover bg-center flex justify-end for image alignment and responsiveness.

   ### Other fixes:
   - Tailwind not applying due to incorrect content paths → Fixed
   - JSX structure breaking Framer Motion → Fixed with proper <motion> wrapping



---

## 📈 Performance & Optimization

- I plan to deploy the project on [Vercel](https://vercel.com/) to take advantage of its fast global CDN, optimized static rendering, and seamless integration with React for improved performance and near-instant load times.
- Lazy loading sections and background images (in progress)
- Scroll-triggered animations only activate when in view
- Hero image and components styled to maximize visual appeal without excessive asset weight

---

### New Features Added ✨

- **Loading Screen Animation** with custom logo and enhanced effects
- **Stripe Payment Integration** for secure ticket purchases
- **Multi-page Routing** with React Router for tickets and success pages
- **Performance Optimizations** with code splitting and optimized animations
- **Enhanced Logo Integration** as favicon and loading animation
- **Production-Ready Configuration** for Replit deployment

---

## 🚀 Stripe Integration

The application now includes full Stripe payment processing for ticket sales:

- **Frontend**: Stripe Checkout integration with React
- **Backend**: Server-side API routes for secure payment processing
- **Security**: Environment variables for API keys
- **Success Flow**: Post-purchase success page with order confirmation

### Payment Features
- Multiple ticket tiers (VIP, General Admission, Early Bird)
- Secure checkout process
- Order confirmation and success handling
- Test mode integration for development

---

## ⚡ Performance Optimizations

- **Code Splitting**: Vendor and animation chunks separated for faster loading
- **Optimized Animations**: BBQ flame glow effects with `will-change` for better performance
- **Asset Optimization**: Favicon integration and image loading optimization
- **CSS Performance**: Reduced animation complexity in development environment

---

## 🔧 Technical Challenges Faced

### Major Challenges

1. **Vercel Deployment Issues**
   - **Problem**: Server-side API routes not supported on static hosting
   - **Challenge**: Stripe integration requires backend functionality
   - **Solution**: Migrated to Replit for full-stack deployment capability

2. **Payment Processing Architecture**
   - **Problem**: Secure handling of Stripe secret keys in frontend-only environment
   - **Challenge**: GitHub Pages cannot handle server-side environment variables
   - **Solution**: Implemented proper backend API routes with secure key management

3. **Animation Performance Issues**
   - **Problem**: Complex glow animations causing slow rendering in tickets section
   - **Challenge**: Background glows impacting development environment performance
   - **Solution**: Optimized CSS animations with `will-change` and reduced complexity

### Minor Challenges

1. **DOM Nesting Warnings**
   - **Issue**: SplitWords component creating nested div elements within paragraph tags
   - **Status**: Identified through console logs, structural optimization in progress

2. **Port Configuration**
   - **Issue**: External port access configuration for preview functionality
   - **Solution**: Updated .replit configuration with proper port forwarding

3. **Asset Path Management**
   - **Issue**: Logo integration across favicon and loading screen
   - **Solution**: Centralized asset management with proper path resolution

4. **Development vs Production Builds**
   - **Issue**: Build optimization for faster loading times
   - **Solution**: Implemented manual chunks in Vite configuration

---

### Deployment Considerations

**Why Not Vercel?**
A deployed Vercel version is [available here](https://mumas-mazing-barbeque-8exqclr89-mumas-projects.vercel.app/). While Vercel excels at front-end hosting, it presented several limitations for this full-stack implementation:
- Inadequate support for dynamic API routes and backend logic
- Server-side capabilities required for Stripe payment processing were restricted
- Environment variable security concerns for payment keys
- Overall, it lacked the robust back-end infrastructure needed to deploy full-stack apps

**Replit Advantages:**
- Full-stack deployment with server-side functionality
- Secure management of environment variables
- Built-in development and production environments
- Smooth integration with the existing codebase for streamlined development and testing

---

### Recent Updates & Improvements ✨

**Latest Enhancements (2024):**
- **Contact Page Implementation** ✅ – Added comprehensive contact form with service offerings and animated fire icon
- **Asset Path Optimization** ✅ – Resolved image loading issues with proper public folder structure
- **UI Polish & Icon Updates** ✅ – Enhanced bullet points with proper emoji icons (✨, 🔥, 🎨, 🚀)
- **Animation Performance** ✅ – Improved motion.img implementations with proper object-contain styling
- **Development Workflow** ✅ – Streamlined dev environment with parallel API server setup

**Current Deployment Status:**
- **Platform**: Replit (Full-stack deployment)
- **Frontend**: Vite + React (Port 3002)
- **Backend**: Express.js API server (Node.js)
- **Payment Processing**: Stripe integration with secure checkout
- **Asset Management**: Optimized public folder structure for static assets

---

### Future Enhancements

- Loading animation (comic style "Page Flip" or flaming grill spinner) ✅ **COMPLETED**
- Section transitions with fire or smoke effects
- Stripe-powered RSVP or ticket sales form ✅ **COMPLETED**
- Contact page with service offerings ✅ **COMPLETED**
- Fully animated parallax scroll effects
- Add sound FX toggle (comic zap, sizzle, etc.)
- Performance monitoring and optimization
- Mobile-specific animation optimizations

---

## 🚀 Recent Deployment Challenges & Solutions

### Asset Loading & Path Resolution

**Challenge**: Fire icon and other assets not loading properly in production
- **Root Cause**: Inconsistent naming conventions (fire_icon.png vs fire-icon.png) and improper import patterns
- **Solution**: Standardized asset naming and moved critical assets to public folder for direct path access
- **Implementation**: Used `/fire-icon.png` pattern matching the loading screen logo approach

### Performance Optimization

**Challenge**: Complex glow animations causing performance issues in development
- **Root Cause**: Heavy CSS animations with multiple shadow effects
- **Solution**: Optimized animation complexity and added `will-change` properties for better rendering
- **Result**: Smoother scroll performance and reduced development lag

### Multi-Environment Configuration

**Challenge**: Coordinating frontend and backend development workflows
- **Solution**: Implemented parallel workflow configuration:
  - Frontend dev server on port 3002
  - Backend API server running simultaneously
  - Proper port forwarding for external access

### Production Deployment Considerations

**Why Replit Over Other Platforms:**
- **Full-stack Support**: Unlike static hosting (GitHub Pages), Replit handles both frontend and backend
- **Environment Security**: Secure handling of Stripe API keys and environment variables
- **Integrated Development**: Seamless transition from development to production
- **Port Management**: Built-in port forwarding and external access configuration

---

## 💬 Attribution & Credits

- Comic Fonts: [Google Fonts](https://fonts.google.com/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Images generated using Midjourney and real photos of Chef Muma
- Inspired by [dogelonmars.com](https://dogelonmars.com/)

---

## 🧠 Lessons Learned

> Sometimes, it's the **smallest issues** (like an `index.html` in the wrong folder) that cause the biggest confusion.

This project deepened understanding of Vite + React workflows, Tailwind theming, animated UIs, and the importance of checking structural integrity during local setup.

**Key Technical Insights:**
- Asset path consistency is crucial for production deployment
- Parallel development workflows improve full-stack productivity  
- Animation performance optimization requires careful balance between visual impact and smooth execution
- Environment-specific configuration prevents deployment surprises

---

## 🔗 Connect With Me

Want to book Muma's 'Mazing Barbeque at your event or collaborate on something cool? Reach out!

- Email: [mumathedeveloper@gmail.com](mailto:yourname@example.com)
- GitHub: [BlvckKryptonite](https://github.com/BlvckKryptonite)

---

> **"Where the grill meets greatness — and the steak saves the day."**
