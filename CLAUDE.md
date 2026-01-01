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

- Repository hosted on GitHub
- Deployed through Lovable platform
- Check with Evert for production URL
- Lovable: Project > Settings > Domains to connect custom domain

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
Replaced email input forms on Articles & Insights and Resources pages with buttons that open the GHL newsletter signup form in a browser popup window. This approach keeps users on the Mesa Group site while completing newsletter signup.

**Component Created:**
[src/components/NewsletterModal.tsx](src/components/NewsletterModal.tsx) - Opens GHL form in centered browser popup

**Implementation:**
```tsx
import { useEffect } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Open GHL form in a centered popup window
      const width = 500;
      const height = 600;
      const left = (window.innerWidth - width) / 2 + window.screenX;
      const top = (window.innerHeight - height) / 2 + window.screenY;

      window.open(
        'https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p',
        'NewsletterSignup',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );

      // Close our state immediately since we opened a popup
      onClose();
    }
  }, [isOpen, onClose]);

  return null; // Component doesn't render anything - just opens popup
};
```

**Pages Updated:**

1. **Articles & Insights** ([src/pages/ArticlesInsights.tsx](src/pages/ArticlesInsights.tsx))
   - Removed email input form
   - Added "Subscribe to Newsletter" button with ArrowRight icon
   - Button opens GHL form in browser popup

2. **Resources** ([src/pages/Resources.tsx](src/pages/Resources.tsx))
   - Removed email input form
   - Added centered "Subscribe to Newsletter" button
   - Button wrapped in `<div className="text-center">` for centering

**Usage Pattern:**
```tsx
import { NewsletterModal } from '@/components/NewsletterModal';

const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
const openNewsletter = () => setIsNewsletterOpen(true);
const closeNewsletter = () => setIsNewsletterOpen(false);

// Button:
<button onClick={openNewsletter} className="...">
  Subscribe to Newsletter
  <ArrowRight className="w-5 h-5" />
</button>

// Modal (renders nothing, just manages popup):
<NewsletterModal isOpen={isNewsletterOpen} onClose={closeNewsletter} />
```

**GHL Form Details:**
- Form ID: `87XreQhYJtAAT7XwLE0p`
- Form Name: "MGC Website NewsLetter"
- Form URL: `https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p`

**Why Browser Popup Instead of Iframe/Modal:**
- GHL's native `form_embed.js` script auto-triggered forms on page load
- Iframe approach caused "two modals" issue (React wrapper + GHL popup)
- Browser popup provides clean UX without interfering with GHL's scripts
- User stays on Mesa Group site while form is in separate window

**Technical Notes:**
- Popup dimensions: 500x600 pixels, centered on screen
- `scrollbars=yes,resizable=yes` for accessibility
- No GHL embed script needed - direct URL opens in popup
- State resets immediately after popup opens via `onClose()`

---

**Last Updated:** January 1, 2026
**Project Status:** Active Development
