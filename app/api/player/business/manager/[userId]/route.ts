import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

interface Params extends Request {
    nextUrl: any
}

export async function GET(request: Params, { params }: { params: { userId: string }}) {

    const userId = params.userId
    const { searchParams } = request.nextUrl;
    const businessId = searchParams.get("businessId");
    const managerCost = Number(searchParams.get("managerCost"));
    const userCoins = Number(searchParams.get("userCoins"));
    const managerOwned = searchParams.get("managerOwned");

    // console.log(userId, businessId, managerCost, userCoins, managerOwned)

    if (managerOwned === 'true') return NextResponse.json({ error: "Already own a manager" })
    if (userCoins < managerCost) return NextResponse.json({ error: "Not enough coins" })

    // if all checks pass, continue to purchase manager
    try {
        // use userId to update player's coins
        const player = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                coins: {
                    decrement: managerCost
                }
            }
        });

        // use businessId to update managerOwned to true
        const business = await prisma.business.update({
            where: {
                id: businessId
            },
            data: {
                managerOwned: true
            }
        });

        if (business && player) {
            // refresh the page
            // return NextResponse.redirect(`/game`);
            return NextResponse.json({ success: "Manager purchased!" })    
        }
        
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" })
    }

}