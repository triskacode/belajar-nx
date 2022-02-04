import { config } from '@belajar-nx/shared/environments';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const token = req.cookies[config.cookie.TOKEN_COOKIE_NAME];

  if (!token) return NextResponse.redirect('/login');
}
