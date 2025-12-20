#!/usr/bin/env node

/**
 * Mesa Group Consulting - Semantic Search Test Script
 *
 * Test semantic search functionality after embedding generation.
 *
 * Usage: node test-semantic-search.js "your search query here"
 *   or   node test-semantic-search.js (runs default test queries)
 */

require('dotenv').config();
const OpenAI = require('openai');
const { createClient } = require('@supabase/supabase-js');

// Initialize clients
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 * Perform semantic search
 */
async function searchKnowledge(query, matchThreshold = 0.5, matchCount = 10) {
  console.log(`\n🔍 Searching for: "${query}"`);
  console.log(`   Threshold: ${matchThreshold}, Max results: ${matchCount}`);

  try {
    // Generate embedding for query
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: query,
      encoding_format: 'float',
    });

    const queryEmbedding = response.data[0].embedding;

    // Search using Supabase function
    const { data, error } = await supabase.rpc('search_knowledge_semantic', {
      query_embedding: queryEmbedding,
      match_threshold: matchThreshold,
      match_count: matchCount,
    });

    if (error) {
      throw new Error(`Supabase RPC error: ${error.message}`);
    }

    // Display results
    if (!data || data.length === 0) {
      console.log('   ❌ No results found');
      console.log('   Try lowering the threshold or using different search terms\n');
      return [];
    }

    console.log(`   ✅ Found ${data.length} results:\n`);

    data.forEach((result, index) => {
      console.log(`${index + 1}. ${result.category}/${result.key}`);
      console.log(`   Similarity: ${(result.similarity * 100).toFixed(1)}%`);
      console.log(`   Value: ${result.value.substring(0, 100)}${result.value.length > 100 ? '...' : ''}`);
      if (result.context) {
        console.log(`   Context: ${result.context.substring(0, 80)}${result.context.length > 80 ? '...' : ''}`);
      }
      console.log('');
    });

    return data;

  } catch (error) {
    console.error('   ❌ Search error:', error.message);
    throw error;
  }
}

/**
 * Run test suite with common queries
 */
async function runTestSuite() {
  console.log('🚀 Mesa Group Consulting - Semantic Search Test Suite');
  console.log('=====================================================\n');

  const testQueries = [
    {
      query: 'How do I style buttons and CTAs?',
      description: 'Button styling and CTA patterns',
    },
    {
      query: 'What colors should I use for Mesa Group branding?',
      description: 'Brand colors and design tokens',
    },
    {
      query: 'How does Calendly integration work?',
      description: 'Calendly setup and configuration',
    },
    {
      query: "What's the difference between personal and business credit?",
      description: 'Service distinctions',
    },
    {
      query: 'What are the compliance rules for credit repair?',
      description: 'CROA compliance and legal requirements',
    },
    {
      query: "What are Evert's preferences for the website?",
      description: 'Client preferences and requirements',
    },
  ];

  let passedTests = 0;
  let totalTests = testQueries.length;

  for (const test of testQueries) {
    try {
      console.log(`\n📝 Test: ${test.description}`);
      const results = await searchKnowledge(test.query, 0.5, 5);

      if (results.length > 0) {
        passedTests++;
        console.log('   ✅ PASS - Found relevant results');
      } else {
        console.log('   ⚠️  WARN - No results found (may need lower threshold)');
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.error(`   ❌ FAIL - ${error.message}`);
    }
  }

  // Summary
  console.log('\n=====================================================');
  console.log('Test Summary:');
  console.log(`  Passed: ${passedTests}/${totalTests}`);
  console.log(`  Success rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

  if (passedTests === totalTests) {
    console.log('\n✅ All tests passed! Semantic search is working correctly.');
  } else if (passedTests > 0) {
    console.log('\n⚠️  Some tests passed. Review failed tests and adjust thresholds if needed.');
  } else {
    console.log('\n❌ All tests failed. Check:');
    console.log('   1. Embeddings were generated (run generate-embeddings.js)');
    console.log('   2. Supabase functions exist (run supabase-vector-migration.sql)');
    console.log('   3. Environment variables are correct (.env file)');
  }
}

/**
 * Main execution
 */
async function main() {
  // Check environment variables
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY not set in environment');
    process.exit(1);
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    console.error('❌ Error: SUPABASE_URL and SUPABASE_KEY not set in environment');
    process.exit(1);
  }

  // Check if custom query provided
  const customQuery = process.argv.slice(2).join(' ');

  if (customQuery) {
    // Single custom search
    await searchKnowledge(customQuery, 0.5, 10);
  } else {
    // Run full test suite
    await runTestSuite();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  });
}

module.exports = { searchKnowledge };
