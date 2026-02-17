# Perplexity Prompt: WordPress Blog Post Migration

## Copy and paste this entire prompt into Perplexity:

---

I need to migrate blog posts from an old WordPress installation to a new WordPress blog. Here's my situation:

**Old Site (Source):**
- Domain: mesagroupconsulting.com (now replaced with React/Vite site)
- Platform: WordPress (previously hosted on Cloudways)
- Status: WordPress admin panel is no longer accessible (shows React 404 page)
- Backups available: Full Cloudways server backup + complete site rip (HTML/files)

**New Site (Destination):**
- Domain: blog.mesagroupconsulting.com
- Platform: Fresh WordPress installation on Cloudways
- Hosting: Cloudways (Lightning Stack, 2GB RAM)
- Plugins: Rank Math SEO, Classic Editor, W3 Total Cache

**What I have access to:**
1. ✅ Full Cloudways backup of old WordPress site (database + files)
2. ✅ Complete site rip/export before WordPress was replaced
3. ✅ Access to Cloudways dashboard and server management
4. ✅ New WordPress blog at blog.mesagroupconsulting.com (admin access)
5. ❌ NO access to old WordPress admin panel (domain now serves React app)

**What I need to accomplish:**
1. Extract all blog posts from the old WordPress site
2. Preserve post content, titles, featured images, categories, tags, and metadata
3. Import posts into new WordPress blog at blog.mesagroupconsulting.com
4. Maintain SEO (permalinks, meta descriptions if possible)
5. Avoid duplicate content issues

**Specific questions:**

1. **Best extraction method:** What's the most reliable way to extract WordPress posts when I don't have admin panel access but have Cloudways backups and site rips?

2. **Cloudways backup restoration:** Can I temporarily restore the old WordPress backup to a staging subdomain on Cloudways just to export the posts, then delete it? What's the process?

3. **Database-level extraction:** Can I extract posts directly from the WordPress database backup (SQL dump)? What tables contain post data, and what's the minimum data I need?

4. **WordPress XML export from backup:** Is there a way to generate a WordPress XML export file from a database backup without having a live WordPress installation?

5. **Import methods for new site:** Once I have the posts extracted (as XML, JSON, or database), what's the best way to import them into the new WordPress blog? Should I use:
   - WordPress built-in importer
   - WP All Import plugin
   - Manual database insertion
   - WordPress REST API

6. **Image/media migration:** How do I ensure featured images and inline post images transfer correctly? Do I need to separately upload media to the new site?

7. **SEO preservation:** How can I maintain the same permalinks and avoid 404s or duplicate content penalties?

8. **Fastest/safest approach:** Given my specific situation (Cloudways backups + site rip, no live admin access), what's the fastest and safest step-by-step process?

Please provide a detailed, technical response with specific commands, file paths, and tool recommendations. I'm comfortable with databases, SSH/SFTP, and command-line tools if needed.

**Hosting environment:**
- Old site: Cloudways (backup available)
- New site: Cloudways (Lightning Stack, WordPress 6.x, PHP 8.1+, MySQL 8.0)

---

## Additional Context (optional - include if helpful):

The old site had approximately 10-15 blog posts, some written by Francisco (team member) and some AI-generated. We want to bring ALL posts over to the new blog to maintain SEO value and content continuity. The new blog uses Rank Math SEO and will eventually integrate with our automated content generation system.
