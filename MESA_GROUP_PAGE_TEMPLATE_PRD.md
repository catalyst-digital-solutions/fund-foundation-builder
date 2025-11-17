# **MESA GROUP CONSULTING PAGE TEMPLATE - UNIVERSAL PRD**

**Version 1.0 | For Lovable AI Implementation**

---

## **TABLE OF CONTENTS**
1. [Design System Foundation](#design-system-foundation)
2. [Typography Standards](#typography-standards)
3. [Color Palette & Usage](#color-palette--usage)
4. [Icon System](#icon-system)
5. [Component Patterns Library](#component-patterns-library)
6. [Section Templates](#section-templates)
7. [Layout & Spacing Guidelines](#layout--spacing-guidelines)
8. [Tone & Messaging](#tone--messaging)
9. [Implementation Checklist](#implementation-checklist)

---

## **DESIGN SYSTEM FOUNDATION**

### Framework & Technology Stack
```
Framework: React + Vite + TypeScript
CSS: Tailwind CSS
Font: Inter (Google Fonts)
Icons: lucide-react (NO EMOJIS)
Responsive: Mobile-first (320px, 768px, 1024px, 1280px)
Accessibility: WCAG 2.1 AA compliant
```

### Critical Files to Maintain

**index.html** - Google Fonts import:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
```

**src/index.css** - Design system variables:
```css
@layer base {
  :root {
    /* Core System Colors (DO NOT MODIFY) */
    --background: 0 0% 100%;
    --foreground: 0 0% 24%;
    --primary: 40 78% 67%;
    --primary-foreground: 0 0% 24%;
    --secondary: 39 48% 84%;
    --secondary-foreground: 0 0% 24%;
    --muted: 39 48% 84%;
    --muted-foreground: 0 0% 46%;
    --accent: 40 78% 67%;
    --accent-foreground: 0 0% 24%;
    --border: 0 0% 80%;
    --radius: 0.75rem;

    /* Mesa Group Brand Colors (PRIMARY PALETTE) */
    --mgc-yellow: 40 93% 67%;      /* #f9c65d - Primary CTA, highlights */
    --mgc-gold: 40 46% 50%;        /* #bb9446 - Dark accents, hover states */
    --mgc-tan: 39 48% 84%;         /* #E5D2AF - Light backgrounds */
    --mgc-cream: 40 88% 76%;       /* #f8d899 - Subtle backgrounds */
    --mgc-dark-gray: 0 0% 24%;     /* #3E3E3E - Body text, headings */
    --mgc-light-gray: 0 0% 80%;    /* #CBCBCB - Borders, dividers */
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}
```

**tailwind.config.ts** - Extend colors (if needed):
```typescript
// NO CHANGES NEEDED - HSL variables are already configured
// All colors use hsl(var(--variable-name)) format
```

---

## **TYPOGRAPHY STANDARDS**

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** system-ui, sans-serif
- **Usage:** All text elements across entire site

### Typography Scale

| Element | Mobile (sm) | Tablet (md) | Desktop (lg) | Weight | Tailwind Classes |
|---------|-------------|-------------|--------------|--------|------------------|
| **Hero H1** | 36px (3xl) | 48px (5xl) | 60px (6xl) | 700 | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| **Section H2** | 30px (2xl) | 36px (4xl) | 48px (5xl) | 700 | `text-3xl md:text-4xl lg:text-5xl font-bold` |
| **Subsection H3** | 24px (xl) | 28px (2xl) | 36px (3xl) | 700 | `text-2xl md:text-3xl lg:text-4xl font-bold` |
| **Card H3** | 20px (lg) | 24px (xl) | 24px (xl) | 700 | `text-xl md:text-2xl font-bold` |
| **Body Large** | 18px (lg) | 20px (xl) | 20px (xl) | 400 | `text-lg md:text-xl` |
| **Body** | 16px (base) | 16px (base) | 16px (base) | 400 | `text-base` |
| **Small** | 14px (sm) | 14px (sm) | 14px (sm) | 400 | `text-sm` |
| **Button** | 16px (base) | 16px (base) | 16px (base) | 600 | `text-base font-semibold` |

### Line Height
- **Headings:** `leading-tight` (1.25)
- **Body Text:** `leading-relaxed` (1.625)
- **Small Text:** Default (1.5)

### Text Colors

| Usage | Tailwind Class | Hex Reference |
|-------|----------------|---------------|
| **Primary Headings** | `text-gray-900` | #1A1A1A (very dark gray) |
| **Body Text** | `text-gray-700` | #404040 |
| **Muted Text** | `text-gray-600` | #757575 |
| **Light Text** | `text-gray-500` | #9E9E9E |
| **Accent Words** | `text-amber-600` | #D97706 (burnt orange) |
| **On Dark BG** | `text-white` | #FFFFFF |

---

## **COLOR PALETTE & USAGE**

### Primary Brand Colors

```
MGC Yellow   #f9c65d  hsl(40, 93%, 67%)   Use for: Primary CTAs, key highlights, accents
MGC Gold     #bb9446  hsl(40, 46%, 50%)   Use for: Hover states, dark accents, secondary elements
MGC Tan      #E5D2AF  hsl(39, 48%, 84%)   Use for: Light backgrounds, subtle sections
MGC Cream    #f8d899  hsl(40, 88%, 76%)   Use for: Accent backgrounds, highlight boxes
```

### Semantic Colors (System)

```
Success Green  #10B981  text-green-600    Checkmarks, positive indicators
Error Red      #DC2626  text-red-600      Warnings, negative indicators  
Info Blue      #3B82F6  text-blue-600     Info callouts, links
Warning Orange #F97316  text-orange-600   Caution notices
```

### Neutral Grays (Core UI)

```
Gray 50   #F9FAFB  bg-gray-50    Light backgrounds
Gray 100  #F3F4F6  bg-gray-100   Card backgrounds
Gray 200  #E5E7EB  border-gray-200  Light borders
Gray 300  #D1D5DB  border-gray-300  Default borders
Gray 600  #4B5563  text-gray-600   Muted text
Gray 700  #374151  text-gray-700   Body text
Gray 900  #111827  text-gray-900   Headings
```

### Color Usage Rules

**✅ DO:**
- Use `text-amber-600` for accent words in headlines
- Use `bg-amber-400` for primary CTAs
- Use `bg-gradient-to-br from-amber-50 to-orange-50` for warm section backgrounds
- Use `text-gray-900` for all primary headings
- Use `text-gray-700` for all body copy
- Use `border-gray-200` or `border-gray-300` for borders

**❌ DON'T:**
- Use direct hex codes in components (always use Tailwind classes)
- Use `text-white` or `text-black` unless on dark backgrounds
- Mix warm and cool tones in same section
- Use high-saturation colors outside brand palette

---

## **ICON SYSTEM**

### Icon Library: lucide-react

**Installation:**
```bash
npm install lucide-react
```

**Import Pattern:**
```tsx
import { CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react';
```

### Icon Sizing Standards

| Context | Size Class | Pixel Size |
|---------|-----------|------------|
| **Inline with text** | `w-4 h-4` | 16px |
| **List bullets** | `w-5 h-5` | 20px |
| **Checkmarks** | `w-6 h-6` | 24px |
| **Section icons** | `w-8 h-8` or `w-12 h-12` | 32px or 48px |
| **Large features** | `w-16 h-16` | 64px |

### Common Icon Usage

**Checkmarks (Positive Indicators):**
```tsx
<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
```

**Arrow CTAs:**
```tsx
<ArrowRight className="ml-2 w-5 h-5" />
```

**X Marks (Negative Indicators):**
```tsx
<X className="w-5 h-5 text-red-600 flex-shrink-0" />
```

**Info/Alert Icons:**
```tsx
<AlertCircle className="w-5 h-5 text-blue-600" />
<Info className="w-5 h-5 text-gray-600" />
```

### Icon Color Guidelines

| Context | Color Class |
|---------|-------------|
| Success/Checkmarks | `text-green-600` |
| Errors/X Marks | `text-red-600` |
| Warnings | `text-orange-600` |
| Info | `text-blue-600` or `text-gray-600` |
| Brand Accent | `text-amber-600` |
| On Dark BG | `text-white` or `text-amber-400` |

**❌ NEVER USE EMOJIS** - Always use lucide-react icon components instead.

---

## **COMPONENT PATTERNS LIBRARY**

### 1. Hero Section Pattern

```tsx
<section className="bg-gradient-to-br from-white via-amber-50 to-white py-12 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Column - Content */}
      <div className="space-y-6 lg:space-y-8">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            Mesa Group Consulting | [Service Name]
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          [Primary Value Prop] <span className="text-amber-600">[Key Benefit]</span> [Secondary Statement]
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          [2-3 sentences explaining the service, target audience, and outcome. Focus on transformation and results.]
        </p>

        {/* Key Benefits List */}
        <div className="space-y-3">
          {[
            'Benefit statement one',
            'Benefit statement two',
            'Benefit statement three',
            'Benefit statement four'
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="[PRIMARY_CTA_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500"
          >
            [Primary CTA Text]
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="[SECONDARY_CTA_URL]"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-300"
          >
            [Secondary CTA Text]
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Trust Stats (Optional) */}
        <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-amber-600">[Stat Number]</div>
            <div className="text-sm text-gray-600">[Stat Label]</div>
          </div>
          {/* Repeat for additional stats */}
        </div>
      </div>

      {/* Right Column - Visual Element (Optional) */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100">
        {/* Custom visual content: stats display, form, illustration, etc. */}
      </div>

    </div>
  </div>
</section>
```

### 2. Section Header Pattern

```tsx
<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
    [Section Title with] <span className="text-amber-600">[Accent Words]</span>
  </h2>
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    [1-2 sentences providing context or amplification of the section topic]
  </p>
</div>
```

### 3. Feature Card Pattern

```tsx
<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
      <IconComponent className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        [Feature Title]
      </h3>
      <p className="text-gray-700 leading-relaxed">
        [Feature description with concrete benefits and outcomes]
      </p>
    </div>
  </div>
</div>
```

### 4. Comparison Card Pattern (With/Without)

```tsx
{/* Negative Side */}
<div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
      <X className="w-6 h-6 text-red-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">Without [Service]</h3>
  </div>
  <ul className="space-y-4">
    {[
      'Pain point one',
      'Pain point two',
      'Pain point three'
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
</div>

{/* Positive Side */}
<div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
      <CheckCircle className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">With [Service]</h3>
  </div>
  <ul className="space-y-4">
    {[
      'Benefit one',
      'Benefit two',
      'Benefit three'
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
</div>
```

### 5. Stats Highlight Box Pattern

```tsx
<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <div className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">
        [Stat Number]
      </div>
      <div className="text-lg text-gray-700 font-medium">
        [Stat Description]
      </div>
    </div>
    {/* Repeat for each stat */}
  </div>
</div>
```

### 6. Process Steps Pattern (Timeline)

```tsx
<div className="space-y-8">
  {steps.map((step, index) => (
    <div key={index} className="flex items-start gap-6">
      <div className="flex-shrink-0 w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">
        {index + 1}
      </div>
      <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {step.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
```

### 7. FAQ Accordion Pattern

```tsx
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "Question text", answer: "Answer text" },
    // ... more FAQs
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about [service]
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-amber-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 8. CTA Section Pattern (Dark Background)

```tsx
<section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
      [Compelling CTA Headline]
    </h2>
    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
      [Supporting text that creates urgency or emphasizes value]
    </p>

    <div className="bg-white rounded-xl p-10 mb-8 shadow-2xl">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        [Action-Oriented Subheadline]
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">[Stat]</div>
          <div className="text-sm text-gray-600">[Stat Label]</div>
        </div>
        {/* Repeat for each stat */}
      </div>

      <a
        href="[CTA_URL]"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-amber-600 text-white text-2xl font-bold px-16 py-6 rounded-lg hover:bg-amber-700 transition-all duration-200 shadow-xl hover:shadow-2xl"
      >
        [CTA Button Text] →
      </a>
    </div>

    <div className="grid md:grid-cols-3 gap-4 text-white text-sm">
      <div className="flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5" />
        <span>[Trust indicator]</span>
      </div>
      {/* Repeat for trust badges */}
    </div>
  </div>
</section>
```

### 9. Footer Pattern

```tsx
<footer className="bg-gray-900 py-12 px-6 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4">Mesa Group Consulting</h3>
        <p className="text-sm text-gray-300 mb-4">
          [Brief company tagline]
        </p>
        <p className="text-sm text-gray-300">
          📍 Bakersfield, CA<br />
          📞 (661) 310-3040
        </p>
      </div>

      {/* Services Column */}
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4">Our Services</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/[service]" className="hover:text-amber-400">[Service Name]</a></li>
          {/* Repeat for each service */}
        </ul>
      </div>

      {/* Resources Column */}
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4">Resources</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="/about" className="hover:text-amber-400">About Us</a></li>
          <li><a href="/blog" className="hover:text-amber-400">Mesa News Blog</a></li>
          <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
        </ul>
      </div>

      {/* CTA Column */}
      <div>
        <h3 className="text-xl font-bold text-amber-400 mb-4">Get Started</h3>
        <a
          href="[CTA_URL]"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-400 text-gray-900 text-base font-bold px-6 py-3 rounded-lg hover:bg-amber-500 transition-all duration-200 mb-4 w-full text-center"
        >
          [CTA Text]
        </a>
        <p className="text-xs text-gray-400">
          [Trust indicators or value props]
        </p>
      </div>

    </div>

    <div className="border-t border-gray-700 pt-6">
      <p className="text-sm text-gray-400 mb-4 text-center leading-relaxed">
        <strong>Important Disclosure:</strong> [Compliance text specific to service. Include disclaimers about results, timelines, guarantees, etc.]
      </p>
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
      </p>
    </div>
  </div>
</footer>
```

---

## **SECTION TEMPLATES**

### Standard Page Structure

```tsx
import React from 'react';
import Header from '@/components/Header';

const [PageName] = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValuePropSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default [PageName];
```

### Suggested Section Order (Adapt as Needed)

1. **Hero Section** - Primary value prop, key benefits, dual CTAs
2. **Problem/Why Section** - Paint the problem or explain importance
3. **Benefits Section** - 3-4 key benefits in feature cards
4. **How It Works** - Step-by-step process (3-5 steps)
5. **Social Proof** - Stats, testimonials, trust indicators
6. **Comparison** (Optional) - With/without service comparison
7. **Pricing/Tiers** (If applicable) - Service packages comparison
8. **FAQ** - 8-12 common questions with detailed answers
9. **Final CTA** - Dark background, white box, compelling offer
10. **Footer** - Links, services, compliance disclosures

---

## **LAYOUT & SPACING GUIDELINES**

### Container Widths
```tsx
max-w-7xl   // Full-width sections (most common)
max-w-5xl   // CTA sections, narrow content
max-w-4xl   // FAQ sections, single-column content
max-w-3xl   // Section headers, centered text blocks
```

### Vertical Spacing

| Element | Classes |
|---------|---------|
| **Section Padding** | `py-16 md:py-24` (64px mobile, 96px desktop) |
| **Element Gaps in Section** | `space-y-6 lg:space-y-8` |
| **Between Card Elements** | `mb-6` or `space-y-4` |
| **After Headlines** | `mb-6` (24px) |
| **After Subheads** | `mb-4` (16px) |

### Horizontal Spacing
```tsx
px-4 sm:px-6 lg:px-8    // Container horizontal padding
gap-4 md:gap-6 lg:gap-8 // Grid gaps (responsive)
```

### Responsive Grids
```tsx
grid md:grid-cols-2 gap-8           // Two-column grid
grid md:grid-cols-3 gap-6           // Three-column grid
grid md:grid-cols-2 lg:grid-cols-4  // Four-column grid (responsive)
```

### Border Radius Standards
```tsx
rounded-lg      // Cards, buttons (0.5rem / 8px)
rounded-xl      // Feature cards, sections (0.75rem / 12px)
rounded-2xl     // Large cards, highlights (1rem / 16px)
rounded-full    // Badges, icon containers
```

### Shadow Standards
```tsx
shadow-sm       // Subtle borders/badges
shadow-md       // Standard cards
shadow-lg       // Primary cards, buttons
shadow-xl       // Hero elements, CTAs
shadow-2xl      // Major emphasis elements
```

---

## **TONE & MESSAGING**

### Voice Characteristics
- **Professional but approachable** - Expert authority without jargon
- **Results-focused** - Emphasize outcomes, not processes
- **Confident but not aggressive** - Assertive claims with proof points
- **Empathetic** - Acknowledge pain points before offering solutions
- **Action-oriented** - Use strong verbs and clear CTAs

### Writing Guidelines

**Headlines:**
- Lead with benefit, not feature
- Use numbers when possible (specific > vague)
- Include power words: "proven," "guaranteed," "transform," "eliminate"
- Keep under 10 words when possible
- Use `<span className="text-amber-600">` for 2-3 key accent words

**Body Copy:**
- Short paragraphs (2-3 sentences max)
- Use bullet points liberally
- Start sentences with active verbs
- Avoid industry jargon unless explaining it
- Include concrete examples and scenarios

**CTAs:**
- Start with action verbs: "Get," "Start," "Book," "Download," "Access"
- Create urgency without pressure: "Start Today" vs "Don't Wait"
- Be specific: "Book Free Consultation" vs "Learn More"
- Use contrasting button pairs (primary + secondary)

### Copywriting Formulas

**AIDA (Hero Sections):**
1. **Attention:** Bold headline with key benefit
2. **Interest:** Subheadline explaining how it works
3. **Desire:** Bullet points showing transformation
4. **Action:** Dual CTAs with clear next steps

**PAS (Problem Sections):**
1. **Problem:** "Are you struggling with [pain point]?"
2. **Agitate:** Describe consequences and frustrations
3. **Solve:** "Here's how [service] solves this..."

**Before/After/Bridge:**
1. **Before:** Current painful situation
2. **After:** Desired outcome/transformation
3. **Bridge:** Your service is the path between them

### Compliance & Disclaimers

**Always Include:**
- No guarantee of results language (if applicable)
- Average/typical timeline disclosures
- Results vary by individual circumstances
- Licensing/certification disclaimers (if applicable)
- Copyright notice in footer

**Format:**
```
<strong>Important Disclosure:</strong> [Company Name] [brief service description]. 
Results vary by client. [Specific stats/claims require source citations]. 
[Add industry-specific compliance requirements]. [Tax/legal/financial advice disclaimers if applicable].
```

---

## **IMPLEMENTATION CHECKLIST**

### Before You Start
- [ ] Read entire PRD document
- [ ] Review Business Credit reference page for visual examples
- [ ] Confirm access to all required dependencies (lucide-react, etc.)
- [ ] Understand the specific service being built

### Design System Setup
- [ ] Import Inter font from Google Fonts in index.html
- [ ] Verify src/index.css contains MGC brand colors
- [ ] Confirm tailwind.config.ts is properly configured
- [ ] Test that `hsl(var(--mgc-yellow))` renders correctly

### Component Building
- [ ] Create page file in src/pages/[ServiceName].tsx
- [ ] Import Header component at top of page
- [ ] Build sections in order: Hero → Value Prop → Benefits → etc.
- [ ] Use only lucide-react icons (NO EMOJIS)
- [ ] Apply semantic color classes (never hex codes)
- [ ] Use standardized typography scales
- [ ] Implement proper spacing (py-16 md:py-24 for sections)

### Content Guidelines
- [ ] Headlines use text-gray-900 with text-amber-600 accents
- [ ] Body copy uses text-gray-700
- [ ] All CTAs are amber-400 primary / white secondary
- [ ] Checkmarks use CheckCircle with text-green-600
- [ ] All external links have target="_blank" rel="noopener noreferrer"

### Responsiveness
- [ ] Test mobile (320px), tablet (768px), desktop (1024px+)
- [ ] Verify text-4xl md:text-5xl lg:text-6xl pattern on H1s
- [ ] Confirm grid breakpoints work (grid md:grid-cols-2)
- [ ] Check that buttons stack on mobile (flex-col sm:flex-row)

### Accessibility
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Interactive elements are keyboard accessible
- [ ] Icon components have proper aria labels if needed

### Content Review
- [ ] Replace all [Placeholder] text with actual content
- [ ] Customize section order based on service needs
- [ ] Add service-specific FAQ questions (8-12 minimum)
- [ ] Include proper compliance disclaimers in footer
- [ ] Verify all URLs are correct and functional

### Final Quality Check
- [ ] No console errors in browser
- [ ] No TypeScript errors
- [ ] All sections render properly
- [ ] FAQ accordion opens/closes smoothly
- [ ] CTAs link to correct destinations
- [ ] Footer includes year dynamic: {new Date().getFullYear()}
- [ ] Company name is "Mesa Group Consulting" (not Capital)

---

## **ADAPTATION GUIDELINES**

This template is designed to be **flexible while maintaining consistency**.

### When to Adapt Sections:

**Always Keep:**
- Hero section structure
- Color palette and typography standards
- Icon system (lucide-react)
- Component patterns (cards, buttons, etc.)
- Footer with compliance

**Adapt as Needed:**
- Number of benefit cards (3-6 recommended)
- Process steps (3-7 steps typical)
- Section order based on service complexity
- Comparison tables (if applicable to service)
- Testimonials section (if social proof available)

### Service-Specific Modifications:

**Financial Services:** Emphasize credibility, compliance, security
**Coaching/Consulting:** Focus on expertise, results, testimonials
**Debt Relief:** Lead with empathy, emphasize transformation
**Credit Services:** Highlight speed, protection, scores
**Funding Services:** Showcase amounts, qualifications, speed

---

## **COMMON PITFALLS TO AVOID**

❌ **Using emojis instead of lucide-react icons**
✅ Import and use icon components: `<CheckCircle className="..." />`

❌ **Direct hex codes in className**
✅ Use Tailwind semantic classes: `text-amber-600` not `text-[#D97706]`

❌ **Inconsistent heading sizes**
✅ Follow typography scale exactly: H1 (text-4xl md:text-5xl lg:text-6xl)

❌ **Missing responsive breakpoints**
✅ Always include mobile, tablet, desktop: `px-4 sm:px-6 lg:px-8`

❌ **Generic CTAs like "Learn More"**
✅ Specific action verbs: "Book Free Consultation," "Get Started Today"

❌ **Forgetting target="_blank" on external links**
✅ Always add `target="_blank" rel="noopener noreferrer"` for external URLs

❌ **Using text-white on white backgrounds**
✅ Use text-gray-900 for headings, text-gray-700 for body on light backgrounds

❌ **Skipping compliance disclaimers**
✅ Always include appropriate disclosures in footer

---

## **REFERENCE EXAMPLES**

**Live Reference Page:**
- Business Credit page at src/pages/Index.tsx
- All section components in src/components/business-credit/sections/

**Color Palette Visual:**
```
🟡 MGC Yellow (#f9c65d) - Primary CTAs, highlights
🟤 MGC Gold (#bb9446) - Hover states, dark accents  
🟫 MGC Tan (#E5D2AF) - Light backgrounds
🟨 MGC Cream (#f8d899) - Subtle backgrounds
⬛ MGC Dark Gray (#3E3E3E) - Text, headings
⬜ MGC Light Gray (#CBCBCB) - Borders, dividers
```

---

## **FINAL NOTES**

This template ensures every Mesa Group Consulting page maintains:
1. **Visual consistency** - Same colors, fonts, spacing
2. **Brand identity** - Professional warm financial aesthetic
3. **Component reusability** - Standardized patterns across pages
4. **Flexibility** - Adapt section content while keeping structure
5. **Quality** - Professional, accessible, responsive output

**When in doubt:**
- Refer to Business Credit page (src/pages/Index.tsx) for visual reference
- Use lucide-react icons, never emojis
- Apply semantic Tailwind classes from design system
- Follow typography scale exactly
- Keep tone professional, results-focused, empathetic

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Maintained By:** Mesa Group Consulting Development Team
