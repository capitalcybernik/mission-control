import { NextRequest, NextResponse } from 'next/server';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const password = request.headers.get('x-admin-password');
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const submissionsDir = path.join(process.cwd(), 'src', 'data', 'submissions');
    let files: string[];
    try {
      files = await readdir(submissionsDir);
    } catch {
      return NextResponse.json([]);
    }

    const submissions = [];
    for (const file of files.filter(f => f.endsWith('.json'))) {
      try {
        const content = await readFile(path.join(submissionsDir, file), 'utf-8');
        submissions.push(JSON.parse(content));
      } catch { /* skip */ }
    }

    submissions.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    return NextResponse.json(submissions);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
