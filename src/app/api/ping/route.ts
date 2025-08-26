import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // n8n'i uyandır
    const response = await fetch('https://n8n-render-pkzu.onrender.com', {
      method: 'GET',
      headers: { 'User-Agent': 'Pre-Wake-Ping' }
    });
    
    console.log('n8n pre-wake ping status:', response.status);
    
    return NextResponse.json({ 
      success: true, 
      message: 'n8n pre-wake ping successful',
      status: response.status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('n8n pre-wake ping error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to ping n8n',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
