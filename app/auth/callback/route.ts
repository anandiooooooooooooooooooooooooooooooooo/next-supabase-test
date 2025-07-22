import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * This function handles GET requests to `/auth/callback`.
 * A user's browser makes a GET request when they click a link.
 * @param {Request} request - The incoming request object.
 */
export async function GET(request: Request) {
  // 1. Get the full URL from the request.
  const { searchParams, origin } = new URL(request.url)

  // 2. Extract the `code` parameter that Supabase automatically adds to the link.
  // This code is a one-time, secure token.
  const code = searchParams.get('code')

  if (code) {
    // 3. If a code exists, create a Supabase client.
    const supabase = createClient()

    // 4. Exchange the temporary code for a permanent user session.
    // Supabase verifies the code, activates the user's account, and creates a session.
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // 5. If the exchange is successful, the user is now officially logged in.
      // Redirect them from this backend route to a user-facing page, like their dashboard.
      return NextResponse.redirect(`${origin}/pages/dashboard`)
    }
  }

  // 6. If there is no code, or if the code is invalid, the handshake fails.
  // Redirect the user back to the login page with an error message in the URL.
  return NextResponse.redirect(`${origin}/login?error=Could not verify email. Please try again.`)
}
