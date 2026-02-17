# Perplexity Prompt: Real-Time Keyword Research APIs

## Copy and paste this entire prompt into Perplexity:

---

I'm building an automated blog content generation system that needs to integrate real-time keyword research for SEO optimization. I need to find the best API or library for accessing up-to-the-minute search keyword data from US users.

## My Requirements

**Must Have:**
1. **Real-time or near-real-time data** - Current search trends, not 6-month-old data
2. **US-focused search data** - Specifically US search behavior and volumes
3. **Affordable pricing** - Ideally free/open-source, or a few cents per API call maximum
4. **Programmatic access** - REST API, Python library, or Node.js SDK
5. **Search volume data** - How many people search for a keyword per month
6. **Related keywords** - Suggestions for keyword variations and long-tail keywords
7. **Difficulty/competition metrics** - How hard is it to rank for this keyword?
8. **Trend data** - Is this keyword growing or declining in popularity?

**Nice to Have:**
- Question-based keyword suggestions (Answer the Public style)
- Geographic breakdown (local search data for Bakersfield, CA)
- Seasonal trends
- Cost-per-click estimates (for Google Ads planning)
- SERP analysis (what's currently ranking)

## Use Case Context

I'm building a content automation system for a credit repair and financial services company (Mesa Group Consulting). The system will:

1. Accept an Answer the Public question (e.g., "how to dispute credit card late payments")
2. Research top-performing content
3. Generate YouTube script + blog post
4. **NEW:** Optimize content for SEO keywords based on real search data

**Example workflow:**
- Input: "how to remove collections from credit report"
- System queries keyword API: "collections removal credit report" + variations
- API returns: Search volume (5,400/month), difficulty (medium), related keywords ("pay for delete", "debt validation letter", "FCRA dispute"), trending up 12%
- System incorporates high-volume, low-difficulty keywords into blog title, headings, and content

## Specific Questions

### 1. Free/Open-Source Options
What are the best **free or open-source** libraries/APIs for keyword research?

I've heard of:
- Google Trends API (Pytrends Python library)
- Google Autocomplete suggestions
- Google Keyword Planner (via Google Ads API)
- Scraping SERP data

**Question:** Which of these gives the most reliable real-time data? Are there other free options I'm missing?

### 2. Affordable Paid APIs
If free options are insufficient, what are the **most affordable paid APIs** that provide high-quality keyword data?

I'm aware of:
- SEMrush API (expensive - $200+/month?)
- Ahrefs API (expensive - $200+/month?)
- DataForSEO (affordable?)
- SerpAPI (affordable?)
- ValueSerp API (affordable?)
- Keywords Everywhere API (affordable?)

**Question:** Which offers the best value for:
- Pay-per-request pricing (not monthly subscription)
- Real-time US search data
- Comprehensive metrics (volume, difficulty, trends)
- Cost per API call (ideally <$0.01 per keyword lookup)

### 3. Python/Node.js Libraries
Are there any **Python or Node.js libraries** that:
- Wrap keyword research APIs cleanly?
- Provide rate limiting and caching?
- Handle authentication and retries?
- Have good documentation?

**Question:** What's the most developer-friendly library for integrating keyword research into an automated content pipeline?

### 4. Data Quality Comparison
How do these options compare for **data freshness and accuracy**?

**Question:** 
- Which gives the most up-to-date search volume data?
- Which is closest to actual Google search behavior?
- Which has the most reliable US-specific data?
- Any known accuracy issues with free vs. paid options?

### 5. Rate Limits & Quotas
For automated systems generating 5-10 blog posts per week:

**Question:**
- What are typical rate limits for free APIs?
- What are typical quotas for paid APIs?
- Can I batch multiple keyword queries to reduce API calls?
- Any free tier options sufficient for low-volume use?

### 6. Alternative Approaches
Are there creative alternatives I haven't considered?

**Examples:**
- Scraping Google Autocomplete programmatically (legal/ToS concerns?)
- Using Google Search Console API for site-specific keyword data (requires existing site)
- Building custom scrapers for SERP data (reliability?)
- Using Perplexity AI to estimate search intent and volume (AI-powered alternative?)

**Question:** What's the most cost-effective approach that still provides reliable data?

## My Technical Context

- **Backend:** Python 3.11+ or Node.js 20+
- **Existing integrations:** Perplexity API, Google Gemini API, YouTube Data API
- **Infrastructure:** Supabase (PostgreSQL), AWS (optional), GitHub Actions
- **Volume:** 5-10 blog posts per week = 5-10 keyword API calls per week (low volume)
- **Budget:** Prefer free, willing to pay $10-50/month for significantly better data

## Desired Output Format

Please provide:

1. **Top 3 recommended options** (ranked by cost-effectiveness)
   - API/library name
   - Pricing model (free/paid/credits)
   - Cost per API call (if paid)
   - Data quality rating (excellent/good/fair)
   - Real-time freshness rating
   - Python/Node.js library availability

2. **Comparison table** showing:
   - Free vs. paid options side-by-side
   - Key features (search volume, difficulty, trends, related keywords)
   - Rate limits and quotas
   - Pros/cons of each

3. **Specific implementation recommendation** for my use case (low-volume, high-quality, automated pipeline)

4. **Code example** (if possible) showing:
   - How to make an API call
   - How to parse the response
   - How to integrate into content generation workflow

5. **Alternative creative solutions** if traditional APIs are too expensive or limited

Please focus on options that are:
- ✅ Available in 2026 (current year)
- ✅ Actively maintained
- ✅ Well-documented
- ✅ Suitable for automated/programmatic use
- ✅ Reliable for SEO content optimization

Thank you!
