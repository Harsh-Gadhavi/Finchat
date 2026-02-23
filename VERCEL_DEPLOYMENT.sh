#!/bin/bash

# FinChat Vercel Deployment Guide
# This script helps deploy FinChat to Vercel

echo "🚀 FinChat Vercel Deployment Guide"
echo "===================================="
echo ""

echo "Step 1: Prerequisites"
echo "✓ Vercel CLI installed? (npm install -g vercel)"
echo "✓ GitHub repository connected?"
echo "✓ Environment variables prepared?"
echo ""

echo "Step 2: Environment Variables Required:"
echo "========================================"
cat << 'EOF'
DATABASE_URL=postgresql://user:password@host:5432/finchat
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY=your_key
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
RESEND_API_KEY=your_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
INNGEST_EVENT_KEY=your_key
INNGEST_SIGNING_KEY=your_key
EOF

echo ""
echo "Step 3: Deploy to Vercel"
echo "========================"
echo ""
echo "Option A: Using Vercel Dashboard"
echo "1. Go to https://vercel.com/new"
echo "2. Import GitHub repository: https://github.com/Harsh-Gadhavi/Finchat"
echo "3. Add all environment variables"
echo "4. Click Deploy"
echo ""
echo "Option B: Using Vercel CLI"
echo "1. Run: vercel"
echo "2. Follow the prompts"
echo "3. Add environment variables during setup"
echo ""

echo "Step 4: Post-Deployment"
echo "======================"
echo "✓ Visit your Vercel deployment URL"
echo "✓ Test authentication with Clerk"
echo "✓ Verify database connection"
echo "✓ Test receipt scanning feature"
echo "✓ Check email notifications"
echo ""

echo "Step 5: Custom Domain (Optional)"
echo "================================="
echo "1. Go to your Vercel project settings"
echo "2. Navigate to Domains"
echo "3. Add your custom domain"
echo "4. Update DNS records as shown"
echo ""

echo "Troubleshooting:"
echo "==============="
echo "- Database connection issues: Check DATABASE_URL format"
echo "- Auth errors: Verify Clerk keys and redirects"
echo "- Email not working: Check Resend API key and from email"
echo "- Build fails: Check Node.js version (18+)"
echo ""

echo "📚 Documentation: https://vercel.com/docs"
echo "🔗 Project: https://github.com/Harsh-Gadhavi/Finchat"
