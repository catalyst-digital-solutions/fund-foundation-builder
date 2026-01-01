# Newsletter Backend Implementation Guide

## Overview

This guide explains how to implement the backend API endpoint for GHL (GoHighLevel) newsletter integration. The frontend is already configured to call `/api/newsletter/subscribe` with proper payload and error handling.

## Frontend Implementation (Already Complete)

The [ArticlesInsights.tsx](src/pages/ArticlesInsights.tsx) page now includes:

- **Loading state** with spinner animation during submission
- **Success feedback** with green confirmation message
- **Error handling** with red error message
- **Auto-reset** messages after 5 seconds
- **Disabled form** during submission to prevent duplicate requests

### Frontend Payload Structure

```json
{
  "email": "user@example.com",
  "source": "Mesa React SPA - Articles & Insights",
  "tags": ["newsletter", "articles-page"],
  "utmSource": "mesa-website",
  "utmMedium": "newsletter-signup",
  "utmCampaign": "articles-insights"
}
```

## Backend Requirements

### 1. GHL API Credentials

You'll need:
- **GHL API Key** or **OAuth Bearer Token**
- **Location ID** (your GHL sub-account/location ID)

Get these from GHL Dashboard:
1. Go to Settings → API Keys
2. Create a new API key with "Contacts" permissions
3. Copy your Location ID from Settings → Business Profile

### 2. Backend Endpoint Specification

**Endpoint:** `POST /api/newsletter/subscribe`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "string (required)",
  "source": "string (optional)",
  "tags": ["string"] (optional),
  "utmSource": "string (optional)",
  "utmMedium": "string (optional)",
  "utmCampaign": "string (optional)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "contactId": "GHL_CONTACT_ID"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message"
}
```

## Implementation Options

### Option 1: GHL Contacts API (Recommended)

**Pros:**
- Official, documented API
- Stable and supported
- Full contact management features
- Can trigger GHL workflows via tags

**Cons:**
- Requires backend implementation
- Need to manage API credentials securely

**API Endpoint:** `POST https://services.leadconnectorhq.com/contacts/`

**Required Headers:**
```
Authorization: Bearer YOUR_GHL_API_KEY
Version: 2021-07-28
Content-Type: application/json
```

**Payload:**
```json
{
  "locationId": "YOUR_LOCATION_ID",
  "email": "user@example.com",
  "source": "Mesa React SPA - Articles & Insights",
  "tags": ["newsletter", "articles-page"],
  "customFields": {
    "utm_source": "mesa-website",
    "utm_medium": "newsletter-signup",
    "utm_campaign": "articles-insights"
  }
}
```

### Option 2: Undocumented Form Submission Endpoint

**Pros:**
- Direct form submission
- No backend setup needed

**Cons:**
- Undocumented (may break)
- Requires CAPTCHA handling
- CORS restrictions
- May need network inspection to find field names

**API Endpoint:** `POST https://backend.leadconnectorhq.com/forms/submit`

**Not recommended** unless you absolutely cannot implement backend.

## Sample Backend Implementations

### Node.js + Express

```javascript
// api/newsletter/subscribe.js
const express = require('express');
const router = express.Router();

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

router.post('/subscribe', async (req, res) => {
  const { email, source, tags, utmSource, utmMedium, utmCampaign } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  try {
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        source: source || 'Mesa React SPA',
        tags: tags || ['newsletter'],
        customFields: {
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'GHL API error');
    }

    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      contactId: data.contact?.id,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe. Please try again later.',
    });
  }
});

module.exports = router;
```

### Serverless Function (Vercel/Netlify)

```javascript
// api/newsletter/subscribe.js (Vercel Serverless Function)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email, source, tags, utmSource, utmMedium, utmCampaign } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  try {
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationId: process.env.GHL_LOCATION_ID,
        email,
        source: source || 'Mesa React SPA',
        tags: tags || ['newsletter'],
        customFields: {
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'GHL API error');
    }

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      contactId: data.contact?.id,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe. Please try again later.',
    });
  }
}
```

### Python + Flask

