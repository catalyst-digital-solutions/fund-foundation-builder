# Supabase Memory System - Quick Reference Guide

**Project:** Mesa Group Consulting - Fund Foundation Builder
**Created:** 2025-12-19
**Supabase Project ID:** `bvaaetpqjexkprglsnac`

---

## 🚀 Quick Start

### 1. Execute the Seed File

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/bvaaetpqjexkprglsnac/sql/new)
2. Copy the entire contents of `supabase-memory-seed.sql`
3. Paste and execute
4. Verify results with the summary query at the end

### 2. Verify Installation

```sql
-- Check total items by category
SELECT category, COUNT(*) as items_count
FROM claude_memory.project_knowledge
GROUP BY category
ORDER BY category;
```

Expected categories:
- `brand` (10+ items)
- `compliance` (5+ items)
- `critical` (7+ items)
- `deployment` (3+ items)
- `documentation` (6+ items)
- `external_ctas` (8+ items)
- `integrations` (10+ items)
- `patterns` (10+ items)
- `project_identity` (6+ items)
- `project_status` (5+ items)
- `routing` (12+ items)
- `services` (5+ items)
- `tech_stack` (9+ items)
- `version_management` (4+ items)
- `preferences` (6+ items)

---

## 📊 Memory Structure

### Tables Overview

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `project_knowledge` | Core facts and rules | category, key, value, context |
| `conversation_context` | Session continuity | session_id, context_type, summary, details |
| `code_patterns` | Reusable code patterns | pattern_name, description, code_example |
| `client_preferences` | Mesa-specific preferences | preference_type, preference, rationale |

---

## 🔍 Common Queries

### Get All Critical Rules (Start Here!)
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'critical'
ORDER BY key;
```

### Get Brand Colors & Typography
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'brand'
ORDER BY key;
```

### Get All External CTAs
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'external_ctas'
ORDER BY key;
```

### Get Service Distinctions
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'services'
ORDER BY key;
```

### Get Routing Structure
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'routing'
ORDER BY key;
```

### Get Architecture Patterns
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'patterns'
ORDER BY key;
```

### Get Compliance Rules
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'compliance'
ORDER BY key;
```

### Get Client Preferences
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'preferences'
ORDER BY key;
```

### Search All Knowledge
```sql
SELECT category, key, value, context
FROM claude_memory.project_knowledge
WHERE value ILIKE '%search_term%' OR context ILIKE '%search_term%'
ORDER BY confidence DESC, category, key;
```

### Get Recent Updates
```sql
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'project_status'
ORDER BY updated_at DESC;
```

---

## 📝 How Claude Should Use This

### At Session Start
```sql
-- 1. Load critical rules first (ALWAYS!)
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'critical';

-- 2. Load brand standards
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'brand';

-- 3. Check for active work
SELECT summary, details, priority
FROM claude_memory.conversation_context
WHERE status = 'active'
ORDER BY priority DESC, created_at DESC
LIMIT 10;
```

### During Work
```sql
-- Log decisions made
INSERT INTO claude_memory.conversation_context
(session_id, context_type, summary, details, priority, status)
VALUES
('[session-uuid]', 'decision', 'Brief description of what was done',
 '{"file": "path/to/file.tsx", "line": 123, "reason": "Why this change was made"}',
 7, 'active');

-- Save new patterns discovered
INSERT INTO claude_memory.code_patterns
(pattern_name, description, code_example, file_paths, tags)
VALUES
('Pattern Name', 'What this pattern does',
 'code example here',
 ARRAY['file1.tsx', 'file2.tsx'],
 ARRAY['tag1', 'tag2']);
```

### At Session End
```sql
-- Mark work as completed
UPDATE claude_memory.conversation_context
SET status = 'completed', updated_at = NOW()
WHERE session_id = '[session-uuid]' AND status = 'active';
```

---

## 🎯 Key Memory Categories Explained

### `critical` - Non-Negotiable Rules
- **Always query this first!**
- Contains rules that must never be violated
- Examples: "Use lucide-react only", "Never use emojis", "Always clarify v1 vs v2"

### `brand` - Visual Identity
- Colors (HSL variables)
- Typography patterns
- Icon usage
- Button styles

### `patterns` - Code Architecture
- Page structure (vertical composition)
- Component organization
- Section patterns
- Common UI patterns

### `compliance` - Legal Requirements
- CROA compliance
- Trademark usage
- Legal disclaimers
- DOJ reference prohibition

### `services` - Business Offerings
- Personal vs Business Credit distinction
- Service features
- Pricing information

### `routing` - URL Structure
- All page routes
- v1/v2 variants
- Route naming conventions

### `external_ctas` - Important Links
- Application portals
- Consultation booking
- Enrollment pages
- Contact information

