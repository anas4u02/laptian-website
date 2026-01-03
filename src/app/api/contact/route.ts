import { NextRequest, NextResponse } from 'next/server';

// Email configuration
const RECIPIENT_EMAIL = 'drlabcareiit@gmail.com';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message, subdomain } = body;

        // Validate required fields
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Format email content
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

        // For development: Log to console
        console.log('=== Contact Form Submission ===');
        console.log('To:', RECIPIENT_EMAIL);
        console.log('Subject:', emailSubject);
        console.log('Body:');
        console.log(emailBody);
        console.log('===============================');

        // TODO: In production, integrate with an email service like:
        // - Resend (https://resend.com)
        // - SendGrid (https://sendgrid.com)
        // - Nodemailer with SMTP
        // - AWS SES

        // Example with Resend (uncomment and configure when ready):
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: 'noreply@laptian.com',
          to: RECIPIENT_EMAIL,
          subject: emailSubject,
          text: emailBody,
          replyTo: email,
        });
        */

        // For now, we'll simulate success
        // In production, replace this with actual email sending
        return NextResponse.json(
            {
                success: true,
                message: 'Form submitted successfully',
                // Development only - remove in production
                dev_note: 'Email logged to console. Configure email service for production.'
            },
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
