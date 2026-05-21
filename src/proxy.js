import { NextResponse } from 'next/server'

export function proxy(request) {
  const allCookies = request.cookies.getAll()
  console.log("cookies:", allCookies.map(c => c.name))
  
  const sessionToken = allCookies.find(c => 
    c.name.includes('session') || c.name.includes('better')
  )?.value

  if (!sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
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