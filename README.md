# FinChat - Intelligent Finance Management Platform

<div align="center">

![FinChat Logo](https://img.shields.io/badge/FinChat-AI%20Finance%20Management-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**Take Control of Your Financial Future with AI-Powered Insights**

[Features](#features) • [Getting Started](#getting-started) • [Tech Stack](#tech-stack) • [Deployment](#deployment) • [License](#license)

</div>

---

## 🌟 Overview

**FinChat** is a comprehensive AI-powered personal finance management platform that empowers users to track expenses, manage budgets, analyze spending patterns, and make smarter financial decisions. Built with cutting-edge technology, FinChat provides real-time insights, automated receipt scanning, and intelligent financial recommendations.

Whether you're a freelancer managing multiple income streams, a small business owner tracking expenses, or someone building wealth, FinChat is your intelligent financial companion.

---

## ✨ Key Features

### 💰 Multi-Account Management
- Create and manage unlimited financial accounts
- Support for multiple currencies with real-time conversion
- Organize accounts by type (savings, checking, credit cards, etc.)
- Track account balances and transactions

### 📊 Advanced Transaction Tracking
- Log income, expenses, and transfers with detailed categorization
- Automatic transaction categorization using AI
- Add descriptions, tags, and notes for better organization
- Search and filter transactions by date, category, amount, and more
- Batch import transactions from CSV files

### 🤖 AI-Powered Receipt Scanner
- Photograph your receipts and extract data automatically
- Uses Google Generative AI for accurate OCR and categorization
- Automatically populate transaction form automatically
- Save time and reduce manual data entry

### 📈 Smart Budget Planning & Analytics
- Set monthly budget limits for different spending categories
- Real-time budget progress tracking with visual indicators
- Get alerts when approaching budget limits
- Advanced charts and graphs to visualize spending patterns
- Income vs. expense analysis
- Monthly and yearly financial reports

### 🎯 Intelligent Insights & Recommendations
- AI-powered financial insights and spending recommendations
- Identify wasteful spending patterns
- Get personalized suggestions to save money
- Track financial goals and progress
- Spending trend analysis

### 🔐 Enterprise-Grade Security
- User authentication powered by Clerk
- Secure OAuth integration
- End-to-end data encryption
- Role-based access control
- GDPR compliant data handling

### ⚡ Performance Optimized
- Redis caching for lightning-fast data retrieval
- Rate limiting to prevent abuse
- Optimized API routes with pagination
- Responsive design for all devices
- Turbopack for instant dev server startup

### 📧 Email Notifications
- Budget alert emails when limits are approached
- Transaction summary emails
- Powered by Inngest for reliable job processing
- Using Resend for beautiful email templates

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2** - React framework with server components
- **React 19.0** - Latest React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Recharts** - Interactive charts and graphs
- **React Hook Form** - Efficient form management
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless API functions
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Reliable relational database
- **Inngest** - Serverless job scheduling
- **TypeScript** - End-to-end type safety

### Authentication & Security
- **Clerk** - Modern authentication platform
- **Arcjet** - Advanced security features
- **Upstash Redis** - Distributed caching

### External Services
- **Google Generative AI** - Receipt scanning and AI features
- **Upstash Redis** - Caching and rate limiting
- **Resend** - Email delivery
- **Vercel** - Deployment platform

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database (can use cloud providers like Supabase, Railway, or NeonDB)
- Clerk account (free tier available)
- Google AI API key (for receipt scanning)
- Upstash Redis account (free tier available)
- Resend account (free tier available for email notifications)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jagtap-suraj/finchat.git
cd finchat
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/finchat"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google AI (for receipt scanning)
NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY=your_google_ai_key

# Upstash Redis (for caching and rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Inngest (job scheduling)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Seed with demo data (optional)**
```bash
npm run seed
```

6. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Project Structure

```
finchat/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/         # Auth pages (sign-in, sign-up)
│   │   ├── (main)/         # Main app pages (dashboard, accounts, transactions)
│   │   ├── api/            # API routes
│   │   └── layout.tsx      # Root layout
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components
│   │   ├── Hero.tsx        # Landing page hero
│   │   ├── DashboardOverview.tsx
│   │   ├── TransactionForm.tsx
│   │   ├── BudgetProgress.tsx
│   │   └── ...
│   ├── lib/                 # Utility functions
│   │   ├── actions/        # Server actions
│   │   ├── inngest/        # Job scheduling
│   │   ├── prisma.ts       # Prisma client
│   │   ├── rateLimit.ts    # Rate limiting
│   │   ├── cache.ts        # Redis caching
│   │   └── ...
│   ├── types/              # TypeScript types
│   └── middleware.ts       # Next.js middleware
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static assets
├── emails/                 # Email templates
└── ...
```

---

## 💻 Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Building
npm run build            # Build for production
npm start                # Start production server

# Database
npx prisma db push      # Sync schema with database
npx prisma generate     # Generate Prisma client
npx prisma studio      # Open Prisma Studio

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format code with Prettier

# Email Development
npm run email            # Start email template dev server
```

---

## 🔑 Key Features Explained

### Receipt Scanning
Upload a receipt image and FinChat will:
1. Extract merchant information
2. Identify transaction amount and date
3. Categorize the transaction automatically
4. Populate transaction form with pre-filled details

### Budget Alerts
- Set monthly budget limits for each category
- Receive email notifications at 75% and 100% of budget
- Visual progress indicators in dashboard
- Detailed budget reports and analytics

### Smart Analytics
- Interactive charts showing spending trends
- Category-wise expense breakdown
- Income vs. expense analysis
- Monthly and yearly comparisons
- Custom date range reports
- Export data as PDF or CSV

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy FinChat is on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjagtap-suraj%2Ffinchat)

**Steps:**
1. Click the deploy button above
2. Connect your GitHub repository
3. Set environment variables in Vercel dashboard
4. Deploy with one click

**Environment variables needed in Vercel:**
- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `INNGEST_EVENT_KEY`
- `INNGEST_SIGNING_KEY`

### Production Checklist
- [ ] Set all environment variables
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Configure database backups
- [ ] Enable monitoring and alerts
- [ ] Set up error tracking (Sentry)
- [ ] Configure CI/CD pipeline

---

## 🧪 Testing

### Manual Testing Credentials
```
Email: demo@finchat.com
Password: Demo@123456
```

### API Testing
Use Postman or curl to test API endpoints:

```bash
# Get dashboard data
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/dashboard

# Create transaction
curl -X POST http://localhost:3000/api/transaction \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": "...",
    "amount": 100,
    "category": "FOOD",
    "description": "Lunch"
  }'
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Roadmap

- [ ] Mobile app (React Native / Flutter)
- [ ] Investment portfolio tracking
- [ ] Bill reminders and auto-pay
- [ ] Credit score monitoring
- [ ] Tax report generation
- [ ] Cryptocurrency support
- [ ] Advanced AI recommendations with ML
- [ ] Social features and spending challenges
- [ ] REST API for third-party integrations
- [ ] Dark mode support
- [ ] Real-time collaborative budgeting

---

## 📞 Support

- 📧 Email: support@finchat.com
- 🐛 Issues: [GitHub Issues](https://github.com/jagtap-suraj/finchat/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/jagtap-suraj/finchat/discussions)
- 🌐 Website: [finchat.com](https://finchat.com)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [TailwindCSS](https://tailwindcss.com/)
- Charts by [Recharts](https://recharts.org/)
- Authentication by [Clerk](https://clerk.com/)
- Database by [Prisma](https://www.prisma.io/)
- AI by [Google Generative AI](https://ai.google.dev/)
- Caching by [Upstash](https://upstash.com/)
- Job Scheduling by [Inngest](https://inngest.com/)

---

<div align="center">

Made with ❤️ by [Suraj Jagtap](https://github.com/jagtap-suraj)

**[⬆ back to top](#finchat---intelligent-finance-management-platform)**

</div>
