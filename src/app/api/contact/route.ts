import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('API route received data:', data);
    
    // Resend ile email gönder
    const { data: emailData, error } = await resend.emails.send({
      from: 'Contact Form <contact@jes.ch>',
      to: ['erenyigitaydin@gmail.com'],
      subject: `Yeni İletişim Formu - ${data.name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><small>Bu mesaj jes.ch contact form'undan gönderildi.</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Email sending failed', details: error },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', emailData);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
