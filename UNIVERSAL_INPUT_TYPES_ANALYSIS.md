# Universal Content Input Types - Multi-Modal Content Engine
**For:** ATP Content Generator (Extensible Architecture)  
**Date:** February 10, 2026

---

## Core Question

**How do we build a system that accepts:**
1. ✅ YouTube video URLs (already supported)
2. ✅ Answer the Public questions (currently planning)
3. ✅ General topics/ideas Evert has in mind
4. ❓ **What else makes this useful for ANY business owner/content creator?**

---

## Recommended Input Types (Prioritized)

### 🥇 Tier 1: Core Inputs (MVP - Week 1)

#### 1. YouTube Video URL
**Current support:** ✅ Already implemented in mgc-blog-ai-agent  
**Use case:** Repurpose successful video content into blog posts  
**Example:** `https://youtube.com/watch?v=ABC123`  
**Value:** Learn from what's already performing well

#### 2. Answer the Public Question
**Current support:** 🔄 Currently planning  
**Use case:** Create content answering specific search queries  
**Example:** `"how to remove collections from credit report"`  
**Value:** SEO-optimized content targeting real search queries

#### 3. General Topic/Keyword
**Current support:** ⭐ NEW - Easy to add  
**Use case:** Evert's ideas, industry topics, seasonal content  
**Example:** `"credit card rewards strategies"` or `"debt relief options"`  
**Value:** Flexibility for creative/strategic content ideas

**Technical implementation:** Same as ATP question, just less structured input

#### 4. Competitor URL (Article/Blog Post)
**Current support:** ⭐ NEW - High value for differentiation  
**Use case:** Analyze competitor content, create better version  
**Example:** `https://nerdwallet.com/article/finance/how-to-improve-credit-score`  
**Process:**
- Scrape competitor article (Jina Reader API)
- Extract key points, structure, keywords
- Identify gaps and weaknesses
- Generate superior content with Mesa Group perspective
- **Output:** "Better than [Competitor]" content

**Value:** Competitive intelligence + content creation in one workflow

**Why this is powerful:**
- See what competitors rank for
- Make objectively better content
- Steal their SEO thunder
- Differentiate with Mesa expertise

---

### 🥈 Tier 2: Extended Inputs (Phase 2 - Week 2-3)

#### 5. Podcast Episode URL
**Use case:** Repurpose podcast content (yours or competitors)  
**Example:** `https://podcasts.apple.com/us/podcast/episode-123`  
**Process:**
- Extract audio
- Transcribe (Whisper API or AssemblyAI)
- Same pipeline as YouTube videos
- Generate blog + social snippets

**Value:** Multi-format content repurposing

#### 6. News Article URL (Trending Topics)
**Use case:** React to industry news with expert commentary  
**Example:** `https://cnbc.com/2026/02/10/new-credit-law.html`  
**Process:**
- Scrape article (Jina Reader)
- Extract key points
- Add Mesa Group expert commentary
- Create reaction video script + blog

**Value:** Timely, relevant content (capitalizes on trending topics)

#### 7. Social Media Thread (Twitter/X, LinkedIn)
**Use case:** Expand viral thread into full content  
**Example:** `https://twitter.com/expert/status/123456789`  
**Process:**
- Extract thread text
- Expand each point into full sections
- Add research and citations
- Create long-form version

**Value:** Leverage viral content momentum

#### 8. Customer FAQ / Pain Point
**Use case:** Turn common customer questions into educational content  
**Example:** `"My clients always ask why their credit score dropped after paying off debt"`  
**Process:**
- Research the pain point
- Find authoritative answers
- Create comprehensive guide
- Address misconceptions

**Value:** Direct response to real customer needs

---

### 🥉 Tier 3: Advanced Inputs (Phase 3 - Month 2+)

#### 9. Product/Service Description
**Use case:** Educational content about your offerings  
**Example:** `"Mesa360 Credit System - our proprietary 4-phase credit repair program"`  
**Process:**
- Extract features and benefits
- Research similar offerings
- Create educational content explaining how it works
- Comparison to DIY approaches

**Value:** Service-focused content marketing

#### 10. Book Chapter/Summary
**Use case:** Content from books, whitepapers, reports  
**Example:** Upload PDF or paste text from financial education book  
**Process:**
- Extract key concepts
- Expand with current examples
- Add Mesa Group commentary
- Create digestible content

**Value:** Thought leadership positioning

