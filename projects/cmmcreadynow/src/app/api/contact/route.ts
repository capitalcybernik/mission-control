import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Option 1: Use Web3Forms (free, no server config needed)
    // Sign up at https://web3forms.com and replace the access_key
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (WEB3FORMS_KEY) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `CMMC Ready Now: New inquiry from ${name}`,
          from_name: name,
          email,
          company: company || 'N/A',
          phone: phone || 'N/A',
          message,
          to: 'info@cmmcreadynow.com',
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // Option 2: Use nodemailer if SMTP is configured
    // Install nodemailer: npm install nodemailer @types/nodemailer
    // Then uncomment the block below
    /*
    const SMTP_HOST = process.env.SMTP_HOST;
    if (SMTP_HOST) {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@cmmcreadynow.com',
        to: 'info@cmmcreadynow.com',
        subject: `CMMC Ready Now: New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      });
      return NextResponse.json({ success: true });
    }
    */

    // Fallback: log to console (for development)
    console.log('Contact form submission (no email provider configured):', body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
