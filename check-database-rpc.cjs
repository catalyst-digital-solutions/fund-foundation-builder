#!/usr/bin/env node

/**
 * Check database using RPC function call
 * This bypasses schema restrictions
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function checkDatabase() {
  console.log('🔍 Checking Supabase database via RPC...\n');

  try {
    // Try to call the get_project_knowledge RPC function
    const { data, error } = await supabase
      .rpc('get_project_knowledge', { limit_count: 5 });

    if (error) {
      console.log('❌ Error calling get_project_knowledge:', error.message);
      console.log('\n📋 Database Status:');
      console.log('   The claude_memory.project_knowledge table exists');
      console.log('   BUT: The RPC functions may not be set up yet');
      console.log('\n👉 Next steps:');
      console.log('   1. Check if embedding column exists');
      console.log('   2. Run SQL migration if needed: supabase-vector-migration.sql\n');
      return false;
    }

    console.log(`✅ Successfully connected to project_knowledge table`);
    console.log(`   Found ${data ? data.length : 0} items\n`);

    if (data && data.length > 0) {
      // Check for embedding column
      const sampleItem = data[0];
      const hasEmbeddingColumn = 'embedding' in sampleItem;

      console.log('Embedding column status:');
      if (hasEmbeddingColumn) {
        console.log('  ✅ Embedding column exists');
        const itemsWithEmbeddings = data.filter(item => item.embedding);
        console.log(`  ✅ Items with embeddings: ${itemsWithEmbeddings.length}/${data.length} sampled`);
      } else {
        console.log('  ❌ Embedding column NOT found');
        console.log('  👉 Need to run SQL migration to add embedding column\n');
      }
    }

    return true;

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    console.log('\n👉 The database may need the RPC function: get_project_knowledge');
    console.log('   Or you may need to access it differently\n');
    return false;
  }
}

checkDatabase().then(success => {
  if (success) {
    console.log('\n✅ Database accessible!');
    console.log('👉 Ready to run: node generate-embeddings.cjs\n');
  } else {
    console.log('\n⚠️  Database setup incomplete');
    console.log('👉 Next: Run SQL migration or check permissions\n');
  }
  process.exit(0);
});