#### 11. Case Study / Client Success Story
**Use case:** Transform client outcomes into content  
**Example:** `"Client went from 520 to 720 credit score in 6 months"`  
**Process:**
- Extract journey details
- Research the methods used
- Create educational narrative
- Anonymize and generalize for teaching

**Value:** Social proof + educational content

#### 12. Webinar/Presentation Slides
**Use case:** Repurpose presentation content  
**Example:** Upload slides from Evert's presentation  
**Process:**
- Extract talking points
- Expand each point with research
- Create multiple content pieces from one presentation

**Value:** Maximize ROI on existing content creation

#### 13. Industry Report/Whitepaper
**Use case:** Commentary on research findings  
**Example:** `"2026 Credit Industry Report - Federal Reserve"`  
**Process:**
- Extract key statistics
- Add expert interpretation
- Create data-driven content
- Tie to Mesa Group services

**Value:** Data-backed authority content

---

## Universal Input Interface (Recommended Design)

### Unified Input System

```python
class UniversalContentInput:
    """
    Accepts any content source type and normalizes to common format
    Extensible: Easy to add new input types without breaking existing code
    """
    
    INPUT_TYPES = {
        'youtube_url': YouTubeInputHandler,
        'atp_question': ATPQuestionHandler,
        'general_topic': GeneralTopicHandler,
        'competitor_url': CompetitorURLHandler,
        'podcast_url': PodcastURLHandler,
        'news_url': NewsArticleHandler,
        'social_thread': SocialThreadHandler,
        'customer_faq': CustomerFAQHandler,
        'product_description': ProductDescriptionHandler,
        'case_study': CaseStudyHandler,
        # Easy to add more without breaking existing types
    }
    
    def __init__(self):
        self.handlers = {
            input_type: handler_class()
            for input_type, handler_class in self.INPUT_TYPES.items()
        }
    
    def detect_input_type(self, user_input: str) -> str:
        """
        Auto-detect what type of input this is
        Returns: input_type string
        """
        # YouTube URL detection
        if 'youtube.com' in user_input or 'youtu.be' in user_input:
            return 'youtube_url'
        
        # URL detection (competitor, news, etc.)
        if user_input.startswith('http'):
            # Further classify URL type
            if 'nerdwallet' in user_input or 'creditkarma' in user_input:
                return 'competitor_url'
            if 'cnbc' in user_input or 'forbes' in user_input:
                return 'news_url'
            if 'twitter.com' in user_input or 'linkedin.com' in user_input:
                return 'social_thread'
            return 'competitor_url'  # Default for unknown URLs
        
        # Question detection (ATP style)
        question_words = ['how to', 'how do', 'what is', 'why does', 'when should', 'can i']
        if any(q in user_input.lower() for q in question_words):
            return 'atp_question'
        
        # Default: General topic
        return 'general_topic'
    
    def process(self, user_input: str, input_type: str = None):
        """
        Process any input type into normalized research data
        Returns: Standardized research object ready for content generation
        """
        # Auto-detect if not specified
        if input_type is None:
            input_type = self.detect_input_type(user_input)
        
        # Route to appropriate handler
        handler = self.handlers.get(input_type)
        if handler is None:
            raise ValueError(f"Unknown input type: {input_type}")
        
        # Each handler returns standardized format
        return handler.process(user_input)


# Standardized output format from all handlers
@dataclass
class NormalizedResearchData:
    """
    Every input type produces this standardized format
    Allows content generator to work with any input source
    """
    topic: str                          # Main topic/question
    source_type: str                    # youtube, atp, topic, competitor, etc.
    source_url: str | None              # Original URL if applicable
    primary_keyword: str                # SEO keyword
    context: str                        # Background research/transcript
    key_points: List[str]               # Main takeaways
    authorities: List[str]              # Sources to cite
    target_audience: str                # Who is this for?
    content_angle: str                  # Unique perspective to take
    related_topics: List[str]           # Subtopics to cover
    keyword_data: KeywordResearchData   # From DataForSEO/Pytrends
```

---

## Why This Universal Approach is Powerful

### 1. Flexibility for Every Scenario
**Evert can submit:**
- YouTube video he wants to repurpose ✅
- Question from Answer the Public ✅
- Random idea: "I want to write about debt snowball method" ✅
- Competitor content: "Make better version of this NerdWallet article" ✅
- News: "React to this new CFPB regulation" ✅

**System handles all of them.**

### 2. Same Output Quality, Different Input
All inputs → Same research quality → Same AEO/GEO optimization → Same deliverables

