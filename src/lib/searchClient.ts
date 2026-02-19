/**
 * Search client abstraction layer.
 * All Algolia-specific logic lives here.
 * To swap providers, replace only this file.
 */

import algoliasearch from 'algoliasearch';

const APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID as string;
const SEARCH_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_KEY as string;
const INDEX_NAME = import.meta.env.VITE_ALGOLIA_INDEX_NAME as string;

const client = algoliasearch(APP_ID, SEARCH_KEY);

export interface SearchRecord {
  objectID: string;
  title: string;
  description: string;
  path: string;
  category: string;
  keywords?: string[];
}

export interface SearchResult {
  objectID: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

/**
 * Search the index. Only called on explicit user submit — not on keystroke.
 */
export async function search(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const { hits } = await client.searchSingleIndex<SearchRecord>({
    indexName: INDEX_NAME,
    searchParams: {
      query,
      hitsPerPage: 8,
      attributesToRetrieve: ['title', 'description', 'path', 'category'],
      attributesToHighlight: ['title', 'description'],
    },
  });

  return hits.map((hit) => ({
    objectID: hit.objectID,
    title: hit.title,
    description: hit.description,
    path: hit.path,
    category: hit.category,
  }));
}
