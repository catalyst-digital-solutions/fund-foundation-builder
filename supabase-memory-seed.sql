-- ================================================================
-- Mesa Group Consulting - Comprehensive Project Memory Seed
-- ================================================================
-- Created: 2025-12-19
-- Purpose: Store complete project context in claude_memory schema
-- Target: Supabase project bvaaetpqjexkprglsnac
--
-- INSTRUCTIONS:
-- 1. Open Supabase SQL Editor
-- 2. Copy and paste this entire file
-- 3. Execute to populate/update memory
-- ================================================================

SET search_path TO claude_memory;

-- ================================================================
-- SECTION 1: PROJECT IDENTITY & CORE INFORMATION
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('project_identity', 'client_name', 'Evert Calderon - Mesa Group Consulting / Mesa Group Capital', 'Primary client and business owner', 'claude_code', 1.0),
  ('project_identity', 'repository_name', 'fund-foundation-builder', 'GitHub repository name', 'claude_code', 1.0),
  ('project_identity', 'repository_url', 'https://github.com/catalyst-digital-solutions/fund-foundation-builder', 'Full GitHub repository URL', 'claude_code', 1.0),
  ('project_identity', 'working_directory', '/Users/Mario/Documents/aaa-catalyst-digital-solutions/aaa-client-projects/Mesa Group Consulting - Evert Calderon/webpages-built-from-lovable/fund-foundation-builder', 'Local development path on Mario''s machine', 'claude_code', 1.0),
  ('project_identity', 'dev_server_port', '8080', 'Development server runs on port 8080 (npm run dev)', 'claude_code', 1.0),
  ('project_identity', 'lovable_project_url', 'https://lovable.dev/projects/a84a569b-99f4-4ddf-898b-bc278a3f3eb0', 'Lovable platform project URL for syncing', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 2: TECH STACK (Enhanced)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('tech_stack', 'framework', 'React 18 with TypeScript', 'Core framework - functional components with hooks', 'claude_code', 1.0),
  ('tech_stack', 'build_tool', 'Vite with SWC plugin', 'Fast HMR and optimized builds', 'claude_code', 1.0),
  ('tech_stack', 'routing', 'React Router v6', 'Client-side routing for all pages', 'claude_code', 1.0),
  ('tech_stack', 'styling', 'Tailwind CSS with custom design system', 'Utility-first CSS framework with Mesa Group brand tokens', 'claude_code', 1.0),
  ('tech_stack', 'ui_components', 'shadcn/ui (Radix UI primitives)', 'DO NOT MODIFY base components without understanding consequences', 'claude_code', 1.0),
  ('tech_stack', 'icons', 'lucide-react ONLY', 'CRITICAL: Never use emojis - only lucide-react icons for brand consistency', 'claude_code', 1.0),
  ('tech_stack', 'state_management', 'TanStack Query (React Query)', 'Server state management and caching', 'claude_code', 1.0),
  ('tech_stack', 'forms', 'react-hook-form + zod', 'Form handling with schema validation', 'claude_code', 1.0),
  ('tech_stack', 'commands', 'npm run dev (dev server), npm run build (production), npm run build:dev (debug build), npm run preview (preview production), npm run lint (linting)', 'All available npm commands for development', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 3: ARCHITECTURE PATTERNS (Critical)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('patterns', 'page_structure_pattern', 'Vertical section composition - every landing page follows this pattern', 'Pages import pre-built section components from src/components/[service-name]/sections/. Each section is self-contained with its own styling. Sections stack vertically with alternating backgrounds (white, gradients, amber-50). Never inline large sections directly in page files.', 'claude_code', 1.0),
  ('patterns', 'component_organization', 'Service-specific folders in kebab-case under src/components/', 'Structure: src/components/[service-name]/sections/ contains all section components for that service. Example: src/components/credit-monitoring/sections/HeroSection.tsx', 'claude_code', 1.0),
  ('patterns', 'section_composition', 'Header > HeroSection > EmotionalCTA1 > FeatureSection > HowItWorks > EmotionalCTA2 > ServiceComparison > WhatsIncluded > EmotionalCTA3 > Testimonials > FAQ > FinalCTA > Footer', 'Standard vertical section order for service pages', 'claude_code', 1.0),
  ('patterns', 'route_definitions', 'All routes defined in src/App.tsx', 'Central routing configuration - check this file to understand URL structure', 'claude_code', 1.0),
  ('patterns', 'container_pattern', '<section className="py-12 md:py-20 lg:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/* Content */}</div></section>', 'Standard container pattern for all sections - ensures consistent spacing and max-width', 'claude_code', 1.0),
  ('patterns', 'hero_section_layout', 'Left column: headline, subheadline, benefits list with checkmarks, CTA buttons. Right column: visual element (stats, form, or illustration). Background: bg-gradient-to-br from-white via-amber-50 to-white', 'Standard hero section layout pattern used across all service pages', 'claude_code', 1.0),
  ('patterns', 'feature_cards', '<div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"><div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full" />{/* Content */}</div>', 'Standard feature card pattern with Mesa Group branding', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 4: BRAND COLORS (Critical - HSL Variables)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('brand', 'color_mgc_yellow', '40 93% 67% (#f9c65d)', 'Primary CTAs, highlights - defined as --mgc-yellow in src/index.css', 'claude_code', 1.0),
  ('brand', 'color_mgc_gold', '40 46% 50% (#bb9446)', 'Hover states, dark accents - defined as --mgc-gold in src/index.css', 'claude_code', 1.0),
  ('brand', 'color_mgc_tan', '39 48% 84% (#E5D2AF)', 'Light backgrounds - defined as --mgc-tan in src/index.css', 'claude_code', 1.0),
  ('brand', 'color_mgc_cream', '40 88% 76% (#f8d899)', 'Subtle backgrounds - defined as --mgc-cream in src/index.css', 'claude_code', 1.0),
  ('brand', 'color_usage_rule', 'ALWAYS use Tailwind amber utilities: bg-amber-400, hover:bg-amber-500', 'These utilities map to Mesa Group brand colors. NEVER use inline hex colors or style props for brand colors. Only use hex when referencing brand yellow directly in documentation.', 'claude_code', 1.0),
  ('brand', 'color_css_variables_location', 'src/index.css', 'All HSL color variables defined here with --mgc- prefix', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 5: TYPOGRAPHY & DESIGN TOKENS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('brand', 'typography_font', 'Inter (loaded via Google Fonts)', 'All text uses Inter font - never mix fonts', 'claude_code', 1.0),
  ('brand', 'typography_hero_headline', 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight', 'Standard hero headline classes', 'claude_code', 1.0),
  ('brand', 'typography_section_header', 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900', 'Standard section header classes', 'claude_code', 1.0),
  ('brand', 'typography_body_text', 'text-lg md:text-xl text-gray-600 leading-relaxed', 'Standard body text classes', 'claude_code', 1.0),
  ('brand', 'typography_accent_highlight', '<span className="text-amber-600">[Highlight]</span>', 'How to highlight accent words in headlines', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 6: ICON PATTERNS (Critical)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('brand', 'icons_library', 'lucide-react ONLY', 'CRITICAL RULE: Never use emojis. All icons must be from lucide-react for brand consistency.', 'claude_code', 1.0),
  ('brand', 'icon_checkmark', '<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />', 'Standard checkmark for positive items (import from lucide-react)', 'claude_code', 1.0),
  ('brand', 'icon_x_mark', '<X className="w-5 h-5 text-red-600 flex-shrink-0" />', 'Standard X mark for negative items (import from lucide-react)', 'claude_code', 1.0),
  ('brand', 'icon_cta_arrow', '<ArrowRight className="ml-2 w-5 h-5" />', 'Standard arrow for CTA buttons (import from lucide-react)', 'claude_code', 1.0),
  ('brand', 'icon_import_example', 'import { CheckCircle, ArrowRight, X, Shield, AlertTriangle } from "lucide-react";', 'How to import lucide-react icons', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 7: BUTTON PATTERNS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('patterns', 'primary_cta_button', '<a href="[URL]" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500">Get Started Now<ArrowRight className="ml-2 w-5 h-5" /></a>', 'Standard primary CTA button with Mesa Group branding', 'claude_code', 1.0),
  ('patterns', 'button_color_rule', 'Primary CTAs use amber background (bg-amber-400 hover:bg-amber-500) with dark text (text-gray-900)', 'Ensures consistent brand appearance across all CTAs', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 8: CUSTOM TAILWIND UTILITIES
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('tech_stack', 'custom_tailwind_3d', 'perspective-1000, transform-style-3d, backface-hidden', 'Custom 3D flip card utilities defined in tailwind.config.ts - used in Homepage "How It Works" section', 'claude_code', 1.0),
  ('tech_stack', 'custom_tailwind_animations', 'animate-bounce-slow', 'Custom gentle bounce animation - defined in tailwind.config.ts', 'claude_code', 1.0),
  ('tech_stack', 'tailwind_config_location', 'tailwind.config.ts', 'All custom Tailwind utilities and theme extensions defined here', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 9: SERVICE DISTINCTIONS (Critical)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('services', 'personal_credit_route', '/build-credit', 'FREE educational guide for consumers - goal: 680-750+ personal credit score', 'claude_code', 1.0),
  ('services', 'business_credit_route', '/business-credit-builder', 'PAID program for business owners - $2,495 (Full Service) or $995 (DIY) - goal: $50K-$150K business funding', 'claude_code', 1.0),
  ('services', 'credit_distinction_critical', 'Personal Credit and Business Credit are COMPLETELY SEPARATE services - never merge or confuse them', 'Personal credit is free consumer guide. Business credit is paid B2B program with LLC/Corp requirement. These are fundamentally different offerings.', 'claude_code', 1.0),
  ('services', 'business_credit_features', 'Includes: Fundability® System, coaching, software, $50K-$150K funding goal', 'Full details at /business-credit-builder page', 'claude_code', 1.0),
  ('services', 'personal_credit_features', 'FREE guide: credit score improvement, 680-750+ goal, consumer-focused', 'Full details at /build-credit page', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 10: ROUTING STRUCTURE (Business Services)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('routing', 'business_funding_v1', '/business-funding', 'Version 1 of business funding page', 'claude_code', 1.0),
  ('routing', 'business_funding_v2', '/business-funding-2', 'Version 2 with interactive calculator, 10-20% rule, dual pathways', 'claude_code', 1.0),
  ('routing', 'zero_interest_funding_v1', '/zero-interest-business-funding', 'Version 1 of 0% funding page', 'claude_code', 1.0),
  ('routing', 'zero_interest_funding_v2', '/zero-interest-business-funding-2', 'Version 2 with premium positioning, 700+ credit minimum', 'claude_code', 1.0),
  ('routing', 'business_credit_builder', '/business-credit-builder', 'Paid program - separate from personal credit', 'claude_code', 1.0),
  ('routing', 'business_debt_relief', '/business-debt-relief', 'Business debt relief service page', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 11: ROUTING STRUCTURE (Consumer Services)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('routing', 'credit_repair_v1', '/credit-repair', 'Version 1 of credit repair page', 'claude_code', 1.0),
  ('routing', 'credit_repair_v2', '/credit-repair-2', 'Version 2 with legal escalations, trilingual support', 'claude_code', 1.0),
  ('routing', 'build_credit', '/build-credit', 'Personal credit - FREE guide (not business credit)', 'claude_code', 1.0),
  ('routing', 'credit_cards', '/credit-cards', 'Credit card offers page', 'claude_code', 1.0),
  ('routing', 'personal_loans', '/personal-loans', 'Personal loan offers page', 'claude_code', 1.0),
  ('routing', 'auto_loan_refi', '/auto-loan-refi', 'Auto loan refinancing page', 'claude_code', 1.0),
  ('routing', 'debt_consolidation', '/debt-consolidation-loan', 'Debt consolidation loan page', 'claude_code', 1.0),
  ('routing', 'debt_relief', '/debt-relief', 'Consumer debt relief page', 'claude_code', 1.0),
  ('routing', 'credit_monitoring', '/credit-monitoring', 'Credit monitoring service page', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 12: VERSION MANAGEMENT STRATEGY
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('version_management', 'ab_testing_pattern', 'Multiple pages have v1/v2 variants for A/B testing - ALWAYS clarify which version to modify', 'Business Funding, Zero Interest Funding, and Credit Repair all have two versions with different features', 'claude_code', 1.0),
  ('version_management', 'business_funding_difference', 'v2: Interactive calculator, 10-20% rule, dual pathways', 'Version 2 is more sophisticated with financial calculator', 'claude_code', 1.0),
  ('version_management', 'zero_interest_difference', 'v2: Premium positioning, 700+ credit minimum', 'Version 2 targets higher credit clients', 'claude_code', 1.0),
  ('version_management', 'credit_repair_difference', 'v2: Legal escalations, trilingual support', 'Version 2 emphasizes legal partnerships and multilingual service', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 13: EXTERNAL CTAs (Critical URLs)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('external_ctas', 'business_funding_application', 'https://funding-app.mesagroupconsulting.com/Opt-In', 'Main business funding application portal', 'claude_code', 1.0),
  ('external_ctas', 'business_funding_consultation', 'https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery', 'Consultation booking for business funding', 'claude_code', 1.0),
  ('external_ctas', 'credit_repair_signup', 'https://portal.mesagroupconsulting.com/portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09', 'Credit repair signup portal', 'claude_code', 1.0),
  ('external_ctas', 'business_credit_full_service', 'https://mesagroupcapital.com/business-credit-enroll', 'Business Credit Builder Full Service ($2,495) enrollment', 'claude_code', 1.0),
  ('external_ctas', 'business_credit_diy', 'https://mesagroupcapital.com/bcfs-diy-enroll', 'Business Credit Builder DIY ($995) enrollment', 'claude_code', 1.0),
  ('external_ctas', 'creditily_diy', 'https://member.getcreditily.com/Registration/CreateAccount/Account', 'DIY credit repair through Creditily partnership', 'claude_code', 1.0),
  ('external_ctas', 'contact_phone', '(661) 310-3040', 'Mesa Group main phone number', 'claude_code', 1.0),
  ('external_ctas', 'contact_location', 'Bakersfield, CA', 'Mesa Group location', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 14: CALENDLY INTEGRATION (December 2024)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('integrations', 'calendly_component', 'CalendlyPopupButton component for consultation CTAs', 'Located in src/components/CalendlyPopupButton.tsx - handles all Calendly popup interactions', 'claude_code', 1.0),
  ('integrations', 'calendly_viewport_detection', 'Automatic viewport detection: popup for landscape, modal for vertical monitors', 'Smart detection ensures optimal user experience based on screen orientation', 'claude_code', 1.0),
  ('integrations', 'calendly_utm_pattern', 'source="website", medium="page_name", campaign="button_location"', 'Standard UTM tracking for all Calendly buttons to track conversion sources', 'claude_code', 1.0),
  ('integrations', 'calendly_powered_by_rule', 'Consultation buttons (Calendly): NO "Powered by Mesa Group" text. External platform buttons (Creditily, SuperMoney, etc.): YES text.', 'CRITICAL: Calendly buttons are our own system, external platforms need attribution', 'claude_code', 1.0),
  ('integrations', 'calendly_config_location', 'src/hooks/useCalendly.ts', 'Contains CALENDLY_URL constant and all Calendly configuration', 'claude_code', 1.0),
  ('integrations', 'calendly_pages', 'Homepage, About, Build Credit, DIY Credit Repair, Credit Repair 2', 'Pages currently using Calendly integration', 'claude_code', 1.0),
  ('integrations', 'calendly_typescript', 'Window.Calendly interface declared in src/hooks/useCalendly.ts (single source of truth)', 'Methods: initPopupWidget, initInlineWidget, initBadgeWidget, closePopupWidget', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 15: INTERACTIVE PATTERNS (Homepage Flip Cards)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('patterns', 'flip_card_implementation', 'Homepage "How It Works" section uses viewport-based flip detection (not hover)', 'Viewport detection prevents stuttering that occurs with hover-based flipping. See src/components/Homepage/HowItWorksFlipCard.tsx', 'claude_code', 1.0),
  ('patterns', 'flip_card_mousemove', 'handleMouseMove checks if cursor is in vertical section of card: const isInVerticalSection = e.clientY >= rect.top && e.clientY <= rect.bottom; setIsFlipped(isInVerticalSection);', 'Uses passive event listener for performance', 'claude_code', 1.0),
  ('patterns', 'flip_card_cleanup', 'useEffect returns cleanup function to remove mousemove listener', 'Prevents memory leaks and performance issues', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 16: SERVICE TIER COMPARISON PATTERN
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('patterns', 'tier_comparison_mobile', 'Tab-based toggle between tiers on mobile devices', 'Saves vertical space and improves mobile UX', 'claude_code', 1.0),
  ('patterns', 'tier_comparison_desktop', 'Side-by-side cards with feature comparison on desktop', 'Allows easy visual comparison of service tiers', 'claude_code', 1.0),
  ('patterns', 'tier_comparison_example', 'See src/components/business-credit/sections/ServiceTierComparison.tsx for reference pattern', 'Full implementation with mobile/desktop responsive handling', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 17: DUAL CTA PATHWAYS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('patterns', 'dual_cta_strategy', 'Many pages offer consultation + direct application pathways', 'Consultation: Calendly booking. Direct Application: External platform link. Gives users choice based on their readiness.', 'claude_code', 1.0),
  ('patterns', 'consultation_cta', 'https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery', 'For users who want to talk first before applying', 'claude_code', 1.0),
  ('patterns', 'direct_application_cta', 'https://mesagroupcapital.com/for-businesses/business-funding', 'For users ready to apply immediately', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 18: COMPLIANCE & LEGAL REQUIREMENTS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('compliance', 'croa_credit_repair', 'Never guarantee score increases or specific removals. Transparent about guarantee exclusions.', 'CROA (Credit Repair Organizations Act) compliance for credit repair services', 'claude_code', 1.0),
  ('compliance', 'legal_partnerships', 'Legal partnerships (not a law firm) must be clearly stated', 'Mesa Group partners with law firms but is not itself a law firm', 'claude_code', 1.0),
  ('compliance', 'doj_reference_prohibition', 'No "Department of Justice" or "DOJ" references', 'Avoid language that could imply government affiliation', 'claude_code', 1.0),
  ('compliance', 'fundability_trademark', 'Fundability® (registered trademark - use ® symbol)', 'Proper trademark usage for Fundability System', 'claude_code', 1.0),
  ('compliance', 'business_credit_trademarks', 'Fundability Score™, Fundability Factors™, Business Bureau Insights™', 'Additional trademarks used in business credit content', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 19: CLIENT PREFERENCES (Evert Calderon)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('preferences', 'tone', 'Conservative, professional tone', 'Reflects financial services industry standards and builds trust', 'claude_code', 1.0),
  ('preferences', 'credibility_emphasis', 'Emphasis on results and credibility (real numbers, real stats)', 'Use specific numbers: "$50M+ facilitated", "75+ lender relationships", "680-750+ credit score"', 'claude_code', 1.0),
  ('preferences', 'disclosure', 'Clear disclosure and compliance language', 'Be transparent about guarantees, exclusions, and legal partnerships', 'claude_code', 1.0),
  ('preferences', 'target_audience', 'Business owners and real estate investors', 'Primary audience for Mesa Group services', 'claude_code', 1.0),
  ('preferences', 'positioning', 'Premium positioning for high-credit clients', 'Especially for zero-interest funding (700+ credit requirement)', 'claude_code', 1.0),
  ('preferences', 'value_proposition', 'Insider/relationship-based value proposition', 'Emphasize exclusive lender relationships and insider access', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 20: RECENT MAJOR UPDATES
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('project_status', 'update_2024_12_17', 'Credit Repair 2 - Steve Neu PRD: Legal Escalations section (FCRA/FDCPA violations), "What''s Not Covered" transparency, "You''ve Got Nothing to Lose" guarantee, Trilingual support (🇺🇸 English | 🇪🇸 Español | 🇮🇹 Italiano)', 'Major enhancement to credit repair page emphasizing legal partnerships and multilingual service', 'claude_code', 1.0),
  ('project_status', 'update_2024_12_12_business_credit', 'Business Credit Builder: New paid program page at /business-credit-builder, $50,000 minimum funding guarantee, 5-Step Fundability® System, Dual pricing: $2,495 (Full Service) or $995 (DIY)', 'Launch of new B2B service offering', 'claude_code', 1.0),
  ('project_status', 'update_2024_12_12_homepage', 'Homepage Flip Cards: 3D flip card interaction in "How It Works" section, Viewport-based mouse detection (not hover), Custom Tailwind utilities for 3D transforms', 'Interactive UI enhancement for homepage', 'claude_code', 1.0),
  ('project_status', 'update_2024_12_11_funding', 'Business Funding 2: Interactive Funding Calculator (10-20% of annual revenue), Dual pathways: consultation vs. direct application, "Real Talk About Qualifications" transparency section, 75+ lender relationships, $50M+ facilitated', 'Enhanced business funding page with calculator and transparency features', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 21: COMMON PITFALLS TO AVOID (Critical)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('critical', 'pitfall_emojis', '❌ Using emojis instead of lucide-react icons', 'ALWAYS use lucide-react icons. Never use emojis for brand consistency.', 'claude_code', 1.0),
  ('critical', 'pitfall_hex_colors', '❌ Hardcoding hex colors instead of Tailwind classes', 'ALWAYS use Tailwind utilities like bg-amber-400. Never use inline styles or hex codes.', 'claude_code', 1.0),
  ('critical', 'pitfall_responsive', '❌ Breaking mobile-first responsive patterns', 'Always test mobile breakpoints (sm:, md:, lg:, xl:). Never assume desktop-only usage.', 'claude_code', 1.0),
  ('critical', 'pitfall_shadcn', '❌ Modifying shadcn/ui base components without understanding consequences', 'shadcn/ui components in src/components/ui/ should rarely be modified. Extend them instead.', 'claude_code', 1.0),
  ('critical', 'pitfall_section_composition', '❌ Deviating from vertical section composition pattern', 'Always follow the established pattern: import sections from src/components/[service]/sections/ and stack vertically.', 'claude_code', 1.0),
  ('critical', 'pitfall_credit_confusion', '❌ Confusing personal credit (/build-credit) with business credit (/business-credit-builder)', 'These are COMPLETELY SEPARATE services. Personal = free consumer guide. Business = paid B2B program.', 'claude_code', 1.0),
  ('critical', 'pitfall_version_confusion', '❌ Using v1 content when user wants v2 updated (or vice versa)', 'ALWAYS clarify which version (v1 or v2) the user wants modified before making changes.', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 22: IMPORTANT CONTEXT FILES
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('documentation', 'claude_md', 'CLAUDE.md - Architecture and patterns', 'Primary reference for Claude Code - this file contains all critical project information', 'claude_code', 1.0),
  ('documentation', 'template_prd', 'MESA_GROUP_PAGE_TEMPLATE_PRD.md - Comprehensive design system', 'Detailed design system documentation', 'claude_code', 1.0),
  ('documentation', 'copilot_instructions', '.github/copilot-instructions.md - Detailed component patterns', 'Component-level patterns for GitHub Copilot', 'claude_code', 1.0),
  ('documentation', 'css_variables', 'src/index.css - CSS variables and design tokens', 'All HSL color variables and global styles', 'claude_code', 1.0),
  ('documentation', 'shared_header', 'src/components/Header.tsx - Shared navigation structure', 'Navigation component used across all pages', 'claude_code', 1.0),
  ('documentation', 'route_definitions', 'src/App.tsx - Route definitions', 'All routes and page mappings', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 23: LOVABLE INTEGRATION
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('integrations', 'lovable_sync', 'Project syncs between local development and Lovable platform', 'Changes pushed to GitHub are reflected in Lovable', 'claude_code', 1.0),
  ('integrations', 'lovable_tagger', 'Lovable tagger plugin runs in development mode only', 'Used for Lovable platform integration during development', 'claude_code', 1.0),
  ('integrations', 'lovable_github', 'Changes pushed to GitHub are reflected in Lovable', 'Bidirectional sync between local, GitHub, and Lovable', 'claude_code', 1.0),
  ('integrations', 'lovable_domain', 'Lovable: Project > Settings > Domains to connect custom domain', 'How to configure custom domain in Lovable platform', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 24: DEPLOYMENT
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('deployment', 'repository_hosting', 'GitHub', 'Repository hosted on GitHub', 'claude_code', 1.0),
  ('deployment', 'deployment_platform', 'Lovable platform', 'Site deployed through Lovable', 'claude_code', 1.0),
  ('deployment', 'production_url', 'Check with Evert for production URL', 'Production URL not documented in codebase', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 25: CREATING NEW LANDING PAGES (Workflow)
-- ================================================================

INSERT INTO code_patterns (pattern_name, description, code_example, file_paths, tags)
VALUES
  (
    'New Landing Page Workflow',
    'Step-by-step process for creating a new service landing page',
    '1. Add route in src/App.tsx: <Route path="/new-service" element={<NewService />} />
2. Create page file: src/pages/NewService.tsx (PascalCase)
3. Create component folder: src/components/new-service/sections/ (kebab-case)
4. Build sections following existing patterns in src/components/business-credit/sections/
5. Import sections into page following vertical composition pattern',
    ARRAY['src/App.tsx', 'src/pages/', 'src/components/'],
    ARRAY['workflow', 'landing-page', 'page-creation', 'architecture']
  )
ON CONFLICT (pattern_name)
DO UPDATE SET description = EXCLUDED.description, code_example = EXCLUDED.code_example, updated_at = NOW();

-- ================================================================
-- SECTION 26: PROJECT STATUS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('project_status', 'status', 'Active Development', 'Project is actively maintained and developed', 'claude_code', 1.0),
  ('project_status', 'last_updated', '2024-12-19', 'Date of this comprehensive memory seed', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- END OF SEED FILE
-- ================================================================

-- Summary query to verify insertion
SELECT
  category,
  COUNT(*) as items_count
FROM claude_memory.project_knowledge
GROUP BY category
ORDER BY category;
