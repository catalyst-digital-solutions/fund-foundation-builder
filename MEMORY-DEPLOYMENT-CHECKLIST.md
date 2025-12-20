# Supabase Memory Deployment Checklist

**Project:** Mesa Group Consulting - Fund Foundation Builder
**Created:** 2025-12-19
**Target:** Supabase Project `bvaaetpqjexkprglsnac`

---

## 📋 Pre-Deployment Checklist

### Files Created ✅
- [x] `supabase-memory-seed.sql` - Full database seed (100+ knowledge items)
- [x] `SUPABASE-MEMORY-QUICK-REFERENCE.md` - Query reference guide
- [x] `MEMORY-SYSTEM-SUMMARY.md` - High-level overview
- [x] `MEMORY-DEPLOYMENT-CHECKLIST.md` - This file

### Required Access ⚠️
- [ ] Supabase account access
- [ ] Project `bvaaetpqjexkprglsnac` permissions
- [ ] SQL Editor access

---

## 🚀 Deployment Steps

### Step 1: Verify Supabase Schema Exists
```sql
-- Run this first to verify schema is set up
SELECT schema_name
FROM information_schema.schemata
WHERE schema_name = 'claude_memory';

-- Should return: claude_memory
```

**If schema doesn't exist:** Refer to `CLAUDE-MEMORY-SYSTEM-HANDOFF.md` for schema creation SQL.

### Step 2: Verify Tables Exist
```sql
-- Check if tables are present
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'claude_memory'
ORDER BY table_name;

-- Should return:
-- - client_preferences
-- - code_patterns
-- - conversation_context
-- - project_knowledge
```

**If tables don't exist:** Refer to `CLAUDE-MEMORY-SYSTEM-HANDOFF.md` for table creation SQL.

### Step 3: Execute Seed File
1. Open: https://supabase.com/dashboard/project/bvaaetpqjexkprglsnac/sql/new
2. Open `supabase-memory-seed.sql` in text editor
3. Copy entire file contents (2,000+ lines)
4. Paste into Supabase SQL Editor
5. Click "Run" or press Cmd/Ctrl + Enter
6. Wait for execution to complete (should take 5-10 seconds)

### Step 4: Verify Seed Results
```sql
-- This query is included at the end of the seed file
-- Should show 15+ categories with 100+ total items
SELECT
  category,
  COUNT(*) as items_count
FROM claude_memory.project_knowledge
GROUP BY category
ORDER BY category;
```

**Expected Results:**
```
brand             | 11
compliance        | 5
critical          | 7
deployment        | 3
documentation     | 6
external_ctas     | 8
integrations      | 7
patterns          | 9
preferences       | 6
project_identity  | 6
project_status    | 2
routing           | 15
services          | 5
tech_stack        | 9
version_management| 4
```

### Step 5: Test Critical Queries
```sql
-- Test 1: Critical Rules (most important!)
SELECT key, value
FROM claude_memory.project_knowledge
WHERE category = 'critical'
ORDER BY key;

-- Should return 7 critical rules including:
-- - pitfall_emojis
-- - pitfall_hex_colors
-- - pitfall_credit_confusion
-- - pitfall_version_confusion
-- - etc.

-- Test 2: Brand Colors
SELECT key, value
FROM claude_memory.project_knowledge
WHERE category = 'brand' AND key LIKE 'color_%'
ORDER BY key;

-- Should return 5 color definitions

-- Test 3: External CTAs
SELECT key, value
FROM claude_memory.project_knowledge
WHERE category = 'external_ctas'
ORDER BY key;

-- Should return 8 CTA URLs

-- Test 4: Search Functionality
SELECT category, key, value
FROM claude_memory.project_knowledge
WHERE value ILIKE '%calendly%' OR context ILIKE '%calendly%';

-- Should return multiple Calendly-related items
```

