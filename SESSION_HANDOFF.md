# SESSION HANDOFF — Mesa Group Consulting Website
**Date:** February 26, 2026  
**Branch:** `main`  
**Dev Server:** `npm run dev` → http://localhost:8080/ (port 8080)  
**Repo:** https://github.com/catalyst-digital-solutions/fund-foundation-builder  
**Live site:** https://www.mesagroupconsulting.com  

---

## ⚠️ CRITICAL — UNCOMMITTED LOCAL CHANGES

`src/components/Footer.tsx` has LOCAL-ONLY changes that have NOT been pushed to GitHub/Vercel. Mario is reviewing them for Evert's approval before pushing.

**What changed locally:**
- Background image: building photo → `/sunny-background.svg` (warm amber SVG gradient)
- Overlay: dark 82% → light warm cream 60% (`rgba(255,248,220,0.60)`)
- MGC logo → black version (`mgc-mesa-group-consulting-black-svg-logo.svg.svg`)
- Catalyst logo → purple/dark version (`Catalyst Digital Solutions Logos and Headers - Purple - Rev D.svg`)
- All body text: `text-white/80` → `text-[#3e3e3e]`
- Column headers (For Consumers, For Businesses, Connect With Us): `text-white font-bold` → `text-[#3e3e3e] font-bold`
- Section labels (CONTACT US, HOURS, etc.): `text-[#f9c65d]` → `text-[#bb9446] font-semibold text-sm`
- Nav link hovers: `hover:text-[#f9c65d]` → `hover:text-[#bb9446]`
- Social circles: yellow `bg-[#f9c65d]` → dark `bg-[#3e3e3e]`
- Social icons: `text-[#3e3e3e]` dark → `text-[#f9c65d]` yellow
- Subscribe button: yellow → dark `bg-[#3e3e3e] text-white`
- Trust star: yellow → gold `text-[#bb9446] fill-[#bb9446]`
- Catalyst "A"/"Website" labels: `text-white/60` → `text-[#3e3e3e]/70`

Also untracked (not yet staged):
- `public/sunny-background.svg` — new background asset
- `public/partners/` — all partner/channel logos
- `public/evert-at-smartcredit-conference/` — new asset folder

**When Evert approves:** `git add -A && git commit -m "Footer: sunny background redesign" && git push origin main`

**To revert if rejected:** `git checkout src/components/Footer.tsx`

---

## Current Git State

**Branch:** `main` (latest commit: `005253b`)

**Recent commits:**
```
005253b For Consumers: commit review images to git; fix disclaimer wording
3e0ee4a For Consumers: photo review blurbs + image representation disclaimer  
812fafe Homepage: collapsible cards with gradient fade + More/Less toggle
1463ad0 Resolve merge conflict: keep all imports from both branches
9eb4da1 Merge feature/footer-redesign → main (footer, 4 new pages, ticker)
```

**Backup tag (pre-meeting):** `pre-meeting-2026-02-26` — safe rollback point on GitHub

---

## New Pages Live on Main

All these routes exist on the live site and in `src/App.tsx`:

| URL | File | Notes |
|---|---|---|
| `/life-insurance-v2` | `src/pages/LifeInsuranceV2.tsx` | Full Mesa-branded life insurance; scrolling carrier ticker; NOT in nav yet |
| `/partner-with-us` | `src/pages/PartnerWithUs.tsx` | 3-track partnership (Referral/Co-Brand/Agent); 3 GHL forms |
| `/our-partners` | `src/pages/OurPartners.tsx` | Premier Channels, Fulfillment Partners, Co-Brand partners with photos |
| `/creditily` | `src/pages/CreditilyDIY.tsx` | DIY credit repair v2 (A/B vs `/diy-credit-repair`) |
| `/credit-restoration-v3` | `src/pages/CreditRestorationV3.tsx` | Credit Repair rewrite (A/B vs `/credit-repair`) |

None of these are linked in the header navigation — accessible by direct URL only.

---

## Feature Branches (already merged to main)

- `feature/footer-redesign` — merged ✅
- `credit-restoration-v3` — merged ✅

Both can be deleted from GitHub if desired.

---

## Action Items — Status

