import { NextResponse } from 'next/server'

export function proxy(request) {
  const sessionToken = 
    request.cookies.get('better-auth.session_token')?.value ||
    request.cookies.get('__Secure-better-auth.session_token')?.value

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
    '/all-facilities/:path',
  ],
}