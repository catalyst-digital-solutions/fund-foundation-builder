# RooCode Handoff — Mesa Group Consulting Website
**Project:** mesagroupconsulting.com  
**Client:** Evert Calderon — Mesa Group Consulting / Mesa Group Capital  
**Dev Partner:** Catalyst Digital Solutions (Mario)  
**Date:** February 2026  
**Primary Agent Role:** Architect/Code (gpt-4o mini) — copy swaps, layout changes, module moves  
**Orchestrator:** Gemini 2.5 Flash | **Debug:** Claude Sonnet 4.6 | **Ask:** gpt-4o mini

---

## 1. What This Site Is

A **multi-page React/TypeScript/Vite SPA** (single-domain, client-side routing) deployed to **Vercel** via GitHub. It is the primary marketing and lead-generation website for Mesa Group Consulting, a Bakersfield, CA-based financial services firm offering credit repair, business funding, credit monitoring, debt relief, life insurance, estate planning, and more.

**Live URL:** https://www.mesagroupconsulting.com  
**GitHub Repo:** https://github.com/catalyst-digital-solutions/fund-foundation-builder  
**Vercel deploys automatically from the `main` branch.** Push to `main` → Vercel rebuilds → live in ~60 seconds.

---

## 2. Tech Stack (Know These Cold)

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite (SWC plugin) |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| UI Primitives | shadcn/ui (Radix) — `src/components/ui/` |
| Icons | **lucide-react ONLY. Never emojis.** |
| State | TanStack Query (React Query) v5 |
| Forms | react-hook-form + zod |
| Calendly | Custom CalendlyPopupButton + CalendlyModal |
| External Forms | GoHighLevel (GHL) iframes |
| Blog | WordPress REST API (fetched via useWordPress hook) |

**Dev server runs on port 8080:**
```bash
npm run dev      # dev server
npm run build    # production build + sitemap generation
npm run lint     # ESLint
```

---

## 3. Brand Identity (Critical — Everything Must Match)

### Colors
The brand palette is referenced two ways in the codebase:

| Token | Hex | Usage |
|---|---|---|
| MGC Yellow | `#f9c65d` | Primary CTAs, headline highlights, button fills, icon fills |
| MGC Gold | `#bb9446` | Hover states, dark accents, section heading gold |
| Amber (Tailwind) | `bg-amber-400` / `bg-amber-500` | Maps directly to MGC Yellow in most contexts |
| Dark | `#3e3e3e` / `#2c2c2c` | Dark card backgrounds, testimonial cards |
| Light cream | `bg-amber-50` / `from-amber-50` | Section alternating backgrounds |

**When to use which:**
- `bg-amber-400 hover:bg-amber-500` → standard amber buttons (Tailwind classes)
- `text-[#f9c65d]` → exact hex for inline spans highlighting words in headings, icons fills
- `text-[#bb9446]` → exact hex for gold hover text, subheadings
- **Never use raw `style={{ color: '...' }}`** — use Tailwind or the hex bracket syntax

### Typography
- **Font:** Inter (loaded via `src/index.css` Google Fonts import)
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight`
- Section H2: `text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900`
- Body: `text-lg md:text-xl text-gray-600 leading-relaxed`
- Accent words in headlines: `<span className="text-[#f9c65d]">Word</span>`
- Small labels/badges: `text-sm font-semibold uppercase tracking-wide`

### Icons
**Always import from `lucide-react`.** Never use emoji. Never use other icon libraries.

```tsx
import { CheckCircle, ArrowRight, Shield, Star } from 'lucide-react';

// Positive checkmarks
<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />

// Negative X marks
<X className="w-5 h-5 text-red-600 flex-shrink-0" />

