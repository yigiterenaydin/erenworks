import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // n8n'i uyandır
    const response = await fetch('https://n8n-render-pkzu.onrender.com', {
      method: 'GET',
      headers: { 'User-Agent': 'Vercel-Cron' }
    });
    
    console.log('n8n wake-up status:', response.status);
    
    return NextResponse.json({ 
      success: true, 
      message: 'n8n woken up successfully',
      status: response.status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('n8n wake-up error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to wake up n8n',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
