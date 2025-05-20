import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('oi??')
  const publicRoutes = ['/login', '/register']
  const authToken = request.cookies.get('authToken')?.value
  const url = request.nextUrl.clone()

  console.log('!authToken', !authToken)

  if (!authToken && !publicRoutes.includes(url.pathname)) {
    url.pathname = '/login'
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/learn', '/guide', '/profile', '/ranking'],
}
