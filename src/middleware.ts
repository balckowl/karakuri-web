import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret });
    const { pathname } = req.nextUrl;

    const isLoggedIn = !!token;

    const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (isLoggedIn && (pathname === "/" || pathname.startsWith("/auth/login"))) {
        return NextResponse.redirect(`${baseUrl}/selectLevel`);
    }

    if (!isLoggedIn && (pathname.startsWith("/selectLevel") || pathname.startsWith("/level1"))) {
        return NextResponse.redirect(`${baseUrl}/auth/login`);
    }

    return NextResponse.next();
}
