import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Get hostname from request headers
    const hostname = request.headers.get('host') || '';

    // Extract subdomain
    const subdomain = hostname.split('.')[0];

    // For local development, we support:
    // - training.localhost:3000
    // - services.localhost:3000
    // - localhost:3000?subdomain=training
    // - localhost:3000?subdomain=services

    const url = request.nextUrl.clone();
    const searchParams = url.searchParams;
    const querySubdomain = searchParams.get('subdomain');

    // Determine which subdomain we're on
    let currentSubdomain = querySubdomain || subdomain;

    // Set default to training if accessing root domain
    if (currentSubdomain === 'localhost' || currentSubdomain === 'laptian' || !currentSubdomain) {
        currentSubdomain = 'training';
    }

    // Add subdomain as a header so we can use it in our pages
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-subdomain', currentSubdomain);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