```python
# api/newsletter/subscribe.py
from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

GHL_API_KEY = os.getenv('GHL_API_KEY')
GHL_LOCATION_ID = os.getenv('GHL_LOCATION_ID')

@app.route('/api/newsletter/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'success': False, 'error': 'Email is required'}), 400

    try:
        response = requests.post(
            'https://services.leadconnectorhq.com/contacts/',
            headers={
                'Authorization': f'Bearer {GHL_API_KEY}',
                'Version': '2021-07-28',
                'Content-Type': 'application/json',
            },
            json={
                'locationId': GHL_LOCATION_ID,
                'email': email,
                'source': data.get('source', 'Mesa React SPA'),
                'tags': data.get('tags', ['newsletter']),
                'customFields': {
                    'utm_source': data.get('utmSource'),
                    'utm_medium': data.get('utmMedium'),
                    'utm_campaign': data.get('utmCampaign'),
                },
            }
        )

        response.raise_for_status()
        result = response.json()

        return jsonify({
            'success': True,
            'message': 'Successfully subscribed to newsletter',
            'contactId': result.get('contact', {}).get('id'),
        }), 200

    except Exception as e:
        print(f'Newsletter subscription error: {e}')
        return jsonify({
            'success': False,
            'error': 'Failed to subscribe. Please try again later.',
        }), 500
```

## GHL Workflow Setup

Once the backend creates contacts with tags, set up GHL workflows to handle newsletter logic:

1. Go to GHL Dashboard → Automations → Workflows
2. Create new workflow: "Newsletter Signup"
3. **Trigger:** Contact Tag Added → "newsletter"
4. **Actions:**
   - Send welcome email
   - Add to newsletter list
   - Send confirmation email
   - Update contact status

## Environment Variables

Add these to your backend environment (`.env` file or hosting platform):

```bash
GHL_API_KEY=your_api_key_here
GHL_LOCATION_ID=your_location_id_here
```

**Security Notes:**
- Never commit API keys to Git
- Use environment variables for all secrets
- Restrict API key permissions to "Contacts" only
- Enable IP whitelisting in GHL if possible

## Testing

### Local Testing (Development Mode)

Since there's no backend yet, the frontend will fail gracefully:
1. Submit button shows loading spinner
2. Fetch fails (no backend endpoint exists)
3. Error message displays
4. Form resets after 5 seconds

### Production Testing Steps

1. Deploy backend with GHL credentials
2. Test with a real email address
3. Verify contact appears in GHL Dashboard
4. Check tags are applied correctly
5. Verify UTM data is captured in custom fields
6. Test GHL workflow triggers

## CORS Configuration

If your backend is on a different domain, configure CORS:

```javascript
// Express example
const cors = require('cors');
app.use(cors({
  origin: 'https://your-frontend-domain.com',
  methods: ['POST'],
}));
```

## Rate Limiting

Consider adding rate limiting to prevent abuse:

```javascript
// Express example with express-rate-limit
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: 'Too many subscription attempts, please try again later.',
});

app.use('/api/newsletter/subscribe', limiter);
```

## Troubleshooting

### Common Issues

1. **401 Unauthorized**
   - Check GHL API key is valid
   - Verify API key has "Contacts" permissions
   - Check Authorization header format

2. **404 Not Found**
   - Verify endpoint URL is correct
   - Check GHL API version header

3. **400 Bad Request**
   - Check locationId is correct
   - Verify email format is valid
   - Check required fields are present

4. **CORS Errors**
   - Configure CORS headers in backend
   - Verify frontend origin is allowed

5. **Contact Not Created**
   - Check GHL Dashboard for duplicate detection settings
   - Verify locationId matches your sub-account
   - Check tag names don't have typos

## Alternative: Hidden Iframe Approach (Not Recommended)

If you absolutely cannot implement backend, you could use hidden iframe submission:

```typescript
// Emergency fallback - use only if no backend option exists
const handleNewsletterSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentWindow?.document;
  if (iframeDoc) {
    iframeDoc.open();
    iframeDoc.write(`
      <form id="ghl-form" action="https://backend.leadconnectorhq.com/forms/submit" method="POST">
        <input type="hidden" name="email" value="${email}" />
        <input type="hidden" name="formId" value="87XreQhYJtAAT7XwLE0p" />
      </form>
      <script>document.getElementById('ghl-form').submit();</script>
    `);
    iframeDoc.close();
  }

  setTimeout(() => document.body.removeChild(iframe), 2000);
};
```

**Issues with this approach:**
- Fragile (depends on undocumented API)
- No error handling
- CAPTCHA issues
- May break without warning
- Hard to debug

## Next Steps

1. Choose implementation approach (Contacts API recommended)
2. Get GHL API credentials from dashboard
3. Implement backend endpoint (see sample code above)
4. Add environment variables to hosting platform
5. Test with real email address
6. Set up GHL workflow to handle "newsletter" tag
7. Monitor logs for errors

## Additional Resources

- [GHL Contacts API Documentation](https://highlevel.stoplight.io/docs/integrations/9d3a2df4e1f6e-create-contact)
- [GHL API Authentication](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview)
- [GHL Workflows Guide](https://support.gohighlevel.com/support/solutions/articles/155000003558-workflows-overview)

---

**Last Updated:** January 1, 2026
**Status:** Frontend complete, awaiting backend implementation
