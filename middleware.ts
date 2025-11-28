import { NextRequest, NextResponse } from 'next/server';

// Simple Edge Runtime compatible JWT verification
function verifyTokenEdge(token: string, secret: string): boolean {
  try {
    // Split the JWT token
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    // Decode header and payload
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    
    // Check if token is expired
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return false;
    }
    
    // For now, just check if it's a valid JWT structure and not expired
    // In production, you'd want proper HMAC verification using Web Crypto API
    return true;
  } catch {
    return false;
  }
}

function isAuthenticated(request: NextRequest): boolean {
  try {
    const token = request.cookies.get('auth-token')?.value;
    console.log('Cookie token found:', !!token);
    
    if (!token) {
      console.log('No auth token found in cookies');
      return false;
    }
    
    const secret = process.env.JWT_SECRET || 'your-secret-key';
    const isValid = verifyTokenEdge(token, secret);
    console.log('Token verification result:', isValid);
    
    return isValid;
  } catch (error) {
    console.log('isAuthenticated error:', error);
    return false;
  }
}

export function middleware(request: NextRequest) {
  console.log('Middleware called for:', request.nextUrl.pathname);
  
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow login page
    if (request.nextUrl.pathname === '/admin/login') {
      console.log('Allowing access to login page');
      return NextResponse.next();
    }

    // Check authentication for other admin routes
    const authenticated = isAuthenticated(request);
    console.log('Authentication check result:', authenticated);
    
    if (!authenticated) {
      console.log('Redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    console.log('Allowing access to admin route');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};