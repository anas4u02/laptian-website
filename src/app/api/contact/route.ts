import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RECIPIENT_EMAIL = 'drlabcareiit@gmail.com';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await request.json();
        const { name, email, phone, service, message, subdomain } = body;

        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const emailSubject = `New Contact Form Submission - ${subdomain === 'training' ? 'Training Center' : 'Repair Services'}`;

        const emailBody = `
New Contact Form Submission from Laptian Website

Subdomain: ${subdomain === 'training' ? 'Training Center' : 'Repair Services'}

Contact Details:
----------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interested: ${service}

Message:
--------
${message}

---
This email was sent from the Laptian website contact form.
Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        `.trim();

        await resend.emails.send({
            from: 'noreply@laptian.com',
            to: RECIPIENT_EMAIL,
            subject: emailSubject + ' - ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            text: emailBody,
            replyTo: email,
        });

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to process form submission' },
            { status: 500 }
        );
    }
}