// CTA arrows (always flex-shrink-0 to prevent wrapping)
<ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
```

**Note:** The `Header.tsx` file defines three inline SVG components that are NOT from lucide-react — `MesaGroupLogo`, `XIcon` (Twitter/X), and `TikTokIcon`. These are intentional exceptions because these icons either don't exist in lucide-react or are brand-specific.

### Logo Usage
- **White version (on dark backgrounds):** `src/assets/mesa-group-logo-white.webp`
- **Black version (on light backgrounds):** `src/assets/mesa-group-logo-black.webp`
- There's also an inline SVG version of the logo directly in `Header.tsx` (the `MesaGroupLogo` component) — this is the authoritative version used in the navigation.

### Tone and Writing Style
- Conservative, professional, results-driven
- Real numbers (never vague claims)
- No em-dashes anywhere (Evert's firm preference — use commas, colons, or period breaks instead)
- No guaranteed outcomes language for credit repair (CROA compliance)
- No "Department of Justice" or "DOJ" references anywhere
- Fundability® always has the ® symbol
- The brand name is **Mesa Group Consulting** (full) or **Mesa Group** (short). Never "Mesa" alone when referring to the company.

---

## 4. Project File Structure (Annotated)

```
fund-foundation-builder/
├── src/
│   ├── App.tsx                          ← ALL route definitions live here
│   ├── main.tsx                         ← React entry point
│   ├── index.css                        ← Tailwind imports + CSS custom properties (brand tokens, 3D flip card utilities)
│   ├── pages/                           ← One file per route, PascalCase
│   │   ├── Homepage.tsx                 ← / (main landing page)
│   │   ├── AboutUs.tsx                  ← /about
│   │   ├── ForConsumers.tsx             ← /for-consumers (consumer hub)
│   │   ├── ForBusinesses.tsx            ← /for-businesses (business hub)
│   │   ├── CreditRepair.tsx             ← /credit-repair (primary, fully rewritten Feb 2026)
│   │   ├── CreditMonitoring.tsx         ← /credit-monitoring (updated Feb 2026, $27.99/mo, Concierge)
│   │   ├── Concierge.tsx                ← /concierge (new page Feb 2026, Mesa Financial Concierge)
│   │   ├── ZeroInterestBusinessFunding.tsx ← /zero-interest-business-funding (full rewrite Feb 2026)
│   │   ├── DIYCreditRepair.tsx          ← /diy-credit-repair (Creditily platform)
│   │   ├── BuildCredit.tsx              ← /build-credit (FREE personal credit guide)
│   │   ├── BusinessCreditBuilder.tsx    ← /business-credit-builder (paid program $2,495/$995)
│   │   ├── BusinessFunding.tsx          ← /business-funding
│   │   ├── BusinessDebtRelief.tsx       ← /business-debt-relief
│   │   ├── DebtRelief.tsx               ← /debt-relief
│   │   ├── DebtConsolidationLoan.tsx    ← /debt-consolidation-loan
│   │   ├── PersonalLoans.tsx            ← /personal-loans
│   │   ├── CreditCards.tsx              ← /credit-cards
│   │   ├── AutoLoanRefi.tsx             ← /auto-loan-refi
│   │   ├── StudentLoanRefi.tsx          ← /student-loan-refi
│   │   ├── TrustAndWillPlan.tsx         ← /trust-and-will-plan
│   │   ├── LifeInsurance.tsx            ← /life-insurance
│   │   ├── MesaNews.tsx                 ← /resources/news (fetches WordPress posts)
│   │   ├── ArticlesInsights.tsx         ← /resources/articles (fetches WordPress posts)
│   │   ├── FinancialCalculators.tsx     ← /resources/calculators
│   │   ├── LetterTemplates.tsx          ← /resources/templates
│   │   ├── Resources.tsx                ← /resources (hub page)
│   │   ├── Contact.tsx                  ← /contact
│   │   ├── TermsAndConditions.tsx       ← /terms-and-conditions
│   │   ├── PrivacyPolicy.tsx            ← /privacy-policy
│   │   ├── CaliforniaPrivacyPolicy.tsx  ← /california-privacy-policy
│   │   ├── CookiePolicy.tsx             ← /cookie-policy
│   │   ├── TCPAConsentPolicy.tsx        ← /tcpa-consent-policy
│   │   ├── Disclaimer.tsx               ← /disclaimer
│   │   ├── DoNotSellMyPersonalInformation.tsx ← /do-not-sell-my-personal-information
│   │   ├── AffiliateDisclosure.tsx      ← /affiliate-disclosure
│   │   ├── AccessibilityStatement.tsx   ← /accessibility-statement
│   │   ├── Index.tsx                    ← /business-credit (old v1 index page — legacy, still routed)
│   │   ├── NotFound.tsx                 ← * (404)
│   │   └── blog/                        ← ⚠️ DEAD CODE — imported in App.tsx but NO routes defined
│   │       ├── CreditUtilizationBlogPost.tsx
│   │       ├── WFBNABlogPost.tsx
│   │       └── DebtReliefVsConsolidationBlogPost.tsx
│   ├── components/
│   │   ├── Header.tsx                   ← Shared nav — desktop dropdowns + mobile hamburger + search + slide-out panel
│   │   ├── Footer.tsx                   ← Shared footer — collapsible menus, stats bar, social icons, legal links
│   │   ├── ContactFormSection.tsx       ← Reusable GHL contact form section (adds before Footer)
│   │   ├── SEO.tsx                      ← Helmet-based meta tag component (used on every page)
│   │   ├── ScrollToTop.tsx              ← Scrolls to top on PUSH navigation only (not back button)
│   │   ├── CalendlyPopupButton.tsx      ← Primary consultation CTA button (opens Calendly popup/modal)
│   │   ├── CalendlyModal.tsx            ← Custom modal for portrait/vertical viewports
│   │   ├── GHLFormModal.tsx             ← Modal for GHL survey/form iframes (used in BuildCredit)
│   │   ├── ExternalLinkModal.tsx        ← Opens external URLs in styled popup (used in BusinessFunding, BusinessCreditBuilder)
│   │   ├── SearchModal.tsx              ← Algolia search modal (wired into Header)
│   │   ├── NewsletterModal.tsx          ← GHL newsletter form modal (Articles & Resources pages)
│   │   ├── NavLink.tsx                  ← Custom Link wrapper (used internally)
│   │   ├── DualCTAButtons.tsx           ← Reusable dual CTA button pair component
│   │   ├── PoweredBySmartCredit.tsx     ← SmartCredit affiliate badge/link
│   │   ├── PoweredByMesaGroup.tsx       ← Mesa Group branding badge
│   │   ├── PoweredByPolicyGenius.tsx    ← PolicyGenius affiliate badge
│   │   ├── PoweredBySuperMoney.tsx      ← SuperMoney affiliate badge
│   │   ├── PoweredByTrustAndWill.tsx    ← Trust & Will affiliate badge
│   │   ├── ui/                          ← shadcn/ui base components — DO NOT MODIFY
│   │   ├── calculators/                 ← 5 financial calculator components
│   │   ├── homepage/
│   │   │   └── TransformationJourney.tsx ← Used in Homepage.tsx
│   │   ├── credit-monitoring/sections/  ← EmotionalCTA1/2/3 for Credit Monitoring page
│   │   ├── credit-repair-2/
│   │   │   └── FAQ.tsx                  ← Credit Repair FAQ component (The Big 5 format)
│   │   ├── business-credit/sections/    ← Full set of sections for BusinessCreditBuilder page
│   │   ├── business-debt-relief/sections/
│   │   ├── personal-loans/sections/
│   │   ├── debt-consolidation/sections/
│   │   ├── life-insurance/sections/
│   │   ├── trust-and-will/sections/
│   │   ├── auto-loan-refi/sections/
│   │   ├── student-loan-refi2/sections/
│   │   ├── credit-cards/sections/
│   │   ├── debt-relief/sections/
│   │   └── diy-credit-repair/sections/
│   ├── hooks/
│   │   ├── useCalendly.ts               ← Viewport detection for Calendly popup vs modal
│   │   ├── use-mobile.tsx               ← Mobile breakpoint detection
│   │   ├── use-toast.ts                 ← Toast notification hook
│   │   └── useWordPress.ts              ← Fetches WordPress REST API posts (ArticlesInsights, MesaNews)
│   ├── lib/
│   │   ├── utils.ts                     ← shadcn cn() utility
│   │   └── searchClient.ts              ← Algolia search client (powers SearchModal)
│   └── utils/
│       ├── calculations.ts              ← Financial calculator math utilities
│       └── wordpress.ts                 ← WordPress REST API fetch functions
├── public/                              ← Static assets (served as-is at root URL)
│   ├── favicon.jpg
│   ├── opengraph-thumbnail.jpg
│   ├── sitemap.xml                      ← Auto-generated by `generate-sitemap.js` on build
│   ├── robots.txt
│   ├── santa-ana-volcano-crater-lake.jpg ← About page "Where This Company Came From" bg
│   ├── mesa-group-consulting-office-photo-9.jpg ← Homepage "Not Sure Where to Start?" image
│   ├── evert-at-a-speaking-engagement-for-smartcredit.jpg
│   ├── 5001-california-ave-bakersfield-ca-building-photo-4-mesa-group-consulting-office-location.jpg
│   ├── mesa-group-consulting-30-second-commercial.mp4/.webm
│   ├── mgc-zero-percent-interest-funding-videos/compressed/ ← 4 .webm testimonial videos for 0% Funding page
│   ├── img-01 through img-07-*.jpeg     ← Professional headshot avatars for testimonials
│   ├── img-03-happy-family-in-front-of-home-cropped.jpeg
│   ├── img-geometric-financial-bg.jpeg
│   ├── testimonials/                    ← Testimonial photos by page context
│   ├── reviews/complete-mgc-google-reviews-feb-2026.json ← Real Google reviews data
│   ├── blog-post-images/                ← Images for blog posts
│   ├── infographics/                    ← Consultation process infographics
│   └── mgc-documents-for-publication/Mesa_Group_Consulting_Terms_and_Conditions.md.pdf
├── src/assets/                          ← Bundled assets (imported in TSX files via import statement)
│   ├── credit-repair-cta-01/02/03.png  ← Image CTA assets for Credit Repair emotional sections
│   ├── [service]-cta-01/02/03.png      ← Per-service image CTA assets (pattern: 3 variants each)
│   ├── smartcredit-logo.png / smartcredit-logo-light.png
│   ├── mesa-group-logo-black.webp / mesa-group-logo-white.webp
│   ├── diy-credit-repair-hero.webp
│   ├── transformation-*.jpg/jpeg        ← Transformation journey photos (Homepage)
│   └── [various other assets]
├── App.tsx                              ← All route definitions
├── index.html                           ← HTML shell + meta tags + OG tags
├── vite.config.ts                       ← Vite config (port 8080, path alias @/ → src/)
├── tailwind.config.ts                   ← Custom animations, 3D flip utilities
├── vercel.json                          ← Vercel config: SPA fallback + WordPress /blog/* proxy
├── generate-sitemap.js                  ← Runs after build to write public/sitemap.xml
├── CLAUDE.md                            ← Architecture reference (partially outdated in its "Recent Updates" section)
└── ROOCODE_HANDOFF.md                   ← This file
```

---

## 5. Routing (Complete List)

All routes are in `src/App.tsx`. Every route wraps its page in `<Header />` + `<Footer />` (rendered inside the page component itself).

| Route | Component | Notes |
|---|---|---|
| `/` | `Homepage` | Main landing page |
| `/about` | `AboutUs` | |
| `/concierge` | `Concierge` | New page Feb 2026 — Mesa Financial Concierge |
| `/for-consumers` | `ForConsumers` | Consumer hub/routing page |
| `/for-businesses` | `ForBusinesses` | Business hub/routing page |
| `/build-credit` | `BuildCredit` | FREE personal credit guide, affiliate links |
| `/business-credit-builder` | `BusinessCreditBuilder` | Paid program ($2,495 / $995 DIY) |
| `/credit-repair` | `CreditRepair` | Primary credit repair page (full rewrite Feb 2026) |
| `/diy-credit-repair` | `DIYCreditRepair` | DIY via Creditily platform |
| `/credit-monitoring` | `CreditMonitoring` | $27.99/mo SmartCredit + Concierge |
| `/zero-interest-business-funding` | `ZeroInterestBusinessFunding` | Full rewrite Feb 2026; GHL form + 4 video testimonials |
| `/business-funding` | `BusinessFunding` | General business funding page |
| `/business-debt-relief` | `BusinessDebtRelief` | |
| `/credit-cards` | `CreditCards` | |
| `/personal-loans` | `PersonalLoans` | |
| `/auto-loan-refi` | `AutoLoanRefi` | |
| `/student-loan-refi` | `StudentLoanRefi` | |
| `/debt-consolidation-loan` | `DebtConsolidationLoan` | |
| `/debt-relief` | `DebtRelief` | |
| `/trust-and-will-plan` | `TrustAndWillPlan` | |
| `/life-insurance` | `LifeInsurance` | |
| `/resources` | `Resources` | Resources hub |
| `/resources/articles` | `ArticlesInsights` | Fetches WordPress posts |
| `/resources/news` | `MesaNews` | Fetches WordPress posts |
| `/resources/calculators` | `FinancialCalculators` | |
| `/resources/templates` | `LetterTemplates` | |
| `/contact` | `Contact` | Trilingual booking (EN/ES/Punjabi) |
| `/business-credit` | `Index` | Legacy v1 page — still live, rarely used |
| `/terms-and-conditions` | `TermsAndConditions` | |
| `/privacy-policy` | `PrivacyPolicy` | |
| `/california-privacy-policy` | `CaliforniaPrivacyPolicy` | |
| `/cookie-policy` | `CookiePolicy` | |
| `/tcpa-consent-policy` | `TCPAConsentPolicy` | |
| `/disclaimer` | `Disclaimer` | |
| `/do-not-sell-my-personal-information` | `DoNotSellMyPersonalInformation` | |
| `/affiliate-disclosure` | `AffiliateDisclosure` | |
| `/accessibility-statement` | `AccessibilityStatement` | |
| `*` | `NotFound` | 404 |

**⚠️ Dead code in App.tsx:** `CreditUtilizationBlogPost`, `WFBNABlogPost`, and `DebtReliefVsConsolidationBlogPost` are imported on lines 36–38 but have no `<Route>` entries. They are never rendered. Do not add routes for them without first checking with Mario/Evert.

---

## 6. Architecture: How Pages Are Built

Every service page follows a **vertical section composition** pattern:

```tsx
const ServicePage = () => (
  <div className="min-h-screen bg-white">
    <SEO title="..." description="..." canonicalUrl="/route" />
    <Header />
    <HeroSection />        {/* imported from components/[service]/sections/ */}
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
    <ContactFormSection /> {/* optional — adds GHL contact form before footer */}
    <Footer />
  </div>
);
```

**Section files** live in `src/components/[service-name]/sections/` (kebab-case folder, PascalCase file).

**Exceptions:** Several recently-rewritten pages (`CreditRepair`, `CreditMonitoring`, `Concierge`, `ZeroInterestBusinessFunding`) are **fully self-contained** — all their sections are inline in the page file rather than split into separate section components. This is intentional for those pages.

**Section background pattern:** Sections alternate between white, `bg-gray-50`, and amber/cream gradients:
- White: `bg-white`
- Light amber: `bg-gradient-to-br from-amber-50 via-white to-orange-50`
- Dark sections: `bg-gradient-to-br from-gray-900 to-gray-800` with white text

---

## 7. Key Reusable Components (What They Are and How to Use)

### `<Header />`
Self-contained navigation. Includes:
- Top info bar: hours, click-to-copy email, address, phone
- Logo (inline SVG — `MesaGroupLogo` component at top of file)
- Desktop dropdowns: For Consumers, For Businesses, Resources
- Mobile hamburger menu with full nav tree
- Slide-out panel (dot grid button, top-right)
- Search icon that opens `SearchModal`
- JOIN button (color `#f9c65d`, links to Calendly or GHL)

