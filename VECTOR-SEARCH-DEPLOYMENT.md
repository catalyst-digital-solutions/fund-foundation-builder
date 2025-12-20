# Vector Search Deployment Guide
## Mesa Group Consulting Memory System

**Date:** December 20, 2025
**Purpose:** Add semantic search capability to project knowledge base
**Architecture:** Supabase pgvector + OpenAI embeddings (based on Legal Doc AI patterns)

---

## Overview

This upgrade adds **semantic search** to the Mesa Group memory system, enabling natural language queries across all 100+ knowledge items.

**What you get:**
- Ask: "How do I style buttons?" → Finds button patterns + brand colors + Calendly components
- Ask: "What's Evert's preference on compliance?" → Finds client_prefs + CROA rules + examples
- Ask: "Show me everything about Calendly" → Finds all Calendly-related knowledge

**Cost:** ~$0.001 to generate embeddings (one-time) + ~$0.001/month for new items

---

## Prerequisites

- ✅ Supabase account with project access
- ✅ OpenAI API key (you have this ready)
- ✅ Node.js 16+ installed
- ✅ npm packages: `openai @supabase/supabase-js dotenv`

---

## Step-by-Step Deployment (15 minutes)

### Step 1: Run SQL Migration (5 minutes)

1. **Open Supabase SQL Editor:**
   - Navigate to: https://supabase.com/dashboard/project/bvaaetpqjexkprglsnac/sql/new

2. **Execute migration:**
   - Open `supabase-vector-migration.sql` in text editor
   - Copy all contents
   - Paste into SQL Editor
   - Click "Run" or press Cmd/Ctrl + Enter
   - Wait for success message

3. **Verify migration:**
   ```sql
   -- Should return 1 row showing vector extension is enabled
   SELECT * FROM pg_extension WHERE extname = 'vector';

   -- Should show embedding column exists
   SELECT column_name, data_type
   FROM information_schema.columns
   WHERE table_schema = 'claude_memory'
     AND table_name = 'project_knowledge'
     AND column_name = 'embedding';

   -- Should show 100+ rows without embeddings initially
   SELECT
     COUNT(*) as total_rows,
     COUNT(embedding) as rows_with_embeddings,
     COUNT(*) - COUNT(embedding) as rows_without_embeddings
   FROM claude_memory.project_knowledge;
   ```

**Expected Results:**
- ✅ pgvector extension enabled
- ✅ embedding column added (vector(1536))
- ✅ 3 search functions created
- ✅ 1 vector index created
- ✅ 1 helper view created

---

### Step 2: Install Node.js Dependencies (2 minutes)

```bash
# Navigate to project directory
cd "/Users/Mario/Documents/aaa-catalyst-digital-solutions/aaa-client-projects/Mesa Group Consulting - Evert Calderon/webpages-built-from-lovable/fund-foundation-builder"

# Install required packages
npm install openai @supabase/supabase-js dotenv
```

---

### Step 3: Set Environment Variables (1 minute)

Create or update `.env` file in project root:

```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Supabase Configuration (already exists)
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_key
```

**Important:** Use **service_role key** (not anon key) for embedding generation script.

---

### Step 4: Generate Embeddings (5 minutes)

```bash
# Run embedding generation script
node generate-embeddings.js
```

**What happens:**
1. Script connects to Supabase
2. Fetches all knowledge items without embeddings (~100 items)
3. Generates embedding text (combines category + key + value + context)
4. Calls OpenAI API to generate 1536-dimensional vectors
5. Updates database with embeddings
6. Shows progress and statistics

**Expected Output:**
```
🚀 Mesa Group Consulting - Embedding Generation
================================================

Configuration:
  Model: text-embedding-3-small
  Dimensions: 1536
  Batch size: 50

Fetching knowledge items from Supabase...

Found 103 total items:
  ✅ 0 already have embeddings
  📝 103 need embeddings

Processing batch of 50 items...
  Generating embedding for: project_identity/client_name...
    ✅ Generated (1536D)
  Generating embedding for: project_identity/repository_name...
    ✅ Generated (1536D)
  ...

================================================
✅ Embedding generation complete!

Statistics:
  Total items: 103
  Previously had embeddings: 0
  Newly generated: 103
  Failed: 0

Estimated cost:
  Tokens used: ~20,600
  Cost: ~$0.0004
```

---

### Step 5: Verify Embeddings (1 minute)

Run in Supabase SQL Editor:

```sql
-- Check embedding coverage
SELECT
  COUNT(*) as total_rows,
  COUNT(embedding) as rows_with_embeddings,
  COUNT(*) - COUNT(embedding) as rows_without_embeddings,
  ROUND(100.0 * COUNT(embedding) / COUNT(*), 2) as coverage_percent
FROM claude_memory.project_knowledge;
```

**Expected:** 100% coverage (all rows have embeddings)

---

### Step 6: Test Semantic Search (2 minutes)

**Test Query 1: Find button styling information**

First, generate embedding for search query (using Node.js):

```javascript
// test-search.js
require('dotenv').config();
const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function searchKnowledge(query) {
  // Generate embedding for query
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query,
  });
  const queryEmbedding = response.data[0].embedding;

  // Search using Supabase function
  const { data, error } = await supabase.rpc('search_knowledge_semantic', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,
    match_count: 5,
  });

  if (error) throw error;
  return data;
}

// Test searches
searchKnowledge('How do I style buttons?').then(results => {
  console.log('\n🔍 Search: "How do I style buttons?"');
  console.log('Results:', results.length);
  results.forEach((r, i) => {
    console.log(`\n${i+1}. ${r.category}/${r.key} (similarity: ${r.similarity.toFixed(3)})`);
    console.log(`   Value: ${r.value.substring(0, 100)}...`);
  });
});
```

