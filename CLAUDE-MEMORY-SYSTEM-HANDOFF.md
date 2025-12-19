# Claude Memory System - Handoff Documentation

**Project:** Mesa Group Consulting
**Created:** 2025-12-17
**Purpose:** Persistent knowledge base for Claude instances (Web App & Claude Code)
**Location:** Supabase project `bvaaetpqjexkprglsnac` (Digital Operations Hub - Mesa Group Consulting)

---

## 🎯 OBJECTIVE

Create a persistent memory layer so **all Claude instances** (web app, Claude Code, API) can:
1. Access Mesa Group knowledge without re-explaining
2. Maintain context across sessions
3. Build on previous conversations
4. Track code patterns and decisions

---

## 📊 SYSTEM ARCHITECTURE

### Database: Supabase
**Project ID:** `bvaaetpqjexkprglsnac`
**Schema:** `claude_memory` (isolated from other projects)

### Tables Created

#### 1. `project_knowledge` (Core knowledge with vector search)
```sql
- id (UUID, primary key)
- category (TEXT) - 'brand', 'tech_stack', 'compliance', 'critical', etc.
- key (TEXT) - Unique identifier within category
- value (TEXT) - The knowledge content
- context (TEXT) - Additional explanation/rationale
- embedding (vector(1536)) - For semantic search (OpenAI ada-002)
- source (TEXT) - 'web_app', 'claude_code', 'manual'
- confidence (NUMERIC) - 0.0-1.0 weighting
- created_at, updated_at (TIMESTAMPTZ)
```

**Current Categories:**
- `business_core` - Company identity, model, positioning
- `brand` - Colors, typography, icons, imagery standards
- `services` - Credit repair, funding, monitoring, etc.
- `tech_stack` - Lovable, React, lucide-react, n8n
- `team` - Evert, Mario, Steve, Francisco, Aman
- `partnerships` - SuperMoney, SmartCredit, DisputeFox, etc.
- `strategy` - Steve Neu's conversion methodology
- `compliance` - FTC, CROA, TSR regulations
- `patterns` - Page structure, component patterns
- `preferences` - Team working styles
- `critical` - Top priority rules (ALWAYS reference these first!)
- `project_status` - Completed work, active development

#### 2. `conversation_context` (Session continuity)
```sql
- id (UUID)
- session_id (UUID) - Group related work
- context_type (TEXT) - 'recent_work', 'pending_task', 'decision', 'blocker'
- summary (TEXT) - Brief description
- details (JSONB) - Structured data (file paths, snippets, etc)
- priority (INTEGER) - 1-10 importance
- status (TEXT) - 'active', 'completed', 'archived'
- expires_at (TIMESTAMPTZ) - Auto-expire old context
- created_at, updated_at (TIMESTAMPTZ)
```

#### 3. `code_patterns` (Reusable patterns)
```sql
- id (UUID)
- pattern_name (TEXT)
- description (TEXT)
- code_example (TEXT)
- file_paths (TEXT[]) - Where pattern is used
- tags (TEXT[]) - Searchable
- embedding (vector(1536))
- times_referenced (INTEGER)
- created_at, updated_at (TIMESTAMPTZ)
```

#### 4. `client_preferences` (Mesa-specific preferences)
```sql
- id (UUID)
- preference_type (TEXT) - 'design', 'workflow', 'communication', 'technical'
- preference (TEXT)
- rationale (TEXT)
- examples (JSONB)
- created_at, updated_at (TIMESTAMPTZ)
```

---

## 🔍 HOW TO USE THIS SYSTEM

### As Claude in the Web App (Sonnet 4.5)

**At Session Start:**
1. Query the knowledge base to understand context
2. Check for active conversation context
3. Reference critical rules first

**Example Query:**
```sql
-- Get all critical rules (ALWAYS check these first!)
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'critical'
ORDER BY key;

-- Get brand colors
SELECT key, value, context
FROM claude_memory.project_knowledge
WHERE category = 'brand';

-- Get compliance rules
SELECT key, value
FROM claude_memory.project_knowledge
WHERE category = 'compliance';
```