**Deliverables (universal):**
- YouTube script (teleprompter-ready)
- Blog post (WordPress HTML + schema)
- YouTube metadata (title, description, tags)
- Image prompts (Nano Banana ready)
- SEO report (keywords, metrics, recommendations)

### 3. Extensibility Preserved
Adding new input types is trivial:
```python
# Add podcast support later
class PodcastInputHandler(BaseInputHandler):
    def process(self, podcast_url):
        # Extract podcast audio
        # Transcribe with Whisper
        # Return NormalizedResearchData
        pass

# Register in INPUT_TYPES dict - done!
```

### 4. Universal for Any Business
**Credit repair company (Mesa Group):**
- YouTube: Competitor credit expert videos
- ATP: "how to remove charge-offs"
- Topic: "credit utilization strategies"
- Competitor: NerdWallet credit articles

**SaaS company:**
- YouTube: Product tutorial videos
- Topic: "How our API works"
- Competitor: Competitor feature announcements
- FAQ: "Why is your pricing different than X?"

**E-commerce:**
- Product: Product descriptions
- News: Industry trends
- Competitor: Amazon listing optimization
- Social: Viral product threads

**Service business:**
- Case study: Client success stories
- FAQ: Common objections
- Topic: Service differentiators
- YouTube: Educational content in your niche

---

## Additional Input Types to Consider

### Tier 4: "Nice to Have" (Future Phases)

#### 14. Email Newsletter Content
**Input:** Paste email newsletter text  
**Output:** Expand into full blog post + video script  
**Value:** Repurpose email content for SEO

#### 15. PDF Upload (Whitepapers, Reports)
**Input:** Upload PDF file  
**Process:** Extract text, analyze, create digestible content  
**Value:** Turn dense reports into accessible content

#### 16. Competitor Video Analysis
**Input:** YouTube URL + instruction "analyze their strategy"  
**Output:** What they did well, what to improve, create better version  
**Value:** Competitive intelligence

#### 17. Bulk Topic List
**Input:** CSV of 10 topics  
**Output:** Batch generate all content  
**Value:** Content calendar automation

#### 18. Trending Search Queries
**Input:** "Generate content for what's trending in credit repair today"  
**Process:** Pull from Pytrends, pick top topic, create content  
**Value:** Automated trend-jacking

#### 19. SERP Analysis
**Input:** "Create content to outrank position 1 for [keyword]"  
**Process:** Analyze current top 10 results, identify gaps, create superior content  
**Value:** Targeted SEO assault

#### 20. Multi-Format Bundle
**Input:** "Create content bundle on credit repair basics"  
**Output:** 5 blog posts + 5 scripts + social media posts + email sequence  
**Value:** Complete content campaign in one go

---

## Recommended Input Types for MVP (Prioritized)

### Phase 1 MVP (Week 1) - Core 4 Inputs
1. ✅ **YouTube URL** (already built)
2. ✅ **ATP Question** (planned)
3. ✅ **General Topic** (trivial to add - same as ATP)
4. ✅ **Competitor URL** (high value, moderate effort)

**Why these 4:**
- Cover 80% of Evert's use cases
- Natural workflow progression
- Competitive advantage (competitor analysis)
- All use same content generation backend

### Phase 2 (Week 2-3) - Power User Features
5. ✅ **Customer FAQ** (common pain points)
6. ✅ **News Article URL** (trending topics)
7. ✅ **Podcast URL** (multi-format repurposing)

### Phase 3 (Month 2) - Advanced
8. ✅ **Social Thread** (Twitter/LinkedIn viral content)
9. ✅ **Case Study** (client success stories)
10. ✅ **Product Description** (service-focused content)

---

## User Interface Design (Unified)

### Simple CLI (MVP)

```bash
# YouTube video
python generate.py --input "https://youtube.com/watch?v=ABC123"

# ATP question
python generate.py --input "how to remove late payments"

# General topic
python generate.py --input "credit utilization strategies"

# Competitor URL
python generate.py --input "https://nerdwallet.com/article/credit-cards" --mode competitor

# Auto-detect (smart)
python generate.py "https://youtube.com/watch?v=ABC123"  # Detects YouTube
python generate.py "how to fix bad credit"               # Detects question
python generate.py "debt consolidation"                  # Detects topic
```

### Web Interface (Phase 2)

