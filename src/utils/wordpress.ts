/**
 * WordPress REST API Utility
 * Fetches blog posts from the WordPress installation
 * Note: API requests go directly to blog subdomain, not through proxy
 */

const WP_API_BASE = 'https://blog.mesagroupconsulting.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

/**
 * Fetch posts from WordPress
 */
export async function fetchWordPressPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: string;
  search?: string;
}): Promise<WordPressPost[]> {
  const queryParams = new URLSearchParams({
    _embed: 'true', // Include featured images and categories
    per_page: String(params?.per_page || 10),
    page: String(params?.page || 1),
    ...(params?.categories && { categories: params.categories }),
    ...(params?.search && { search: params.search }),
  });

  const response = await fetch(`${WP_API_BASE}/posts?${queryParams}`);
  
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetch categories from WordPress
 */
export async function fetchWordPressCategories(): Promise<WordPressCategory[]> {
  const response = await fetch(`${WP_API_BASE}/categories`);
  
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Get featured image URL from post
 */
export function getFeaturedImageUrl(post: WordPressPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

/**
 * Get categories from post
 */
export function getPostCategories(post: WordPressPost): Array<{ id: number; name: string; slug: string }> {
  const terms = post._embedded?.['wp:term'];
  if (!terms || terms.length === 0) return [];
  
  // wp:term is an array of arrays, first array is categories
  return terms[0] || [];
}

/**
 * Strip HTML tags from excerpt
 */
export function stripHtmlTags(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const text = stripHtmlTags(content);
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Format date to readable format
 */
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

/**
 * Get blog post URL (via proxy)
 */
export function getBlogPostUrl(slug: string): string {
  return `/blog/${slug}/`;
}