**No props.** Just `<Header />`.

### `<Footer />`
Global footer with:
- Collapsible sections (For Consumers, For Businesses, Resources)
- Stats row: Google Rating, $50M+ Collections Deleted, Business Funding Facilitated, Lives Changed
- Newsletter CTA button (opens `NewsletterModal`)
- Social icons: Facebook, Instagram, TikTok, LinkedIn, X, YouTube
- Legal bar: full set of links to legal pages
- Catalyst Digital Solutions attribution

**No props.** Just `<Footer />`.

### `<SEO title description canonicalUrl />`
Wraps `react-helmet-async`. Add as the first child of every page's root div, before `<Header />`.
```tsx
<SEO
  title="Page Title | Mesa Group Consulting"
  description="150-160 char description for search results."
  canonicalUrl="/route"
/>
```

### `<ContactFormSection />`
Reusable section that shows a two-column layout: left = headline + benefits, right = GHL contact form iframe (form ID `CaNQDAlt2BSYAOxTZb6b`). Dynamically loads `form_embed.js` via `useEffect`. Drop it between the last content section and `<Footer />` on any page that needs a contact form.

### `<CalendlyPopupButton />`
Primary consultation CTA. Props:
```tsx
<CalendlyPopupButton
  text="Schedule My Free Consultation"
  showArrow={true}
  className="px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg"
  prefillOptions={{ utm: { source: 'page-name', medium: 'section-name' } }}
/>
```
Always include `prefillOptions.utm` for tracking. On portrait/vertical viewports, it opens a `CalendlyModal` instead of the Calendly popup widget.