### ✅ Completed this session
- Life Insurance v2 page built with carrier logo ticker (25 carriers, hover-to-pause)
- Partner With Us page built (3 GHL forms: `eJS7g0DkolAZrhylZKBR`, `UCgckF6ZdeIgyS7dKF3B`, `Mg8ybpMWozwXlvj0MoQw`)
- Our Partners page with Premier Channel logos + co-brand partner photos
- Creditily DIY page built
- Footer redesign (building photo bg) — was on `feature/footer-redesign`, now on main
- All new pages use `bg-[#3e3e3e]` instead of `bg-gray-900` for dark sections
- For Consumers: photo review blurbs with real images + image disclaimer
- Homepage: 3-card section now has collapsible expand/collapse (uniform height)
- Mobile header: hamburger+logo+search+join order; Client Login in hamburger menu
- INP fixes: `useTransition` on both mobile menu close AND desktop nav links
- SmartCredit URL confirmed correct as `https://www.smartcredit.com/join/?PID=53366&planType=PREMIUM`
- Life Insurance ticker: 25 carriers, `zoom` flag system for per-logo scaling
- For Businesses page: 0% Funding in final CTA section headline above badges
- Scrolling trust bar on Life Insurance v2 (22px/18px, hover-pause)

### 🔴 Still Pending (Mario's tasks)
1. **Footer sunny background** — LOCAL ONLY, awaiting Evert's approval, then push
2. **Partner photos for Our Partners** — `/public/images/partners/` paths need real photos from Google Drive: https://drive.google.com/drive/folders/11vcukURxg3wl9tpI-Yk9toakAF-VbXH_?usp=sharing

### 🟡 Waiting on Evert
- **VSLs** (7 videos): Concierge, Life Insurance, DIY, Credit Repair, Credit Monitoring, 0% Funding, Business Funding → then Mario adds to pages
- **Funnels**: Credit Repair funnel (done per 2/26 meeting), Business Funding funnel, Concierge funnel → link to site CTAs once ready
- **DIY Credit Repair page rewrite copy** — Evert rewrites, Mario rebuilds
- **Life Insurance page link placement** — when ready to add `/life-insurance-v2` to nav/menu
- **Partner With Us link placement** — same

### 🔵 Future / Planned
- Social media feed (Instagram via Vercel API route + TikTok oEmbed — Perplexity research done)
- Chatbot (Vercel + Supabase + Vercel AI SDK + per-page `service` prop — Perplexity research done)
- Schema markup (LocalBusiness, FAQPage)
- Spanish site (MesaFinanciera.com) — Evert drafting copy after photos
- Blog setup — next meeting (link all funnels, set categories)

---

## Key Technical Context

### Stack
- React 18 + TypeScript + Vite (port 8080)
- Tailwind CSS + shadcn/ui
- lucide-react icons ONLY — no emojis
- React Router v6
- TanStack Query v5
- react-helmet-async (SEO component)
- Deployed: GitHub → Vercel (auto-deploys from `main`)

### Brand Colors
```
MGC Yellow:  #f9c65d  (bg-amber-400 in Tailwind — primary CTAs, highlights)
MGC Gold:    #bb9446  (hover states, section label headings)
MGC Dark:    #3e3e3e  (dark cards, social circles, dark sections)
MGC Darker:  #2c2c2c  (darker variant for gradients)
```

### Critical Rules
- **NO `<script>` tags in JSX** — always use `useEffect` to load GHL `form_embed.js`
- **NO em-dashes** — Evert explicitly removed them all; use commas, colons, or sentences
- **NO `$1 trial` / `7-day trial`** language anywhere — pricing is `$27.99/month`
- **lucide-react icons only** — never use emojis as icons
- **`flex-shrink-0` on ArrowRight icons** in buttons to prevent wrapping
- **`transitionNavigate()`** in Header for all internal desktop nav links (INP fix)
- **`closeMobileMenu()`** for all mobile menu link `onClick` (INP fix)

### GHL Form IDs
| Form | ID |
|---|---|
| Contact form (ContactFormSection) | `CaNQDAlt2BSYAOxTZb6b` |
| Credit Repair survey | `Y7K7EfnX7ydeGpv4RoIU` |
| 0% Business Funding survey | `FIkq2SkzWrx0Ylx8xp9w` |
| Creditily lead capture | `nVWtGucezHO6c0Or4Il1` |
| Life Insurance survey | `MIvqzyudmOgjhZLoVZwA` |
| Newsletter | `87XreQhYJtAAT7XwLE0p` |
| Punjabi booking (Contact page) | `5I7RpXpr10YWafm3DHdl` |
| Referral Partner form | `eJS7g0DkolAZrhylZKBR` |
| Co-Brand Partner form | `UCgckF6ZdeIgyS7dKF3B` |
| Agent Team form | `Mg8ybpMWozwXlvj0MoQw` |

