import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { email: string }}) {

    // get the user from users db by email
    // console.log(`params.email: ${params.email}`)
    const email = params.email
    const player = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    // return player as a json
    return NextResponse.json(player);
}
