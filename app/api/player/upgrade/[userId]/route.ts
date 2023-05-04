import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { userId: string }}) {
    // get the userId sent via params
    // console.log(`params.id in getBusiness: ${params.userId}`)
    const userId = params.userId
    
    // get all the businesses for the player
    const businessesByPlayerId = await prisma.upgrade.findMany({
        where: {
            userId: userId
        }
    })

    // return businessesByPlayerId as a json
    return NextResponse.json(businessesByPlayerId);
}
