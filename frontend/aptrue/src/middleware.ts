import { auth } from './auth'; // auth.ts의 auth를 불러온것
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 아래 주석을 안써도 됨! auth를 middleware로 정의하면서 로그인이 필요한지를 알아서 확인해줌.
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/login', request.url))
// }
// export const cofig = {
//     matcher: '/admin/:path', '/cctv/:path', '/'
// }

export async function middleware() {
    const session = await auth();
    
    if (!session) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`)
    }
}

export const config = {
    // 미들웨어를 적용할 라우트 즉 로그인을 해야지만 접근할 수 있는 페이지
    matcher: ['/:path*', '/cctv/:path*', '/admin/:path*']
}
