import { NextResponse } from 'next/server'

export function proxy(request) {
  const cookieStore = request.cookies
  
  // log all cookies to see exact names
  const allCookies = cookieStore.getAll()
  console.log("All cookies:", allCookies.map(c => c.name))

  const sessionToken = 
    cookieStore.get('better-auth.session_token')?.value ||
    cookieStore.get('__Secure-better-auth.session_token')?.value ||
    cookieStore.get('better-auth_session_token')?.value

  if (!sessionToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/my-bookings',
    '/add-facility', 
    '/manage-facilities',
    '/all-facilities/(.+)',
  ],
}