# Mesa Group Consulting - Fund Foundation Builder

## Project Overview

This is the main website for Mesa Group Consulting (owned by Evert Calderon), developed in collaboration with Lovable. The site showcases various financial services including credit repair, business funding, debt relief, and consumer financial products.

**Client:** Evert Calderon - Mesa Group Consulting, Mesa Group Capital
**Development Partner:** Lovable
**GitHub Repository:** https://github.com/catalyst-digital-solutions/fund-foundation-builder

## Tech Stack

- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui patterns
- **Icons:** Lucide React
- **State Management:** React Query (TanStack Query)

## Project Structure

```
fund-foundation-builder/
├── src/
│   ├── components/
│   │   ├── Header.tsx                    # Main navigation header
│   │   ├── Footer.tsx                    # Site footer
│   │   ├── PoweredByMesaGroup.tsx        # Branding component
│   │   ├── life-insurance/sections/      # Life insurance page components
│   │   └── zero-interest-business-funding/sections/  # Business funding components
│   ├── pages/
│   │   ├── Homepage.tsx                  # Main landing page
│   │   ├── AboutUs.tsx                   # About page
│   │   ├── ForConsumers.tsx              # Consumer services
│   │   ├── ForBusinesses.tsx             # Business services
│   │   ├── BuildCredit.tsx               # Credit building
│   │   ├── CreditRepair.tsx              # Credit repair (2 versions)
│   │   ├── ZeroInterestBusinessFunding.tsx      # Original 0% funding page
│   │   ├── ZeroInterestBusinessFunding2.tsx     # NEW: Premium 0% funding page
│   │   ├── BusinessFunding.tsx           # General business funding
│   │   ├── DebtRelief.tsx                # Debt relief services
│   │   ├── LifeInsurance.tsx             # Life insurance
│   │   └── Contact.tsx                   # Contact page
│   └── App.tsx                           # Main app with routing
├── CLAUDE.md                             # This file
└── package.json
```

## Key Pages & Routes

### Business Services
- `/zero-interest-business-funding` - Original business funding page (broad marketplace approach)
- `/zero-interest-business-funding-2` - **NEW Premium page** (exclusive insider banking approach)
- `/business-funding` - General business funding options
- `/business-debt-relief` - Business debt relief services
- `/for-businesses` - Business services overview

### Consumer Services
- `/credit-repair` - Credit repair services (version 1)
- `/credit-repair-2` - Credit repair services (version 2)
- `/diy-credit-repair` - DIY credit repair
- `/build-credit` - Credit building services
- `/credit-cards` - Credit card offers
- `/personal-loans` - Personal loan options
- `/auto-loan-refi` - Auto loan refinancing
- `/student-loan-refi` - Student loan refinancing (2 versions)
- `/debt-consolidation-loan` - Debt consolidation
- `/debt-relief` - Consumer debt relief
- `/for-consumers` - Consumer services overview

### Other Services
- `/life-insurance` - Life insurance products
- `/trust-and-will-plan` - Estate planning

### Informational
- `/` or `/homepage` - Homepage
- `/about` - About Mesa Group Consulting
- `/contact` - Contact information
- `/resources` - Resources hub
- `/resources/articles` - Articles and insights
- `/resources/news` - Mesa News
- `/resources/calculators` - Financial calculators
- `/resources/templates` - Letter templates

## Recent Major Update (December 2024)

### 0% Interest Business Funding Page Redesign

**Background:**
- Original page positioned Mesa as a general business funding marketplace (9 different solutions, inclusive 550+ credit scores)
- Evert provided new copy repositioning the service as an exclusive, premium 0% credit card strategy with insider banking access

**What Changed:**
- Created new page: `ZeroInterestBusinessFunding2.tsx`
- Original preserved as backup at `/zero-interest-business-funding`
- New page accessible at `/zero-interest-business-funding-2`

**Key Positioning Shifts:**

1. **Target Audience Narrowing:**
   - Old: 550+ credit accepted, startups with limited revenue
   - New: 700+ credit minimum (preferably 750+), established LLCs with 6+ months history

2. **Service Model:**
   - Old: Marketplace broker model with 30+ funding partners
   - New: Premium consulting with direct banking relationships and insider knowledge

3. **Messaging:**
   - Old: "We have 30+ funding partners"
   - New: "We submit applications through our banking relationships" - emphasizes CEO's banking background and direct relationships with Business Relationship Managers at major banks

