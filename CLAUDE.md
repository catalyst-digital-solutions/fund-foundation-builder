# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mesa Group Consulting financial services website built with React + TypeScript + Vite. The site showcases credit repair, business funding, debt relief, and consumer financial products.

**Client:** Evert Calderon - Mesa Group Consulting, Mesa Group Capital
**Development Partner:** Lovable
**Repository:** https://github.com/catalyst-digital-solutions/fund-foundation-builder

## Development Commands

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build (preserves debugging)
npm run build:dev

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite with SWC plugin
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** lucide-react ONLY (never emojis)
- **State Management:** TanStack Query (React Query)
- **Forms:** react-hook-form + zod

## Architecture Pattern

### Page Structure (Critical)

Every landing page follows a **vertical section composition** pattern:

```tsx
const ServicePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <EmotionalCTA1 />
    <FeatureSection />
    <HowItWorks />
    <EmotionalCTA2 />
    <ServiceComparison />
    <WhatsIncluded />
    <EmotionalCTA3 />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);
```

**Key principles:**
- Pages import pre-built section components from `src/components/[service-name]/sections/`
- Each section is self-contained with its own styling
- Sections stack vertically with alternating backgrounds (white, gradients, amber-50)
- Never inline large sections directly in page files

### Component Organization

```
src/
├── components/
│   ├── Header.tsx                    # Shared navigation (all pages)
│   ├── Footer.tsx                    # Shared footer with collapsible menus
│   ├── NavLink.tsx                   # Custom Link wrapper
│   ├── [service-name]/               # Service-specific folder (kebab-case)
│   │   └── sections/                 # Section components for this service
│   │       ├── HeroSection.tsx
│   │       ├── FAQ.tsx
│   │       └── EmotionalCTA1.tsx
│   ├── calculators/                  # Financial calculator components
│   └── ui/                           # shadcn/ui base components (DO NOT MODIFY)
├── pages/
│   ├── Homepage.tsx                  # Main landing page
│   ├── [ServiceName].tsx             # Individual service pages (PascalCase)
│   └── NotFound.tsx                  # 404 page
└── App.tsx                           # Route definitions
```

### Routing Structure

All routes defined in [src/App.tsx](src/App.tsx). Key route patterns:

**Business Services:**
- `/business-funding` - Business funding solutions (formerly v2, now primary)
- `/zero-interest-business-funding` - 0% interest business funding (formerly v2, now primary)
- `/business-credit-builder` - Paid program, separate from personal credit
- `/business-debt-relief` - Business debt relief solutions

**Consumer Services:**
- `/credit-repair` - Credit repair services (formerly v2, now primary)
- `/student-loan-refi` - Student loan refinancing (formerly v2, now primary)
- `/build-credit` - Personal credit building (FREE guide)
- `/diy-credit-repair` - DIY credit repair software (Creditily)
- `/credit-cards`, `/personal-loans`, `/auto-loan-refi`
- `/debt-consolidation-loan`, `/debt-relief`

**Important Note - V1 to V2 Migration (December 28, 2024):**
All v1 pages were archived and v2 pages were promoted to become the primary versions. The `-2` suffix was removed from routes and file names. There are NO longer separate v1/v2 variants - the current pages are the evolved v2 versions. See commit `4ae614c` for full migration details.

## Design System (Critical)

### Brand Colors

All colors use HSL CSS variables from [src/index.css](src/index.css):

```tsx
// Mesa Group Capital Brand Colors (primary palette)
--mgc-yellow: 40 93% 67%    // #f9c65d - Primary CTAs, highlights
--mgc-gold: 40 46% 50%      // #bb9446 - Hover states, dark accents
--mgc-tan: 39 48% 84%       // #E5D2AF - Light backgrounds
--mgc-cream: 40 88% 76%     // #f8d899 - Subtle backgrounds

// Use Tailwind amber utilities (map to mgc colors):
className="bg-amber-400 hover:bg-amber-500"  // ✅ CORRECT
className="text-[#f9c65d]"                   // ⚠️ Only when referencing brand yellow directly
style={{ color: '#bb9446' }}                // ❌ WRONG - use Tailwind classes
```

### Typography

All text uses **Inter font** (loaded via Google Fonts). Standard patterns:

```tsx
// Hero Headlines
className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"

// Section Headers
className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"

// Body Text
className="text-lg md:text-xl text-gray-600 leading-relaxed"

// Accent words in headlines
<span className="text-amber-600">[Highlight]</span>
```

### Icons: lucide-react ONLY

**Never use emojis.** All icons from `lucide-react`:

```tsx
import { CheckCircle, ArrowRight, X, Shield, AlertTriangle } from 'lucide-react';

// Checkmarks (positive)
<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />

// X marks (negative)
<X className="w-5 h-5 text-red-600 flex-shrink-0" />

// CTA arrows
<ArrowRight className="ml-2 w-5 h-5" />
```

### Button Patterns

Primary CTAs use amber background with hover states:

```tsx
<a
  href="[URL]"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
>
  Get Started Now
  <ArrowRight className="ml-2 w-5 h-5" />
</a>
```

### Common Section Patterns

**Hero Section:**
- Left column: headline, subheadline, benefits list with checkmarks, CTA buttons
- Right column: visual element (stats, form, or illustration)
- Background: `bg-gradient-to-br from-white via-amber-50 to-white`

**Feature Cards:**
```tsx
<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full" />
  {/* Content */}
</div>
```

**Container Pattern:**
```tsx
<section className="py-12 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

## Custom Tailwind Utilities

Custom utilities defined in [tailwind.config.ts](tailwind.config.ts):

```tsx
// 3D flip card utilities (used in Homepage "How It Works" section)
className="perspective-1000 transform-style-3d backface-hidden"

// Custom animations
className="animate-bounce-slow"  // Gentle bounce animation
```

## Key Implementation Patterns

### Interactive Flip Cards (Homepage)

The Homepage "How It Works" section uses viewport-based flip detection:

```tsx
// Viewport detection (not hover) to avoid stuttering
const handleMouseMove = (e: MouseEvent) => {
  const rect = cardRef.current.getBoundingClientRect();
  const isInVerticalSection = e.clientY >= rect.top && e.clientY <= rect.bottom;
  setIsFlipped(isInVerticalSection);
};