```
┌─────────────────────────────────────────────────────────┐
│  ATP Content Generator - Universal Input                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  What do you want to create content about?              │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ [Paste YouTube URL, ATP question, topic, or URL]  │ │
│  │                                                    │ │
│  │ Examples:                                          │ │
│  │ • https://youtube.com/watch?v=ABC123               │ │
│  │ • how to remove collections from credit report    │ │
│  │ • debt relief strategies                           │ │
│  │ • https://nerdwallet.com/article/...               │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Input type: [Auto-detected: ATP Question ▼]            │
│                                                          │
│  Advanced Options:                                       │
│  ☐ Competitor analysis mode                             │
│  ☐ Include trending keyword variations                  │
│  ☐ Generate short-form social content                   │
│                                                          │
│  [Generate Content]                                      │
└─────────────────────────────────────────────────────────┘
```

---

## Technical Implementation Strategy

### Unified Processing Pipeline

```python
class UniversalContentEngine:
    """
    Single engine, multiple input types
    All inputs normalize to same research format
    """
    
    def generate(self, user_input: str, options: dict = None):
        """
        Universal generation method
        Works with any input type
        """
        # Step 1: Detect and normalize input
        input_type = self.detect_input_type(user_input)
        normalized_data = self.normalize_input(user_input, input_type)
        
        # Step 2: Keyword research (same for all types)
        keyword_data = self.keyword_engine.research(normalized_data.topic)
        
        # Step 3: Content research (input-specific)
        research_data = self.research_engine.research(normalized_data, keyword_data)
        
        # Step 4: Synthesis (same for all types)
        synthesis = self.synthesis_engine.synthesize(research_data, keyword_data)
        
        # Step 5: Content generation (same for all types)
        content = self.content_generator.generate(
            synthesis, 
            keyword_data,
            aeo_geo_optimized=True
        )
        
        # Step 6: Output (same for all types)
        return content
```

**Key insight:** After normalization, all inputs flow through same pipeline!

---

## Input Handler Examples

### General Topic Handler (Simplest)

```python
class GeneralTopicHandler(BaseInputHandler):
    """
    Handles: "debt relief strategies" or "credit card rewards"
    """
    
    def process(self, topic: str) -> NormalizedResearchData:
        # Research the topic broadly
        perplexity_data = self.perplexity.research(
            f"Most comprehensive information about {topic} for US consumers"
        )
        
        # Find top YouTube videos on topic
        youtube_videos = self.youtube_api.search(topic, max_results=5)
        
        return NormalizedResearchData(
            topic=topic,
            source_type='general_topic',
            source_url=None,
            primary_keyword=topic,
            context=perplexity_data,
            key_points=self._extract_key_points(perplexity_data),
            authorities=self._extract_authorities(perplexity_data),
            target_audience='consumers interested in ' + topic,
            content_angle='comprehensive educational guide',
            related_topics=self._extract_related(perplexity_data)
        )
```

### Competitor URL Handler (High Value)

```python
class CompetitorURLHandler(BaseInputHandler):
    """
    Handles: "https://nerdwallet.com/article/credit/how-to-improve-score"
    Creates better version of competitor content
    """
    
    def process(self, competitor_url: str) -> NormalizedResearchData:
        # Scrape competitor article
        article_content = self.jina_reader.scrape(competitor_url)
        
        # Analyze their approach
        analysis = self.gemini.analyze_content(
            article_content,
            prompt="What are the strengths, weaknesses, and gaps in this article?"
        )
        
        # Research additional sources they missed
        perplexity_data = self.perplexity.research(
            f"Information about {analysis.main_topic} that this article doesn't cover: {competitor_url}"
        )
        
        return NormalizedResearchData(
            topic=analysis.main_topic,
            source_type='competitor_analysis',
            source_url=competitor_url,
            primary_keyword=analysis.primary_keyword,
            context=f"Competitor article: {article_content}\n\nGaps identified: {analysis.gaps}\n\nAdditional research: {perplexity_data}",
            key_points=analysis.key_points,
            authorities=analysis.authorities,
            target_audience=analysis.target_audience,
            content_angle=f"Superior version addressing: {analysis.gaps}",
            related_topics=analysis.missed_topics,
            competitor_metadata={
                'url': competitor_url,
                'strengths': analysis.strengths,
                'weaknesses': analysis.weaknesses,
                'gaps': analysis.gaps,
                'word_count': len(article_content.split()),
                'target_to_beat': len(article_content.split()) * 1.3  # 30% longer
            }
        )
```

