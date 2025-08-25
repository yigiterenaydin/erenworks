import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log('API route received data:', data);
    
    // n8n webhook'a istek gönder
    const response = await fetch('https://n8n-render-pkzu.onrender.com/webhook/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('n8n response status:', response.status);
    console.log('n8n response ok:', response.ok);

    if (response.ok) {
      const responseData = await response.text();
      console.log('n8n response data:', responseData);
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      console.error('n8n webhook error:', response.status, response.statusText, errorText);
      return NextResponse.json(
        { error: 'Webhook error', details: errorText },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