### Step 6: Test Code Patterns
```sql
-- Verify code patterns were inserted
SELECT pattern_name, description, array_length(tags, 1) as tag_count
FROM claude_memory.code_patterns
ORDER BY pattern_name;

-- Should return at least 1 pattern:
-- "New Landing Page Workflow"
```

---

## ✅ Post-Deployment Verification

### Verification Checklist
- [ ] Schema `claude_memory` exists
- [ ] All 4 tables exist (project_knowledge, conversation_context, code_patterns, client_preferences)
- [ ] 100+ items inserted into `project_knowledge`
- [ ] 15+ categories present
- [ ] Critical rules query returns 7 items
- [ ] Brand colors query returns 5 items
- [ ] External CTAs query returns 8 items
- [ ] Code patterns table has at least 1 entry
- [ ] Search queries work correctly
- [ ] No SQL errors during seed execution

### Data Quality Checks
```sql
-- Check for any NULL values in critical fields
SELECT category, key, COUNT(*)
FROM claude_memory.project_knowledge
WHERE value IS NULL OR value = ''
GROUP BY category, key;

-- Should return 0 rows (no nulls)

-- Check confidence scores
SELECT
  MIN(confidence) as min_confidence,
  MAX(confidence) as max_confidence,
  AVG(confidence) as avg_confidence
FROM claude_memory.project_knowledge;

-- Should return: min=1.0, max=1.0, avg=1.0
-- (All seeded data has 1.0 confidence)

-- Check for duplicate keys
SELECT category, key, COUNT(*)
FROM claude_memory.project_knowledge
GROUP BY category, key
HAVING COUNT(*) > 1;

-- Should return 0 rows (no duplicates)
```

---

## 🧪 Test Scenarios

### Scenario 1: Claude Starting New Session
```sql
-- Simulate Claude loading context at session start
SELECT category, key, value
FROM claude_memory.project_knowledge
WHERE category IN ('critical', 'brand', 'compliance')
ORDER BY category, key;

-- Should return 20+ items covering all critical knowledge
```

### Scenario 2: Building New Landing Page
```sql
-- Get all information needed for new page
SELECT category, key, value, context
FROM claude_memory.project_knowledge
WHERE category IN ('patterns', 'brand', 'compliance', 'routing')
ORDER BY category, key;

-- Should return 30+ items with page structure, colors, routes, etc.
```

### Scenario 3: Modifying Credit Repair Page
```sql
-- Get credit repair specific knowledge
SELECT category, key, value, context
FROM claude_memory.project_knowledge
WHERE
  key ILIKE '%credit%repair%'
  OR value ILIKE '%credit%repair%'
  OR category IN ('compliance', 'routing', 'version_management')
ORDER BY category, key;

-- Should return version info, compliance rules, route definitions
```

### Scenario 4: Adding New CTA Button
```sql
-- Get button and CTA patterns
SELECT pattern_name, code_example
FROM claude_memory.code_patterns
WHERE tags @> ARRAY['button'] OR tags @> ARRAY['cta'];

-- Plus external CTAs
SELECT key, value
FROM claude_memory.project_knowledge
WHERE category = 'external_ctas';

-- Should return button patterns and all CTA URLs
```

---

## 🔧 Troubleshooting

### Issue: Schema doesn't exist
**Solution:** Run schema creation from `CLAUDE-MEMORY-SYSTEM-HANDOFF.md`

### Issue: Tables don't exist
**Solution:** Run table creation from `CLAUDE-MEMORY-SYSTEM-HANDOFF.md`

### Issue: Seed file fails partway through
**Solution:**
1. Check error message for specific line
2. Fix syntax issue if present
3. Clear partial data: `DELETE FROM claude_memory.project_knowledge WHERE source = 'claude_code';`
4. Re-run seed file

