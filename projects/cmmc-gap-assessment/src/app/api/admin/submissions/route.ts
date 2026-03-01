import { NextRequest, NextResponse } from 'next/server';
import { getSubmissions } from '@/lib/supabase';

interface SupabaseRow {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  cmmc_level: string;
  grant_code: string;
  sprs_score: number;
  score_percent: number;
  total_gaps: number;
  responses: Record<string, string>;
  notes: Record<string, string>;
  result: unknown;
  submitted_at: string;
}

function transformRow(row: SupabaseRow) {
  return {
    id: row.id,
    companyInfo: {
      name: row.company_name,
      contact: row.contact_name,
      email: row.email,
      phone: row.phone,
      level: row.cmmc_level,
    },
    grantCode: row.grant_code,
    responses: row.responses || {},
    notes: row.notes || {},
    result: row.result || {
      totalScore: 0,
      maxScore: 1,
      sprsScore: row.sprs_score || 0,
      gaps: [],
      familyScores: [],
      companyInfo: {
        name: row.company_name,
        contact: row.contact_name,
        email: row.email,
        phone: row.phone,
        level: row.cmmc_level,
      },
    },
    submittedAt: row.submitted_at,
  };
}

export async function GET(request: NextRequest) {
  const password = request.headers.get('x-admin-password');
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '100');
  const offset = parseInt(url.searchParams.get('offset') || '0');

  const { success, submissions, error } = await getSubmissions(limit, offset);

  if (!success) {
    return NextResponse.json({ error: error || 'Failed to fetch submissions' }, { status: 500 });
  }

  const transformed = (submissions as SupabaseRow[]).map(transformRow);
  return NextResponse.json(transformed);
}
