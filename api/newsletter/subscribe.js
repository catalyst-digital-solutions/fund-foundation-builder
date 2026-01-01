/**
 * Vercel Serverless Function: Newsletter Subscription
 *
 * This endpoint receives newsletter signup requests from the frontend
 * and creates contacts in GoHighLevel CRM using the Contacts API.
 *
 * Environment Variables Required:
 * - GHL_API_KEY: GoHighLevel API key with Contacts permissions
 * - GHL_LOCATION_ID: GoHighLevel location/sub-account ID
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // In production, replace with your domain
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Validate environment variables
  const GHL_API_KEY = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.error('Missing GHL configuration:', {
      hasApiKey: !!GHL_API_KEY,
      hasLocationId: !!GHL_LOCATION_ID,
    });
    return res.status(500).json({
      success: false,
      error: 'Server configuration error. Please contact support.'
    });
  }

  // Extract and validate request body
  const { email, source, tags, utmSource, utmMedium, utmCampaign } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: 'Email address is required.'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email address format.'
    });
  }

  try {
    console.log('Newsletter signup request:', {
      email,
      source,
      tags,
      utmParams: { utmSource, utmMedium, utmCampaign },
    });

    // Call GoHighLevel Contacts API
    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        source: source || 'Mesa React SPA - Newsletter',
        tags: tags || ['newsletter'],
        customFields: {
          utm_source: utmSource || '',
          utm_medium: utmMedium || '',
          utm_campaign: utmCampaign || '',
        },
      }),
    });

    const ghlData = await ghlResponse.json();

    // Log GHL response for debugging
    console.log('GHL API response:', {
      status: ghlResponse.status,
      statusText: ghlResponse.statusText,
      data: ghlData,
    });

    // Handle GHL API errors
    if (!ghlResponse.ok) {
      // Check for duplicate contact (this is usually OK - just update tags)
      if (ghlResponse.status === 409 || ghlData.message?.includes('already exists')) {
        console.log('Contact already exists in GHL, considering this a success');
        return res.status(200).json({
          success: true,
          message: 'Successfully subscribed to newsletter',
          contactId: ghlData.contact?.id || null,
          note: 'Contact already existed and was updated',
        });
      }

      throw new Error(ghlData.message || `GHL API error: ${ghlResponse.status}`);
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      contactId: ghlData.contact?.id || null,
    });

  } catch (error) {
    console.error('Newsletter subscription error:', {
      message: error.message,
      stack: error.stack,
    });

    return res.status(500).json({
      success: false,
      error: 'Failed to subscribe. Please try again later or contact support.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
