/**
 * Pushes search records to Algolia.
 * Run with: npm run index:algolia
 *
 * Uses the ADMIN key — never run this in the browser/frontend.
 */

import { algoliasearch } from 'algoliasearch';
import { records } from './searchRecords.ts';
import * as dotenv from 'dotenv';

dotenv.config();

const APP_ID = process.env.VITE_ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const INDEX_NAME = process.env.VITE_ALGOLIA_INDEX_NAME;

if (!APP_ID || !ADMIN_KEY || !INDEX_NAME) {
  console.error('❌ Missing Algolia env vars. Check your .env file.');
  process.exit(1);
}

const client = algoliasearch(APP_ID, ADMIN_KEY);

async function run() {
  console.log(`🔍 Pushing ${records.length} records to index "${INDEX_NAME}"...`);

  await client.saveObjects({
    indexName: INDEX_NAME,
    objects: records,
  });

  // Configure searchable attributes and ranking
  await client.setSettings({
    indexName: INDEX_NAME,
    indexSettings: {
      searchableAttributes: ['title', 'description', 'keywords', 'category'],
      attributesToSnippet: ['description:20'],
      ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom'],
      customRanking: ['asc(category)'],
    },
  });

  console.log(`✅ Done! ${records.length} records indexed in "${INDEX_NAME}".`);
}

run().catch((err) => {
  console.error('❌ Error indexing:', err);
  process.exit(1);
});