4. **Updated Statistics:**
   - $47M+ total capital secured (was $42M+)
   - 850+ clients funded (was 720+)
   - $155K average funding amount
   - 15+ years combined banking experience

5. **New Sections Added:**
   - "The Awakening" - Comparison table showing $20,250 savings vs traditional loans
   - "Three-Round Framework" - Foundation/Expansion/Maximization rounds (30-60 days, 60-120 days, 120-180 days)
   - "Who This Works For" - Explicit qualification boundaries (great fit vs. not for you)
   - "Mesa Advantage" - 4 key differentiators emphasizing insider knowledge
   - "What You'll Actually Do" - Clear role delineation
   - "Partnership Model" - Performance-based pricing with ROI examples
   - "Beyond 0% Credit" - Progression path to larger funding
   - Updated testimonials with specific credit scores and funding amounts

6. **Sections Removed:**
   - "9 Funding Solutions" (equipment financing, invoice factoring, merchant cash advances, etc.)
   - Emotional CTA components (EmotionalCTA1, 2, 3)
   - Bakersfield-specific testimonials (replaced with detailed case studies)

**Design System Preserved:**
- Amber/gold color scheme (#f9c65d, #bb9446)
- Animations and hover effects
- Card-based layouts
- Responsive design patterns

## Design & Branding

### Color Scheme
- **Primary:** Amber/Gold (#f9c65d, #bb9446, #fcd34d, #f59e0b)
- **Secondary:** Green for success/approval indicators
- **Accent:** Red for traditional loan comparisons
- **Neutral:** Gray scale for text and backgrounds

### Typography
- **Font Family:** Inter (sans-serif)
- **Headings:** Bold, large scale (4xl-6xl on desktop)
- **Body:** Regular weight, good line-height for readability

### Component Patterns
- Gradient backgrounds (white → amber-50 → white)
- Shadow-lg cards with hover effects
- Border-l-4 accent bars on callout boxes
- Rounded-xl corners throughout
- Hover animations: scale-105, -translate-y-1

## Funnel & CTA Links

### Primary Funnel
- **Main Application:** https://funding-app.mesagroupconsulting.com/Opt-In
- **Alternative Entry:** https://funding-app.mesagroupconsulting.com/opt-in/apply-page

### Contact
- **Phone:** (661) 310-3040
- **Location:** Bakersfield, CA

## Development Notes

### Running Locally
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Key Dependencies
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React (icons)
- TanStack Query

### Component Conventions
- All pages are functional components
- Use TypeScript for type safety
- Lucide icons for all iconography
- Responsive design: mobile-first with md/lg breakpoints
- Animations use Tailwind's transition utilities

### File Naming
- Pages: PascalCase (e.g., `ZeroInterestBusinessFunding2.tsx`)
- Components: PascalCase (e.g., `PoweredByMesaGroup.tsx`)
- Directories: kebab-case for section folders (e.g., `life-insurance/sections/`)

## Integration with Lovable

This project is built in collaboration with Lovable, a web development platform. Changes may be synced between local development and Lovable's environment.

## Client Requirements

**Evert's Preferences:**
- Conservative, professional tone
- Emphasis on results and credibility (real numbers, real stats)
- Clear disclosure and compliance language
- Focus on business owners and real estate investors
- Premium positioning for high-credit clients
- Insider/relationship-based value proposition

## Future Considerations

1. **A/B Testing:** May want to test original vs. new 0% funding page
2. **Version Management:** Consider which page becomes primary once Evert approves
3. **Additional Services:** Evert runs multiple brands (Mesa Group Consulting, Mesa Group Capital)
4. **SEO Optimization:** Meta tags and descriptions may need updating
5. **Analytics:** Track conversion rates between two 0% funding page versions

## Important Files for Context

When working on this project, always reference:
1. The new copy document: `/Users/Mario/Documents/aaa-catalyst-digital-solutions/aaa-client-projects/Mesa Group Consulting - Evert Calderon/jobs-current/website-revamp-for-steve-neu-campaign/webpage-templates/new-webpage-copy-written-by-evert/`
2. This CLAUDE.md file for project context
3. Original pages before making changes (for comparison)

## Deployment

Repository is hosted on GitHub and likely deployed through Lovable's platform or another hosting service. Check with Evert for production URL.

---

**Last Updated:** December 11, 2024
**Updated By:** Claude Code (Anthropic)
**Project Status:** Active Development
