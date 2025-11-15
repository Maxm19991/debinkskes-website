import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, childName, childAge, startDate, days, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !childName || !childAge) {
      return NextResponse.json(
        { error: 'Verplichte velden ontbreken' },
        { status: 400 }
      );
    }

    // Create transporter using Strato SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format the email content
    const emailContent = `
Nieuwe inschrijving van De Binkskes website

OUDER/VERZORGER INFORMATIE:
Naam: ${name}
Email: ${email}
Telefoon: ${phone}

KIND INFORMATIE:
Naam kind: ${childName}
Leeftijd: ${childAge}

OPVANG DETAILS:
${startDate ? `Gewenste startdatum: ${startDate}` : 'Geen startdatum opgegeven'}
${days && days.length > 0 ? `Gewenste dagen: ${days.join(', ')}` : 'Geen dagen opgegeven'}

${message ? `AANVULLENDE OPMERKINGEN:\n${message}` : 'Geen aanvullende opmerkingen'}

---
Dit bericht is verzonden via het contactformulier op debinkskes.nl
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nieuwe inschrijving: ${childName} - ${name}`,
      text: emailContent,
    });

    return NextResponse.json(
      { message: 'Email succesvol verzonden' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Er is iets misgegaan bij het verzenden van de email' },
      { status: 500 }
    );
  }
}