**During Work:**
```sql
-- Log decisions made
INSERT INTO claude_memory.conversation_context
(session_id, context_type, summary, details, priority, status)
VALUES
('current-session-uuid', 'decision', 'Changed CTA button color to #f9c65d',
 '{"file": "CreditMonitoring.tsx", "line": 115, "reason": "Brand consistency"}',
 7, 'active');

-- Save discovered patterns
INSERT INTO claude_memory.code_patterns
(pattern_name, description, code_example, file_paths, tags)
VALUES
('Mesa CTA Button', 'Standard call-to-action button with brand colors',
 'className="bg-amber-400 hover:bg-amber-500 text-gray-900..."',
 ARRAY['CreditMonitoring.tsx', 'CreditRepair2.tsx'],
 ARRAY['button', 'cta', 'brand']);
```

**At Session End:**
```sql
-- Mark completed work
UPDATE claude_memory.conversation_context
SET status = 'completed', updated_at = NOW()
WHERE session_id = 'current-session-uuid' AND status = 'active';
```

---

## 📝 KNOWLEDGE CURRENTLY SEEDED

**Total: 53 items across 12 categories**

### Critical Rules (ALWAYS CHECK FIRST!) 🚨
```sql
SELECT * FROM claude_memory.project_knowledge WHERE category = 'critical';
```

Returns:
- **use_mgc_skill**: ALWAYS use MGC Lovable Page Builder Claude Skill for webpage PRD generation
- **compliance_nonnegotiable**: Compliance is non-negotiable (financial services heavily regulated)
- **educational_first**: Educational-first positioning ALWAYS (never lead with sales pitch)
- **lucide_only**: lucide-react icons ONLY (brand consistency requirement)
- **inter_typography**: Inter typography standard (limit font mixing)

### Brand Colors
- Primary: `#f9c65d` (MGC Yellow)
- Gold: `#bb9446` (accents)
- Tan: `#e5d2af` (backgrounds)
- Navy: `#1e3a5f` (text/headers)

### Tech Stack
- Platform: Lovable AI (React/Vite/TypeScript)
- UI: Shadcn/ui
- Icons: **lucide-react ONLY**
- Automation: n8n, Claude API, Zapier

### Team
- **Evert Calderon**: Owner, domain expert
- **Mario Garza**: Fractional CTO/CMO (Catalyst Digital Solutions) - token-efficient, systematic, documentation-first
- **Steve Neu**: Marketing strategist - conversion optimization focus
- **Francisco Hernandez**: Steve's web developer
- **Aman Brar**: Evert's developer (India-based)

---

## 🔄 WORKFLOW FOR WEB APP CLAUDE

### Step 1: Initialize Session
```sql
-- Create session ID
DO $$
DECLARE
    current_session UUID := gen_random_uuid();
BEGIN
    -- Load critical knowledge
    RAISE NOTICE 'Session: %', current_session;
END $$;

-- Query all critical rules
SELECT category, key, value, context
FROM claude_memory.project_knowledge
WHERE category IN ('critical', 'compliance', 'brand', 'patterns')
ORDER BY category, key;
```

### Step 2: During Work
```sql
-- Log each significant action
INSERT INTO claude_memory.conversation_context
(session_id, context_type, summary, details, priority)
VALUES
('[your-session-id]', 'recent_work', '[Brief summary]',
 '{"files": ["path/to/file.tsx"], "changes": "description"}', 5);
```

### Step 3: Update Knowledge
```sql
-- When discovering new patterns or preferences
INSERT INTO claude_memory.project_knowledge
(category, key, value, context, source, confidence)
VALUES
('patterns', 'new_pattern_name', 'Pattern description',
 'Context about when to use this', 'web_app', 0.9)
ON CONFLICT (category, key)
DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();
```

### Step 4: End Session
```sql
-- Archive completed work
UPDATE claude_memory.conversation_context
SET status = 'completed', updated_at = NOW()
WHERE session_id = '[your-session-id]';
```

---

## 🚀 QUICK REFERENCE QUERIES

### Get Brand Standards
```sql
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'brand' ORDER BY key;
```

