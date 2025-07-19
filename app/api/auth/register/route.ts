import { createClient } from '@/lib/supabase/server'; // We always use the server client in API routes.
import { NextResponse } from 'next/server';

/**
 * This function handles POST requests sent to `/api/auth/register`.
 * @param {Request} request - The incoming request object from the frontend.
 */
export async function POST(request: Request) {
  try {
    // 1. Parse the incoming request body to get the user's credentials.
    // The `await request.json()` call reads the data sent from the frontend form.
    const { email, password } = await request.json();

    // 2. Perform basic validation.
    if (!email || !password) {
      // If data is missing, send a 400 Bad Request error response.
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // 3. Create a secure, server-side Supabase client. This client is created
    // for each request and has the necessary context to handle cookies.
    const supabase = createClient();

    // We need the origin URL to construct the verification link.
    const requestUrl = new URL(request.url);

    // 4. Call Supabase's `signUp` method. This is the core logic.
    // It tells Supabase to create a new user and send a verification email.
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // This is the URL the user will be redirected to AFTER they click the
        // verification link in their email. It must point to our callback route.
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      },
    });

    // 5. Handle any errors returned by Supabase. For example, if the user's
    // email already exists, Supabase will return an error.
    if (error) {
      console.error("Supabase Sign Up Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // 6. If everything is successful, send a success message back to the frontend.
    return NextResponse.json({ message: 'Registration successful! Please check your email to verify your account.' });

  } catch (error) {
    // This is a general error handler for any unexpected issues.
    console.error("Register API Error:", error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}
