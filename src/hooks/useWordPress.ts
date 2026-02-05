import { useQuery } from '@tanstack/react-query';
import { 
  fetchWordPressPosts, 
  fetchWordPressCategories,
  WordPressPost,
  WordPressCategory
} from '@/utils/wordpress';

/**
 * Hook to fetch WordPress posts with React Query
 */
export function useWordPressPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: string;
  search?: string;
}) {
  return useQuery<WordPressPost[], Error>({
    queryKey: ['wordpress-posts', params],
    queryFn: () => fetchWordPressPosts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

/**
 * Hook to fetch WordPress categories with React Query
 */
export function useWordPressCategories() {
  return useQuery<WordPressCategory[], Error>({
    queryKey: ['wordpress-categories'],
    queryFn: fetchWordPressCategories,
    staleTime: 30 * 60 * 1000, // 30 minutes
    retry: 2,
  });
}
