# API Routes

This directory contains Vercel Serverless Functions for backend operations.

## Newsletter Subscription API

**Endpoint:** `POST /api/newsletter/subscribe`

### Setup Instructions

1. **Add GHL Credentials to `.env` file:**

```bash
# GoHighLevel Configuration (Newsletter Integration)
GHL_API_KEY=your_actual_ghl_api_key_here
GHL_LOCATION_ID=your_actual_ghl_location_id_here
```

2. **Get Your GHL Credentials:**

- Go to GHL Dashboard → Settings → API Keys
- Create a new API key with "Contacts" permissions
- Copy your API key
- Go to Settings → Business Profile to find your Location ID

3. **Add Environment Variables to Vercel:**

```bash
# Option 1: Using Vercel CLI
vercel env add GHL_API_KEY
vercel env add GHL_LOCATION_ID

# Option 2: Vercel Dashboard
# Go to Project Settings → Environment Variables
# Add both GHL_API_KEY and GHL_LOCATION_ID
```

4. **Deploy to Vercel:**

```bash
vercel --prod
```

### Local Testing

To test the API locally with Vercel CLI:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Run local development server on port 5002
vercel dev --listen 5002
```

Then test with:

```bash
curl -X POST http://localhost:5002/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "source": "Mesa React SPA - Articles & Insights",
    "tags": ["newsletter", "articles-page"],
    "utmSource": "mesa-website",
    "utmMedium": "newsletter-signup",
    "utmCampaign": "articles-insights"
  }'
```

### API Response Format

**Success (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "contactId": "GHL_CONTACT_ID"
}
```

**Error (400/500):**
```json
{
  "success": false,
  "error": "Error message"
}
```

### Frontend Integration

The frontend ([ArticlesInsights.tsx](../src/pages/ArticlesInsights.tsx)) is already configured to call this endpoint with proper error handling and loading states.

### Troubleshooting

**Issue:** 500 Internal Server Error
- Check that `GHL_API_KEY` and `GHL_LOCATION_ID` are set in Vercel environment variables
- Verify API key has "Contacts" permissions in GHL
- Check Vercel function logs for detailed error messages

**Issue:** 409 Conflict (Contact already exists)
- This is handled automatically - the function treats duplicates as success
- Contact will be updated with new tags

**Issue:** CORS Error
- The API is configured to allow all origins (`*`)
- In production, update CORS settings in `subscribe.js` to allow only your domain

### GHL Workflow Setup

After the API is working, set up a GHL workflow to automate newsletter actions:

1. Go to GHL Dashboard → Automations → Workflows
2. Create new workflow: "Newsletter Signup"
3. **Trigger:** Contact Tag Added → "newsletter"
4. **Actions:**
   - Send welcome email
   - Add to newsletter email list
   - Update contact status
   - Send confirmation email

This allows the API to simply tag contacts, and GHL workflows handle all the newsletter logic.

---

**Last Updated:** January 1, 2026