### Get Compliance Rules
```sql
SELECT key, value, context FROM claude_memory.project_knowledge
WHERE category = 'compliance';
```

### Get Steve Neu's Marketing Strategy
```sql
SELECT key, value, context FROM claude_memory.project_knowledge
WHERE category = 'strategy' ORDER BY key;
```

### Get Team Working Styles
```sql
SELECT key, value, context FROM claude_memory.project_knowledge
WHERE category = 'preferences';
```

### Check Recent Session Work
```sql
SELECT context_type, summary, details, priority, created_at
FROM claude_memory.conversation_context
WHERE status = 'active'
ORDER BY priority DESC, created_at DESC
LIMIT 10;
```

### Search Knowledge by Keyword (Full-text)
```sql
SELECT category, key, value, context
FROM claude_memory.project_knowledge
WHERE value ILIKE '%search_term%' OR context ILIKE '%search_term%'
ORDER BY confidence DESC;
```

---

## 🎨 EXAMPLE: Starting a New Mesa Page

```sql
-- 1. Load critical rules first
SELECT value FROM claude_memory.project_knowledge
WHERE category = 'critical' AND key = 'use_mgc_skill';
-- Result: "ALWAYS use MGC Lovable Page Builder Claude Skill"

-- 2. Get brand colors
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'brand' AND key LIKE 'color_%';

-- 3. Get page structure pattern
SELECT value FROM claude_memory.project_knowledge
WHERE category = 'patterns' AND key = 'page_structure';

-- 4. Get compliance requirements
SELECT key, value FROM claude_memory.project_knowledge
WHERE category = 'compliance';

-- 5. Reference Steve's strategy
SELECT value FROM claude_memory.project_knowledge
WHERE category = 'strategy' AND key = 'emotional_journey';
```

**Result:** You now have everything needed to build a compliant, on-brand Mesa page!

---

## ⚠️ IMPORTANT NOTES

### DO:
- ✅ **ALWAYS** query `critical` category first
- ✅ Check compliance before writing financial content
- ✅ Log decisions and patterns as you work
- ✅ Update knowledge when discovering new patterns
- ✅ Use brand colors exactly as specified
- ✅ Reference the MGC Lovable Page Builder skill for new pages

### DON'T:
- ❌ Skip compliance checks for financial content
- ❌ Use icon libraries other than lucide-react
- ❌ Create pages without following the standard structure
- ❌ Ignore the educational-first positioning
- ❌ Make assumptions without checking the knowledge base first

---

## 🔮 FUTURE ENHANCEMENTS

### Phase 2: Vector Search (Not Yet Implemented)
- Generate embeddings via OpenAI API for semantic search
- Enable queries like "show me pages similar to Credit Monitoring"
- Auto-suggest relevant patterns based on current work

### Phase 3: Cross-Session Intelligence
- Track which patterns are most successful
- Automatically suggest improvements based on past work
- Generate reports on brand consistency

---

## 📞 ACCESS INFORMATION

**Supabase Project:** Digital Operations Hub - Mesa Group Consulting
**Project ID:** `bvaaetpqjexkprglsnac`
**Schema:** `claude_memory`
**Region:** us-west-1

**To Access:**
- Claude Code: Supabase MCP server (already configured)
- Web App: Direct SQL queries via Supabase client
- API: Use Supabase REST API with proper authentication

---

## 🎯 SUCCESS CRITERIA

This system is working when:
1. ✅ New Claude sessions can start working immediately without re-explanation
2. ✅ Brand consistency improves across all pages
3. ✅ Compliance rules are never missed
4. ✅ Code patterns are reused effectively
5. ✅ Session continuity works seamlessly

---

## 📚 MIGRATION FROM WEB APP PROJECT KNOWLEDGE

**Current Status:** 53 core knowledge items seeded from web app

**Next Steps:**
1. Continue adding knowledge as you discover it
2. Create embeddings for vector search (Phase 2)
3. Set up automated knowledge capture hooks
4. Build query helper functions for common patterns

---

**Questions? Issues?**
Contact: Mario Garza (Catalyst Digital Solutions)
Last Updated: 2025-12-17
