const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

interface SupabaseResponse<T = unknown> {
  data: T | null;
  error: string | null;
}

async function supabaseFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<SupabaseResponse<T>> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { data: null, error: 'Supabase not configured' };
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      ...options,
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...options.headers,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      return { data: null, error: `Supabase ${res.status}: ${text}` };
    }

    const data = await res.json() as T;
    return { data, error: null };
  } catch (err) {
    return { data: null, error: String(err) };
  }
}

export async function saveSubmission(submission: {
  id: string;
  companyInfo: { name: string; contact: string; email: string; phone: string; level: string };
  responses: Record<string, string>;
  notes: Record<string, string>;
  grantCode: string;
  result: { sprsScore: number; totalScore: number; maxScore: number; gaps: unknown[] };
}): Promise<{ success: boolean; error?: string }> {
  const scorePercent = Math.round(
    (submission.result.totalScore / Math.max(submission.result.maxScore, 1)) * 100
  );

  const row = {
    id: submission.id,
    company_name: submission.companyInfo.name,
    contact_name: submission.companyInfo.contact,
    email: submission.companyInfo.email,
    phone: submission.companyInfo.phone,
    cmmc_level: submission.companyInfo.level,
    grant_code: submission.grantCode,
    sprs_score: submission.result.sprsScore,
    score_percent: scorePercent,
    total_gaps: submission.result.gaps.length,
    responses: submission.responses,
    notes: submission.notes,
    result: submission.result,
    submitted_at: new Date().toISOString(),
  };

  const { error } = await supabaseFetch('submissions', {
    method: 'POST',
    body: JSON.stringify(row),
  });

  if (error) {
    console.error('Supabase save failed:', error);
    return { success: false, error };
  }
  return { success: true };
}

export async function getSubmissions(limit = 100, offset = 0): Promise<{
  success: boolean;
  submissions: unknown[];
  error?: string;
}> {
  const { data, error } = await supabaseFetch<unknown[]>(
    `submissions?select=*&order=submitted_at.desc&limit=${limit}&offset=${offset}`
  );

  if (error) {
    return { success: false, submissions: [], error };
  }
  return { success: true, submissions: data || [] };
}

export async function getSubmission(id: string): Promise<{
  success: boolean;
  submission: unknown | null;
  error?: string;
}> {
  const { data, error } = await supabaseFetch<unknown[]>(
    `submissions?id=eq.${encodeURIComponent(id)}&limit=1`
  );

  if (error) {
    return { success: false, submission: null, error };
  }
  const arr = data as unknown[];
  return { success: true, submission: arr?.[0] || null };
}
