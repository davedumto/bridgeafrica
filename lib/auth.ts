import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export interface AuthUser {
  username: string;
  role: string;
}

/**
 * Verify admin credentials
 */
export function verifyAdminCredentials(username: string, password: string): boolean {
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  return username === adminUsername && password === adminPassword;
}

/**
 * Create JWT token for authenticated user
 */
export function createAuthToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
}

/**
 * Verify JWT token
 */
export function verifyAuthToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch (error) {
    return null;
  }
}

/**
 * Check if user is authenticated from request
 */
export function isAuthenticated(request: NextRequest): boolean {
  try {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) return false;
    
    const user = verifyAuthToken(token);
    return user !== null;
  } catch (error) {
    return false;
  }
}

/**
 * Get current user from request
 */
export function getCurrentUser(request: NextRequest): AuthUser | null {
  try {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) return null;
    
    return verifyAuthToken(token);
  } catch {
    return null;
  }
}

/**
 * Set auth cookie
 */
export function setAuthCookie(token: string): string {
  return `auth-token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`;
}

/**
 * Clear auth cookie
 */
export function clearAuthCookie(): string {
  return `auth-token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`;
}