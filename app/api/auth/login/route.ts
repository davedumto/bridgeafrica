import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminCredentials, createAuthToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate required fields
    if (!username || !password) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Username and password are required' 
        },
        { status: 400 }
      );
    }

    // Verify credentials
    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid username or password' 
        },
        { status: 401 }
      );
    }

    // Create auth token
    const user = { username, role: 'admin' };
    const token = createAuthToken(user);

    // Create response with auth cookie
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Login successful',
        user: { username, role: 'admin' }
      },
      { status: 200 }
    );

    // Set httpOnly cookie
    response.headers.set('Set-Cookie', setAuthCookie(token));

    return response;

  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Login failed' 
      },
      { status: 500 }
    );
  }
}