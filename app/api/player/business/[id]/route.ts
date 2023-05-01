import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { id: string }}) {

    // get the user from users db by id
    console.log(`params.id in getBusiness: ${params.id}`)
    const id = params.id
    
    // for all the items in business table that has playerId === id, return all of them in an array

    const businessesByPlayerId = await prisma.business.findMany({
        where: {
            playerId: id
        }
    })

    // return businessesByPlayerId as a json
    return NextResponse.json(businessesByPlayerId);
}
