import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // n8n webhook'a istek gönder
    const response = await fetch('https://n8n-render-pkzu.onrender.com/webhook/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error('n8n webhook error:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Webhook error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
