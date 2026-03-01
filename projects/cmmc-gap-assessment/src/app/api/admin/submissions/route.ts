import { NextRequest, NextResponse } from 'next/server';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const password = request.headers.get('x-admin-password');
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const format = request.nextUrl.searchParams.get('format');

  try {
    // Read from /tmp file storage
    const submissionsDir = path.join('/tmp', 'submissions');
    let files: string[];
    try {
      files = await readdir(submissionsDir);
    } catch {
      return format === 'csv'
        ? new NextResponse('No submissions found', { status: 200, headers: { 'Content-Type': 'text/plain' } })
        : NextResponse.json([]);
    }

    const submissions = [];
    for (const file of files.filter(f => f.endsWith('.json'))) {
      try {
        const content = await readFile(path.join(submissionsDir, file), 'utf-8');
        submissions.push(JSON.parse(content));
      } catch { /* skip */ }
    }

    submissions.sort((a: any, b: any) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

    // CSV export
    if (format === 'csv') {
      const headers = ['Date', 'Company', 'Contact', 'Email', 'Phone', 'CMMC Level', 'Grant Code', 'SPRS Score', 'Score %', 'Gaps'];
      const rows = submissions.map((s: any) => {
        const pct = Math.round((s.result.totalScore / Math.max(s.result.maxScore, 1)) * 100);
        return [
          new Date(s.submittedAt).toISOString(),
          `"${(s.companyInfo?.name || '').replace(/"/g, '""')}"`,
          `"${(s.companyInfo?.contact || '').replace(/"/g, '""')}"`,
          s.companyInfo?.email || '',
          s.companyInfo?.phone || '',
          s.companyInfo?.level === 'L1' ? 'Level 1' : 'Level 2',
          s.grantCode || '',
          s.result?.sprsScore ?? '',
          `${pct}%`,
          s.result?.gaps?.length ?? '',
        ].join(',');
      });

      const csv = [headers.join(','), ...rows].join('\n');
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="cmmc-submissions-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    return NextResponse.json(submissions);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
