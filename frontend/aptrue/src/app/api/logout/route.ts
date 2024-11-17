// src/app/api/logout/route.ts

import { NextResponse } from 'next/server';

export async function POST() {

    console.log('로그아웃 route.ts 도착')

    const response = NextResponse.json(
        { message: '로그아웃 성공' },
        { status: 200 }
    );

    response.cookies.set('accessToken', '', {maxAge:-1})
    response.cookies.set('refreshToken', '', {maxAge:-1})

    return response;
}







    // const cookies = [
    //     'accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=k11c101.p.ssafy.io; Secure; HttpOnly; SameSite=None;',
    //     'refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=k11c101.p.ssafy.io; Secure; HttpOnly; SameSite=None;',
    // ];

    // cookies.forEach((cookie) => {
    //     response.headers.append('Set-Cookie', cookie);
    // });