### Key External URLs
```
Credit Repair Portal:    https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=LzgrcWJobTEyUXFoejhLbFpJYjVwUT09
Calendly (EN):           https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar
Calendly (ES):           https://calendly.com/mesagroupconsulting/mesa-group-consulting-consulta
Business Funding app:    https://funding-app.mesagroupconsulting.com/Opt-In
SmartCredit affiliate:   https://www.smartcredit.com/join/?PID=53366&planType=PREMIUM
DIY signup:              https://shm.to/fsgSro2
Credit Analysis form:    https://shm.to/yatPKyE
Phone:                   (661) 310-3040
Address:                 5001 California Ave Suite 219, Bakersfield, CA 93309
```

### File Structure — What's Important
```
src/
├── App.tsx                          ← ALL routes
├── components/
│   ├── Header.tsx                   ← useTransition on all nav; openSearch() for iOS keyboard
│   ├── Footer.tsx                   ← ⚠️ Has LOCAL UNPUSHED changes (sunny bg)
│   ├── ContactFormSection.tsx       ← Reusable GHL form section (useEffect for script)
│   ├── SearchModal.tsx              ← Always mounted (not unmounted), autoFocus input
│   ├── CalendlyPopupButton.tsx      ← Primary consultation CTA
│   └── SEO.tsx                      ← react-helmet-async wrapper
├── pages/
│   ├── Homepage.tsx                 ← Has expandable 3-card section (cardsExpanded state)
│   ├── CreditRepair.tsx             ← Live page (dead EmotionalCTA1/2/3 imports — cleanup pending)
│   ├── CreditRestorationV3.tsx      ← /credit-restoration-v3 (A/B preview)
│   ├── LifeInsuranceV2.tsx          ← /life-insurance-v2 with carrier ticker
│   ├── PartnerWithUs.tsx            ← /partner-with-us
│   ├── OurPartners.tsx              ← /our-partners
│   └── CreditilyDIY.tsx             ← /creditily
└── index.css                        ← scroll-behavior: smooth; marqueeTicker keyframe

public/
├── sunny-background.svg             ← ⚠️ NOT IN GIT YET (for footer redesign)
├── partners/                        ← ⚠️ NOT IN GIT YET (channel logos, life insurance logos)
│   ├── life-insurance-partners/     ← 25 carrier logos for ticker
│   ├── chaklo-credit-logo.png
│   ├── credit-sherbie-logo.png
│   ├── diy-credit-repair-creditily-logo.png
│   ├── credit-girly-logo.png
│   ├── mesa-financiera-logo.png
│   ├── destiny-perry-real-estate.svg
│   └── diana-munoz-mortgage-loan-expert.png
└── reviews/
    └── for-consumers-reviews/       ← ✅ IN GIT — 3 review photos
```

### CSS Ticker (index.css)
```css
@keyframes marqueeTicker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track { animation: marqueeTicker 60s linear infinite; }
.marquee-container:hover .marquee-track { animation-play-state: paused; }
```
Used in:
- Life Insurance carrier logos ticker (`animationDuration: '60s'` via inline style)
- Life Insurance trust bar ticker (`animationDuration: '40s'`)

### Dead Code to Clean Up (non-urgent)
- `src/pages/CreditRepair.tsx` lines 5–7: dead imports (`EmotionalCTA1/2/3` from `credit-repair/sections/` — files don't exist)
- `src/App.tsx` lines 36–38: blog post imports with no routes (`CreditUtilizationBlogPost`, `WFBNABlogPost`, `DebtReliefVsConsolidationBlogPost`)

---

## Partner Assets Reference

### Our Partners page (`/our-partners`)
| Card | Logo path | Link |
|---|---|---|
| Chaklo Credit | `/partners/chaklo-credit-logo.png` | https://chaklo.mesagroupconsulting.com/ |
| Credit Sherbie | `/partners/credit-sherbie-logo.png` | https://www.tiktok.com/@creditsherbie |
| Creditily | `/partners/diy-credit-repair-creditily-logo.png` | https://getcreditily.com/ |
| Credit Girly | `/partners/credit-girly-logo.png` | https://www.instagram.com/creditgirly/ |
| Mesa Financiera | `/partners/mesa-financiera-logo.png` | https://www.instagram.com/mesafinanciera/ |
| Destiney Perry | `/partners/destiny-perry-real-estate.svg` | https://destineyperrysells.com/ |
| Diana Munoz | `/partners/diana-munoz-mortgage-loan-expert.png` | https://www.facebook.com/diana.munoz.9231/ |

---

## ROOCODE_HANDOFF.md

A comprehensive architecture handoff lives at `ROOCODE_HANDOFF.md` in the project root. It covers the full tech stack, brand identity, all routes, component patterns, GHL embedding, compliance rules, and common pitfalls. Read it first for any new work.

---

*Generated: February 26, 2026 | Session by Claude Sonnet 4.6 via Cursor*