useEffect(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
```

### Service Tier Comparison

- Mobile: Tab-based toggle between tiers
- Desktop: Side-by-side cards with feature comparison
- See [src/components/business-credit/sections/ServiceTierComparison.tsx](src/components/business-credit/sections/ServiceTierComparison.tsx) for pattern

### Dual CTA Pathways

Many pages offer consultation + direct application:

```tsx
// Consultation
https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery

// Direct Application
https://mesagroupcapital.com/for-businesses/business-funding
```

## Critical External CTAs

**Business Funding:**
- Main Application: `https://funding-app.mesagroupconsulting.com/Opt-In`
- Consultation: `https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery`

**Credit Repair:**
- Signup Portal: `https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09`

**Business Credit Builder:**
- Full Service ($2,495): `https://mesagroupcapital.com/business-credit-enroll`
- DIY ($995): `https://mesagroupcapital.com/bcfs-diy-enroll`

**Contact:**
- Phone: (661) 310-3040
- Location: Bakersfield, CA

## Creating a New Landing Page

1. Add route in [src/App.tsx](src/App.tsx):
```tsx
<Route path="/new-service" element={<NewService />} />
```

2. Create page file: `src/pages/NewService.tsx` (PascalCase)

3. Create component folder: `src/components/new-service/sections/` (kebab-case)

4. Build sections following existing patterns in `src/components/business-credit/sections/`

5. Import sections into page following vertical composition pattern

## Important Service Distinctions

### Personal vs Business Credit

**Personal Credit** (`/build-credit`):
- Target: Consumers
- Cost: FREE educational guide
- Goal: 680-750+ personal credit score

**Business Credit** (`/business-credit-builder`):
- Target: Business owners with LLC/Corp
- Cost: $2,495 (Full Service) or $995 (DIY)
- Goal: $50K-$150K business funding
- Includes: Fundability® System, coaching, software

**These are completely separate services.** Never merge or confuse them.

## Compliance & Legal Requirements

**Credit Repair (CROA Compliance):**
- Never guarantee score increases or specific removals
- Transparent about guarantee exclusions
- Legal partnerships (not a law firm) clearly stated
- No "Department of Justice" or "DOJ" references

**Business Credit (Trademark Usage):**
- Fundability® (registered trademark - use ® symbol)
- Fundability Score™, Fundability Factors™, Business Bureau Insights™

## Client Preferences (Evert Calderon)

- Conservative, professional tone
- Emphasis on results and credibility (real numbers, real stats)
- Clear disclosure and compliance language
- Focus on business owners and real estate investors
- Premium positioning for high-credit clients
- Insider/relationship-based value proposition

## Recent Major Updates

### December 19, 2024: Comprehensive Calendly Integration
Complete replacement of all consultation CTAs across the website with Calendly popup/modal integration.

**Core Infrastructure:**
- **Reusable Components**: CalendlyPopupButton, CalendlyPopupButtonLarge, CalendlyPopupLink
- **Custom Hook**: useCalendly with automatic viewport detection
- **Custom Modal**: CalendlyModal for vertical monitors (mobile portrait, tablet portrait, vertical monitors)
- **Viewport Detection**: Automatically switches between Calendly popup widget (landscape) and custom modal (portrait)
- **Files**: [src/components/CalendlyPopupButton.tsx](src/components/CalendlyPopupButton.tsx), [src/hooks/useCalendly.ts](src/hooks/useCalendly.ts), [src/components/CalendlyModal.tsx](src/components/CalendlyModal.tsx)

**Pages Updated:**
1. **Homepage** ([src/pages/Homepage.tsx](src/pages/Homepage.tsx))
   - Replaced all 5 consultation CTAs with Calendly buttons
   - Removed old GoHighLevel iframe booking widget
   - UTM tracking: hero_cta, how_it_works_cta, services_cta, etc.

2. **About Page** ([src/pages/AboutUs.tsx](src/pages/AboutUs.tsx))
   - 8 strategically-placed consultation CTAs with unique UTM tracking
   - UTM tracking: hero_cta, mesa_story_cta, mission_cta, core_values_cta, vision_cta, services_cta, final_cta

3. **Build Credit Page** ([src/pages/BuildCredit.tsx](src/pages/BuildCredit.tsx))
   - 6 consultation buttons replaced
   - Hero section, path strategy buttons (Foundation Builder, Accelerated Builder, Premium Profile Builder)
   - UTM tracking: hero_cta, not_sure_cta, foundation_builder_cta, accelerated_builder_cta, premium_profile_builder_cta, advisor_credit_building_cta, free_analysis_cta, final_cta

4. **DIY Credit Repair Page** ([src/pages/DIYCreditRepair.tsx](src/pages/DIYCreditRepair.tsx))
   - 3 main consultation buttons (hero, pricing, final CTA)
   - "Powered by Mesa Group" text removed from consultation buttons only
   - Background color updates: "Types of Negative Items" (slate gradient), FAQ (blue-indigo gradient)
   - UTM tracking: hero_cta, pricing_cta, final_cta
   - **Important**: EmotionalCTA1, EmotionalCTA2, EmotionalCTA3 link to Creditily (external platform) and retain "Powered by Mesa Group" text

5. **Credit Repair 2 Page** ([src/pages/CreditRepair2.tsx](src/pages/CreditRepair2.tsx))
   - 5 consultation buttons replaced
   - "Powered by Mesa Group" text removed from all consultation buttons
   - UTM tracking: still_not_sure_cta, customized_action_plan_cta, risk_free_restoration_cta, transformation_now_cta, get_started_today_cta

6. **Business Credit Builder Page** ([src/pages/BusinessCreditBuilder.tsx](src/pages/BusinessCreditBuilder.tsx))
   - 2 "Book a Consultation" buttons converted to Calendly
   - EmotionalCTA2 and EmotionalCTA3 components updated with Calendly integration
   - UTM tracking: consultation-cta, emotional-cta-2, emotional-cta-3
   - Arrow alignment fixed: `inline-flex items-center gap-2` for inline arrow display

7. **Business Debt Relief Page** ([src/pages/BusinessDebtRelief.tsx](src/pages/BusinessDebtRelief.tsx))
   - 8 consultation buttons converted to Calendly (all except hero phone button)
   - Buttons updated: hero CTA, "How Business Debt Relief Works" section, "Stop Drowning in Debt" section
   - EmotionalCTA1, EmotionalCTA2, EmotionalCTA3 components fully integrated
   - UTM tracking: hero-cta, how-it-works-cta, stop-drowning-cta, emotional-cta-1, emotional-cta-2, emotional-cta-3
   - Arrow alignment fixed across all buttons

8. **Business Funding 2 Page** ([src/pages/BusinessFunding2.tsx](src/pages/BusinessFunding2.tsx))
   - "Not sure which product fits?" section: Both consultation and "Apply Now" buttons styled with rounded corners
   - "Path 1: Free Consultation First" button: Added rounded corners and consistent styling
   - All buttons now match site-wide design with `rounded-lg`, shadows, and transitions

**Key Design Decision:**
- **Consultation buttons** (opening Calendly): NO "Powered by Mesa Group" text
- **Platform/provider buttons** (linking to Creditily, SuperMoney, Mesa Group Capital, etc.): YES "Powered by Mesa Group" text
- All CalendlyPopupButton components have arrows positioned on the right side of text by default

### December 17, 2024: Credit Repair 2 - Steve Neu PRD
- Legal Escalations section (FCRA/FDCPA violations)
- "What's Not Covered" transparency section
- "You've Got Nothing to Lose" risk-free guarantee
- Trilingual support: 🇺🇸 English | 🇪🇸 Español | 🇮🇹 Italiano

### December 12, 2024: Business Credit Builder
- New paid program page at `/business-credit-builder`
- $50,000 minimum funding guarantee
- 5-Step Fundability® System
- Dual pricing: $2,495 (Full Service) or $995 (DIY)

### December 12, 2024: Homepage Flip Cards
- 3D flip card interaction in "How It Works" section
- Viewport-based mouse detection (not hover)
- Custom Tailwind utilities for 3D transforms

### December 11-12, 2024: Business Funding 2
- Interactive Funding Calculator (10-20% of annual revenue)
- Dual pathways: consultation vs. direct application
- "Real Talk About Qualifications" transparency section
- 75+ lender relationships, $50M+ facilitated

## Common Pitfalls to Avoid

❌ Using emojis instead of lucide-react icons
❌ Hardcoding hex colors instead of Tailwind classes
❌ Breaking mobile-first responsive patterns
❌ Modifying shadcn/ui base components without understanding consequences
❌ Deviating from vertical section composition pattern
❌ Confusing personal credit (/build-credit) with business credit (/business-credit-builder)
❌ Using v1 content when user wants v2 updated (or vice versa)

## Important Context Files

When working on this project, reference:
1. **This file (CLAUDE.md)** - Architecture and patterns
2. **MESA_GROUP_PAGE_TEMPLATE_PRD.md** - Comprehensive design system
3. **.github/copilot-instructions.md** - Detailed component patterns
4. **src/index.css** - CSS variables and design tokens
5. **src/components/Header.tsx** - Shared navigation structure
6. **src/App.tsx** - Route definitions

## Lovable Integration

- Project syncs between local development and Lovable platform
- Lovable tagger plugin runs in development mode only
- Changes pushed to GitHub are reflected in Lovable
- Project URL: https://lovable.dev/projects/a84a569b-99f4-4ddf-898b-bc278a3f3eb0

## Deployment

- **Repository:** GitHub - https://github.com/catalyst-digital-solutions/fund-foundation-builder
- **Platform:** Lovable (manages build/deploy) → Vercel (hosting)
- **Preview URL:** https://mesa-group-consulting-website.vercel.app/
- **Workflow:** Push to GitHub → Lovable syncs → Vercel rebuilds automatically
- Lovable Project: https://lovable.dev/projects/a84a569b-99f4-4ddf-898b-bc278a3f3eb0

## Meta Tags & Social Sharing

**OpenGraph & Twitter Cards** (configured in `index.html`):
- **og:image:** `/opengraph-thumbnail.jpg` (240KB, in `public/`)
- **twitter:image:** `/opengraph-thumbnail.jpg`
- **twitter:site:** `@mesafinanciera`
- **Favicon:** `/favicon.jpg` (in `public/`)

**Full URLs for social sharing:**
```
https://mesa-group-consulting-website.vercel.app/opengraph-thumbnail.jpg
```

## Recent Major Update #5 (December 17, 2024)

### Credit Repair Page Redesign - PRD Implementation COMPLETE ✅

**Background:**
- Implementing Steve Neu marketing concepts for Credit Repair and Financial Service companies
- PRD provided by Claude.ai web app with extensive Mesa Group/Steve Neu knowledge
- All 5 tasks completed successfully

**Changes Implemented:**

**TASK 1: Legal Escalations Section**
- Added comprehensive legal escalation section after "What Makes Us Different"
- Dark gradient background with amber accents
- 5 violation types in 3-column responsive grid
- 5-step legal partnership process with numbered steps
- Icons: Scale (header), AlertTriangle (violations), FileText (process)
- Content emphasizes partnered legal team for FCRA/FDCPA violations

**TASK 2: "What's Not Covered" Section**
- Added transparency section after 90-Day Guarantee, before Cost of Inaction
- 5 exclusion categories in card-based layout:
  - SmartCredit monitoring fees (third-party service)
  - Cases where client responsibilities aren't met (detailed list)
  - New negatives added during service
  - Accurate, timely, and verifiable information (CROA compliance)
  - Ruby & Emerald annual plans after 90 days
- Light background with orange accent borders
- Icons: AlertTriangle (header), XCircle (exclusions)

**TASK 3: "You've Got Nothing to Lose" Section**
- Added risk-free guarantee section after "What's Not Covered"
- Mesa Yellow gradient background (#f9c65d)
- 4-card grid layout with guarantee features:
  - 3-Day cancellation right (all plans)
  - 90-Day money-back guarantee
  - Monthly plans: Cancel anytime after 90 days
  - Why this guarantee matters (91% success rate, legal backing)
- Strong CTA: "Start Your Risk-Free Credit Repair" → signup portal
- Bottom callout banner with final CTA
- Icons: Shield (header), CheckCircle2 (features)

**TASK 4: Trust Bar / Trilingual Support Updates**
- Changed "Bilingual" to "Trilingual" throughout
- Updated language support from "EN/ES/Punjabi" to "🇺🇸 English | 🇪🇸 Español | 🇮🇳 Punjabi"
- Locations updated in CreditRepair2.tsx (4 instances):
  - Hero section trust bar
  - Comparison table
  - Final trust bar section
  - Bottom language line
- Locations updated in FAQ.tsx (3 instances):
  - FAQ #1: Company legitimacy
  - FAQ #11: Dedicated account manager
  - FAQ #13: Nationwide service

**TASK 5: FAQ DOJ Language Audit**
- Verified no "Department of Justice" or "DOJ" mentions in FAQ
- Language already compliant - no changes needed
- Confirms CROA compliance throughout FAQ content

**Files Modified:**
- `src/pages/CreditRepair2.tsx` - 3 new sections + 4 language updates
- `src/components/credit-repair-2/FAQ.tsx` - 3 language updates

**Technical Implementation:**
- All content matches PRD specifications exactly
- Mesa brand colors: #f9c65d (Mesa Yellow), amber, orange accents
- lucide-react icons only: Scale, AlertTriangle, XCircle, Shield, CheckCircle2, FileText
- Responsive grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- All CTAs link to: https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09
- Follows existing page patterns and styling conventions

**Compliance Notes:**
- CROA compliant language throughout
- Accurate representation of legal partnerships (not a law firm)
- Transparent about guarantee exclusions
- Factual, non-promotional tone
- No guaranteed score increases or removal of accurate items

**Status:** All PRD tasks complete and ready for testing

---

**Last Updated:** December 26, 2024
**Project Status:** Active Development

---

## Recent Major Update #6 (December 26, 2024)

### Credit Monitoring Page - Client Testimonials Update

**Background:**
- Replaced placeholder video testimonials with real client reviews
- Updated to showcase actual Mesa Group credit repair success stories

**Changes Implemented:**

**Video Reviews → Text Testimonials**
- Removed placeholder video testimonial cards with Play icons
- Added three real client testimonials from Bakersfield residents:
  1. **Sandeep K.** - Credit repair ease and availability
  2. **Alex M.** - Hardship recovery and credit improvement
  3. **Christian M.** - Post-college credit restoration success

**Design Features:**
- 5-star rating display using lucide-react `Star` icons (amber/gold)
- Responsive 3-column grid layout: `grid md:grid-cols-3 gap-6`
- White cards with gray borders that transition to amber on hover
- Review text with proper spacing and typography
- Client name and location separated by top border
- Consistent with Mesa Group brand styling

**Technical Implementation:**
- File modified: `src/pages/CreditMonitoring.tsx`
- Added `Star` icon to lucide-react imports (line 4)
- Testimonial section location: lines 756-810 (within FAQSection)
- Card styling: `bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-amber-300`
- Star icons: `fill-amber-400 text-amber-400` for solid gold stars
- Typography: `font-semibold text-gray-900` (names), `text-sm text-gray-600` (location)

**Status:** Complete and deployed

---

## Recent Major Update #5 (December 20, 2024)

### Vector Database Integration for Semantic Search

**Background:**
- Implementing pgvector-based semantic search for project knowledge base
- Enables Claude to search project documentation using natural language queries
- Based on Legal Document AI vector architecture

**Infrastructure Setup:**

1. **Dependencies Added:**
   - `openai` - For generating text embeddings via OpenAI API
   - `@supabase/supabase-js` - Supabase client for database operations
   - `dotenv` - Environment variable management

2. **Database Schema:**
   - Created `claude_memory` schema in Supabase
   - Added `project_knowledge` table with vector embedding column
   - Enabled pgvector extension for vector operations
   - Created IVFFlat index for fast cosine similarity search

3. **SQL Files Created:**
   - `supabase-vector-migration.sql` - Complete schema setup with vector search functions
   - `add-rpc-functions.sql` - Public RPC functions for anon key access
   - `supabase-memory-seed-fixed.sql` - Project knowledge seed data (existing)

4. **Node.js Scripts:**
   - `generate-embeddings.cjs` - Generates OpenAI embeddings for all knowledge items
   - `check-database.cjs` - Database verification and status checking
   - `check-database-rpc.cjs` - RPC-based database verification

5. **Search Functions:**
   - `search_knowledge_semantic()` - Pure vector similarity search
   - `search_knowledge_hybrid()` - Vector search + category filtering
   - Uses OpenAI text-embedding-3-small (1536 dimensions)
   - Cosine similarity with configurable threshold (default 0.5)

6. **RPC Functions (Public Access):**
   - `get_project_knowledge(limit_count)` - Retrieve knowledge items
   - `update_embedding(item_id, new_embedding)` - Update embeddings
   - `get_embedding_stats()` - Get embedding coverage statistics

**Configuration:**
- Environment variables in `.env` (not committed to git)
- OpenAI API key for embedding generation
- Supabase URL and anon key for database access

**Usage:**
```bash
# Generate embeddings for all knowledge items
node generate-embeddings.cjs

# Check database status
node check-database.cjs
```

**Next Steps:**
1. Seed knowledge data: Run `supabase-memory-seed-fixed.sql` in Supabase SQL Editor
2. Generate embeddings: Run `node generate-embeddings.cjs`
3. Test semantic search via Claude Desktop MCP integration

**Cost Estimation:**
- OpenAI text-embedding-3-small: $0.02 per 1M tokens
- Estimated ~200 tokens per knowledge item
- Project with ~100 items: ~$0.0004 (less than 1 cent)

---

## Recent Major Update #7 (December 22, 2024)

### For Consumers Page Updates

**Page:** [src/pages/ForConsumers.tsx](src/pages/ForConsumers.tsx)

**Service Links Updated to Native Pages:**
All service cards now link to internal pages instead of external affiliate URLs:
- SmartCredit Monitoring → `/credit-monitoring`
- Personal Loans → `/personal-loans`
- Auto Loan Refinancing → `/auto-loan-refi`
- Student Loan Refinancing → `/student-loan-refinancing`
- Debt Consolidation Loans → `/debt-consolidation-loan`
- Credit Cards → `/credit-cards`

**Calendly Integration Added:**
3 consultation buttons replaced with CalendlyPopupButton:
1. Hero section - "Schedule Free Consultation"
2. How It Works section - "Schedule Your Free Consultation"
3. Final CTA section - "Schedule Free Consultation"

**UTM Tracking:**
- `For Consumers Page - Hero CTA`
- `For Consumers Page - How It Works CTA`
- `For Consumers Page - Final CTA`

---

### Debt Payoff Calculator Fix

**File:** [src/components/calculators/DebtPayoffCalculator.tsx](src/components/calculators/DebtPayoffCalculator.tsx)

**Bug Fixed:** Snowball and Avalanche methods were producing identical results.

**Root Cause:** The `simulatePayoff` function was double-counting freed-up payments - applying them both in-loop and adding to `availableExtra` for the next month.

**Solution:** Rewrote the function with clear separation:
- `rollingExtra`: Cumulative freed-up minimum payments from paid-off debts (persists across months)
- `extraPool`: Per-month available extra payment (starts fresh each month from `rollingExtra`)

**Calculator Methods:**
- **Current Path**: Minimum payments only, no extra payments
- **Snowball**: Pay smallest balance first (psychological wins, quick momentum)
- **Avalanche**: Pay highest APR first (mathematically optimal, saves most interest)

**Calculation Logic:**
1. Each month, calculate interest for all debts
2. First unpaid debt in priority order gets all extra payments
3. When a debt is paid off, its minimum payment joins `rollingExtra` for future months
4. Process continues until all debts are paid or 600-month safety limit reached

---

## Recent Major Update #8 (December 23, 2024)

### Homepage Services Tab Layout Improvement

**Page:** [src/pages/Homepage.tsx](src/pages/Homepage.tsx)

**Component:** ServicesTabSystem - "Check Out Our Services" section

**Changes Made:**
Redesigned tab navigation layout for mobile/tablet devices to eliminate horizontal scrolling and display all 8 service tabs simultaneously.

**Before:**
- Mobile: Horizontal scrolling tabs (user had to scroll to see all services)
- Desktop: 8-column grid

**After:**
- **Mobile (< 640px)**: 4x2 grid layout (4 columns, 2 rows)
- **Tablet (640px - 1023px)**: 4x2 grid layout with medium sizing
- **Desktop (≥ 1024px)**: 8-column grid (unchanged - perfect as is)

**Layout Specifications:**

| Breakpoint | Layout | Icon Size | Text Size | Padding | Gap |
|------------|--------|-----------|-----------|---------|-----|
| Mobile (< 640px) | 4x2 grid | 24px | text-xs | px-2 py-3 | gap-2 |
| Tablet (640-1023px) | 4x2 grid | 28px | text-sm | px-4 py-4 | gap-3 |
| Desktop (≥ 1024px) | 8-column | 32px | text-sm | px-6 py-4 | gap-3 |

**Key Features:**
- All 8 services visible without scrolling on mobile/tablet
- Responsive scaling for icons, text, and spacing
- Maintains active state indicator (amber gradient + bottom dot)
- Compact yet readable NerdWallet-inspired design
- Desktop experience completely preserved

**Design Inspiration:** Nerdwallet's compact tab grid system for mobile devices

### Button Arrow Positioning Fix

**Universal Solution for Arrow Icon Wrapping**

**Problem:**
Consultation buttons and CTA buttons across the site had arrows wrapping to new lines when button text wrapped to multiple lines. This occurred because flexbox treated the text and arrow as equal flex children with `gap-2`, causing the arrow to wrap underneath the text.

**Solution:**
Wrapped button text in `<span className="text-center">` and added `flex-shrink-0` to arrow icons. This prevents the arrow from shrinking or wrapping, keeping it locked to the right side of the button even when text spans multiple lines.

**Files Modified:**

1. **[src/components/CalendlyPopupButton.tsx](src/components/CalendlyPopupButton.tsx)**
   - CalendlyPopupButton component (main consultation button)
   - Applied to all three variants: CalendlyPopupButton, CalendlyPopupButtonLarge, CalendlyPopupLink

```tsx
// Before:
<button className="flex items-center justify-center gap-2">
  {text}
  {showArrow && <ArrowRight className="w-5 h-5" />}
</button>

// After:
<button className="flex items-center justify-center gap-2">
  <span className="text-center">{text}</span>
  {showArrow && <ArrowRight className="w-5 h-5 flex-shrink-0" />}
</button>
```

2. **[src/pages/ForConsumers.tsx](src/pages/ForConsumers.tsx)**
   - ServiceCard component buttons (both internal Link and external anchor tags)
   - Affects all service cards: Credit Repair, Student Loan Refinancing, etc.

**Key Changes:**
- Text wrapped in `<span className="text-center">`
- Arrow icon gets `flex-shrink-0` class
- Layout remains: `flex items-center justify-center gap-2`

**Impact:**
This fix applies universally to:
- All Calendly consultation buttons (inherited from CalendlyPopupButton)
- All service card CTA buttons on For Consumers page
- Any button using the same flex layout pattern

**Visual Result:**
- Text can wrap to multiple lines naturally
- Arrow always stays on the right side of the button
- Proper alignment and spacing maintained
- Consistent across all screen sizes

### Browser Back Button Scroll Position Fix

**Problem:**
Browser's back button was taking users to the top of the previous page instead of their previous scroll position. This occurred because ScrollToTop component was scrolling on ALL navigation events, including POP (back/forward button).

**Solution:**
Added `useNavigationType()` hook to detect navigation type and only scroll to top on PUSH (new page) or REPLACE (programmatic) navigation, not POP (back/forward button).

**File Modified:**
[src/components/ScrollToTop.tsx](src/components/ScrollToTop.tsx)

```tsx
// Added:
import { useNavigationType } from 'react-router-dom';
const navigationType = useNavigationType();

// Modified useEffect:
if (navigationType !== 'POP') {
  window.scrollTo(0, 0);
}
```

**Additional Cleanup:**
Removed inline `onClick={() => window.scrollTo(0, 0)}` handlers from three links in Homepage.tsx "Complete Credit & Business Solutions" section (lines 906, 941, 976) to ensure consistent scroll behavior through the centralized ScrollToTop component.

---

## Recent Major Update #9 (December 30, 2024)

### ExternalLinkModal Implementation - Traffic Retention Strategy

**Background:**
Implemented reusable modal system to open external signup/registration links in popup windows instead of navigating away from the site. Goal: Retain user traffic and maintain brand presence during external form completion.

**Component Created:**
[src/components/ExternalLinkModal.tsx](src/components/ExternalLinkModal.tsx) - Reusable modal for all external links

**Implementation Pattern:**
```tsx
// 1. Import modal and add state
import ExternalLinkModal from "@/components/ExternalLinkModal";
const [isModalOpen, setIsModalOpen] = useState(false);
const externalUrl = 'https://external-site.com/signup';

// 2. Update button click handler
const handleClick = () => {
  setIsModalOpen(true);
};

// 3. Add modal component
<ExternalLinkModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  url={externalUrl}
  title="External Signup"
/>
```

**Pages Updated:**

1. **DIY Credit Repair** ([src/pages/DIYCreditRepair.tsx](src/pages/DIYCreditRepair.tsx))
   - All 6 Creditily signup buttons converted to modal pattern
   - URL: `https://member.getcreditily.com/Registration/CreateAccount/Account`
   - Buttons: Hero "Start Now", 3 EmotionalCTA sections, pricing, final CTA

2. **Credit Repair** ([src/pages/CreditRepair.tsx](src/pages/CreditRepair.tsx))
   - All 6 Mesa Group portal buttons converted to modal pattern
   - URL: `https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09`
   - Buttons: Hero, Mesa360 Lite/Flex/Elite, Ruby Plan, Emerald Plan
   - Component name corrected from `CreditRepair2` to `CreditRepair`

**Technical Details:**
- Styled popup window: 80% of screen size (max 1400x900), centered
- Brief confirmation dialog with popup blocker warning
- Bypasses iframe X-Frame-Options restrictions
- Professional UX while maintaining traffic on primary domain

**Why Popup Instead of Iframe:**
Initial iframe approach failed due to external sites' X-Frame-Options security headers. Popup solution provides better UX than plain new tab while working around security restrictions.

**Future Expansion:**
Modal pattern can be applied to other external links (SuperMoney, PolicyGenius, etc.) for consistent traffic retention strategy site-wide.

---

## Recent Major Update #10 (January 1, 2026)

### Newsletter Modal Implementation - GHL Form Integration

**Background:**
Replaced email input forms on Articles & Insights and Resources pages with buttons that open the GHL newsletter signup form in an inline modal (matching CalendlyModal behavior).

**Component Created:**
[src/components/NewsletterModal.tsx](src/components/NewsletterModal.tsx) - Inline modal with iframe embed

**Current Implementation (January 19, 2026):**
```tsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const GHL_NEWSLETTER_FORM_URL = 'https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p';

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  // Handle escape key to close

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 sm:p-6" onClick={onClose}>
      <div className="relative w-full max-w-[500px] h-auto max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
        <button className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100">
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <iframe src={GHL_NEWSLETTER_FORM_URL} className="flex-1 w-full min-h-[520px] border-0" />
      </div>
    </div>
  );
};
```

**Pages Updated:**
1. **Articles & Insights** ([src/pages/ArticlesInsights.tsx](src/pages/ArticlesInsights.tsx))
2. **Resources** ([src/pages/Resources.tsx](src/pages/Resources.tsx))

**GHL Form Details:**
- Form ID: `87XreQhYJtAAT7XwLE0p`
- Form Name: "MGC Website NewsLetter"
- Form URL: `https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p`

---

## Recent Major Update #11 (January 15-19, 2026)

### Build Credit Page - Partner Links Hardcoded Fix

**Background:**
The "Ready to Get Started? Click Your Preferred Tool Below" section on Build Credit page had issues with ExternalLinkModal causing:
- "Funky flash" when clicking buttons (modal briefly rendering before popup)
- Tab cannibalization (all buttons reusing same browser tab due to hardcoded window name)

**Solution:**
Replaced ExternalLinkModal JavaScript-based navigation with plain HTML anchor tags (`<a>` elements with `target="_blank"`).

**File Modified:** [src/pages/BuildCredit.tsx](src/pages/BuildCredit.tsx)

**Changes:**
1. Original section wrapped in `{false && (...)}` to disable without deleting
2. New hardcoded section with plain `<a target="_blank">` tags for all 10 partners
3. Removed ExternalLinkModal import and related state management

**Partner Affiliate URLs (Hardcoded):**
| Partner | URL |
|---------|-----|
| Ava Finance | `https://meetava.sjv.io/xLxZEA` |
| Kikoff | `https://kikoff.com/` |
| CreditStrong | `https://myusn.link/1vf1WA` |
| Credit Builder Card | `https://www.creditbuildercard.com/mesagroupconsulting` |
| Self Credit Builder | `https://myusn.link/CGj0Lj` |
| RentReporters | `https://www.rentreporters.com/?clickref=1110lXs9Zs` |
| Rental Kharma | `https://www.rentalkharma.com/partner-ecalderon/?Code=MESAGROUP` |
| BoomPay | `https://www.boompay.app/` |
| Experian Boost | `https://myusn.link/bFdtEP` |
| StellarFi | `https://stellarfi.com/` |

**Known Issue - Ava Finance iOS:**
On iPhone, Ava Finance button triggers App Store modal (iOS Universal Links), breaking affiliate attribution. This is iOS-level behavior that cannot be fixed with code. Need web-only signup URL from Ava Finance.

**Commits:**
- `21b15e5` - Finalize hardcoded partner links section, disable original
- `c9b8680` - Add TEST section with hardcoded partner links on Build Credit page
- `fe55d48` - Fix Ava Finance affiliate attribution on Build Credit page

---

## Recent Major Update #12 (January 15-19, 2026)

### Blog Posts and Articles Infrastructure

**Three Blog Posts Added:**
1. **Understanding Credit Monitoring** ([src/pages/BlogPost1.tsx](src/pages/BlogPost1.tsx))
   - Route: `/resources/articles/understanding-credit-monitoring`

2. **What Is WFBNA on Credit Report** ([src/pages/BlogPost2.tsx](src/pages/BlogPost2.tsx))
   - Route: `/resources/articles/what-is-wfbna-on-credit-report`

3. **Debt Relief vs Debt Consolidation** ([src/pages/BlogPost3.tsx](src/pages/BlogPost3.tsx))
   - Route: `/resources/articles/debt-relief-vs-debt-consolidation`

**Articles & Insights Page Updates:**
- Hero images now display for each blog post in Latest Articles section
- Related articles sections updated in all three blog posts
- Newsletter section colors updated to Mesa Group brand

**Commits:**
- `f488d90` - Display blog post hero images in Articles & Insights Latest Articles section
- `58ee290` - Update related articles sections in all three blog posts
- `72a4bcb` - Update newsletter section colors in blog posts 1 and 2
- `363c894` - Add third blog post: Debt Relief vs Debt Consolidation

---

## Recent Major Update #13 (January 19, 2026)

### Credit Repair & DIY Credit Repair Button/Link Refactoring

**Background:**
Comprehensive updates to CTA behavior across credit repair pages, replacing styled popup modals with direct new-tab navigation and adding strategic dual CTAs throughout the Credit Repair page.

**Changes Implemented:**

**1. Build Credit Page** ([src/pages/BuildCredit.tsx](src/pages/BuildCredit.tsx))
- Updated **Self Credit Builder** affiliate link to direct URL: `https://self.inc`
- Removed intermediate Upsell Nation affiliate link that was not redirecting properly

**2. Credit Repair Page** ([src/pages/CreditRepair.tsx](src/pages/CreditRepair.tsx))
- **Removed ExternalLinkModal Pattern:** All signup buttons now use plain `<a target="_blank">` tags instead of popup modals
- **Hero Section Updates:**
  - Primary CTA: "Schedule Your Free Consultation" → CalendlyPopupButton (opens Calendly modal)
  - Secondary CTA: "Get Free Credit Analysis" → White button linking to `https://shm.to/yatPKyE` (Mesa Group's credit analysis form)
- **Added Dual CTAs to 7 Sections:**
  1. "The Mesa360 Credit System™" (Section 4A) - Dark overlay section
  2. "REALISTIC TIMELINE & EXPECTATIONS" - Dark background section
  3. "WHAT THIS REALLY MEANS FOR YOU" - White background (fixed visibility)
  4. "WHEN LEGAL ESCALATION HAPPENS" - Dark gradient section
  5. "Bad Credit Costs You $126,000..." - White background
  6. "This Isn't Just Credit Restoration" - Cream/orange gradient (fixed visibility)
  7. "Real People. Real Results. Real Transformation" - Light background
  8. "90 Days. Real Results. Or Every Dollar Back" - Green gradient section

**Dual CTA Pattern:**
```tsx
<CalendlyPopupButton 
  text="Schedule Your Free Consultation"
  className="[amber button styles]"
  showArrow={true}
/>
<a 
  href={portalUrl}
  target="_blank"
  className="[secondary button - white or transparent depending on background]"
>
  Get Free Credit Analysis <ArrowRight />
</a>
```

**Button Visibility Fixes:**
- Fixed "Get Free Credit Analysis" button in "WHAT THIS REALLY MEANS FOR YOU" section (was white on white)
- Fixed "Get Free Credit Analysis" button in "This Isn't Just Credit Restoration" section (was white on cream)
- Changed from `border-white text-white` to `border-gray-900 text-gray-900` on light backgrounds

**3. DIY Credit Repair Page** ([src/pages/DIYCreditRepair.tsx](src/pages/DIYCreditRepair.tsx))
- **Removed ExternalLinkModal:** Replaced popup modal behavior with direct new-tab navigation
- **New URL:** Changed from `https://member.getcreditily.com/Registration/CreateAccount/Account` to `https://shm.to/fsgSro2` (Mesa Group affiliate link)
- **Implementation:** Added useEffect hook that opens signup in new tab when `isModalOpen` state changes
- **Preserved Components:** EmotionalCTA1, EmotionalCTA2, EmotionalCTA3 components unchanged (still call `setIsModalOpen(true)`)
- **Why:** Maintains component reusability while centralizing navigation behavior at page level

**Technical Details:**
- All Calendly buttons use UTM tracking for campaign attribution
- Portal URL: `https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09`
- Credit Analysis Form: `https://shm.to/yatPKyE`
- DIY Signup: `https://shm.to/fsgSro2`
- No linter errors introduced

**Files Modified:**
- `src/pages/BuildCredit.tsx` - Self link update
- `src/pages/CreditRepair.tsx` - Button refactoring, dual CTA additions, visibility fixes
- `src/pages/DIYCreditRepair.tsx` - Popup to new-tab conversion

**Status:** All changes complete and tested

---

## Recent Major Update #14 (January 20, 2026)

### Business Funding & Business Credit Builder CTA behavior

- Replaced in-app styled browser/modal behavior with direct new-tab navigation for application CTAs on:
  - `src/pages/BusinessFunding.tsx` — `openApplicationModal` now opens `https://mesagroupcapital.com/for-businesses/business-funding` in a new tab.
  - `src/pages/BusinessCreditBuilder.tsx` — enrollment CTAs (`openFullServiceModal`, `openDIYModal`) now open in new tabs to their respective URLs.
- Purpose: preserve affiliate URLs and UX while preventing modal-related rendering issues and JSX parsing errors.
- No affiliate URLs were changed; only CTA behavior was updated.
- Linted and no errors reported after changes.

---

## Recent Major Update #15 (January 21, 2026)

### Meta Tags & Deployment Documentation

- Updated `index.html` OpenGraph and Twitter meta tags:
  - `og:image` → `https://mesa-group-consulting-website.vercel.app/opengraph-thumbnail.jpg`
  - `twitter:image` → same
  - `twitter:site` → `@mesafinanciera` (was `@Lovable`)
- Documented deployment workflow: GitHub → Lovable → Vercel
- Added preview URL to CLAUDE.md deployment section

**Commits:**
- `982ca4c` - Update OG and Twitter meta tags with Mesa Group branding
- `46d6ad5` - Fix twitter:site to @mesafinanciera

---

## Recent Major Update #16 (January 22, 2026)

### Testimonial Enhancements - Avatar Images & Credit Score Improvements

**Background:**
Added professional avatar images and credit score transformation lines to testimonial sections on Build Credit and Credit Monitoring pages.

**Build Credit Page** ([src/pages/BuildCredit.tsx](src/pages/BuildCredit.tsx))
- Added avatar images to "Real Results from Real People" testimonials
- Testimonials with avatars:
  - Jessica M. (`/img-04-professional-headshot-of-jessica-m.jpeg`) - 0 → 738 in 8 months
  - Marcus T. (`/img-05-professional-headshot-of-marcus-t.jpeg`) - 520 → 695 in 6 months
  - Sarah K. (`/img-06-professional-headshot-of-sarah-k.jpeg`) - 580 → 742 in 9 months
  - David R. (`/img-07-professional-headshot-of-david-r.jpeg`) - 490 → 712 in 7 months
- Avatar styling: `w-12 h-12 rounded-full object-cover flex-shrink-0`

**Credit Monitoring Page** ([src/pages/CreditMonitoring.tsx](src/pages/CreditMonitoring.tsx))
- Added avatar images to "Hear From Our Clients" testimonials
- Restyled testimonial cards from white to dark theme (matching Build Credit)
- Added credit score transformation lines:
  - Sandeep K. (`/img-01-professional-headshot-of-sandeep-k.jpeg`) - 580 → 695 in 5 months
  - Alex M. (`/img-02-professional-headshot-of-alex-m.jpeg`) - 512 → 678 in 4 months
  - Christian M. (`/img-03-professional-headshot-of-christian-m.jpeg`) - 498 → 721 in 7 months
- Card styling: `bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c]`, gold stars (`fill-[#f9c65d]`), white italic quotes

**Design Pattern - Testimonial Card:**
```tsx
<div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
  <div className="flex gap-1 mb-4">
    {[1,2,3,4,5].map((star) => (
      <Star key={star} className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
    ))}
  </div>
  <p className="text-white italic mb-4 leading-relaxed">"Quote..."</p>
  <div className="border-t border-gray-600 pt-4 flex items-start gap-3">
    <img src="/img-XX-..." className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
    <div>
      <p className="font-semibold text-white">Name</p>
      <p className="text-sm text-gray-400">Location</p>
      <p className="text-sm text-amber-400 font-semibold mt-1">520 → 710 in 6 months</p>
    </div>
  </div>
</div>
```

**Avatar Images in public/:**
- `img-01-professional-headshot-of-sandeep-k.jpeg`
- `img-02-professional-headshot-of-alex-m.jpeg`
- `img-03-professional-headshot-of-christian-m.jpeg`
- `img-04-professional-headshot-of-jessica-m.jpeg`
- `img-05-professional-headshot-of-marcus-t.jpeg`
- `img-06-professional-headshot-of-sarah-k.jpeg`
- `img-07-professional-headshot-of-david-r.jpeg`

---

## Recent Major Update #17 (January 24, 2026)

### Content Refinements, Hero Images, GHL Guide Modals & Social Media Update

**Social Media Rebrand (Continued from Update #15):**
- All social handles updated from `@mesafinanciera` to `@mesagroupco`
- YouTube added to Header and Footer social links
- Files: `src/components/Header.tsx`, `src/components/Footer.tsx`

**Homepage:**
- Heading: "Why We Built Mesa Group, And Why It Had To Exist"
- Pronouns updated to collective: "I built" → "we built", "I'm most proud" → "we're most proud" (4 instances)

**Credit Repair Page - 9-Month Program & Content Updates:**
- **Program Duration Change:** All 12-month references → 9-month
  - Ruby Plan: Save $791 vs. Monthly Flex (was $888)
  - Emerald Plan: Save $1,691 vs. Monthly Elite (was $1,788)
  - Updated equivalents and commitment language throughout
- **Content Updates:**
  - Added line breaks: "We Know You've Been Promised<br />Quick Fixes Before."
  - "Not here. Not with Mesa360." → "Not here. Not with Mesa Group Consulting."
  - "This Isn't Just Credit Restoration.<br />It's Complete Financial Transformation."
  - "Mesa Group Mesa360 Credit System™" → "Mesa360 Credit System™"
  - "What's Not Covered By The Mesa 360<br />90-Day Money Back Guarantee"
- Removed duplicate BarChart3 icon from "Real-Time 3-Bureau Monitoring"

**Credit Monitoring Page:**
- Removed FAQ: "How do I dispute errors on my credit report?"

**For Consumers Page:**
- **Hero Image:** `/img-03-happy-family-in-front-of-home-cropped.jpeg` (family in front of new home)
- **Background Image:** "Financial Solutions" section now has geometric pattern (`/img-geometric-financial-bg.jpeg`)
  - White overlay: 70% opacity for image visibility + text readability
  - Full-width cover background
- **Pricing Format:** Two-line bullets with `whitespace-pre-line`
- **Getting Started:** Removed numbered step badges (cleaner icon-only layout)

**Build Credit Page:**
- **New Component:** `GHLFormModal.tsx` for guide downloads
- Three guide forms open in modals (Foundation, Accelerated, Premium Builder)
- Replaced CalendlyPopupButton with custom modal buttons

**Letter Templates Page:**
- Fixed link: `/credit-repair-2` → `/credit-repair`

**Business Pages:**
- **For Business:** "Serving All 50 States" caption
- **Business Funding:** Removed consultation notice + 6 trust cards
- **Business Credit Builder:** Removed address footer block

**New Assets:**
- `public/img-geometric-financial-bg.jpeg`
- `public/img-03-happy-family-in-front-of-home-cropped.jpeg`

---

## Recent Major Update #18 (January 24, 2026)

### Sitewide Em-Dash Removal & Semantic Heading Line Breaks

**Em-Dash Removal:**
Per Evert's style preference, removed ~470 em-dashes across 33 files sitewide. Replaced with commas, periods, colons, or parentheses depending on context.

**Preserved em-dashes:**
- Testimonial attributions (e.g., `— Carlos R., Bakersfield, CA`)
- Direct quotes and testimonials
- Interjection-style statements in Evert's writing (e.g., `—hardworking immigrants who risked everything—`)

**Files Modified:** 33 files including pages, blog posts, FAQ components, calculators, and other UI components.

**Replacement Rules Applied:**
- Prefer commas where natural
- Use colons where introducing a list or explanation
- Use parentheses for parenthetical information
- Split into two sentences where appropriate
- Avoid creating new parenthetical asides

---

### Semantic Heading Line Breaks (About Page)

**Background:**
Evert prefers headings to break at semantically meaningful points (after periods, colons, key phrases) rather than wherever the browser decides to wrap.

**Implementation:**
Added responsive `<br className="hidden md:block" />` tags to 12 major H1/H2 headings on the About page.

**Behavior:**
- **Desktop/Tablet (768px+):** Line breaks appear at semantic points
- **Mobile (<768px):** Line breaks are hidden (`display: none`), text flows naturally

**Headings Updated:**
1. "We're Not Here to Sell You Services." (break after period)
2. "Why 'Mesa'?" (break after question mark)
3. "The Man Behind Mesa:" (break after colon)
4. "Our Mission:" (break after colon)
5. "Where We're Going:" (break after colon)
6. "We Serve Real People" (break after "People")
7. "Real Families. Real Businesses." (break after "Businesses.")
8. "How We're Different:" (break after colon)
9. "Comprehensive Solutions" (break after "Solutions")
10. "Meet the Team Behind" (break after "Behind")
11. "Giving Back to the" (break after "the")
12. "Your Financial Transformation" (break after "Transformation")

**Limitation Noted:**
On mid-sized viewports where text is still too long for the line, browser auto-wrapping may occur within each "line" even with semantic breaks. This is a fundamental limitation of responsive typography—the `<br />` controls forced breaks but cannot prevent natural wrapping when lines exceed viewport width.

**Future Consideration:**
If applied sitewide, may need to use `lg:block` or `xl:block` instead of `md:block` to only show breaks on wider screens where they definitely fit.

---

---

## Recent Major Update #19 (January 29, 2026)

### Contact Page Restructure & Calendly Modal Integration

**Background:**
Redesigned the Contact page to improve user experience with cleaner layout and modal-based consultation booking.

**Changes Implemented:**

**1. Hero Section Update**
- Removed background image from hero
- Reverted text colors to dark theme for better readability

**2. New Office Location Section**
- Moved office photo to dedicated section below hero
- Added heading: "Come visit us at our location on California Avenue!"
- Clickable address opens Google Maps

**3. Consultation Sections Redesign**
- Removed old "Free Consultation" sections (desktop and mobile versions)
- Removed "In-Office Meeting" sections
- Added three new full-width consultation sections:
  - **English** - Calendly modal (`https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar`)
  - **Spanish** - Calendly modal (`https://calendly.com/mesagroupconsulting/mesa-group-consulting-consulta`)
  - **Punjabi** - GHL iframe modal (`https://link.mesagroupconsulting.com/widget/booking/5I7RpXpr10YWafm3DHdl`)

**4. Modal Implementation**
- CalendlyModal used for English and Spanish (with `customUrl` prop)
- Custom inline modal for Punjabi GHL booking iframe
- All modals styled consistently (white card, close button, overlay)

**File Modified:** `src/pages/Contact.tsx`

---

**Last Updated:** February 5, 2026
**Project Status:** Active Development

---

## Recent Major Update #20 (February 5, 2026)

### WordPress Blog Integration Complete

**Background:**
WordPress blog at `blog.mesagroupconsulting.com` fully integrated with main React site. Header and navigation now match the main site design.

**Tasks Completed:**

**Task 7-10: WordPress Installation & Integration ✅**
- Cloudways server (Lightning Stack, 2GB RAM)
- WordPress REST API integration with React site
- Reverse proxy configuration via `vercel.json`
- Articles & News pages fetch real WordPress posts

**Task 11: WordPress Menu & Navigation ✅**
- Header styling matches React site (black background, white text, Mesa Yellow accents)
- Top info bar with hours, email (copy-to-clipboard), address, social icons
- Slide-out panel with MGC logo, mission statement, hours, contact info
- Header CTA elements: phone icon (dark gray bg, white icon), divider, Client Login link, dot grid trigger
- WPCode snippets use `<g transform="scale()">` for SVG icon compatibility
- Menu structure: "Blog" renamed to "Resources" with nested items

**WPCode Snippets:**
- `wpcode-top-info-bar-FIXED.html` - Top info bar implementation
- `wpcode-header-snippet-FIXED.html` - Header enhancement (slide-out, CTA elements)
- `wpcode-footer-snippet.html` - Custom footer matching React site

**Technical Notes:**
- SVG icons in WPCode require scaling via `<g transform="scale(X)">` inside `<svg>` tag (no viewBox attribute)
- Email links use JavaScript copy-to-clipboard due to mailto: issues in production
- Toast notifications implemented for email copy confirmation
- CSS `!important` required to override WordPress theme defaults for buttons and headings

**Task 12: SEO & Performance Optimization ✅**
- Rank Math SEO configured:
  - Sitemaps enabled (Posts, Pages, Categories, Tags)
  - Titles & Meta configured with Mesa Group branding
  - Social Meta (OpenGraph, Twitter) configured
- W3 Total Cache configured:
  - Page Cache: Disk Enhanced
  - Database Cache: Redis
  - Object Cache: Redis
  - Browser Cache: Enabled
  - Lazy Load Images: Enabled

**Task 13: Footer Implementation ✅**
- Custom footer matching React site design
- Newsletter modal with GHL form integration
- Collapsible menu sections on mobile
- Social media icons (Facebook, Instagram, TikTok, LinkedIn, X, YouTube)
- Trust indicators (Google Rating, stats)
- Catalyst Digital Solutions attribution
- Responsive 4-column layout (desktop) / collapsible (mobile)
- Styling: Gold headings (#bb9446), dark Subscribe button (#3e3e3e → #2c2c2c hover with gold text)

**WordPress Menu Structure (matching React site):**

| Menu Item | URL |
|-----------|-----|
| Home | https://www.mesagroupconsulting.com/ |
| About | https://www.mesagroupconsulting.com/about |
| For Consumers | https://www.mesagroupconsulting.com/for-consumers |
| → Build Credit | https://www.mesagroupconsulting.com/build-credit |
| → Credit Monitoring | https://www.mesagroupconsulting.com/credit-monitoring |
| → Credit Restoration (Mesa360) | https://www.mesagroupconsulting.com/credit-repair |
| → DIY Credit Restoration | https://www.mesagroupconsulting.com/diy-credit-repair |
| → Credit Cards | https://www.mesagroupconsulting.com/credit-cards |
| → Personal Loans | https://www.mesagroupconsulting.com/personal-loans |
| → Auto Loan Refi | https://www.mesagroupconsulting.com/auto-loan-refi |
| → Student Loan Refi | https://www.mesagroupconsulting.com/student-loan-refi |
| → Debt Consolidation Loan | https://www.mesagroupconsulting.com/debt-consolidation-loan |
| → Debt Relief | https://www.mesagroupconsulting.com/debt-relief |
| → Trust & Will Plan | https://www.mesagroupconsulting.com/trust-and-will-plan |
| → Life Insurance | https://www.mesagroupconsulting.com/life-insurance |
| For Businesses | https://www.mesagroupconsulting.com/for-businesses |
| → 0% Interest Business Funding | https://www.mesagroupconsulting.com/zero-interest-business-funding |
| → Business Funding | https://www.mesagroupconsulting.com/business-funding |
| → Business Credit Builder | https://www.mesagroupconsulting.com/business-credit-builder |
| → Business Debt Relief | https://www.mesagroupconsulting.com/business-debt-relief |
| Resources | https://www.mesagroupconsulting.com/resources |
| → Articles & Insights | https://www.mesagroupconsulting.com/resources/articles |
| → Mesa News | https://www.mesagroupconsulting.com/resources/news |
| → Financial Calculators | https://www.mesagroupconsulting.com/resources/calculators |
| → Letter Templates | https://www.mesagroupconsulting.com/resources/templates |
| Contact | https://www.mesagroupconsulting.com/contact |

---

## Recent Major Update #21 (February 17, 2026)

### Legal Pages Suite — 10 New Pages + Footer Link Overhaul

**Background:**
Built a complete legal page suite from scratch, following an established MGC Legal Page Pattern Template. All pages use the shared Header/Footer, SEO component, amber design system, and smooth-scroll TOC.

**MGC Legal Page Pattern Template (established):**
- Hero section: `bg-gradient-to-br from-amber-50 via-white to-orange-50` + badge icon + title with amber accent word + dates + summary
- Table of Contents: gray background, 2-column grid, smooth-scroll buttons with amber hover
- Content body: numbered sections with amber-100 number badges
- Callout boxes: Amber (features/services), Blue (compliance), Red (warnings), Gray (lists), Gradient amber (contact card), Strong gradient amber (acknowledgment)
- Copyright line at bottom with `border-t-2 border-gray-200`
- `useEffect(() => window.scrollTo(0, 0), [])` on mount

**New Pages Created:**

| File | Route | Badge Icon | Sections |
|------|-------|-----------|----------|
| `src/pages/PrivacyPolicy.tsx` | `/privacy-policy` | Shield | 14 sections |
| `src/pages/CaliforniaPrivacyPolicy.tsx` | `/california-privacy-policy` | ShieldCheck | 11 + 4 additional |
| `src/pages/CookiePolicy.tsx` | `/cookie-policy` | Cookie | 8 sections |
| `src/pages/TCPAConsentPolicy.tsx` | `/tcpa-consent-policy` | Phone | 12 sections |
| `src/pages/Disclaimer.tsx` | `/disclaimer` | AlertTriangle | 15 sections |
| `src/pages/DoNotSellMyPersonalInformation.tsx` | `/do-not-sell-my-personal-information` | EyeOff | 6 sections |
| `src/pages/AffiliateDisclosure.tsx` | `/affiliate-disclosure` | Handshake | 9 sections + Summary |
| `src/pages/AccessibilityStatement.tsx` | `/accessibility-statement` | Accessibility | 7 numbered + 4 unnumbered |

**Terms & Conditions — Full Content Replacement:**
- `src/pages/TermsAndConditions.tsx` completely rewritten (old collapsible accordion → new standard legal page pattern)
- Expanded from 17 → **19 sections**
- New sections added: Mesa360 Credit Repair Program (§4), 90-Day Money-Back Guarantee (§5)
- Full cross-linking to all new legal pages in §1 and §16.1
- Updated third-party partner list in §8.4 (SmartCredit, Novae, Impruvu, CreditVersio, SuperMoney, etc.)
- Consumer loan comparison services added as §2.6
- Client portal link (`portal.mesagroupconsulting.com`) throughout

**Footer Legal Bar — Linked Up:**
All footer legal links updated from `#hash` anchors to real routes in `src/components/Footer.tsx`:

| Link | Route |
|------|-------|
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |
| Accessibility | `/accessibility-statement` |
| Affiliate Disclosure | `/affiliate-disclosure` |
| CA Privacy Rights | `/california-privacy-policy` |
| Cookies | `/cookie-policy` |
| CCPA | `/california-privacy-policy` |
| Do Not Sell My Info | `/do-not-sell-my-personal-information` |
| Disclaimer | `/disclaimer` |
| TCPA | `/tcpa-consent-policy` |

Removed 3 placeholder links with no pages yet: GDPR, Data Protection, Legal Notice.

**All routes registered in `src/App.tsx`.**

**Key content notes:**
- Privacy Policy: Verbatim from `new-legal-page-copy/MGC - Privacy Policy.txt` — includes exact partner list (Novae, Impruvu, CreditVersio, SmartCredit, SuperMoney)
- California Privacy Policy: Full CCPA/CPRA rights, 12-category data table, Section 508, authorized agents, non-discrimination
- Cookie Policy: 16-row third-party table with privacy policy links, 5 cookie types, browser/mobile/ad-network opt-out methods
- TCPA: Opt-out methods table, SMS carriers grid, CAN-SPAM compliance
- Disclaimer: Full CROA notice in §3.4, ALL CAPS liability limitation in §11, 10 service partner list
- Do Not Sell: CCPA position statement, 10 opt-out methods, XCircle icons for "what we don't do"
- Affiliate Disclosure: 9 subsections for partner types (2.1–2.9), 5 detailed partner profiles in §7 (amber boxes), FTC 16 CFR Part 255 compliance
- Accessibility Statement: WCAG 2.1 Level AA, ADA Title III, Section 508, DOJ contact info, 11-item TOC

---

---

## Recent Major Update #22 (February 17, 2026)

### Legal Pages — Heading Color Unified to Mesa Yellow

**Change:** All heading/title/subtitle accent colors in the 9 legal pages changed from Tailwind `text-amber-600` (`#d97706`, dark orange-amber) to Mesa brand yellow `text-[#f9c65d]`.

**Files Updated (9):**
- `src/pages/TermsAndConditions.tsx`
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/CaliforniaPrivacyPolicy.tsx`
- `src/pages/CookiePolicy.tsx`
- `src/pages/TCPAConsentPolicy.tsx`
- `src/pages/Disclaimer.tsx`
- `src/pages/DoNotSellMyPersonalInformation.tsx`
- `src/pages/AffiliateDisclosure.tsx`
- `src/pages/AccessibilityStatement.tsx`

**Patterns replaced:**
- Hero title accent word: `<span className="text-amber-600">Word</span>` → `text-[#f9c65d]`
- TOC heading accent: `Table of <span className="text-amber-600">Contents</span>` → `text-[#f9c65d]`
- Section number badges: `text-amber-600 font-bold text-xl` → `text-[#f9c65d] font-bold text-xl`
- Large number badges: `text-2xl font-bold text-amber-600` → `text-2xl font-bold text-[#f9c65d]`
- Bullet dot spans: `text-amber-600 font-bold flex-shrink-0` → `text-[#f9c65d] font-bold flex-shrink-0`
- Inline heading text: `text-lg font-bold text-amber-600` → `text-[#f9c65d]`

**Not changed:** Link colors (`text-amber-600 hover:text-amber-700 underline`), icon colors, callout box borders/backgrounds.

---

**Last Updated:** February 17, 2026
**Project Status:** Active Development
