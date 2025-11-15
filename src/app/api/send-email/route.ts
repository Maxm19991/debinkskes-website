import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (5 submissions per IP per hour)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

// Helper function to sanitize input
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove HTML brackets
    .replace(/[\r\n]+/g, ' ') // Replace newlines with spaces to prevent header injection
    .trim()
    .slice(0, 500); // Limit length
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Rate limiting check
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove timestamps outside the window
  const recentTimestamps = timestamps.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, childName, childAge, startDate, days, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !childName || !childAge) {
      return NextResponse.json(
        { error: 'Verplichte velden ontbreken' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Ongeldig emailadres' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent injection attacks
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedChildName = sanitizeInput(childName);
    const sanitizedChildAge = sanitizeInput(childAge);
    const sanitizedStartDate = startDate ? sanitizeInput(startDate) : '';
    const sanitizedMessage = message ? message.slice(0, 2000) : ''; // Allow newlines in message but limit length

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

    // Format the email content with sanitized inputs
    const emailContent = `
Nieuwe inschrijving van De Binkskes website

OUDER/VERZORGER INFORMATIE:
Naam: ${sanitizedName}
Email: ${sanitizedEmail}
Telefoon: ${sanitizedPhone}

KIND INFORMATIE:
Naam kind: ${sanitizedChildName}
Leeftijd: ${sanitizedChildAge}

OPVANG DETAILS:
${sanitizedStartDate ? `Gewenste startdatum: ${sanitizedStartDate}` : 'Geen startdatum opgegeven'}
${days && days.length > 0 ? `Gewenste dagen: ${days.join(', ')}` : 'Geen dagen opgegeven'}

${sanitizedMessage ? `AANVULLENDE OPMERKINGEN:\n${sanitizedMessage}` : 'Geen aanvullende opmerkingen'}

---
Dit bericht is verzonden via het contactformulier op debinkskes.nl
    `.trim();

    // Send email with sanitized inputs
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `Nieuwe inschrijving: ${sanitizedChildName} - ${sanitizedName}`,
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
