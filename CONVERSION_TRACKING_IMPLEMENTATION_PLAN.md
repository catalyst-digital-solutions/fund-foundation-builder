# Conversion Tracking Implementation Plan
**For:** Mesa Group Consulting  
**Contact:** Steve Neu (Marketing)  
**Date:** February 10, 2026  
**Purpose:** Prepare Mesa 360 Credit Repair & Debt Relief pages for Google Ads conversion tracking

---

## Overview

This document outlines the technical implementation requirements for setting up comprehensive conversion tracking on two primary revenue-generating services:

1. **Mesa 360 Credit Restoration** (`/credit-repair`)
2. **Debt Relief** (`/debt-relief`)

These pages will be the initial testing ground for paid Google Ads campaigns, with conversion tracking implemented before ad spend begins.

---

## Priority Pages for Conversion Tracking

### Page 1: Mesa 360 Credit Restoration (`/credit-repair`)
- **Current Monthly Volume:** N/A (new site)
- **Conversion Goals:**
  - Primary: Portal signup (`portal.mesagroupconsulting.com`)
  - Secondary: Free consultation booking (Calendly)
  - Tertiary: Phone calls (trackable number needed)

### Page 2: Debt Relief (`/debt-relief`)
- **Current Monthly Volume:** N/A (new site)
- **Conversion Goals:**
  - Primary: Consultation booking (fulfillment team)
  - Secondary: Phone calls (trackable number needed)

---

## Conversion Events to Track

### 1. Form Submissions
**Event Name:** `form_submission`

**Trigger Points:**
- Mesa 360 Portal Signup (external: `portal.mesagroupconsulting.com`)
- Debt Relief Consultation Booking (Calendly/GHL)
- Contact form submissions

**Implementation Method:**
- Google Tag Manager (GTM) event listener
- Track button clicks leading to external signup portals
- Calendly webhook integration for consultation bookings

### 2. Phone Calls
**Event Name:** `phone_call`

**Trigger Points:**
- Clickable phone number CTAs: `(661) 310-3040`
- Dedicated tracking numbers for each page

**Requirements from Steve:**
- Provision tracking phone numbers via Buyer Call or similar
- Route to main line: (661) 310-3040
- Enable call recording for training purposes
- Report back to Google Ads as conversion event

### 3. Calendly Bookings
**Event Name:** `consultation_booked`

**Trigger Points:**
- "Schedule Your Free Consultation" buttons (Mesa 360)
- Calendly modal completion events

**Implementation Method:**
- Calendly webhook to fire GTM event
- Track via `dataLayer.push()` on successful booking

### 4. Button Clicks (External Links)
**Event Name:** `external_link_click`

**Trigger Points:**
- "Get Free Credit Analysis" → `https://shm.to/yatPKyE`
- "Sign Up Now" → Portal URL
- Any CTA linking to external enrollment/signup

**Implementation Method:**
- GTM click listener on all external CTA buttons
- Track with `event_category: 'CTA'`, `event_label: 'button_text'`

---

## Technical Implementation Steps

### Phase 1: Google Tag Manager Setup (Mario + Steve)
1. **Install GTM Container** (if not already installed)
   - Add GTM script to `index.html` header
   - Verify GTM fires on all pages

2. **Create Data Layer Events**
   - Configure `dataLayer.push()` for each conversion point
   - Test in GTM Preview mode

3. **Set Up Google Ads Conversion Tags**
   - Steve provides conversion IDs from Google Ads account
   - Mario maps GTM triggers to Google Ads conversion tags

### Phase 2: Phone Call Tracking (Steve)
1. **Provision Tracking Numbers**
   - Mesa 360 page: Dedicated tracking number
   - Debt Relief page: Dedicated tracking number
   - Route all calls to: (661) 310-3040

2. **Configure Call Tracking**
   - Enable call recording
   - Set conversion threshold (e.g., calls >45 seconds = qualified lead)
   - Integrate with Google Ads offline conversion import

3. **Update Website with Tracking Numbers**
   - Mario replaces static phone numbers with tracking numbers
   - Add `tel:` links with click tracking

### Phase 3: Calendly Webhook Integration (Mario)
1. **Configure Calendly Webhooks**
   - Set webhook URL to fire GTM event on booking completion
   - Map to `consultation_booked` event

2. **Test Booking Flow**
   - Complete test booking
   - Verify GTM event fires
   - Confirm Google Ads receives conversion data

