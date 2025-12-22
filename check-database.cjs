#!/usr/bin/env node

/**
 * Quick database verification script
 * Checks if vector extension and embedding column exist
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function checkDatabase() {
  console.log('🔍 Checking Supabase database status...\n');

  try {
    // Check if we can query the project_knowledge table
    const { data: items, error } = await supabase
      .schema('claude_memory')
      .from('project_knowledge')
      .select('id, category, key, value, embedding')
      .limit(5);

    if (error) {
      console.log('❌ Error querying project_knowledge table:', error.message);
      console.log('\nTable may not exist or embedding column not added yet.');
      console.log('👉 Need to run SQL migration: supabase-vector-migration.sql\n');
      return false;
    }

    console.log(`✅ project_knowledge table accessible`);
    console.log(`   Found ${items.length} sample items\n`);

    // Check embedding status
    const itemsWithEmbeddings = items.filter(item => item.embedding);
    console.log(`Embedding status (from ${items.length} sampled items):`);
    console.log(`  ✅ With embeddings: ${itemsWithEmbeddings.length}`);
    console.log(`  📝 Without embeddings: ${items.length - itemsWithEmbeddings.length}\n`);

    // Get total count
    const { count, error: countError } = await supabase
      .schema('claude_memory')
      .from('project_knowledge')
      .select('*', { count: 'exact', head: true });

    if (!countError) {
      console.log(`Total items in database: ${count}\n`);
    }

    return true;

  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

checkDatabase().then(success => {
  if (success) {
    console.log('✅ Database check complete - ready to generate embeddings!');
    console.log('👉 Run: node generate-embeddings.js\n');
  } else {
    console.log('⚠️  Database needs setup');
    console.log('👉 Run SQL migration first in Supabase SQL Editor\n');
  }
  process.exit(success ? 0 : 1);
});