**Or test directly in SQL (requires embedding array):**

```sql
-- This is a placeholder - actual search requires OpenAI API call
-- See test-search.js for working example
SELECT * FROM claude_memory.search_knowledge_semantic(
  '[0.123, 0.456, ...]'::vector(1536), -- Replace with actual embedding
  0.5,
  10
);
```

---

## Usage Examples

### Example 1: Find Calendly Information

```javascript
const results = await searchKnowledge('Calendly integration setup');
// Returns: CalendlyPopupButton component, useCalendly hook, viewport detection, UTM tracking, etc.
```

### Example 2: Find Brand Colors

```javascript
const results = await searchKnowledge('What colors should I use for CTAs?');
// Returns: brand_colors entries, button patterns, Mesa Group amber specifications
```

### Example 3: Find Service Distinctions

```javascript
const results = await searchKnowledge('difference between personal and business credit');
// Returns: service distinction rules, routing, pricing, target audiences
```

### Example 4: Hybrid Search (Category Filter)

```javascript
// Search only within 'critical' category
const { data } = await supabase.rpc('search_knowledge_hybrid', {
  query_embedding: embedding,
  filter_category: 'critical',
  match_threshold: 0.5,
  match_count: 10,
});
```

---

## Architecture Details

### Embedding Generation
- **Model:** OpenAI `text-embedding-3-small`
- **Dimensions:** 1536 (industry standard)
- **Input:** Concatenation of category + key + value + context
- **Cost:** $0.02 per 1M tokens (~$0.0004 for 100 items)

### Vector Index
- **Type:** IVFFlat (Inverted File with Flat compression)
- **Operator:** `vector_cosine_ops` (cosine similarity)
- **Lists:** 100 (optimized for ~10K vectors)

### Search Functions
1. **`search_knowledge_semantic`** - Pure vector search
2. **`search_knowledge_hybrid`** - Vector + category filter
3. Returns: category, key, value, context, similarity score

### Similarity Calculation
```
similarity = 1 - (embedding <=> query_embedding)

Where:
  <=> = cosine distance operator (pgvector)
  similarity ranges from 0 (no match) to 1 (perfect match)
  threshold of 0.5 = good match
  threshold of 0.7 = very strong match
```

---

## Cost Analysis

### One-Time Setup
| Item | Quantity | Cost |
|------|----------|------|
| Embeddings generation | 100 items | $0.0004 |
| **Total** | | **< $0.001** |

### Ongoing Costs
| Item | Frequency | Cost/Month |
|------|-----------|------------|
| New knowledge items | ~10/month | $0.00004 |
| Search queries | ~1000/month | $0.0002 |
| **Total** | | **< $0.001/mo** |

**Compared to:** Manual searching through CLAUDE.md (5-10 min/search) × $50/hr = **$4-8 per search**

**ROI:** Pays for itself with first search.

---

## Maintenance

### Adding New Knowledge Items

When you add new items to `project_knowledge`:

```bash
# Re-run embedding script (only processes items without embeddings)
node generate-embeddings.js
```

**Automatic detection:** Script only generates embeddings for new items (those where `embedding IS NULL`).

### Updating Existing Items

When you update the `value` or `context` of an item:

```bash
# 1. Clear the embedding (mark as needs update)
UPDATE claude_memory.project_knowledge
SET embedding = NULL
WHERE key = 'item_to_update';

# 2. Re-run script to regenerate
node generate-embeddings.js
```

### Monitoring

```sql
-- Check embedding coverage
SELECT
  category,
  COUNT(*) as total,
  COUNT(embedding) as with_embeddings
FROM claude_memory.project_knowledge
GROUP BY category
ORDER BY category;

-- Find items without embeddings
SELECT category, key
FROM claude_memory.project_knowledge
WHERE embedding IS NULL;
```

---

## Troubleshooting

### Issue: "Extension vector does not exist"

**Solution:** Run Step 1 (SQL migration) first.

### Issue: "OpenAI API key not set"

**Solution:** Verify `.env` file has `OPENAI_API_KEY=...`

### Issue: "Supabase connection failed"

**Solution:** Check `SUPABASE_URL` and `SUPABASE_KEY` in `.env`. Must use **service_role key**, not anon key.

### Issue: "Rate limit exceeded"

**Solution:** Script has built-in rate limiting (1 second between batches). If still hitting limits, increase `BATCH_SIZE` in script or add longer delays.

### Issue: "Search returns no results"

**Possible causes:**
1. Embeddings not generated yet → Run `generate-embeddings.js`
2. Threshold too high → Lower from 0.5 to 0.3
3. Query too specific → Try broader search terms

---

## Next Steps

1. ✅ Deploy vector search (follow steps above)
2. 📝 Update `SUPABASE-MEMORY-QUICK-REFERENCE.md` with search examples
3. 🧪 Test semantic search with various queries
4. 📚 Add to project documentation

---

## References

- **OpenAI Embeddings:** https://platform.openai.com/docs/guides/embeddings
- **Supabase pgvector:** https://supabase.com/docs/guides/ai/vector-indexes
- **Legal Doc AI:** Reference implementation in `/legal-document-ai/legal-doc-ai-backend/`

---

**Questions?** Check `SUPABASE-MEMORY-QUICK-REFERENCE.md` or review Legal Doc AI's `rag/store.py` for advanced patterns.
