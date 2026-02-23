# FinChat - Deployment & GitHub Push Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `finchat`
3. Set it to **public** (or private if preferred)
4. **Do NOT** initialize with README, .gitignore, or license (we already have them)
5. Click "Create repository"

## Step 2: Push to GitHub

Run these commands in your terminal:

```bash
cd c:\Users\harsh\bachat

# Remove the current remote (if any)
git remote remove origin

# Add your repository URL (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/finchat.git

# Push to GitHub
git push -u origin main
```

**Note:** You may be prompted for authentication. Use:
- **Personal Access Token** (Recommended) or
- **GitHub SSH key** if configured

## Step 3: Prepare for Vercel Deployment

### 3.1 Create Vercel Account
1. Go to [Vercel](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "Import Project"

### 3.2 Import from GitHub
1. Click "Import Project"
2. Enter repository URL: `https://github.com/USERNAME/finchat`
3. Click "Continue"

### 3.3 Configure Environment Variables

In Vercel dashboard, add these environment variables:

```
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY=your_google_ai_key
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 3.4 Configure Build Settings
- **Framework Preset:** Next.js
- **Root Directory:** ./
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install --legacy-peer-deps`

### 3.5 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Your app will be live at: `https://finchat.vercel.app`

## Step 4: Post-Deployment Checks

- [ ] Test sign up/login with Clerk
- [ ] Verify database connection
- [ ] Test receipt scanner with Google AI
- [ ] Check email notifications
- [ ] Verify caching with Redis
- [ ] Test transaction creation
- [ ] Check budget alerts

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (usually 2-5 minutes)

## Troubleshooting

### Build Fails
Check logs in Vercel dashboard. Common issues:
- Missing environment variables
- Database connection error
- Package dependency issues

**Solution:**
```bash
npm install --legacy-peer-deps
npm run build
```

### Deployment Errors
- Verify all environment variables are set
- Check database is accessible from Vercel
- Ensure Clerk keys are correct
- Test locally: `npm run build && npm start`

### Performance Issues
- Enable Redis caching (UPSTASH_REDIS_REST_URL)
- Use Vercel Analytics for monitoring
- Check Database query performance

## Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/USERNAME/finchat.git
cd finchat

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Setup database
npx prisma db push

# 5. Start development server
npm run dev

# 6. Open browser
# http://localhost:3000
```

## Important Notes

⚠️ **Security:**
- Never commit `.env.local` to Git
- Use GitHub Secrets for CI/CD
- Rotate API keys regularly
- Keep dependencies updated

📊 **Monitoring:**
- Enable Vercel Analytics
- Set up error tracking (Sentry)
- Monitor database performance
- Set up uptime alerts

## Success! 🎉

Your FinChat application is now:
✅ Committed to GitHub with clean history
✅ Ready for Vercel deployment
✅ Properly configured with environment variables
✅ Live and accessible to users

For questions, check the main [README.md](README.md)
