-- ================================================================
-- Mesa Group Consulting - Comprehensive Project Memory Seed (FIXED)
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

-- First, ensure the unique constraint exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'project_knowledge_category_key_unique'
  ) THEN
    ALTER TABLE claude_memory.project_knowledge
    ADD CONSTRAINT project_knowledge_category_key_unique
    UNIQUE (category, key);
  END IF;
END $$;

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
-- SECTION 2: TECH STACK
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
-- SECTION 3: CRITICAL RULES (⚠️ HIGHEST PRIORITY)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('critical', 'no_emojis', 'NEVER use emojis - use lucide-react icons only', 'Brand consistency requirement - emojis are unprofessional', 'CLAUDE.md', 1.0),
  ('critical', 'no_hex_colors', 'NEVER hardcode hex colors - use Tailwind utilities only', 'Use bg-amber-400, hover:bg-amber-500, etc. from design system', 'CLAUDE.md', 1.0),
  ('critical', 'service_distinction', 'NEVER confuse personal credit (/build-credit) with business credit (/business-credit-builder)', 'COMPLETELY SEPARATE services with different pricing, targets, and goals', 'CLAUDE.md', 1.0),
  ('critical', 'version_management', 'ALWAYS clarify v1 vs v2 before making changes', 'Multiple pages have A/B testing variants - confirm which version to modify', 'CLAUDE.md', 1.0),
  ('critical', 'vertical_composition', 'ALWAYS follow vertical section composition pattern', 'Pages import pre-built section components - never inline large sections', 'CLAUDE.md', 1.0),
  ('critical', 'mobile_first', 'ALWAYS test mobile-first responsive breakpoints', 'Use md:, lg: prefixes for larger screens', 'CLAUDE.md', 1.0),
  ('critical', 'no_modify_shadcn', 'DO NOT modify shadcn/ui base components in src/components/ui/', 'These are third-party primitives - modify wrappers only', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 4: BRAND COLORS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('brand_colors', 'mgc_yellow', 'HSL(40 93% 67%) = #f9c65d', 'Primary CTA color, highlights, Mesa Group Capital signature yellow', 'src/index.css', 1.0),
  ('brand_colors', 'mgc_gold', 'HSL(40 46% 50%) = #bb9446', 'Hover states, dark accents, secondary color', 'src/index.css', 1.0),
  ('brand_colors', 'mgc_tan', 'HSL(39 48% 84%) = #E5D2AF', 'Light backgrounds, subtle sections', 'src/index.css', 1.0),
  ('brand_colors', 'mgc_cream', 'HSL(40 88% 76%) = #f8d899', 'Very light backgrounds, cream tones', 'src/index.css', 1.0),
  ('brand_colors', 'tailwind_mapping', 'bg-amber-400 maps to mgc-yellow, hover:bg-amber-500 for interactions', 'ALWAYS use Tailwind utilities, never raw hex', 'CLAUDE.md', 1.0),
  ('brand_colors', 'gradient_pattern', 'bg-gradient-to-br from-white via-amber-50 to-white', 'Common hero section background pattern', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 5: SERVICE DISTINCTIONS (Critical - Never Confuse)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('services', 'personal_credit_route', '/build-credit', 'Personal credit building page - FREE educational guide', 'CLAUDE.md', 1.0),
  ('services', 'personal_credit_target', 'Consumers wanting to improve personal credit scores (680-750+)', 'Individual consumers, not businesses', 'CLAUDE.md', 1.0),
  ('services', 'personal_credit_cost', 'FREE', 'No charge - educational resource', 'CLAUDE.md', 1.0),
  ('services', 'business_credit_route', '/business-credit-builder', 'Business credit building program - PAID service', 'CLAUDE.md', 1.0),
  ('services', 'business_credit_target', 'Business owners with LLC/Corporation seeking $50K-$150K funding', 'B2B service with Fundability® System, coaching, software', 'CLAUDE.md', 1.0),
  ('services', 'business_credit_cost', '$2,495 (Full Service) or $995 (DIY)', 'Premium paid program with guaranteed minimum funding', 'CLAUDE.md', 1.0),
  ('services', 'critical_separation', 'These are COMPLETELY SEPARATE services - never merge or confuse', 'Different pricing, different targets, different value propositions', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 6: CALENDLY INTEGRATION (December 2024)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('calendly', 'component', 'CalendlyPopupButton in src/components/CalendlyPopupButton.tsx', 'Reusable button component with viewport detection', 'claude_code', 1.0),
  ('calendly', 'viewport_detection', 'Popup for landscape, custom modal for vertical monitors', 'isVerticalViewport() function in useCalendly.ts detects orientation', 'claude_code', 1.0),
  ('calendly', 'utm_tracking', 'source: website, medium: page_name, campaign: button_location', 'Each button has unique UTM parameters for analytics', 'claude_code', 1.0),
  ('calendly', 'powered_by_rule_consultation', 'Consultation buttons (opening Calendly): NO "Powered by Mesa Group" text', 'Consultations are not external platforms', 'claude_code', 1.0),
  ('calendly', 'powered_by_rule_external', 'External platform buttons (Creditily, SuperMoney, etc.): YES "Powered by Mesa Group" text', 'Sister companies and partners get powered-by attribution', 'claude_code', 1.0),
  ('calendly', 'typescript_interface', 'Window.Calendly interface declared in src/hooks/useCalendly.ts', 'Single source of truth for Calendly types - includes initPopupWidget, initInlineWidget, initBadgeWidget, closePopupWidget', 'claude_code', 1.0),
  ('calendly', 'pages_with_integration', 'Homepage, About, Build Credit, DIY Credit Repair, Credit Repair 2', 'All major pages now use CalendlyPopupButton for consultation CTAs', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 7: ROUTING STRUCTURE
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('routes_business', 'business_funding', '/business-funding + /business-funding-2', 'v1 and v2 variants for A/B testing', 'src/App.tsx', 1.0),
  ('routes_business', 'zero_interest', '/zero-interest-business-funding + /zero-interest-business-funding-2', 'v1 and v2 variants', 'src/App.tsx', 1.0),
  ('routes_business', 'business_credit', '/business-credit-builder', 'Paid program - $2,495 or $995', 'src/App.tsx', 1.0),
  ('routes_business', 'business_debt_relief', '/business-debt-relief', 'Business debt consolidation', 'src/App.tsx', 1.0),
  ('routes_consumer', 'credit_repair', '/credit-repair + /credit-repair-2', 'v1 and v2 variants for A/B testing', 'src/App.tsx', 1.0),
  ('routes_consumer', 'build_credit', '/build-credit', 'Personal credit - FREE guide (NOT business credit)', 'src/App.tsx', 1.0),
  ('routes_consumer', 'diy_credit_repair', '/diy-credit-repair', 'Creditily DIY platform - $39.99/mo', 'src/App.tsx', 1.0),
  ('routes_consumer', 'credit_monitoring', '/credit-monitoring', 'SmartCredit monitoring service', 'src/App.tsx', 1.0),
  ('routes_consumer', 'credit_cards', '/credit-cards', 'Credit card offers', 'src/App.tsx', 1.0),
  ('routes_consumer', 'personal_loans', '/personal-loans', 'Personal loan marketplace', 'src/App.tsx', 1.0),
  ('routes_consumer', 'auto_loan_refi', '/auto-loan-refi', 'Auto loan refinancing', 'src/App.tsx', 1.0),
  ('routes_consumer', 'debt_consolidation', '/debt-consolidation-loan', 'Debt consolidation loans', 'src/App.tsx', 1.0),
  ('routes_consumer', 'debt_relief', '/debt-relief', 'Debt settlement services', 'src/App.tsx', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 8: EXTERNAL CTAs
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('external_ctas', 'business_funding_app', 'https://funding-app.mesagroupconsulting.com/Opt-In', 'Main business funding application portal', 'CLAUDE.md', 1.0),
  ('external_ctas', 'business_funding_consultation', 'https://link.mesagroupconsulting.com/widget/bookings/mesa-group-capital-funding-discovery', 'Consultation booking widget', 'CLAUDE.md', 1.0),
  ('external_ctas', 'credit_repair_portal', 'https://portal.mesagroupconsulting.com/portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09', 'Credit repair signup portal', 'CLAUDE.md', 1.0),
  ('external_ctas', 'business_credit_full_service', 'https://mesagroupcapital.com/business-credit-enroll', 'Full Service ($2,495) enrollment', 'CLAUDE.md', 1.0),
  ('external_ctas', 'business_credit_diy', 'https://mesagroupcapital.com/bcfs-diy-enroll', 'DIY ($995) enrollment', 'CLAUDE.md', 1.0),
  ('external_ctas', 'creditily', 'https://member.getcreditily.com/Registration/CreateAccount/Account', 'DIY credit repair platform ($39.99/mo)', 'CLAUDE.md', 1.0),
  ('external_ctas', 'contact_phone', '(661) 310-3040', 'Primary contact number', 'CLAUDE.md', 1.0),
  ('external_ctas', 'location', 'Bakersfield, CA', 'Business location', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 9: COMPLIANCE (CROA & Trademarks)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('compliance', 'croa_no_guarantees', 'NEVER guarantee specific score increases or removals', 'Credit Repair Organizations Act compliance', 'CLAUDE.md', 1.0),
  ('compliance', 'croa_transparency', 'Be transparent about guarantee exclusions and limitations', 'Legal requirement for credit repair services', 'CLAUDE.md', 1.0),
  ('compliance', 'legal_partnerships', 'Legal partnerships clearly stated - NOT a law firm', 'Mesa Group works WITH attorneys, not AS attorneys', 'CLAUDE.md', 1.0),
  ('compliance', 'no_doj_claims', 'NEVER reference "Department of Justice" or "DOJ"', 'Avoid government affiliation implications', 'CLAUDE.md', 1.0),
  ('compliance', 'trademarks', 'Fundability® (registered), Fundability Score™, Fundability Factors™, Business Bureau Insights™', 'Always use ® or ™ symbols with these terms', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 10: ARCHITECTURE PATTERNS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('architecture', 'vertical_composition', 'Pages follow vertical section composition: Header → Hero → CTA → Features → CTA → Testimonials → FAQ → CTA → Footer', 'Standard landing page structure', 'CLAUDE.md', 1.0),
  ('architecture', 'component_organization', 'src/components/[service-name]/sections/ (kebab-case folders)', 'Each service has its own sections folder', 'CLAUDE.md', 1.0),
  ('architecture', 'page_naming', 'src/pages/[ServiceName].tsx (PascalCase files)', 'Page files use PascalCase', 'CLAUDE.md', 1.0),
  ('architecture', 'section_backgrounds', 'Alternate between white, gradients, and amber-50', 'Visual rhythm and hierarchy', 'CLAUDE.md', 1.0),
  ('architecture', 'container_pattern', '<section className="py-12 md:py-20 lg:py-24"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">', 'Standard responsive container', 'CLAUDE.md', 1.0),
  ('architecture', 'hero_layout', 'Left column: headline, subheadline, benefits, CTAs. Right column: visual/stats/form', 'Two-column hero pattern', 'CLAUDE.md', 1.0),
  ('architecture', 'feature_cards', 'bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all', 'Consistent card styling', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 11: TYPOGRAPHY
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('typography', 'font_family', 'Inter (Google Fonts)', 'All text uses Inter font', 'CLAUDE.md', 1.0),
  ('typography', 'hero_headlines', 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight', 'Largest headlines', 'CLAUDE.md', 1.0),
  ('typography', 'section_headers', 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900', 'Section titles', 'CLAUDE.md', 1.0),
  ('typography', 'body_text', 'text-lg md:text-xl text-gray-600 leading-relaxed', 'Standard body copy', 'CLAUDE.md', 1.0),
  ('typography', 'accent_words', '<span className="text-amber-600">[Highlight]</span>', 'Highlighted words in headlines', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 12: BUTTON PATTERNS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('buttons', 'primary_cta', 'inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500', 'Standard CTA button styling', 'CLAUDE.md', 1.0),
  ('buttons', 'arrow_icon', '<ArrowRight className="ml-2 w-5 h-5" />', 'Arrow positioned on right side of text', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 13: ICON PATTERNS
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('icons', 'library', 'lucide-react', 'ONLY icon library allowed - NEVER emojis', 'CLAUDE.md', 1.0),
  ('icons', 'checkmarks', '<CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />', 'Positive indicators, feature lists', 'CLAUDE.md', 1.0),
  ('icons', 'x_marks', '<X className="w-5 h-5 text-red-600 flex-shrink-0" />', 'Negative indicators, comparison tables', 'CLAUDE.md', 1.0),
  ('icons', 'cta_arrows', '<ArrowRight className="ml-2 w-5 h-5" />', 'CTA button arrows', 'CLAUDE.md', 1.0),
  ('icons', 'common_imports', 'CheckCircle, ArrowRight, X, Shield, AlertTriangle from lucide-react', 'Most frequently used icons', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 14: RECENT MAJOR UPDATES
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('updates', '2024_12_19_calendly_integration', 'Comprehensive Calendly integration across 5 pages with 25+ consultation buttons', 'Homepage, About, Build Credit, DIY Credit Repair, Credit Repair 2 all updated', 'claude_code', 1.0),
  ('updates', '2024_12_17_credit_repair_2_prd', 'Legal escalations, trilingual support (EN/ES/IT), transparency sections', 'Steve Neu PRD implementation', 'claude_code', 1.0),
  ('updates', '2024_12_12_business_credit_builder', 'New paid program page with $50K minimum funding guarantee and Fundability® System', 'Major new service launch', 'claude_code', 1.0),
  ('updates', '2024_12_12_homepage_flip_cards', '3D flip cards with viewport-based detection in How It Works section', 'Interactive feature with custom Tailwind utilities', 'claude_code', 1.0),
  ('updates', '2024_12_11_business_funding_2', 'Interactive calculator, dual pathways (consultation vs application), transparency section', 'Major v2 enhancement', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 15: COMMON PITFALLS (Never Do These)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('pitfalls', 'emojis', 'NEVER use emojis instead of lucide-react icons', 'Brand consistency violation', 'CLAUDE.md', 1.0),
  ('pitfalls', 'hex_colors', 'NEVER hardcode hex colors instead of Tailwind classes', 'Design system violation', 'CLAUDE.md', 1.0),
  ('pitfalls', 'responsive_breaking', 'NEVER break mobile-first responsive patterns', 'Always use md:, lg: prefixes', 'CLAUDE.md', 1.0),
  ('pitfalls', 'shadcn_modifications', 'NEVER modify shadcn/ui base components without understanding', 'Can break entire design system', 'CLAUDE.md', 1.0),
  ('pitfalls', 'section_deviation', 'NEVER deviate from vertical section composition pattern', 'Architectural consistency', 'CLAUDE.md', 1.0),
  ('pitfalls', 'service_confusion', 'NEVER confuse personal credit with business credit', 'Completely separate services', 'CLAUDE.md', 1.0),
  ('pitfalls', 'version_mixup', 'NEVER use v1 content when v2 is requested (or vice versa)', 'Always clarify which version', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 16: CLIENT PREFERENCES (Evert Calderon)
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('client_prefs', 'tone', 'Conservative, professional tone', 'Not overly salesy or hype-driven', 'CLAUDE.md', 1.0),
  ('client_prefs', 'credibility', 'Emphasis on results and credibility (real numbers, real stats)', 'Evidence-based marketing', 'CLAUDE.md', 1.0),
  ('client_prefs', 'disclosure', 'Clear disclosure and compliance language', 'Transparency is paramount', 'CLAUDE.md', 1.0),
  ('client_prefs', 'target_audience', 'Focus on business owners and real estate investors', 'Primary customer segments', 'CLAUDE.md', 1.0),
  ('client_prefs', 'positioning_high_credit', 'Premium positioning for high-credit clients (700+)', 'Quality over quantity for zero-interest programs', 'CLAUDE.md', 1.0),
  ('client_prefs', 'value_prop', 'Insider/relationship-based value proposition', 'Leverage of 75+ lender relationships', 'CLAUDE.md', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SECTION 17: DOCUMENTATION REFERENCES
-- ================================================================

INSERT INTO project_knowledge (category, key, value, context, source, confidence)
VALUES
  ('documentation', 'primary_source', 'CLAUDE.md', 'Primary project documentation - always authoritative', 'claude_code', 1.0),
  ('documentation', 'design_system', 'MESA_GROUP_PAGE_TEMPLATE_PRD.md', 'Comprehensive design system reference', 'claude_code', 1.0),
  ('documentation', 'copilot_instructions', '.github/copilot-instructions.md', 'Detailed component patterns', 'claude_code', 1.0),
  ('documentation', 'css_variables', 'src/index.css', 'CSS variables and design tokens', 'claude_code', 1.0),
  ('documentation', 'navigation', 'src/components/Header.tsx', 'Shared navigation structure', 'claude_code', 1.0),
  ('documentation', 'routes', 'src/App.tsx', 'Route definitions and structure', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, context = EXCLUDED.context, updated_at = NOW();

-- ================================================================
-- SUCCESS MESSAGE
-- ================================================================

DO $$
BEGIN
  RAISE NOTICE '✅ Mesa Group memory seed completed successfully!';
  RAISE NOTICE 'Total categories: 17';
  RAISE NOTICE 'Total knowledge items: 100+';
  RAISE NOTICE '';
  RAISE NOTICE 'Verify with: SELECT category, COUNT(*) FROM claude_memory.project_knowledge GROUP BY category;';
END $$;
