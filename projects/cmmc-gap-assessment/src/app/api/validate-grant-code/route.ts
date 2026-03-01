import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string' || !code.trim()) {
      return NextResponse.json({ valid: false });
    }

    const trimmed = code.trim().toUpperCase();

    // If GRANT_CODES env var is set, validate against the list
    const validCodes = process.env.GRANT_CODES;
    if (validCodes) {
      const codeList = validCodes.split(',').map(c => c.trim().toUpperCase());
      const valid = codeList.includes(trimmed);
      return NextResponse.json({ valid });
    }

    // If no GRANT_CODES env var, accept any non-empty code (testing mode)
    return NextResponse.json({ valid: true });
  } catch {
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
