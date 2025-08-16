# Netlify Deployment Guide

## Prerequisites
- Your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- You have a Netlify account

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select your repository

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18` (or higher)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Build Configuration

The project is configured for static export with:
- `next.config.ts`: Sets `output: "export"` for static generation
- `netlify.toml`: Configures build settings and redirects
- Build output goes to the `out/` directory

## Troubleshooting

### Common Issues:

1. **Build fails with ESLint errors:**
   - Run `npm run lint` locally to check for issues
   - Fix any linting errors before deploying

2. **404 errors on page refresh:**
   - The `netlify.toml` file includes redirects to handle client-side routing
   - Make sure the redirects section is present

3. **Node version issues:**
   - Ensure you're using Node.js 18 or higher
   - The `netlify.toml` specifies Node version 18

### Local Testing:

Before deploying, test locally:
```bash
npm run build
npm run start
```

## Environment Variables

If you need to add environment variables:
1. Go to your Netlify site dashboard
2. Navigate to Site settings → Environment variables
3. Add any required environment variables

## Custom Domain

To add a custom domain:
1. Go to your Netlify site dashboard
2. Navigate to Domain settings
3. Add your custom domain and follow the DNS configuration instructions 