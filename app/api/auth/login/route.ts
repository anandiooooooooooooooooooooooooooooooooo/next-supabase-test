import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * This function handles POST requests sent to `/api/auth/login`.
 * @param {Request} request - The incoming request object from the frontend.
 */
export async function POST(request: Request) {
  try {
    // 1. Parse the credentials from the request body.
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // 2. Create a secure, server-side Supabase client.
    const supabase = createClient();

    // 3. Call Supabase's `signInWithPassword` method. This function securely
    // checks the provided credentials against the data in the Supabase `auth.users` table.
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // 4. Handle incorrect login attempts. Supabase will return an error if the
    // email doesn't exist or the password doesn't match.
    if (error) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 }); // 401 Unauthorized
    }

    // 5. If the login is successful, the Supabase server client automatically handles
    // setting the secure session cookie in the response headers. We just need to
    // send a success message back.
    return NextResponse.json({ message: 'Login successful!' });
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}
