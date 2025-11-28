import { NextRequest, NextResponse } from 'next/server';
import { clearAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Create response
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Logged out successfully' 
      },
      { status: 200 }
    );

    // Clear auth cookie
    response.headers.set('Set-Cookie', clearAuthCookie());

    return response;

  } catch (error: any) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Logout failed' 
      },
      { status: 500 }
    );
  }
}