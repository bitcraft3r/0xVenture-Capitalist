import { NextResponse } from "next/server";

interface Params extends Request {
    nextUrl: any
}

import prisma from '@/app/libs/prismadb';

export async function GET(request: Params, { params }: { params: { userId: string }}) {

    // get the amount sent via url params
    const { searchParams } = request.nextUrl;
    const amount = Number(searchParams.get("amount"));
    // console.log(`amount via params`, amount)

    // if no url params sent for amount, return error msg
    // if (amount === 0) return NextResponse.json({ error: "Amount is 0." });
    if (amount === null || amount === undefined) return NextResponse.json({ error: "Amount is null or undefined." });
    
    // get the user id sent via params
    // console.log(`params.id in getBusiness: ${params.userId}`)
    const userId = params.userId
    
    // update the player's `coins` in User model
    const updateCoinsOfPlayer = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            coins: {
                increment: amount // use variable amount sent via url params
            }
        }
    })

    // return updateCoinsOfPlayer as a json
    return NextResponse.json(updateCoinsOfPlayer);
}
