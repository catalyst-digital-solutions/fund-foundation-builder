# Deployment Checklist - Mesa Group Consulting Website Launch

**Launch Date:** December 28-29, 2024
**Meeting with Evert:** December 28, 2024

---

## ✅ Pre-Launch Preparation (COMPLETE)

- [x] Delete unused v1 pages (credit-repair, student-loan-refi, business-funding, zero-interest-business-funding)
- [x] Rename v2 pages to v1 names
- [x] Update App.tsx routes
- [x] Test build successfully (`npm run build`)
- [x] Create `vercel.json` configuration
- [x] Document environment variables

---

## 🚀 Vercel Setup (IN PROGRESS - Mario)

### Step 1: Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"**
3. Import from GitHub: `catalyst-digital-solutions/fund-foundation-builder`
4. **Framework Preset:** Vite (should auto-detect)
5. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **"Deploy"** (this will be the first preview deployment)

### Step 2: Add Environment Variables
In Vercel Project Settings → Environment Variables, add:

```
SUPABASE_URL=https://sbjvihuehvgxonyrwmax.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNianZpaHVlaHZneG9ueXJ3bWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NTA3MDQsImV4cCI6MjA2ODUyNjcwNH0.uZWfK4YwWZMtUE-iErR-6Inpi1XsHIpGiPKBpxKCa_c
```

**Environment:** Production, Preview, Development (check all three)

### Step 3: Test Preview URL
- Vercel will provide a preview URL (e.g., `fund-foundation-builder.vercel.app`)
- Test all critical pages:
  - [x] Homepage
  - [x] About
  - [x] For Consumers
  - [x] For Businesses
  - [x] Credit Repair
  - [x] Business Funding
  - [x] Contact

---

## 🌐 DNS Configuration (LAUNCH DAY)

### GoDaddy DNS Settings

**Main Website (mesagroupconsulting.com):**
1. Go to GoDaddy DNS Management
2. Delete or update existing A record for `@` (root domain)
3. Add new A record:
   - **Type:** A
   - **Name:** @ (or leave blank for root)
   - **Value:** (Get from Vercel Project Settings → Domains → "Add Domain")
   - OR use CNAME: `cname.vercel-dns.com`
4. Add CNAME for www:
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com`

**Blog Subdomain (blog.mesagroupconsulting.com):**
1. Get Cloudways server IP address (from Cloudways dashboard)
2. Add A record:
   - **Type:** A
   - **Name:** blog
   - **Value:** [Cloudways IP address]

**Staging Subdomain (staging.mesagroupconsulting.com):**
1. Update existing A record:
   - **Type:** A
   - **Name:** staging
   - **Value:** (Get from Vercel - can point to same deployment or separate preview)

**SmartCredit Subdomain (smartcredit.mesagroupconsulting.com):**
1. **FIRST:** Contact GoDaddy support to unlock/remove locked A records
2. Once unlocked, add A record:
   - **Type:** A
   - **Name:** smartcredit
   - **Value:** (Same as main site - Vercel IP or CNAME)

---

## 📝 WordPress Blog Configuration (LAUNCH DAY)

### Move Blog to Subdomain
1. Log in to WordPress admin on Cloudways
2. Go to **Settings → General**
3. Update:
   - **WordPress Address (URL):** `https://blog.mesagroupconsulting.com`
   - **Site Address (URL):** `https://blog.mesagroupconsulting.com`
4. Save changes

### Set Up 301 Redirects
Add to `.htaccess` or use Redirection plugin:

```apache
# Redirect old WordPress pages to React site
Redirect 301 /about https://mesagroupconsulting.com/about
Redirect 301 /contact https://mesagroupconsulting.com/contact
Redirect 301 /services https://mesagroupconsulting.com/for-consumers

# Redirect blog posts to new subdomain
RedirectMatch 301 ^/blog/(.*)$ https://blog.mesagroupconsulting.com/$1
```

---

## ✅ Final Testing Checklist (AFTER LAUNCH)

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Calendly popups open correctly
- [ ] Blog subdomain accessible (blog.mesagroupconsulting.com)
- [ ] SSL certificate active on all domains
- [ ] Mobile responsive (test on phone)
- [ ] All external CTAs work (funding apps, credit repair portal)
- [ ] Google Analytics tracking (if configured)

---

## 📞 Emergency Rollback Plan

If something goes wrong during launch:

1. **Vercel Issues:** Change DNS back to old hosting immediately
2. **Blog Issues:** Revert WordPress URLs in Settings → General
3. **DNS Propagation:** Can take 15-60 minutes - be patient

**Old WordPress IP:** (document current IP before changing)
**Lovable Staging IP:** 185.158.133.1

---

## 📊 Post-Launch Tasks (Within 48 Hours)

- [ ] Submit XML sitemap to Google Search Console
- [ ] Set up Google Analytics (check with Evert for existing property)
- [ ] Monitor Vercel deployment logs for errors
- [ ] Check Google Search Console for 404 errors
- [ ] Update any external backlinks (if applicable)
- [ ] Notify Evert of successful launch

---

## 🔑 Important Credentials & URLs

**GitHub Repo:** https://github.com/catalyst-digital-solutions/fund-foundation-builder
**Vercel Project:** (Add URL after setup)
**Cloudways Dashboard:** (Add URL)
**GoDaddy Account:** (Access details)

**Calendly URL:** https://calendly.com/mesagroupconsulting/mesa-group-consulting-consultation-calendar

**External CTAs:**
- Business Funding App: https://funding-app.mesagroupconsulting.com/Opt-In
- Credit Repair Portal: https://portal.mesagroupconsulting.com//portal-signUp/signup.jsp?id=MjI1cm9wbjdDZFc1U1d0REI0NnNJdz09
- Business Credit (Full): https://mesagroupcapital.com/business-credit-enroll
- Business Credit (DIY): https://mesagroupcapital.com/bcfs-diy-enroll

---

**Last Updated:** December 28, 2024
**Status:** Ready for Vercel configuration and launch
