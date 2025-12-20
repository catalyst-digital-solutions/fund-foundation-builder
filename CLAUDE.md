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
- `/business-funding` + `/business-funding-2` (v1 and v2 pages)
- `/zero-interest-business-funding` + `/zero-interest-business-funding-2`
- `/business-credit-builder` (paid program, separate from personal credit)
- `/business-debt-relief`

**Consumer Services:**
- `/credit-repair` + `/credit-repair-2` (v1 and v2 pages)
- `/build-credit` (personal credit - FREE guide)
- `/credit-cards`, `/personal-loans`, `/auto-loan-refi`
- `/debt-consolidation-loan`, `/debt-relief`

**Important:** Multiple pages have v1/v2 variants for A/B testing. Always clarify which version to modify.

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

## Version Management Strategy

Multiple pages have v1/v2 variants for A/B testing:

| Route | Version 1 | Version 2 | Difference |
|-------|-----------|-----------|------------|
| Business Funding | `/business-funding` | `/business-funding-2` | v2: Interactive calculator, 10-20% rule, dual pathways |
| 0% Funding | `/zero-interest-business-funding` | `/zero-interest-business-funding-2` | v2: Premium positioning, 700+ credit minimum |
| Credit Repair | `/credit-repair` | `/credit-repair-2` | v2: Legal escalations, trilingual support |

**When modifying:** Always clarify which version the user wants updated.

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

**Last Updated:** December 19, 2024
**Project Status:** Active Development
