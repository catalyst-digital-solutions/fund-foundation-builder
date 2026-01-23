# Session Handoff Document
**Last Updated:** January 21, 2026
**Purpose:** Rapid onboarding for new Claude Code context windows

---

## Quick Start: Getting Up to Speed

### 1. Read the Project Documentation
```bash
# Primary source of truth - READ THIS FIRST
cat CLAUDE.md
```
The `CLAUDE.md` file contains comprehensive project architecture, design patterns, recent updates, and all technical decisions. It is the definitive reference for this project.

### 2. Start Development Environment
```bash
npm run dev -- --port 54894
```
Then access at `http://localhost:54894`

### 3. Check Current State
```bash
git status          # See uncommitted changes
git log --oneline -10  # See recent commits
```

---

## Project Identity

| Field | Value |
|-------|-------|
| **Project** | Mesa Group Consulting Financial Services Website |
| **Client** | Evert Calderon - Mesa Group Consulting, Mesa Group Capital |
| **Location** | Bakersfield, CA |
| **Phone** | (661) 310-3040 |
| **Tech Stack** | React 18 + TypeScript + Vite + Tailwind CSS |
| **UI Library** | shadcn/ui (Radix primitives) |
| **Icons** | lucide-react ONLY (never emojis) |
| **Repository** | https://github.com/catalyst-digital-solutions/fund-foundation-builder |
| **Lovable URL** | https://lovable.dev/projects/a84a569b-99f4-4ddf-898b-bc278a3f3eb0 |
| **Preview URL** | https://mesa-group-consulting-website.vercel.app/ |
| **Deployment** | GitHub → Lovable → Vercel (auto-deploy on push) |
| **Twitter/X** | @mesafinanciera |

---

## Current Work State (January 19, 2026)

### Uncommitted Changes
- `src/components/NewsletterModal.tsx` - Updated to inline modal (matching CalendlyModal behavior)

### Recent Completed Work
1. **Build Credit Partner Links** - Fixed ExternalLinkModal issues (flash, tab cannibalization) by replacing with plain `<a>` tags
2. **Newsletter Modal** - Changed from popup window to inline iframe modal
3. **Blog Posts** - Three articles added with hero images and related articles

### Known Issues
- **Ava Finance iOS**: App Store modal intercepts affiliate link on iPhone. Needs web-only URL from Ava Finance.

---

## Key Modal Components

### CalendlyModal (Reference Standard)
File: `src/components/CalendlyModal.tsx`
- Inline modal with Calendly embed
- Used for consultation booking across the site
- User wants NewsletterModal to match this behavior

### NewsletterModal (Current Work)
File: `src/components/NewsletterModal.tsx`
- GHL form URL: `https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p`
- Inline modal with iframe embed
- Matching CalendlyModal styling: `max-w-[500px]`, `shadow-2xl`, close button top-right

### ExternalLinkModal
File: `src/components/ExternalLinkModal.tsx`
- Opens external links in popup windows
- **Note:** Had issues on Build Credit page (flash, tab reuse) - replaced with plain `<a>` tags there

---

## Critical External URLs

### Consultation (Calendly)
```
https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery
```

### Credit Repair Signup
```
https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09
```

### Business Funding Application
```
https://funding-app.mesagroupconsulting.com/Opt-In
```

### Newsletter Form (GHL)
```
https://link.mesagroupconsulting.com/widget/form/87XreQhYJtAAT7XwLE0p
```

---

## Design System Quick Reference

### Brand Colors (Tailwind)
```tsx
// Primary CTAs
className="bg-amber-400 hover:bg-amber-500"

// Accent text
className="text-amber-600"

// Background gradients
className="bg-gradient-to-br from-white via-amber-50 to-white"
```

### Button Pattern
```tsx
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
  <span className="text-center">{text}</span>
  <ArrowRight className="w-5 h-5 flex-shrink-0" />
</button>
```

### Modal Pattern (Current Standard)
```tsx
<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 sm:p-6" onClick={onClose}>
  <div className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl overflow-hidden">
    <button className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100">
      <X className="w-5 h-5 text-gray-700" />
    </button>
    {/* Content */}
  </div>
</div>
```

---

## Important Service Distinctions

| Service | Route | Target | Cost |
|---------|-------|--------|------|
| Personal Credit Building | `/build-credit` | Consumers | FREE guide |
| Business Credit Builder | `/business-credit-builder` | Business owners | $2,495 / $995 |
| Credit Repair | `/credit-repair` | Consumers | Paid service |
| DIY Credit Repair | `/diy-credit-repair` | Consumers | Creditily platform |

**Never confuse personal credit (/build-credit) with business credit (/business-credit-builder).**

---

## Client Preferences (Evert Calderon)

- Conservative, professional tone
- Emphasis on results and credibility
- Clear compliance/disclosure language
- Focus on business owners and real estate investors
- Premium positioning for high-credit clients
- No emojis - use lucide-react icons only

---

## Compliance Requirements

### Credit Repair (CROA)
- Never guarantee score increases
- Transparent about exclusions
- No "Department of Justice" or "DOJ" references

### Business Credit (Trademarks)
- Fundability® (use ® symbol)
- Fundability Score™, Fundability Factors™

---

## File Structure

```
src/
├── components/
│   ├── CalendlyModal.tsx        # Consultation modal
│   ├── CalendlyPopupButton.tsx  # Consultation buttons
│   ├── NewsletterModal.tsx      # Newsletter signup modal
│   ├── ExternalLinkModal.tsx    # External link popups
│   ├── Header.tsx               # Shared navigation
│   ├── Footer.tsx               # Shared footer
│   └── ui/                      # shadcn/ui (DO NOT MODIFY)
├── pages/
│   ├── BuildCredit.tsx          # Personal credit building
│   ├── ArticlesInsights.tsx     # Blog listing page
│   ├── BlogPost1.tsx            # Credit monitoring article
│   ├── BlogPost2.tsx            # WFBNA article
│   └── BlogPost3.tsx            # Debt relief vs consolidation
├── hooks/
│   └── useCalendly.ts           # Calendly integration hook
└── App.tsx                      # Route definitions
```

---

## Immediate Next Steps

1. **Test Newsletter Modal** - Visit `http://localhost:54894/resources/articles` and click "Subscribe to Newsletter"
2. **Verify Modal Behavior** - Should match CalendlyModal (inline, iframe embed, no scrollbar)
3. **Commit Changes** - If approved, commit NewsletterModal.tsx changes

---

## How to Commit

```bash
git add src/components/NewsletterModal.tsx
git commit -m "Update NewsletterModal to inline iframe modal matching CalendlyModal

- Replace popup window approach with inline modal
- Add body scroll lock when modal open
- Match CalendlyModal styling (shadow-2xl, rounded close button)
- Iframe height: min-h-[520px]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
git push
```

---

## Questions? Start Here

1. **Architecture questions** → Read `CLAUDE.md`
2. **Design patterns** → Check `MESA_GROUP_PAGE_TEMPLATE_PRD.md`
3. **Component patterns** → Check `.github/copilot-instructions.md`
4. **Route structure** → Check `src/App.tsx`
5. **CSS variables** → Check `src/index.css`
