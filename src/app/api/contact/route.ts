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


        const { Resend } = require('resend');
        const resend = new Resend('re_QzRSBomD_KFsCY1HUzUUvmX5FT1cUkjkj');

        // await resend.emails.send({
        //     from: 'noreply@laptian.com',
        //     to: RECIPIENT_EMAIL,
        //     subject: emailSubject,
        //     text: emailBody,
        //     replyTo: email,
        // });


        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'anas4u02@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });


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
