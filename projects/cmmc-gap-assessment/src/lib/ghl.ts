const GHL_BASE = 'https://services.leadconnectorhq.com';

interface GHLContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  tags: string[];
  customFields: { id: string; value: string }[];
  source: string;
}

export async function createGHLContact(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  cmmcLevel: string;
  grantCode: string;
  sprsScore: number;
  scorePercent: number;
  gapsCount: number;
  submissionId: string;
}): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    return { success: false, error: 'GHL credentials not configured' };
  }

  // Split contact name into first/last
  const nameParts = data.contactName.trim().split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  try {
    const res = await fetch(`${GHL_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        locationId,
        tags: ['CMMC-Assessment', 'Gap-Assessment-Completed'],
        source: 'CMMC Gap Assessment Tool',
        customFields: [
          { key: 'cmmc_level', field_value: data.cmmcLevel },
          { key: 'sprs_score', field_value: String(data.sprsScore) },
          { key: 'score_percent', field_value: `${data.scorePercent}%` },
          { key: 'gaps_count', field_value: String(data.gapsCount) },
          { key: 'grant_code', field_value: data.grantCode },
          { key: 'submission_date', field_value: new Date().toISOString() },
          { key: 'submission_id', field_value: data.submissionId },
        ],
      }),
    });

    if (res.ok) {
      const result = await res.json();
      return { success: true, contactId: result.contact?.id };
    } else {
      const text = await res.text();
      console.error('GHL API error:', res.status, text);
      return { success: false, error: `GHL API ${res.status}: ${text}` };
    }
  } catch (err) {
    console.error('GHL request failed:', err);
    return { success: false, error: String(err) };
  }
}

export async function getGHLContacts(tag: string): Promise<{ success: boolean; contacts?: any[]; error?: string }> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    return { success: false, error: 'GHL credentials not configured' };
  }

  try {
    const url = new URL(`${GHL_BASE}/contacts/`);
    url.searchParams.set('locationId', locationId);
    url.searchParams.set('query', tag);
    url.searchParams.set('limit', '100');

    const res = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Version': '2021-07-28',
      },
    });

    if (res.ok) {
      const result = await res.json();
      return { success: true, contacts: result.contacts || [] };
    } else {
      const text = await res.text();
      return { success: false, error: `GHL API ${res.status}: ${text}` };
    }
  } catch (err) {
    return { success: false, error: String(err) };
  }
}
