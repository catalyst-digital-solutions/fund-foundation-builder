# Mesa Group Consulting - WordPress Blog Implementation

**Client:** Evert Calderon - Mesa Group Consulting  
**Date Started:** January 31, 2026  
**Developer:** Catalyst Digital Solutions  
**Purpose:** WordPress blog integration for SEO and content marketing

---

## Project Overview

Integrating a professional WordPress blog at `mesagroupconsulting.com/blog` to support Mesa Group Consulting's content generation engine and SEO strategy.

**Main Site (React/Vite):** ✅ **LIVE** at https://mesagroupconsulting.com  
**Blog (WordPress):** 🔄 **In Progress** - Will be accessible at https://mesagroupconsulting.com/blog

---

## Why WordPress for the Blog?

1. **SEO Excellence** - WordPress + Rank Math plugin provides industry-leading SEO capabilities
2. **Content Engine Ready** - WordPress REST API enables automated blog posting from the content generation system
3. **User-Friendly** - Evert's team can easily manage posts with Gutenberg drag-and-drop editor
4. **Battle-Tested** - WordPress powers 43% of all websites and is proven for business blogs

---

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    mesagroupconsulting.com                   │
│                         (Main Domain)                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
    ┌────▼─────┐              ┌──────▼──────┐
    │  React   │              │  WordPress  │
    │   Site   │              │    Blog     │
    │          │              │             │
    │  Vercel  │◄────────────►│  Cloudways  │
    │   CDN    │  Reverse     │   Server    │
    │          │   Proxy      │             │
    └──────────┘              └─────────────┘
         │                           │
    All pages              /blog/* URLs only
```

**How it works:**
- Users visit any page → React site serves it from Vercel CDN (fast!)
- Users visit `/blog/*` → Vercel proxies to WordPress seamlessly
- No visible transition - looks like one unified site

---

## Implementation Phases

### ✅ Phase 1: React Site Deployment (COMPLETED - Jan 31, 2026)

**Accomplished:**
- ✅ Deployed React site to Vercel
- ✅ Connected mesagroupconsulting.com domain
- ✅ SSL certificates auto-provisioned (HTTPS)
- ✅ Backed up old WordPress site completely
- ✅ Performance scores: **Desktop 98/100, Mobile 82/100**
- ✅ SEO score: **100/100**
- ✅ Cross-browser tested (Chrome, Safari, Firefox, Edge, Opera, Brave)

**Production URL:** https://mesagroupconsulting.com ✅

---

### 🔄 Phase 2: WordPress Blog Setup (IN PROGRESS)

#### Task 7: Fresh WordPress Installation
**Status:** 🔄 In Progress  
**Started:** Jan 31, 2026

**Server Configuration:**
- **Hosting:** Cloudways
- **Application Name:** Mesa Group Consulting Blog
- **Stack:** Lightning Stack (Nginx + Redis for optimal performance)
- **Server Type:** Basic (1GB RAM - perfect for blog, upgradable later)
- **PHP Version:** 8.1 or 8.2 (latest stable)
- **Database:** MySQL 8.0 (WordPress standard)
- **Temporary URL:** blog.mesagroupconsulting.com

**Next Steps:**
1. Complete WordPress installation
2. Install essential plugins:
   - Rank Math SEO (for search optimization)
   - Classic Editor (easier for API posting from content engine)
   - Wordfence Security (site protection)
   - WP Rocket or similar (caching/performance)
3. Configure basic WordPress settings
4. Set permalink structure to `/blog/%postname%/`

---

#### Task 8: Theme Customization
**Status:** ⏭️ Pending  
**Dependencies:** Task 7 complete

**Theme Choice:** GeneratePress (lightweight, fast, highly customizable)

**Design Matching (React Site):**
- Primary Yellow: `#f9c65d`
- Dark Gold: `#bb9446`
- Light Tan: `#e5D2af`
- Font Family: Inter (Google Fonts)
- Header: Match React site navigation
- Footer: Match React site footer layout

**Customization Plan:**
1. Install GeneratePress theme
2. Create child theme for safe customizations
3. Configure color scheme via WordPress Customizer
4. Import Inter font from Google Fonts
5. Custom CSS to match React site styling
6. Style Gutenberg blocks to look like Tailwind components
7. Create blog post templates
8. Design archive/category pages

**Estimated Time:** 6-8 hours

---

#### Task 9: Reverse Proxy Configuration
**Status:** ⏭️ Pending  
**Dependencies:** Task 8 complete

**Technical Implementation:**

Create `vercel.json` in React project:
```json
{
  "rewrites": [
    {
      "source": "/blog/:path*",
      "destination": "https://blog.mesagroupconsulting.com/:path*"
    }
  ],
  "headers": [
    {
      "source": "/blog/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, stale-while-revalidate=86400"
        }
      ]
    }
  ]
}
```

**Configuration Steps:**
1. Add vercel.json to React project
2. Update WordPress Site URL to `https://mesagroupconsulting.com/blog`
3. Configure WordPress permalinks
4. Test proxy routing
5. Verify SSL works through proxy
6. Set up caching headers

**Result:** Seamless blog experience at mesagroupconsulting.com/blog

**Estimated Time:** 2-3 hours

---

#### Task 10: React Site Blog Integration
**Status:** ⏭️ Pending  
**Dependencies:** Task 9 complete

**Updates Needed:**
1. Articles & Insights page - Replace placeholder links with real blog post links
2. Mesa News page - Connect to WordPress posts
3. Fetch blog posts via WordPress REST API
4. Dynamic blog post cards with featured images
5. Category filtering integration

**WordPress REST API Endpoint:**
```
https://mesagroupconsulting.com/blog/wp-json/wp/v2/posts
```

**React Implementation:**
- Use React Query or SWR for efficient data fetching
- Display blog post previews with featured images
- Link to WordPress blog posts
- Match existing card styling from React site

**Estimated Time:** 3-4 hours

---

#### Task 11: WordPress Menu & Navigation
**Status:** ⏭️ Pending  
**Dependencies:** Task 8 complete

**Menu Configuration:**
1. Create WordPress menu matching React site structure
2. Blog-specific links stay in WordPress
3. Service/product links point back to React site
4. Mobile menu matching React site behavior
5. Active state styling consistency

**Navigation Strategy:**
- **From React → Blog:** Users click blog link, stay in blog
- **From Blog → Services:** Users click service link, go to React site
- Seamless experience - users won't notice the platform switch

**Estimated Time:** 1-2 hours

---

#### Task 12: SEO & Performance Optimization
**Status:** ⏭️ Pending  
**Dependencies:** Tasks 10-11 complete

**SEO Configuration:**
1. Configure Rank Math SEO plugin
2. Set up XML sitemaps
3. Configure meta titles and descriptions
4. Add schema markup
5. Connect to Google Search Console
6. Set up 301 redirects (if needed)

**Performance Optimization:**
1. Install WP Rocket caching plugin
2. Optimize images (WebP, lazy loading)
3. Minify CSS/JS
4. Enable Redis caching (Lightning Stack)
5. Run Lighthouse tests
6. Target: 80+ performance score

**Estimated Time:** 2-3 hours

---

## Timeline Estimate

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| Task 7: WordPress Installation | Setup + plugins | 2-3 hours |
| Task 8: Theme Customization | Design matching | 6-8 hours |
| Task 9: Reverse Proxy | Technical setup | 2-3 hours |
| Task 10: React Integration | API connection | 3-4 hours |
| Task 11: Menu/Navigation | Cross-platform navigation | 1-2 hours |
| Task 12: SEO Optimization | Final polish | 2-3 hours |
| **Total** | **All tasks** | **16-23 hours** |

**Realistic completion:** 3-5 business days

---

## Content Generation Engine Integration

**Future Phase (Post-Blog Launch):**

Once the WordPress blog is live, integration with the content generation engine (`mgc-blog-ai-agent`) will enable:

1. **Automated YouTube Script Generation**
   - Tube Lab API finds high-performing videos
   - Gemini generates original scripts
   - Perplexity enhances with current research
   - Scripts emailed to Evert for recording

2. **Automated Blog Post Creation**
   - AI converts YouTube script to blog post
   - Nano Banana generates custom images
   - Posts to WordPress via REST API (draft mode)
   - Evert reviews and publishes

3. **Social Media Distribution (Future)**
   - AI chops YouTube videos into platform-specific short-form content
   - Automated posting to Facebook, Instagram, TikTok, X
   - Complete digital marketing automation

**This WordPress setup specifically supports the content engine with:**
- WordPress REST API enabled
- Classic Editor for cleaner API posting
- Rank Math SEO for automated optimization
- Proper category/tag taxonomy

---

## What Evert Will Have

### Staff Training (Provided Later):
- How to create blog posts in Gutenberg (drag-and-drop)
- How to add images and media
- How to use Rank Math for SEO
- How to publish and schedule posts
- How to manage categories and tags

### Content Management:
- User-friendly WordPress dashboard
- Gutenberg editor (visual, drag-and-drop)
- Rank Math showing SEO scores in real-time
- Media library for managing images
- Categories and tags for organization

### Automated Content Pipeline:
- AI-generated blog posts arrive as drafts
- Staff reviews, edits if needed
- Publishes with one click
- SEO automatically optimized
- Social media posts auto-generated (future)

---

## Success Criteria

**Phase 2 Complete When:**
- ✅ Blog accessible at mesagroupconsulting.com/blog
- ✅ Design matches React site (seamless transition)
- ✅ Rank Math SEO configured with green scores
- ✅ Performance: 80+ on Lighthouse
- ✅ Staff can create/edit posts easily
- ✅ WordPress REST API tested and working
- ✅ React site links to blog posts correctly

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Design mismatch between React and WordPress | Side-by-side testing, detailed style guide |
| Performance issues | WP Rocket caching, Redis, image optimization |
| SEO problems | Rank Math plugin, proper URL structure, sitemaps |
| API integration issues | Thorough testing, documentation, fallback plans |

---

## Backup & Rollback Plan

**Current Backups (Created Jan 31, 2026):**
- ✅ Old WordPress site backed up on Cloudways
- ✅ Database SQL dump saved locally (`.sql.gz`)
- ✅ Media files downloaded via SFTP
- ✅ Server IP documented for DNS rollback

**If Issues Arise:**
- Blog can be taken offline without affecting main site
- Reverse proxy can be disabled by removing vercel.json
- Old WordPress can be restored from Cloudways backup

---

## Technical Notes

**Vercel Deployment:**
- Auto-deploys from GitHub main branch
- Preview deployments for testing
- Edge CDN for global performance
- Current performance: Desktop 98/100, Mobile 82/100

**WordPress Hosting:**
- Cloudways Lightning Stack (Nginx + Redis)
- Dedicated server (2GB RAM)
- MySQL 8.0 database
- PHP 8.1+
- Cost: ~$24/month
- Dedicated for blog only

**Integration Method:**
- Vercel reverse proxy via vercel.json
- WordPress REST API for data fetching
- Seamless URL structure (/blog/*)
- Shared design system for visual consistency

---

## Questions for Evert

1. **Content Strategy:** What topics should the blog cover initially?
2. **Publishing Frequency:** How often will blog posts be published?
3. **Staff Training:** Who will manage the blog day-to-day?
4. **Categories:** What main categories should we set up? (Credit Repair, Business Funding, Financial Tips, etc.)

---

## Next Session Action Items

- [ ] Complete WordPress installation (Task 7)
- [ ] Install essential plugins (Rank Math, security, caching)
- [ ] Install GeneratePress theme (Task 8)
- [ ] Begin theme customization to match React site
- [ ] Document WordPress admin credentials securely

---

**Last Updated:** February 5, 2026  
**Status:** Tasks 7-11 Complete - WordPress blog fully integrated with React site

## Completed (Feb 4-5, 2026):

**Task 7: WordPress Installation ✅**
- Cloudways server created (2GB RAM, Lightning Stack, $24/mo)
- WordPress installed with MySQL 8.0, PHP 8.1+
- Plugins installed: Rank Math SEO, Classic Editor, Wordfence, W3 Total Cache
- Permalink structure: /%postname%/
- Site icon uploaded
- Rank Math configured (Small Business Site, Financial Service)

**Task 8: Theme Customization ✅**  
- GeneratePress installed and activated
- Colors configured: Mesa Yellow (#f9c65d), Mesa Gold (#bb9446)
- Typography set: Inter font for body and headings
- Custom CSS added to match React site styling
- Basic design matching complete

**Task 9: Reverse Proxy Configuration ✅**
- Vercel reverse proxy configured via `vercel.json`
- WordPress accessible at `https://mesagroupconsulting.com/blog/`
- SSL working correctly through proxy
- Seamless URL routing from main site to blog

**Task 10: React Site Blog Integration ✅**
- WordPress REST API utility created (`src/utils/wordpress.ts`)
- React Query hooks created (`src/hooks/useWordPress.ts`)
- ArticlesInsights page updated to fetch real WordPress posts
- MesaNews page updated to fetch real WordPress posts
- Featured images, categories, excerpts displayed
- Loading and error states implemented
- Links point to WordPress via proxy URL
- Fallback to placeholder content if no WordPress posts
- HTML entities properly decoded in titles

**Note:** Both Articles & News pages currently show the same WordPress posts. To differentiate:
- Create WordPress categories: "Articles", "News", "Company Updates", etc.
- Update React pages to filter by category using `categories` parameter in API calls
- Example: `useWordPressPosts({ per_page: 9, categories: '5' })` where 5 is the category ID

**Task 11: WordPress Menu & Navigation ✅ COMPLETE**
- ✅ Header styling to match React site (black background, white text, Mesa Yellow accents)
- ✅ Top info bar with hours, email, address, social icons (via WPCode "Top Info Bar 2" snippet)
- ✅ Main navigation menu configured with links back to React site pages
- ✅ Custom CSS in WordPress Customizer for header/menu styling
- ✅ Slide-out panel implemented with:
  - MGC dark logo for white background
  - Mission statement
  - Hours of operation
  - Contact info (phone, email, address)
  - Social media links
- ✅ Header CTA elements (phone number with dark gray background/white icon, Client Login link, dot grid trigger)
- ✅ Proper divider lines between header elements
- ✅ Email links use copy-to-clipboard with toast notification (workaround for mailto: issues)
- ✅ SVG icons scaled properly using `<g transform="scale()">` technique for WPCode compatibility
- ✅ Menu updated: "Blog" renamed to "Resources" with nested items (Articles & Insights, Mesa News, Letter Templates)

**WPCode Snippets Structure:**
- "Top Info Bar 2" - Creates the top bar above header (hours, email with copy-to-clipboard, address, social icons)
- "Header Enhancement" - Slide-out panel, header CTA injection, toast notifications

**Local Files (for reference when updating WPCode):**
- `wpcode-top-info-bar-FIXED.html` - Top info bar snippet
- `wpcode-header-snippet-FIXED.html` - Header enhancement snippet

**WordPress Customizer CSS (Additional CSS):**
```css
/* Force vertical dropdown menus */
.main-navigation .sub-menu,
.primary-menu .sub-menu,
nav ul ul {
    display: block !important;
    flex-direction: column !important;
}

.main-navigation .sub-menu li,
.primary-menu .sub-menu li,
nav ul ul li {
    display: block !important;
    width: 100% !important;
}
```

**Remaining Tasks:**
- [ ] Task 12: SEO & Performance Optimization