### `<GHLFormModal />`
Used on `BuildCredit.tsx` for guide download forms. Opens a GHL survey URL in an inline modal. Usage:
```tsx
<GHLFormModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  formUrl="https://link.mesagroupconsulting.com/widget/survey/FORM_ID"
  title="Modal Title"
/>
```

### `<ExternalLinkModal />`
Opens external URLs (like `mesagroupcapital.com/...`) in a styled browser popup window. Used in `BusinessFunding.tsx` and `BusinessCreditBuilder.tsx`. Bypasses X-Frame-Options restrictions.

### `<NewsletterModal />`
GHL newsletter form in a modal. Used in `ArticlesInsights.tsx` and `Resources.tsx`. Form ID: `87XreQhYJtAAT7XwLE0p`.

---

## 8. GoHighLevel (GHL) Form Embedding Pattern

GHL forms are embedded via iframe. The form embed script must be loaded dynamically. **Always use `ContactFormSection.tsx` as the reference** — don't add a `<script>` tag in JSX (that causes build errors).

```tsx
// Load GHL's resizing script dynamically (DO NOT use <script /> in JSX)
useEffect(() => {
  const scriptId = 'ghl-form-embed-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://link.mesagroupconsulting.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
}, []);

// Iframe attributes (required for GHL auto-resize):
<iframe
  src="https://link.mesagroupconsulting.com/widget/survey/FORM_ID"
  style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none', display: 'block' }}
  scrolling="no"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-activation-type="alwaysActivated"
  data-deactivation-type="neverDeactivate"
  data-form-name="Form Name"
  data-form-id="FORM_ID"
/>
```

