# Pastor Ministry Suite - Landing Page

## 🚀 Deploy to Vercel (GitHub Integration)

### Step 1: Create GitHub Repo

1. Go to https://github.com/new
2. Name: `pastor-ministry-suite-landing`
3. Make it Public or Private
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Push Local Code to GitHub

```bash
cd ~/.openclaw/workspace/projects/pastor-ministry-suite-landing

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/pastor-ministry-suite-landing.git

# Rename branch to main
git branch -m main

# Push to GitHub
git push -u origin main
```

### Step 3: Connect Vercel to GitHub

1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Select your `pastor-ministry-suite-landing` repo
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 4: Configure Build Settings (if needed)

Vercel should auto-detect these, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `dist` (from next.config.js)
- **Install Command:** `npm install`

### Step 5: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `pastorministrysuite.com`)
4. Follow DNS instructions

---

## 🎨 What's Included

### Sections
1. **Hero** - "Stop Being a Church Administrator" headline
2. **7 Agents** - Feature cards with time savings
3. **Savings** - Tool replacement comparison
4. **Testimonials** - Pastor quotes
5. **Pricing** - 3 tiers ($97, $197, $497)
6. **FAQ** - Accordion questions
7. **CTA** - Final call to action
8. **Footer** - Links and contact

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion animations
- Lucide React icons
- Static export for fast hosting

### Key Features
- ✅ Mobile responsive
- ✅ Smooth scroll animations
- ✅ Accessible (ARIA labels)
- ✅ SEO optimized
- ✅ Fast load times (static export)
- ✅ Easy to customize

---

## 📝 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    red: '#dc2626',  // Change this
    dark: '#1a1a1a',
  }
}
```

### Update Pricing
Edit `components/Pricing.tsx` - change prices, features, plan names.

### Add Testimonials
Edit `components/Testimonials.tsx` - add more quotes.

### Update FAQ
Edit `components/FAQ.tsx` - add/modify questions.

### Change Contact Email
Edit `components/Footer.tsx` and `components/Pricing.tsx` - replace `reyes@agentmail.to`

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve dist
```

---

## 📁 Project Structure

```
pastor-ministry-suite-landing/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page (assembles sections)
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Agents.tsx       # 7 agents showcase
│   ├── Savings.tsx      # Cost comparison
│   ├── Testimonials.tsx # Pastor quotes
│   ├── Pricing.tsx      # 3-tier pricing
│   ├── FAQ.tsx          # FAQ accordion
│   ├── CTA.tsx          # Final call to action
│   └── Footer.tsx       # Footer
├── public/              # Static assets
├── next.config.js       # Next.js config (static export)
├── tailwind.config.js   # Tailwind config
└── package.json         # Dependencies
```

---

## 🌐 Live Demo

After deploying, your site will be at:
- `https://pastor-ministry-suite-landing.vercel.app` (default)
- Or your custom domain

---

## 📧 Support

Questions? Email: reyes@agentmail.to
