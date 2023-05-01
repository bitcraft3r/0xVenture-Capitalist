import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { userId: string }}) {
    
    // get the business id sent via params
    console.log(`params.id in getBusiness: ${params.userId}`)
    const userId = params.userId
    
    // update the player's `coins` in User model
    // update the `coin` in userModel via` `revenue * quantity` to `coins` in User model via prisma
    const updateCoinsOfPlayer = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })


    // return updateCoinsOfPlayer as a json
    return NextResponse.json(updateCoinsOfPlayer);
}
