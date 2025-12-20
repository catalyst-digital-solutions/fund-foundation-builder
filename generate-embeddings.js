#!/usr/bin/env node

/**
 * Mesa Group Consulting - Embedding Generation Script
 *
 * Generates OpenAI embeddings for all knowledge items in Supabase
 * and populates the embedding column for semantic search.
 *
 * Usage: node generate-embeddings.js
 *
 * Requirements:
 * - Node.js 16+
 * - npm install openai @supabase/supabase-js dotenv
 * - OPENAI_API_KEY in environment
 * - SUPABASE_URL and SUPABASE_KEY in environment
 */

require('dotenv').config();
const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

// Configuration
const OPENAI_MODEL = 'text-embedding-3-small';
const EMBEDDING_DIMENSIONS = 1536;
const BATCH_SIZE = 50; // Process 50 items at a time to avoid rate limits

// Initialize clients
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * Create text representation for embedding generation
 * Combines category, key, value, and context into searchable text
 */
function createEmbeddingText(item) {
  const parts = [
    `Category: ${item.category}`,
    `Key: ${item.key}`,
    `Value: ${item.value}`,
  ];

  if (item.context && item.context.trim()) {
    parts.push(`Context: ${item.context}`);
  }

  return parts.join('\n');
}

/**
 * Generate embedding for a single text
 */
async function generateEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: OPENAI_MODEL,
      input: text,
      encoding_format: 'float',
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error.message);
    throw error;
  }
}

/**
 * Process a batch of items
 */
async function processBatch(items) {
  console.log(`\nProcessing batch of ${items.length} items...`);

  const updates = [];

  for (const item of items) {
    try {
      // Create embedding text
      const text = createEmbeddingText(item);

      // Generate embedding
      console.log(`  Generating embedding for: ${item.category}/${item.key}...`);
      const embedding = await generateEmbedding(text);

      // Verify embedding dimensions
      if (embedding.length !== EMBEDDING_DIMENSIONS) {
        console.warn(`    ⚠️  Warning: Expected ${EMBEDDING_DIMENSIONS} dimensions, got ${embedding.length}`);
      }

      updates.push({
        id: item.id,
        embedding: embedding,
      });

      console.log(`    ✅ Generated (${embedding.length}D)`);

    } catch (error) {
      console.error(`    ❌ Failed for ${item.category}/${item.key}:`, error.message);
    }
  }

  // Update database with embeddings
  if (updates.length > 0) {
    console.log(`\nUpdating ${updates.length} embeddings in database...`);

    for (const update of updates) {
      const { error } = await supabase
        .from('project_knowledge')
        .update({ embedding: update.embedding })
        .eq('id', update.id);

      if (error) {
        console.error(`  ❌ Failed to update ID ${update.id}:`, error.message);
      }
    }

    console.log(`  ✅ Database updated`);
  }

  return updates.length;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Mesa Group Consulting - Embedding Generation');
  console.log('================================================\n');

  // Verify environment variables
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable not set');
    process.exit(1);
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    console.error('❌ Error: SUPABASE_URL and SUPABASE_KEY environment variables required');
    process.exit(1);
  }

  console.log('Configuration:');
  console.log(`  Model: ${OPENAI_MODEL}`);
  console.log(`  Dimensions: ${EMBEDDING_DIMENSIONS}`);
  console.log(`  Batch size: ${BATCH_SIZE}`);
  console.log('');

  try {
    // Fetch all knowledge items without embeddings
    console.log('Fetching knowledge items from Supabase...');

    const { data: items, error } = await supabase
      .from('project_knowledge')
      .select('id, category, key, value, context, embedding')
      .order('category', { ascending: true })
      .order('key', { ascending: true });

    if (error) {
      throw new Error(`Failed to fetch items: ${error.message}`);
    }

    if (!items || items.length === 0) {
      console.log('No items found in database.');
      return;
    }

    // Filter items that need embeddings
    const itemsNeedingEmbeddings = items.filter(item => !item.embedding);
    const itemsWithEmbeddings = items.length - itemsNeedingEmbeddings.length;

    console.log(`\nFound ${items.length} total items:`);
    console.log(`  ✅ ${itemsWithEmbeddings} already have embeddings`);
    console.log(`  📝 ${itemsNeedingEmbeddings.length} need embeddings\n`);

    if (itemsNeedingEmbeddings.length === 0) {
      console.log('All items already have embeddings! ✅');
      return;
    }

    // Process in batches
    let totalProcessed = 0;

    for (let i = 0; i < itemsNeedingEmbeddings.length; i += BATCH_SIZE) {
      const batch = itemsNeedingEmbeddings.slice(i, i + BATCH_SIZE);
      const processed = await processBatch(batch);
      totalProcessed += processed;

      // Rate limiting: wait 1 second between batches
      if (i + BATCH_SIZE < itemsNeedingEmbeddings.length) {
        console.log('\n  ⏳ Waiting 1 second to respect rate limits...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    // Final statistics
    console.log('\n================================================');
    console.log('✅ Embedding generation complete!');
    console.log(`\nStatistics:`);
    console.log(`  Total items: ${items.length}`);
    console.log(`  Previously had embeddings: ${itemsWithEmbeddings}`);
    console.log(`  Newly generated: ${totalProcessed}`);
    console.log(`  Failed: ${itemsNeedingEmbeddings.length - totalProcessed}`);

    // Cost estimation
    const tokensUsed = totalProcessed * 200; // Rough estimate: 200 tokens per item
    const costPer1MTokens = 0.02; // $0.02 per 1M tokens for text-embedding-3-small
    const estimatedCost = (tokensUsed / 1_000_000) * costPer1MTokens;

    console.log(`\nEstimated cost:`);
    console.log(`  Tokens used: ~${tokensUsed.toLocaleString()}`);
    console.log(`  Cost: ~$${estimatedCost.toFixed(4)}`);

    console.log('\nNext steps:');
    console.log('1. Run verification query in Supabase SQL Editor');
    console.log('2. Test semantic search: SELECT * FROM claude_memory.search_knowledge_semantic(...)');
    console.log('3. See SUPABASE-MEMORY-QUICK-REFERENCE.md for usage examples');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { generateEmbedding, createEmbeddingText };