**Active GHL form IDs:**
| Form | ID | Used On |
|---|---|---|
| Contact form | `CaNQDAlt2BSYAOxTZb6b` | `ContactFormSection.tsx` |
| Credit Repair survey | `Y7K7EfnX7ydeGpv4RoIU` | `CreditRepair.tsx` |
| 0% Business Funding survey | `FIkq2SkzWrx0Ylx8xp9w` | `ZeroInterestBusinessFunding.tsx` |
| Newsletter | `87XreQhYJtAAT7XwLE0p` | `NewsletterModal.tsx` |
| Punjabi booking | `5I7RpXpr10YWafm3DHdl` | `Contact.tsx` |

---

## 9. Critical External URLs (Never Change Without Evert's Approval)

| Purpose | URL |
|---|---|
| Credit Repair Portal | `https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=LzgrcWJobTEyUXFoejhLbFpJYjVwUT09` |
| Calendly (English) | `https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar` |
| Calendly (Spanish) | `https://calendly.com/mesagroupconsulting/mesa-group-consulting-consulta` |
| Business Funding app | `https://funding-app.mesagroupconsulting.com/Opt-In` |
| Business Funding alt | `https://mesagroupcapital.com/for-businesses/business-funding` |
| Business Credit Full ($2,495) | `https://mesagroupcapital.com/business-credit-enroll` |
| Business Credit DIY ($995) | `https://mesagroupcapital.com/bcfs-diy-enroll` |
| DIY Signup | `https://shm.to/fsgSro2` |
| Credit Analysis Form | `https://shm.to/yatPKyE` |
| Phone | `(661) 310-3040` |
| Email | `contact@mesagroupconsulting.com` |
| Address | `5001 California Ave Suite 219, Bakersfield, CA 93309` |
| Hours | `M–F 9am–7pm · Sat 10am–2pm` |
| Social: Instagram | `@mesagroupco` |
| Social: Twitter/X | `@mesagroupco` |