### Phase 4: External Link Tracking (Mario)
1. **Add Click Listeners**
   - Track all "Sign Up Now", "Get Free Credit Analysis" buttons
   - Fire `external_link_click` event with button context

2. **Test Click Tracking**
   - Verify events fire in GTM Preview
   - Confirm data flows to Google Ads

---

## Conversion Value Attribution

### Mesa 360 Credit Restoration
- **Average Customer Value:** $350-$500 (initial signup) + potential 9-month plan ($2,500-$4,500)
- **Conversion Value (for tracking):** $350 (conservative initial value)
- **Lifetime Value:** $1,500-$2,500 average

### Debt Relief
- **Average Payout:** $500-$1,500 (affiliate/fulfillment fee)
- **Conversion Value (for tracking):** $750 (mid-range estimate)

---

## Success Metrics & Reporting

### Key Performance Indicators (KPIs)
1. **Cost Per Acquisition (CPA)**
   - Target: <$50 per lead
   - Threshold: <$100 per qualified lead

2. **Conversion Rate**
   - Benchmark: 2-5% (landing page to conversion)
   - Goal: >3% within first 30 days

3. **Return on Ad Spend (ROAS)**
   - Target: 3:1 (for every $1 spent, $3 in revenue)
   - Acceptable: 2:1 in testing phase

### Reporting Cadence
- **Daily:** Monitor spend, CPA, conversion count
- **Weekly:** Review ROAS, keyword performance, ad copy A/B tests
- **Monthly:** Full campaign audit, budget adjustments

---

## Testing & Validation Checklist

Before launching Google Ads:
- [ ] GTM container installed and firing on all pages
- [ ] All conversion events tested in GTM Preview mode
- [ ] Google Ads conversion tags mapped correctly
- [ ] Tracking phone numbers provisioned and tested
- [ ] Calendly webhooks firing correctly
- [ ] External link clicks tracked in GTM
- [ ] Test conversion submitted and visible in Google Ads (24-48hr delay expected)
- [ ] Mario and Steve complete test booking/signup to verify end-to-end tracking

---

## Timeline Estimate

| Phase | Task | Owner | Duration | Status |
|-------|------|-------|----------|--------|
| Phase 1 | Install GTM, configure data layer | Mario | 2-3 hours | ⏳ Pending |
| Phase 1 | Provide Google Ads conversion IDs | Steve | 1 hour | ⏳ Pending |
| Phase 1 | Map GTM to Google Ads tags | Mario | 1-2 hours | ⏳ Pending |
| Phase 2 | Provision tracking phone numbers | Steve | 1 day | ⏳ Pending |
| Phase 2 | Update site with tracking numbers | Mario | 30 min | ⏳ Pending |
| Phase 3 | Configure Calendly webhooks | Mario | 1-2 hours | ⏳ Pending |
| Phase 4 | Add external link click tracking | Mario | 1 hour | ⏳ Pending |
| Testing | End-to-end validation | Both | 2-3 hours | ⏳ Pending |

**Total Estimated Time:** 1-2 business days (once Steve provides tracking numbers + conversion IDs)

---

## Notes & Considerations

1. **Google Ads Learning Period:**
   - Google Ads requires ~50 conversions per campaign to optimize effectively
   - Plan for 2-4 week learning period before making major adjustments

2. **Attribution Windows:**
   - Click-through attribution: 30 days (default)
   - View-through attribution: 1 day (recommended for display ads)

3. **Conversion Delay:**
   - Some users may convert days/weeks after initial ad click
   - Use Google Ads conversion window tracking to account for this

4. **CROA Compliance:**
   - All ad copy must comply with Credit Repair Organizations Act (CROA)
   - No guaranteed score increases or specific removal promises
   - Steve to review all ad copy before launch

---

## Contact Information

**Mario (Developer):**
- Implementation of GTM, webhooks, click tracking
- Website updates with tracking numbers

**Steve Neu (Marketing):**
- Google Ads account management
- Provision tracking phone numbers
- Provide conversion IDs for GTM mapping
- Ad copy creation and compliance review

**Evert Calderon (Business Owner):**
- Final approval on tracking numbers
- Access to portal analytics for conversion validation

---

**Document Status:** Draft  
**Next Steps:** Mario to install GTM container; Steve to provision tracking numbers  
**Last Updated:** February 10, 2026
