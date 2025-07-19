import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  // Get the cookie store from the incoming server request.
  const cookieStore = cookies()

  // Create a server-side Supabase client and provide it with functions
  // to read, write, and delete cookies.
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // The `get` function reads a cookie's value.
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        // The `set` function creates or updates a cookie.
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // This error can be ignored on Server Components
          }
        },
        // The `remove` function deletes a cookie.
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // This error can be ignored on Server Components
          }
        },
      },
    }
  )
}
