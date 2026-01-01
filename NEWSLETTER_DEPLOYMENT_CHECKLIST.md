# Newsletter Integration Deployment Checklist

## ✅ Implementation Complete

The newsletter integration is fully implemented and ready for deployment. Follow these steps to go live.

---

## Step 1: Update `.env` with Your GHL Credentials

You mentioned you already have the Mesa Group Consulting subaccount API key. Update your `.env` file:

```bash
# GoHighLevel Configuration (Newsletter Integration)
GHL_API_KEY=your_actual_ghl_api_key_here
GHL_LOCATION_ID=your_actual_ghl_location_id_here
```

**Where to find these:**
- **GHL_API_KEY**: GHL Dashboard → Settings → API Keys (should already have this)
- **GHL_LOCATION_ID**: GHL Dashboard → Settings → Business Profile → Location ID

---

## Step 2: Test Locally (Optional but Recommended)

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Start local development server on port 5002
vercel dev --listen 5002
```

Then open a new terminal and test with curl:

```bash
curl -X POST http://localhost:5002/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-test-email@example.com",
    "source": "Mesa React SPA - Articles & Insights",
    "tags": ["newsletter", "articles-page"],
    "utmSource": "mesa-website",
    "utmMedium": "newsletter-signup",
    "utmCampaign": "articles-insights"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "contactId": "some_ghl_contact_id"
}
```

Check your GHL Dashboard to verify the contact was created with the correct tags.

---

## Step 3: Deploy to Vercel

```bash
vercel --prod
```

This will:
1. Build your React app
2. Deploy the static files
3. Deploy the serverless function at `/api/newsletter/subscribe`

---

## Step 4: Add Environment Variables to Vercel

You have two options:

### Option A: Vercel CLI (Recommended)
```bash
vercel env add GHL_API_KEY
# Paste your API key when prompted
# Select "Production" environment

vercel env add GHL_LOCATION_ID
# Paste your Location ID when prompted
# Select "Production" environment
```

### Option B: Vercel Dashboard
1. Go to your project on vercel.com
2. Click Settings → Environment Variables
3. Add `GHL_API_KEY` with your actual API key
4. Add `GHL_LOCATION_ID` with your actual location ID
5. Select "Production" for both

**Important:** After adding environment variables, redeploy:
```bash
vercel --prod
```

---

## Step 5: Test on Your Live Site

1. Go to your deployed site: `https://your-site.vercel.app/resources/articles`
2. Scroll to the "Never Miss an Article" section
3. Enter your email address
4. Click "Subscribe"
5. You should see:
   - Loading spinner with "Subscribing..." text
   - Green success banner: "Successfully subscribed! Check your inbox for confirmation."
   - Email field clears automatically

**Verify in GHL:**
- Go to GHL Dashboard → Contacts
- Search for your test email
- Check that:
  - Contact was created
  - Tags are applied: `newsletter`, `articles-page`
  - Custom fields have UTM data (if you set up custom fields)

---

## Step 6: Set Up GHL Workflow (Recommended)

This step automates the newsletter logic after a contact is tagged.

1. Go to GHL Dashboard → Automations → Workflows
2. Click "Create Workflow"
3. Name: "Newsletter Signup"
4. **Trigger:** Contact Tag Added → Select "newsletter" tag
5. **Actions:**
   - Send email: "Welcome to Mesa Group Newsletter"
   - Add to list: Your newsletter email list
   - Send email: Confirmation email with unsubscribe link
   - Update contact status: "Subscribed to Newsletter"

**Why use workflows?**
- The API just creates contacts with tags
- Workflows handle all the email logic
- Easy to modify email templates without touching code
- Can add conditions, delays, and complex automation

---

## Step 7: Monitor and Troubleshoot

### Check Vercel Function Logs

```bash
vercel logs --follow
```

Or go to Vercel Dashboard → Your Project → Functions → Select function → View logs

### Common Issues and Solutions

**Issue: 500 Internal Server Error**
- **Cause:** Environment variables not set in Vercel
- **Fix:** Run `vercel env add GHL_API_KEY` and `vercel env add GHL_LOCATION_ID`, then redeploy

**Issue: 401 Unauthorized**
- **Cause:** Invalid GHL API key
- **Fix:** Verify API key in GHL Dashboard, make sure it has "Contacts" permissions

**Issue: Contact not appearing in GHL**
- **Cause:** Wrong Location ID
- **Fix:** Double-check Location ID in GHL Settings → Business Profile

**Issue: Frontend shows error banner**
- **Cause:** API endpoint not reachable or returning error
- **Fix:** Check Vercel function logs for detailed error message

---

## Testing Checklist

- [ ] Environment variables added to `.env`
- [ ] Local testing successful (`vercel dev` + curl)
- [ ] Contact created in GHL with correct email
- [ ] Tags applied: `newsletter`, `articles-page`
- [ ] Deployed to Vercel (`vercel --prod`)
- [ ] Environment variables added to Vercel dashboard
- [ ] Redeployed after adding env vars
- [ ] Tested on live site with real email
- [ ] Success banner appears in frontend
- [ ] Contact visible in GHL Dashboard
- [ ] GHL workflow created and triggered
- [ ] Welcome email received (if workflow set up)

---

## Rollback Plan (If Something Goes Wrong)

If the newsletter form isn't working:

1. **Temporary fix:** Comment out the API call in frontend
   - Go to [src/pages/ArticlesInsights.tsx](src/pages/ArticlesInsights.tsx)
   - Comment out lines 129-142 (the fetch call)
   - Show a temporary message: "Newsletter signup temporarily unavailable"

2. **Debug:** Check Vercel function logs for errors

3. **Fallback:** Use the old GHL iframe modal while debugging
   - See [NEWSLETTER_BACKEND_IMPLEMENTATION.md](NEWSLETTER_BACKEND_IMPLEMENTATION.md) for iframe approach

---

## Success Indicators

You'll know it's working when:
- ✅ Newsletter form shows loading spinner when submitting
- ✅ Success banner appears after submission
- ✅ Contact appears in GHL within seconds
- ✅ Tags are correctly applied
- ✅ GHL workflow triggers (if set up)
- ✅ Welcome email is sent (if workflow set up)
- ✅ No errors in Vercel function logs

---

## Need Help?

**Documentation:**
- [api/README.md](api/README.md) - API testing and troubleshooting
- [NEWSLETTER_BACKEND_IMPLEMENTATION.md](NEWSLETTER_BACKEND_IMPLEMENTATION.md) - Full implementation guide

**Common Commands:**
```bash
# Check Vercel deployment status
vercel ls

# View function logs
vercel logs

# Test API endpoint locally
vercel dev

# Redeploy to production
vercel --prod
```

---

**Last Updated:** January 1, 2026
**Status:** Ready for deployment

You're ready to test! Just update your `.env` file with the real credentials and follow the steps above.
