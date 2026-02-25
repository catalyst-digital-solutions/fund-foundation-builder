import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { search, type SearchResult } from '@/lib/searchClient';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Ref owned by Header so focus() can be called synchronously within the tap gesture */
  inputRef?: React.RefObject<HTMLInputElement>;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Main': 'bg-gray-100 text-gray-700',
  'Credit Services': 'bg-blue-50 text-blue-700',
  'Lending Solutions': 'bg-green-50 text-green-700',
  'Protection Services': 'bg-purple-50 text-purple-700',
  'For Consumers': 'bg-amber-50 text-amber-700',
  'Business Services': 'bg-orange-50 text-orange-700',
  'For Businesses': 'bg-orange-50 text-orange-700',
  'Resources': 'bg-gray-100 text-gray-700',
};

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, inputRef }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  // Internal fallback ref if Header doesn't pass one
  const internalRef = useRef<HTMLInputElement>(null);
  const resolvedRef = (inputRef ?? internalRef) as React.RefObject<HTMLInputElement>;

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setHasSearched(false);
    }
  }, [isOpen]);

  // Prevent body scroll when open; restore when closed
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setHasSearched(true);
    try {
      const hits = await search(query);
      setResults(hits);
    } catch (err) {
      console.error('Search error:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = () => onClose();

  const isExternal = (path: string) => path.startsWith('http');

  // Always render — use CSS to hide/show so the input stays in the DOM.
  // This is the key to iOS keyboard: focus() can be called synchronously
  // within the tap gesture because the input already exists in the DOM.
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-start justify-center bg-black/60 pt-20 px-4 ${
        isOpen ? '' : 'pointer-events-none invisible opacity-0'
      }`}
      aria-modal="true"
      aria-label="Search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex items-center border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" aria-hidden="true" />
          <input
            ref={resolvedRef}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, services, resources..."
            aria-label="Search pages, services, and resources"
            className="flex-1 px-4 py-4 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            autoComplete="off"
            tabIndex={isOpen ? 0 : -1}
          />
          {loading && <Loader2 className="w-5 h-5 text-gray-400 mr-3 animate-spin flex-shrink-0" />}
          <button
            type="submit"
            className="mr-2 px-4 py-2 bg-[#f9c65d] hover:bg-[#bb9446] text-gray-900 font-semibold text-sm rounded-lg transition-colors flex-shrink-0"
            tabIndex={isOpen ? 0 : -1}
          >
            Search
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 mr-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Close search"
            tabIndex={isOpen ? 0 : -1}
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto" role="listbox" aria-label="Search results">
          {!hasSearched && !loading && (
            <div className="px-6 py-8 text-center text-gray-400 text-sm">
              Type a keyword and press Enter or click Search
            </div>
          )}

          {hasSearched && !loading && results.length === 0 && (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-600 font-medium mb-1">No results for "{query}"</p>
              <p className="text-gray-400 text-sm">Try searching for "credit repair", "business funding", or "debt relief"</p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="divide-y divide-gray-100">
              {results.map((result) => {
                const badgeClass = CATEGORY_COLORS[result.category] ?? 'bg-gray-100 text-gray-700';
                const content = (
                  <div className="px-5 py-4 flex items-start gap-4 hover:bg-amber-50 transition-colors group cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeClass}`}>
                          {result.category}
                        </span>
                      </div>
                      <p className="text-gray-900 font-semibold text-sm leading-snug group-hover:text-[#bb9446] transition-colors">
                        {result.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#bb9446] flex-shrink-0 mt-1 transition-colors" />
                  </div>
                );

                return (
                  <li key={result.objectID} role="option" aria-selected="false">
                    {isExternal(result.path) ? (
                      <a href={result.path} target="_blank" rel="noopener noreferrer" onClick={handleResultClick}>
                        {content}
                      </a>
                    ) : (
                      <Link to={result.path} onClick={handleResultClick}>
                        {content}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {hasSearched && results.length > 0 && (
          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 flex items-center justify-between">
            <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
            <span>Press <kbd className="bg-white border border-gray-200 rounded px-1 py-0.5 text-gray-500">Esc</kbd> to close</span>
          </div>
        )}
      </div>
    </div>
  );
};
