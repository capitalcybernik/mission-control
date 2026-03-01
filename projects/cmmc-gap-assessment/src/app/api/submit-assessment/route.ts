import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { calculateResults } from '@/lib/scoring';
import { createGHLContact } from '@/lib/ghl';

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function POST(request: NextRequest) {
  try {
    const { companyInfo, grantCode, responses, notes } = await request.json();

    if (!companyInfo?.name || !companyInfo?.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = calculateResults(companyInfo, responses);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const scorePercent = Math.round((result.totalScore / Math.max(result.maxScore, 1)) * 100);
    const submission = {
      id,
      companyInfo,
      grantCode: grantCode || '',
      responses,
      notes: notes || {},
      result,
      submittedAt: new Date().toISOString(),
    };

    // 1. Save to GHL CRM (primary)
    const ghlResult = await createGHLContact({
      companyName: companyInfo.name,
      contactName: companyInfo.contact,
      email: companyInfo.email,
      phone: companyInfo.phone,
      cmmcLevel: companyInfo.level === 'L1' ? 'Level 1' : 'Level 2',
      grantCode: grantCode || '',
      sprsScore: result.sprsScore,
      scorePercent,
      gapsCount: result.gaps.length,
      submissionId: id,
    });

    if (!ghlResult.success) {
      console.error('GHL submission failed:', ghlResult.error);
    }

    // 2. Save to /tmp as fallback
    try {
      const submissionsDir = path.join('/tmp', 'submissions');
      await mkdir(submissionsDir, { recursive: true });
      await writeFile(
        path.join(submissionsDir, `${id}.json`),
        JSON.stringify(submission, null, 2)
      );
    } catch (fsErr) {
      console.error('File fallback failed:', fsErr);
    }

    // 3. Determine top 5 gap areas
    const familyGapCounts: Record<string, number> = {};
    for (const gap of result.gaps) {
      familyGapCounts[gap.family] = (familyGapCounts[gap.family] || 0) + 1;
    }
    const topGapFamilies = Object.entries(familyGapCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topGapFamilyNames: Record<string, string> = {};
    for (const fs of result.familyScores) {
      topGapFamilyNames[fs.familyCode] = fs.familyName;
    }

    const topGapsHtml = topGapFamilies.map(([code, count]) =>
      `<tr><td style="padding:6px 16px;border-bottom:1px solid #eee;">${escapeHtml(code)}: ${escapeHtml(topGapFamilyNames[code] || code)}</td><td style="padding:6px 16px;border-bottom:1px solid #eee;text-align:center;font-weight:bold;color:#c0392b;">${count} gap${count !== 1 ? 's' : ''}</td></tr>`
    ).join('');

    // 4. Send email notification
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,Helvetica,sans-serif;background:#f5f7fa;margin:0;padding:20px;">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

  <!-- Header -->
  <div style="background:#1e3a5f;color:#ffffff;padding:24px 32px;">
    <h1 style="margin:0;font-size:22px;">New CMMC Gap Assessment Submission</h1>
    <p style="margin:8px 0 0;opacity:0.8;font-size:14px;">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
  </div>

  <div style="padding:32px;">

    <!-- Company Info -->
    <h2 style="color:#1e3a5f;font-size:16px;margin:0 0 12px;border-bottom:2px solid #1e3a5f;padding-bottom:8px;">Company Information</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;width:140px;">Company</td><td style="padding:6px 16px;">${escapeHtml(companyInfo.name)}</td></tr>
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;">Contact</td><td style="padding:6px 16px;">${escapeHtml(companyInfo.contact)}</td></tr>
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;">Email</td><td style="padding:6px 16px;"><a href="mailto:${escapeHtml(companyInfo.email)}">${escapeHtml(companyInfo.email)}</a></td></tr>
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;">Phone</td><td style="padding:6px 16px;">${escapeHtml(companyInfo.phone)}</td></tr>
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;">CMMC Level</td><td style="padding:6px 16px;">${companyInfo.level === 'L1' ? 'Level 1' : 'Level 2'}</td></tr>
      <tr><td style="padding:6px 16px;font-weight:bold;color:#555;">Grant Code</td><td style="padding:6px 16px;">${escapeHtml(grantCode || 'N/A')}</td></tr>
    </table>

    <!-- Score Summary -->
    <h2 style="color:#1e3a5f;font-size:16px;margin:0 0 12px;border-bottom:2px solid #1e3a5f;padding-bottom:8px;">Assessment Results</h2>
    <div style="display:flex;gap:16px;margin-bottom:24px;">
      <div style="flex:1;background:#f0f4f8;border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:32px;font-weight:bold;color:${scorePercent >= 80 ? '#27ae60' : scorePercent >= 50 ? '#f39c12' : '#c0392b'};">${scorePercent}%</div>
        <div style="font-size:12px;color:#777;margin-top:4px;">Compliance Score</div>
      </div>
      <div style="flex:1;background:#f0f4f8;border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:32px;font-weight:bold;color:${result.sprsScore >= 0 ? '#27ae60' : '#c0392b'};">${result.sprsScore}</div>
        <div style="font-size:12px;color:#777;margin-top:4px;">SPRS Score</div>
      </div>
      <div style="flex:1;background:#f0f4f8;border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:32px;font-weight:bold;color:#c0392b;">${result.gaps.length}</div>
        <div style="font-size:12px;color:#777;margin-top:4px;">Gaps Found</div>
      </div>
    </div>

    <!-- Top Gap Areas -->
    ${topGapFamilies.length > 0 ? `
    <h2 style="color:#1e3a5f;font-size:16px;margin:0 0 12px;border-bottom:2px solid #1e3a5f;padding-bottom:8px;">Top Gap Areas</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr style="background:#f5f7fa;"><th style="padding:8px 16px;text-align:left;font-size:13px;color:#555;">Control Family</th><th style="padding:8px 16px;text-align:center;font-size:13px;color:#555;">Gaps</th></tr>
      ${topGapsHtml}
    </table>
    ` : ''}

    <!-- GHL Status -->
    <p style="font-size:12px;color:#999;margin-top:24px;">
      CRM Status: ${ghlResult.success ? '✅ Contact created in GoHighLevel' : '⚠️ GHL submission failed: ' + escapeHtml(ghlResult.error || 'unknown')}
      ${ghlResult.contactId ? ` (ID: ${ghlResult.contactId})` : ''}
    </p>

    <!-- Admin Link -->
    <p style="margin-top:16px;">
      <a href="${process.env.NEXTAUTH_URL || ''}/admin" style="color:#1e3a5f;font-weight:bold;">View in Admin Dashboard →</a>
    </p>
  </div>

  <!-- Footer -->
  <div style="background:#f5f7fa;padding:16px 32px;text-align:center;font-size:12px;color:#999;">
    Capital Cyber CMMC Gap Assessment Tool
  </div>
</div>

<!-- Full Submission JSON (for record keeping) -->
<div style="margin-top:24px;max-width:640px;margin-left:auto;margin-right:auto;">
  <details>
    <summary style="cursor:pointer;color:#999;font-size:12px;">Full Submission Data (JSON)</summary>
    <pre style="background:#f5f7fa;padding:12px;border-radius:4px;font-size:10px;overflow:auto;max-height:400px;">${escapeHtml(JSON.stringify(submission, null, 2))}</pre>
  </details>
</div>
</body>
</html>`;

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: 'nikhil@capital-cyber.com, rick@capital-cyber.com',
          subject: `New CMMC Assessment: ${companyInfo.name} | ${scorePercent}% Score | ${result.gaps.length} Gaps`,
          html: emailHtml,
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
      }
    }

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Submit error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
