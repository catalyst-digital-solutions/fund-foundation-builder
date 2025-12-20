# Vector Search - Next Steps for Deployment

## Current Status ✅

**Implementation Complete**: All code files are ready for deployment:
- ✅ `supabase-vector-migration.sql` - SQL migration for vector search
- ✅ `generate-embeddings.js` - Embedding generation script
- ✅ `test-semantic-search.js` - Test suite for semantic search
- ✅ `VECTOR-SEARCH-DEPLOYMENT.md` - Complete deployment guide
- ✅ `.env.vector-search` - Environment template with Supabase credentials

## What You Need to Do Next

### Step 1: Set Up OpenAI API Key (2 minutes)

```bash
# Copy the environment template
cp .env.vector-search .env

# Edit .env and add your OpenAI API key
# Replace "your_openai_api_key_here" with your actual key
nano .env
```

Your OpenAI API key can be obtained from: https://platform.openai.com/api-keys

**Cost**: Generating embeddings for ~100 knowledge items will cost approximately **$0.0004** (less than half a cent).

### Step 2: Install Node.js Dependencies (1 minute)

```bash
# Install required packages for embedding generation
npm install openai @supabase/supabase-js dotenv
```

### Step 3: Deploy SQL Migration (2 minutes)

1. Go to your Supabase project: https://supabase.com/dashboard/project/sbjvihuehvgxonyrwmax
2. Navigate to: **SQL Editor** (left sidebar)
3. Click **"+ New query"**
4. Copy and paste the contents of `supabase-vector-migration.sql`
5. Click **"Run"** (or press Cmd+Enter)

**Expected output**:
```
Success. No rows returned
```

This will:
- Enable the pgvector extension
- Add an `embedding` column to your `project_knowledge` table
- Create 3 search functions for semantic/hybrid search
- Create a vector index for fast similarity search

### Step 4: Generate Embeddings (3-5 minutes)

```bash
# Run the embedding generation script
node generate-embeddings.js
```

This will:
- Fetch all 100+ knowledge items from Supabase
- Generate OpenAI embeddings for each item
- Update the database with the vector embeddings
- Show progress and cost estimates

**Expected output**:
```
🚀 Mesa Group Consulting - Embedding Generation
================================================

Configuration:
  Model: text-embedding-3-small
  Dimensions: 1536
  Batch size: 50

Fetching knowledge items from Supabase...

Found 100 total items:
  ✅ 0 already have embeddings
  📝 100 need embeddings

Processing batch of 50 items...
  Generating embedding for: project_identity/client_name...
    ✅ Generated (1536D)
  ...

✅ Embedding generation complete!

Statistics:
  Total items: 100
  Newly generated: 100
  Failed: 0

Estimated cost:
  Tokens used: ~20,000
  Cost: ~$0.0004
```

### Step 5: Test Semantic Search (2 minutes)

```bash
# Run the test suite
node test-semantic-search.js

# Or test a custom query
node test-semantic-search.js "How do I style buttons?"
```

This will run 6 test queries and show similarity-based results.

**Expected output**:
```
🚀 Mesa Group Consulting - Semantic Search Test Suite
=====================================================

📝 Test: Button styling and CTA patterns
🔍 Searching for: "How do I style buttons and CTAs?"
   ✅ Found 5 results:

1. design_system/button_patterns
   Similarity: 87.3%
   Value: Primary CTAs use amber background with hover states...

✅ All tests passed! Semantic search is working correctly.
```

## What You Get

After completing these steps, you'll have:

✅ **Semantic Search**: Ask questions in natural language
✅ **Better Context Retrieval**: Find relevant knowledge even without exact keywords
✅ **Hybrid Search**: Combine vector similarity with category filtering
✅ **Fast Performance**: IVFFlat index for sub-second searches

## Usage Examples

### In Claude Desktop / Claude Code CLI

Once deployed, Claude can use semantic search via the Supabase MCP server:

```sql
-- Semantic search (natural language)
SELECT * FROM claude_memory.search_knowledge_semantic(
  '[1536-dimensional embedding vector]'::vector(1536),
  0.5,  -- similarity threshold
  10    -- max results
);

-- Hybrid search (semantic + category filter)
SELECT * FROM claude_memory.search_knowledge_hybrid(
  '[embedding]'::vector(1536),
  'design_system',  -- category filter
  0.5,
  10
);
```

### Via Node.js Script

```javascript
const { searchKnowledge } = require('./test-semantic-search.js');

const results = await searchKnowledge(
  'How does Calendly integration work?',
  0.5,  // threshold
  5     // max results
);
```

## Troubleshooting

### "OPENAI_API_KEY not set"
- Make sure you copied `.env.vector-search` to `.env`
- Verify your OpenAI API key is correct in `.env`

### "Failed to fetch items"
- Check Supabase URL and key in `.env`
- Verify the SQL migration ran successfully

### "No results found"
- Try lowering the similarity threshold (from 0.5 to 0.3)
- Verify embeddings were generated: `SELECT COUNT(*) FROM claude_memory.project_knowledge WHERE embedding IS NOT NULL;`

### "Rate limit exceeded"
- The script already includes 1-second delays between batches
- If you hit limits, wait a few minutes and re-run (it will skip items that already have embeddings)

## Cost Analysis

| Component | Usage | Cost |
|-----------|-------|------|
| **Initial embedding generation** | 100 items × ~200 tokens | ~$0.0004 |
| **Monthly searches** | 1,000 queries × ~200 tokens | ~$0.40 |
| **New item embeddings** | 10 items/month × ~200 tokens | ~$0.00004 |
| **Total (monthly)** | | **~$0.40/month** |

Compare to Legal Doc AI's document processing costs (~$2-5/month for 100+ page documents).

## Next Steps After Deployment

Once you've successfully deployed and tested, the final step is:

**Update Documentation**: Add semantic search examples to `SUPABASE-MEMORY-QUICK-REFERENCE.md` for daily reference.

---

**Questions?** See `VECTOR-SEARCH-DEPLOYMENT.md` for comprehensive documentation, or ask Claude for help!
