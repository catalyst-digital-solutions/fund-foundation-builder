# Mesa Group Consulting Landing Pages - AI Agent Instructions

## Project Overview

This is a multi-page React + TypeScript + Vite application for Mesa Group Consulting's financial services landing pages. The project follows a **strict design system** defined in `MESA_GROUP_PAGE_TEMPLATE_PRD.md` that must be maintained across all pages and components.

## Architecture Pattern

### Page Structure (Non-negotiable)
Every page follows a **vertical section composition** pattern. See `src/pages/Index.tsx` as the canonical example:

```tsx
const PageName = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <EmotionalCTA1 />
    <WhyServiceMatters />
    <HowItWorks />
    <EmotionalCTA2 />
    <ServiceTierComparison />
    <WhatsIncluded />
    <EmotionalCTA3 />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    <Footer />
  </div>
);
```

- Pages import pre-built section components from `src/components/[service-name]/sections/`
- Each section is a self-contained component with its own styling
- Sections stack vertically with alternating background colors (white, gradients, light amber)

### Component Organization
```
src/components/
  ├── Header.tsx              # Shared header with navigation
  ├── Footer.tsx              # Shared footer with collapsible menus
  ├── [service-name]/         # Service-specific folder (kebab-case)
  │   └── sections/           # Section components for this service
  │       ├── HeroSection.tsx
  │       ├── WhyServiceMatters.tsx
  │       ├── FAQ.tsx
  │       └── ...
  └── ui/                     # shadcn/ui components (DO NOT MODIFY CASUALLY)
```

## Design System Rules (CRITICAL)

### Color System
**All colors use HSL CSS variables** defined in `src/index.css`. Never use hex codes directly:

```tsx
// ✅ CORRECT
className="text-gray-900 bg-amber-400"
className="text-[#f9c65d]"  // Only when referencing brand yellow

// ❌ WRONG
style={{ color: '#3E3E3E' }}
className="text-[#bb9446]"
```

**Brand Colors (from `src/index.css`):**
- `--mgc-yellow: 40 93% 67%` (#f9c65d) - Primary CTAs, highlights
- `--mgc-gold: 40 46% 50%` (#bb9446) - Hover states, dark accents
- `--mgc-tan: 39 48% 84%` (#E5D2AF) - Light backgrounds
- `--mgc-cream: 40 88% 76%` (#f8d899) - Subtle backgrounds

### Typography Standards
**All text uses Inter font** (loaded via Google Fonts in `index.html`). Sizes follow responsive scale:

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
**NEVER use emojis**. All icons come from `lucide-react`:

```tsx
import { CheckCircle, ArrowRight, X } from 'lucide-react';

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

## Common Section Patterns

### Hero Section Template
- Left column: headline, subheadline, benefits list with checkmarks, CTA buttons
- Right column: visual element (stats, form, or illustration)
- Background: `bg-gradient-to-br from-white via-amber-50 to-white`
- See `src/components/business-credit/sections/HeroSection.tsx`

### Feature Cards
- White background with shadow: `bg-white rounded-xl p-8 shadow-lg hover:shadow-xl`
- Icon circle: `w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full`
- See PRD section "Feature Card Pattern"

### Service Tier Comparison
- Mobile: Tab-based toggle between tiers
- Desktop: Side-by-side cards with feature comparison
- See `src/components/business-credit/sections/ServiceTierComparison.tsx`

## Development Workflows

### Running Locally
```bash
npm run dev          # Development server (port 8080)
npm run build        # Production build
npm run preview      # Preview production build
```

### Creating a New Landing Page
1. Create route in `src/App.tsx`: `<Route path="/new-service" element={<NewService />} />`
2. Create page file: `src/pages/NewService.tsx` (use PascalCase)
3. Create component folder: `src/components/new-service/sections/` (use kebab-case)
4. Build sections following patterns in `MESA_GROUP_PAGE_TEMPLATE_PRD.md`
5. Import sections into page component following Index.tsx pattern

### When Adding New Components
- Reuse existing shadcn/ui components from `src/components/ui/`
- Match spacing system: `py-12 md:py-20 lg:py-24` for sections
- Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for container pattern

## Key Dependencies

- **Routing**: `react-router-dom` - All external CTAs use `<a>` with `target="_blank"`, internal nav uses `<Link>`
- **UI Library**: `shadcn/ui` with Radix UI primitives - Do not modify base components
- **Styling**: Tailwind CSS with custom config in `tailwind.config.ts`
- **Icons**: `lucide-react` - NO emoji ever
- **Build**: Vite with SWC for fast compilation
- **Forms**: `react-hook-form` + `zod` (when needed)

## Critical Files (Read Before Editing)

1. **`MESA_GROUP_PAGE_TEMPLATE_PRD.md`** - Comprehensive design system and patterns
2. **`src/index.css`** - CSS variables and design tokens
3. **`src/components/Header.tsx`** - Shared navigation (264 lines)
4. **`src/components/Footer.tsx`** - Shared footer with collapsible menus
5. **`src/App.tsx`** - Route definitions

## Common Pitfalls to Avoid

❌ Using emojis instead of lucide-react icons  
❌ Hardcoding hex colors instead of Tailwind classes  
❌ Breaking mobile-first responsive patterns  
❌ Modifying shadcn/ui base components without understanding consequences  
❌ Using `text-black` or `text-white` on non-dark backgrounds  
❌ Deviating from the vertical section composition pattern  

## External Integration Points

- **Google Fonts**: Inter font loaded in `index.html`
- **Lovable Tagger**: Development-only plugin for component tracking
- **External CTAs**: All service CTAs link to external booking/signup pages with `target="_blank"`

---

**Remember**: This project prioritizes brand consistency over individual creativity. When in doubt, consult `MESA_GROUP_PAGE_TEMPLATE_PRD.md` or reference existing working examples in `src/components/business-credit/sections/`.