---

## 10. Common Section Patterns (Copy-Paste Safe)

### Primary CTA Button
```tsx
<a
  href="URL"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-bold rounded-xl shadow-lg transition-all duration-200"
>
  <span>Button Text</span>
  <ArrowRight className="w-5 h-5 flex-shrink-0" />
</a>
```

### Secondary CTA Button (on dark backgrounds)
```tsx
<a
  href="URL"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-all"
>
  Secondary Action
</a>
```

### Feature Card
```tsx
<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6">
    <IconName className="w-6 h-6 text-white" />
  </div>
  <h3 className="text-xl font-bold text-gray-900 mb-3">Title</h3>
  <p className="text-gray-600 leading-relaxed">Body copy.</p>
</div>
```

### Section Container
```tsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Dark Section Container
```tsx
<section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* White text content */}
  </div>
</section>
```

### Testimonial Card (dark theme — standard on this site)
```tsx
<div className="bg-gradient-to-br from-[#3e3e3e] to-[#2c2c2c] rounded-xl p-6 shadow-lg">
  <div className="flex gap-1 mb-4">
    {[1,2,3,4,5].map((star) => (
      <Star key={star} className="w-5 h-5 fill-[#f9c65d] text-[#f9c65d]" />
    ))}
  </div>
  <p className="text-white italic mb-4 leading-relaxed">"Quote text."</p>
  <div className="border-t border-gray-600 pt-4 flex items-start gap-3">
    <img src="/img-XX-headshot.jpeg" className="w-12 h-12 rounded-full object-cover flex-shrink-0" alt="Name" />
    <div>
      <p className="font-semibold text-white">Full Name</p>
      <p className="text-sm text-gray-400">City, CA</p>
      <p className="text-sm text-amber-400 font-semibold mt-1">520 → 710 in 6 months</p>
    </div>
  </div>