### `integrations` - Third-Party Systems
- Calendly configuration
- Lovable platform
- UTM tracking patterns

### `preferences` - Client Style
- Tone and voice
- Target audience
- Positioning strategy
- Value proposition

---

## 🔄 Workflow Examples

### Starting a New Landing Page
```sql
-- 1. Get critical rules
SELECT value FROM claude_memory.project_knowledge
WHERE category = 'critical';

-- 2. Get page structure pattern
SELECT value, context FROM claude_memory.project_knowledge
WHERE category = 'patterns' AND key = 'page_structure_pattern';

-- 3. Get brand colors
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'brand' AND key LIKE 'color_%';

-- 4. Get compliance requirements
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'compliance';

-- 5. Check existing code patterns
SELECT pattern_name, description, code_example
FROM claude_memory.code_patterns
WHERE tags @> ARRAY['landing-page']
ORDER BY times_referenced DESC;
```

### Modifying Existing Page
```sql
-- 1. Identify which version (v1 or v2)
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'version_management';

-- 2. Get route information
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'routing' AND key LIKE '%[service-name]%';

-- 3. Get relevant patterns
SELECT pattern_name, code_example
FROM claude_memory.code_patterns
WHERE file_paths @> ARRAY['[target-file]'];
```

### Adding New CTA
```sql
-- 1. Check existing CTAs
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'external_ctas';

-- 2. Get button pattern
SELECT code_example FROM claude_memory.code_patterns
WHERE pattern_name = 'Primary CTA Button';

-- 3. Get Calendly pattern if consultation CTA
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'integrations' AND key LIKE 'calendly_%';
```

---

## ⚠️ Critical Reminders

### DO:
- ✅ Query `critical` category first, always
- ✅ Check compliance before writing financial content
- ✅ Use Tailwind classes (bg-amber-400) not hex colors
- ✅ Use lucide-react icons only
- ✅ Clarify v1 vs v2 before making changes
- ✅ Follow vertical section composition pattern
- ✅ Log decisions and patterns as you work

### DON'T:
- ❌ Use emojis (use lucide-react icons)
- ❌ Hardcode hex colors (use Tailwind utilities)
- ❌ Confuse personal credit with business credit
- ❌ Skip compliance checks
- ❌ Modify shadcn/ui base components without careful consideration
- ❌ Break mobile-first responsive patterns

---

## 🔗 Important File Paths

| File | Purpose |
|------|---------|
| `/CLAUDE.md` | Primary architecture documentation |
| `/src/index.css` | CSS variables and design tokens |
| `/src/App.tsx` | Route definitions |
| `/src/components/Header.tsx` | Shared navigation |
| `/src/hooks/useCalendly.ts` | Calendly configuration |
| `/tailwind.config.ts` | Custom Tailwind utilities |

---

## 📞 Access Information

**Supabase Project:** Digital Operations Hub - Mesa Group Consulting
**Project ID:** `bvaaetpqjexkprglsnac`
**Schema:** `claude_memory`
**Region:** us-west-1

**Dashboard:** https://supabase.com/dashboard/project/bvaaetpqjexkprglsnac
**SQL Editor:** https://supabase.com/dashboard/project/bvaaetpqjexkprglsnac/sql/new

---

## 🆘 Troubleshooting

### No Results from Queries
```sql
-- Check if data exists
SELECT COUNT(*) FROM claude_memory.project_knowledge;

-- If zero, re-run the seed file
```

### Find Specific Information
```sql
-- Use ILIKE for case-insensitive search
SELECT category, key, value
FROM claude_memory.project_knowledge
WHERE value ILIKE '%calendly%' OR context ILIKE '%calendly%';
```

### Update Existing Knowledge
```sql
-- Use ON CONFLICT to update
INSERT INTO claude_memory.project_knowledge
(category, key, value, context, source, confidence)
VALUES
('category', 'key', 'new value', 'new context', 'claude_code', 1.0)
ON CONFLICT (category, key)
DO UPDATE SET
  value = EXCLUDED.value,
  context = EXCLUDED.context,
  updated_at = NOW();
```

---

## 🎓 Learning from Memory

### Most Referenced Patterns
```sql
SELECT pattern_name, description, times_referenced
FROM claude_memory.code_patterns
ORDER BY times_referenced DESC
LIMIT 10;
```

### Recent Decisions
```sql
SELECT summary, details, created_at
FROM claude_memory.conversation_context
WHERE context_type = 'decision'
ORDER BY created_at DESC
LIMIT 20;
```

### Knowledge by Confidence
```sql
SELECT category, key, value, confidence
FROM claude_memory.project_knowledge
WHERE confidence >= 0.9
ORDER BY confidence DESC, category, key;
```

---

**Last Updated:** 2025-12-19
**Next Steps:** Execute `supabase-memory-seed.sql` in Supabase SQL Editor