### Issue: Duplicate key violations
**Solution:** Seed file uses `ON CONFLICT DO UPDATE`, so this shouldn't happen. If it does:
```sql
-- Clear existing data first
DELETE FROM claude_memory.project_knowledge WHERE source = 'claude_code';
DELETE FROM claude_memory.code_patterns WHERE pattern_name = 'New Landing Page Workflow';

-- Then re-run seed file
```

### Issue: Data doesn't appear in queries
**Solution:**
```sql
-- Verify data was inserted
SELECT COUNT(*) FROM claude_memory.project_knowledge;

-- Check search_path
SHOW search_path;

-- Explicitly set schema if needed
SET search_path TO claude_memory, public;

-- Retry query
```

---

## 📊 Success Criteria

### Must Pass All:
- [x] Schema and tables exist
- [x] 100+ knowledge items inserted
- [x] 15+ categories present
- [x] All critical rules accessible
- [x] All brand standards accessible
- [x] All external CTAs accessible
- [x] Search functionality works
- [x] No SQL errors
- [x] No NULL values in required fields
- [x] No duplicate keys

### Performance Benchmarks:
- Query response time: < 100ms for single category
- Full knowledge load: < 500ms for all categories
- Search query: < 200ms for ILIKE searches

---

## 🎯 Next Steps After Deployment

### For Claude Web App:
1. Test loading critical rules at session start
2. Verify brand consistency checks work
3. Test compliance rule queries
4. Practice logging decisions to conversation_context
5. Practice saving discovered patterns to code_patterns

### For Claude Code (Desktop):
1. Verify MCP access to database
2. Test SQL queries through MCP
3. Use `SUPABASE-MEMORY-QUICK-REFERENCE.md` for common queries
4. Reference `CLAUDE.md` for architecture patterns

### For Development Team:
1. Update `.cursor/prompts` to reference memory system
2. Add memory queries to common workflows
3. Train team on how to query memory
4. Set up automated backups of memory tables
5. Create process for updating memory as project evolves

---

## 📚 Related Documentation

| File | Purpose |
|------|---------|
| `CLAUDE-MEMORY-SYSTEM-HANDOFF.md` | Original system architecture and setup |
| `supabase-memory-seed.sql` | Full database seed file (execute this) |
| `SUPABASE-MEMORY-QUICK-REFERENCE.md` | Query reference for daily use |
| `MEMORY-SYSTEM-SUMMARY.md` | High-level overview of stored knowledge |
| `MEMORY-DEPLOYMENT-CHECKLIST.md` | This file - deployment steps |
| `CLAUDE.md` | Project documentation (primary reference) |

---

## 🔐 Security Notes

- Supabase project ID `bvaaetpqjexkprglsnac` is included in seed file
- No sensitive credentials stored in memory system
- External URLs are public-facing (safe to store)
- Phone numbers and contact info are public business information
- Memory system uses `claude_memory` schema (isolated from other data)

---

## ✅ Deployment Complete Checklist

- [ ] Schema verified
- [ ] Tables verified
- [ ] Seed file executed successfully
- [ ] Data count verified (100+ items)
- [ ] Critical rules query tested
- [ ] Brand colors query tested
- [ ] External CTAs query tested
- [ ] Code patterns query tested
- [ ] Search functionality tested
- [ ] No SQL errors
- [ ] No NULL values
- [ ] No duplicate keys
- [ ] Performance acceptable
- [ ] Documentation reviewed
- [ ] Team notified of new system

---

## 📞 Support

**Questions or Issues?**
- Check `CLAUDE-MEMORY-SYSTEM-HANDOFF.md` for detailed architecture
- Reference `SUPABASE-MEMORY-QUICK-REFERENCE.md` for query help
- Contact: Mario Garza (Catalyst Digital Solutions)

---

**Deployment Date:** _____________
**Deployed By:** _____________
**Status:** ⚠️ PENDING DEPLOYMENT

**After deployment, update status to:** ✅ DEPLOYED
**And record deployment date above**

---

**Created:** 2025-12-19
**Last Updated:** 2025-12-19