</div>
```

### Legal Page Pattern
```tsx
// Hero
<section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
      <Shield className="w-8 h-8 text-[#f9c65d]" />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
      Page <span className="text-[#f9c65d]">Title</span>
    </h1>
  </div>
</section>

// Section number badge
<span className="text-[#f9c65d] font-bold text-xl">§1.</span>
```

---

## 11. Pages That Were Fully Rewritten (Feb 2026)

These pages are entirely self-contained — all sections inline in the page file. Do not look for their sections in `src/components/`:

- **`CreditRepair.tsx`** — Hero, GHL email capture form, Empathy section, SmartCredit notice, Concierge callout, Plan Selector, pricing cards (Lite $250 / Flex $350 / Elite $650 / Duo $700+$399/mo), "Built Different" section, FAQ (The Big 5), final CTA
- **`CreditMonitoring.tsx`** — $27.99/mo pricing (no trial language), Mesa Financial Concierge integration throughout, 8 FAQ items
- **`Concierge.tsx`** — Full 17-section page: Hero, 5 stat cards, 7 Feature Blocks, Comparison Table, Membership Tiers (Community FREE / Concierge $97/mo / Executive $197/mo), 9 FAQ items, Final CTA
- **`ZeroInterestBusinessFunding.tsx`** — Hero with highlighted text, GHL survey (form `FIkq2SkzWrx0Ylx8xp9w`), 4 `.webm` video testimonials, 90-day timeline, comparison table, support tiers ($1,997 / $3,500 / $500+10%), FAQ

---

## 12. Specific Gotchas and Rules

### No trial language anywhere
All `$1 trial`, `7-day trial`, `$1 for the first 7 days` references have been removed site-wide, including from all 5 calculator components in `src/components/calculators/`. Current SmartCredit pricing: **$27.99/month · Cancel Anytime**.

### Button arrow flex pattern
When text can wrap in a button, always prevent arrow from dropping to a new line:
```tsx
<button className="flex items-center justify-center gap-2">
  <span className="text-center">Button Text That Might Wrap</span>
  <ArrowRight className="w-5 h-5 flex-shrink-0" />
