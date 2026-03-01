import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { calculateResults } from '@/lib/scoring';

export async function POST(request: NextRequest) {
  try {
    const { companyInfo, responses } = await request.json();

    if (!companyInfo?.name || !companyInfo?.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = calculateResults(companyInfo, responses);
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const submission = {
      id,
      companyInfo,
      responses,
      result,
      submittedAt: new Date().toISOString(),
    };

    // Save to file
    const submissionsDir = path.join(process.cwd(), 'src', 'data', 'submissions');
    await mkdir(submissionsDir, { recursive: true });
    await writeFile(
      path.join(submissionsDir, `${id}.json`),
      JSON.stringify(submission, null, 2)
    );

    // Send email notification
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

        const scorePercent = Math.round((result.totalScore / Math.max(result.maxScore, 1)) * 100);

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: 'nikhil@capital-cyber.com, anup@capital-cyber.com',
          subject: `New CMMC Assessment: ${companyInfo.name} (${scorePercent}% Score)`,
          html: `
            <h2>New CMMC Gap Assessment Submission</h2>
            <table style="border-collapse:collapse;">
              <tr><td style="padding:4px 12px;font-weight:bold;">Company</td><td style="padding:4px 12px;">${companyInfo.name}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">Contact</td><td style="padding:4px 12px;">${companyInfo.contact}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">Email</td><td style="padding:4px 12px;">${companyInfo.email}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">Phone</td><td style="padding:4px 12px;">${companyInfo.phone}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">CMMC Level</td><td style="padding:4px 12px;">${companyInfo.level === 'L1' ? 'Level 1' : 'Level 2'}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">Score</td><td style="padding:4px 12px;">${scorePercent}%</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">SPRS Score</td><td style="padding:4px 12px;">${result.sprsScore}</td></tr>
              <tr><td style="padding:4px 12px;font-weight:bold;">Gaps Found</td><td style="padding:4px 12px;">${result.gaps.length}</td></tr>
            </table>
            <p>View full details in the <a href="${process.env.NEXTAUTH_URL || ''}/admin">admin dashboard</a>.</p>
          `,
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
