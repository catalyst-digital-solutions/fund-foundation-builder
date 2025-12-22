-- ================================================================
-- RPC Functions for Public Access to claude_memory Schema
-- ================================================================
-- These functions allow the anon key to access claude_memory.project_knowledge
-- ================================================================

-- Function to get all project knowledge items
CREATE OR REPLACE FUNCTION public.get_project_knowledge(limit_count int DEFAULT 1000)
RETURNS TABLE (
  id uuid,
  category text,
  key text,
  value text,
  context text,
  source text,
  confidence numeric,
  embedding vector(1536),
  created_at timestamptz,
  updated_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    pk.id,
    pk.category,
    pk.key,
    pk.value,
    pk.context,
    pk.source,
    pk.confidence,
    pk.embedding,
    pk.created_at,
    pk.updated_at
  FROM claude_memory.project_knowledge pk
  ORDER BY pk.category, pk.key
  LIMIT limit_count;
END;
$$;

COMMENT ON FUNCTION public.get_project_knowledge IS
'Retrieve project knowledge items. Accessible via anon key through RPC.';

-- Function to update embedding for a specific item
CREATE OR REPLACE FUNCTION public.update_embedding(
  item_id uuid,
  new_embedding vector(1536)
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE claude_memory.project_knowledge
  SET
    embedding = new_embedding,
    updated_at = now()
  WHERE id = item_id;

  RETURN FOUND;
END;
$$;

COMMENT ON FUNCTION public.update_embedding IS
'Update embedding for a specific knowledge item. Accessible via anon key through RPC.';

-- Function to get count of items with/without embeddings
CREATE OR REPLACE FUNCTION public.get_embedding_stats()
RETURNS TABLE (
  total_items bigint,
  items_with_embeddings bigint,
  items_without_embeddings bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*) as total_items,
    COUNT(embedding) as items_with_embeddings,
    COUNT(*) - COUNT(embedding) as items_without_embeddings
  FROM claude_memory.project_knowledge;
END;
$$;

COMMENT ON FUNCTION public.get_embedding_stats IS
'Get statistics about embedding coverage. Accessible via anon key through RPC.';

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ RPC functions created successfully!';
  RAISE NOTICE 'Public functions available:';
  RAISE NOTICE '  - get_project_knowledge(limit_count)';
  RAISE NOTICE '  - update_embedding(item_id, new_embedding)';
  RAISE NOTICE '  - get_embedding_stats()';
END $$;