</button>
```

### No `<script />` tags in JSX
JSX does not support self-closing `<script />` tags. Always load scripts dynamically via `useEffect` (see `ContactFormSection.tsx` for the pattern).

### Personal credit vs. business credit
These are completely separate services. Never merge them or link the wrong page:
- **Personal credit** → `/build-credit` (FREE guide, BuildCredit.tsx)
- **Business credit** → `/business-credit-builder` (paid program, BusinessCreditBuilder.tsx)

### The `src/assets/` vs `public/` distinction
- `src/assets/` — imported via `import logo from '@/assets/logo.png'` in TypeScript; bundled and hashed by Vite
- `public/` — referenced as URL strings like `src="/image.jpg"` or `backgroundImage: 'url(/image.jpg)'`; served as-is. Use `public/` for images referenced in JSX with string URLs (including `<img src="..." />` and inline `style` backgroundImage).

### The `About Us` volcano section
The "Where This Company Came From" section uses an `<img>` element (not CSS `backgroundImage`) as the background, with `absolute inset-0 w-full h-full object-cover`. The image is at `public/santa-ana-volcano-crater-lake.jpg`.

### WordPress integration
`ArticlesInsights.tsx` and `MesaNews.tsx` fetch live WordPress posts via `src/hooks/useWordPress.ts` + `src/utils/wordpress.ts`. The blog is at `https://mesagroupconsulting.com/blog` (reverse-proxied via `vercel.json`). Both pages show the same posts currently; differentiation requires WordPress category filtering.

### Algolia Search
`SearchModal.tsx` is wired into the Header and uses `src/lib/searchClient.ts`. It's a live feature — do not remove it. The search index is managed separately via `scripts/indexAlgolia.ts`.

---

## 13. Known Dead Code (Do Not Activate Without Discussion)

| Location | What | Status |
|---|---|---|
| `src/App.tsx` lines 36–38 | Blog post imports (`CreditUtilizationBlogPost`, etc.) | Imported, no routes, never rendered |
| `src/pages/blog/*.tsx` | 3 blog post page files | Orphaned — no routes in App.tsx |
| `src/pages/Index.tsx` | Old v1 business credit page | Still routed at `/business-credit`; legacy |

---

## 14. Service Distinctions (Never Confuse These)

| Service | Route | Positioning |
|---|---|---|
| Mesa360 Credit Repair | `/credit-repair` | $250–$650 one-time, or Duo $700+$399/mo |
| DIY Credit Repair | `/diy-credit-repair` | Creditily platform, self-service |
| Credit Monitoring | `/credit-monitoring` | SmartCredit $27.99/mo, includes Concierge community |
| Mesa Financial Concierge | `/concierge` | Community (FREE), Concierge ($97/mo), Executive ($197/mo) |
| Personal Build Credit | `/build-credit` | FREE guide + affiliate partner tools |
| Business Credit Builder | `/business-credit-builder` | Paid: $2,495 full / $995 DIY — uses Fundability® |
| 0% Business Funding | `/zero-interest-business-funding` | $50K–$250K+, 0% interest strategy |
| Business Funding | `/business-funding` | General business funding hub |

---

## 15. Compliance Rules (Never Violate)

- **Credit Repair (CROA):** Never guarantee score increases, specific point improvements, or removal of accurate items. Never say "we guarantee results." No "Department of Justice" or "DOJ" references.
- **Fundability®** — always include ® symbol.
- **Georgia Residency Notice** — present on Credit Repair pricing section (legal requirement).
- **TCPA/Affiliate Disclosure** — footer links all point to live legal pages.

---

## 16. Deployment Workflow

```bash
# Make changes locally
git add .
git commit -m "descriptive message"
git push origin main
# → Vercel auto-deploys; live in ~60s
```

**Never push to a branch for production** unless explicitly asked. All production deploys go through `main`.

Preview deployments are created automatically by Vercel for any branch push. Share preview URLs with Evert for review before merging to `main`.

---

## 17. What Mario and Evert Care Most About

1. **Copy accuracy** — text must match Evert's PRD docs or verbal direction exactly. No paraphrasing.
2. **No em-dashes** — Evert explicitly removed all em-dashes across the site. Use commas, colons, or sentence breaks.
3. **Mobile-first** — all layouts must look good on mobile. Always check responsive classes.
4. **Brand colors** — everything should feel Mesa Gold/Yellow. Never introduce new accent colors.
5. **No trial language** — $27.99/month only for SmartCredit. No "$1 trial," no "7-day trial."
6. **GHL forms work correctly** — iframe resizing, no scroll bar, `form_embed.js` loaded via `useEffect`.
7. **Calendly bookings tracked** — always include `prefillOptions.utm` on `CalendlyPopupButton`.

---

*Last updated: February 25, 2026 | Maintained by Catalyst Digital Solutions*