---

## What This Means for Any Business Owner

### Credit Repair Company (Mesa Group)
**Can submit:**
- Competitor articles → Better content
- ATP questions → SEO goldmine
- YouTube videos → Repurpose education
- Customer FAQs → Address objections
- News (new CFPB rules) → Timely commentary

### Real Estate Agent
**Can submit:**
- "first-time homebuyer tips" (topic)
- Zillow blog URL (competitor)
- "how to get pre-approved for mortgage" (ATP)
- Client success story (case study)

### SaaS Company
**Can submit:**
- Product features (educational content)
- G2 competitor reviews (analyze and differentiate)
- Industry report (data-driven content)
- Customer questions (FAQ content)

### Local Service Business (Plumber, HVAC, etc.)
**Can submit:**
- "emergency water heater repair" (local SEO topic)
- YouTube DIY video → Professional version
- Seasonal topics → "prepare furnace for winter"
- Customer pain points → Educational guides

**The universal input system makes this valuable for ANY content creator.**

---

## Recommended Implementation Order

### Week 1: Core 4 Inputs ✅
1. YouTube URL (reuse existing)
2. ATP Question (planned)
3. General Topic (same as ATP, simpler)
4. Competitor URL (high value add)

**Output:** 80% of use cases covered

### Week 2-3: Power Features ⭐
5. Customer FAQ
6. News Article URL
7. Social Thread (Twitter/LinkedIn)

**Output:** 95% of use cases covered

### Month 2+: Advanced 🚀
- Podcast URLs
- Case studies
- Product descriptions
- Bulk processing
- Trend automation

---

## Key Architectural Decisions

### ✅ Use Abstract Base Handler
All input handlers inherit from common interface:
```python
class BaseInputHandler(ABC):
    @abstractmethod
    def process(self, user_input: str) -> NormalizedResearchData:
        pass
```

### ✅ Auto-Detection with Override
System auto-detects input type, but user can override:
```bash
python generate.py "credit repair" --type general_topic
python generate.py "credit repair" --type competitor_url  # Different behavior!
```

### ✅ Pluggable Handlers
Add new input types without touching core engine:
```python
# Future: Add webinar support
class WebinarInputHandler(BaseInputHandler):
    def process(self, webinar_url):
        # Implementation
        pass

# Register it
UniversalContentInput.INPUT_TYPES['webinar_url'] = WebinarInputHandler
# No changes to core engine needed!
```

---

## Cost Impact of Input Diversity

| Input Type | Additional Cost | Why |
|------------|----------------|-----|
| YouTube URL | $0 | Free API |
| ATP Question | $0.05 | Keyword research |
| General Topic | $0.05 | Keyword research |
| Competitor URL | $0.10 | Scraping (Jina) + keywords |
| Podcast URL | $0.50 | Audio transcription (Whisper API) |
| News Article | $0.10 | Scraping + keywords |
| Social Thread | $0.05 | Scraping + keywords |

**For Evert's volume (10 posts/week):**
- Mix of input types: ~$1-2/month total
- Still WAY cheaper than $200 SEO tools

---

## DELIVERABLES SUMMARY

### What We've Planned (No Code Changes Yet)

✅ **Universal Input System**
- YouTube URLs, ATP questions, general topics, competitor URLs
- Auto-detection with manual override
- Standardized processing pipeline
- Easy to extend with new input types

✅ **Keyword Research Integration**
- DataForSEO + Pytrends (approved stack)
- <$1/month for Mesa's volume
- AEO/GEO optimization built-in

✅ **Extensibility Preserved**
- Modular architecture
- Pluggable input handlers
- Same output quality regardless of input type
- Path to full TubeLab vision intact

✅ **Universal Business Value**
- Useful for Mesa Group AND any content creator
- Credit repair, SaaS, e-commerce, services all benefit
- Competitive analysis built-in
- Multi-format repurposing

### Next Steps (When Ready to Build)

1. Create new repo: `universal-content-generator`
2. Implement 4 core input types (Week 1)
3. Build unified processing pipeline
4. Integrate DataForSEO + Pytrends
5. Test with diverse inputs (YouTube, ATP, topics, competitors)
6. Add web UI (Week 2)
7. Extend with additional input types as needed

**Estimated MVP:** 2-3 days for core 4 input types  
**Full featured:** 2-3 weeks for 10+ input types

---

**Ready to proceed when you are!** No code written yet - just comprehensive planning complete. 🎯