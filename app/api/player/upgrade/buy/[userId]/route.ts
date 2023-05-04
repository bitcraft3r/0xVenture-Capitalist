import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

interface Params extends Request {
    nextUrl: any
}

export async function GET(request: Params, { params }: { params: { userId: string }}) {

    const userId = params.userId
    const { searchParams } = request.nextUrl;
    const upgradeId = searchParams.get("upgradeId");
    const price = Number(searchParams.get("price"));
    const userCoins = Number(searchParams.get("userCoins"));
    const purchased = searchParams.get("purchased");
    const businessName = searchParams.get("businessName");
    const upgradeDescription = searchParams.get("upgradeDescription");

    // console.log(userId, upgradeId, price, userCoins, purchased, businessName)

    if (purchased === 'true') return NextResponse.json({ error: "Already purchased upgrade" })
    if (userCoins < price) return NextResponse.json({ error: "Not enough coins" })
    
    // if all checks pass, continue to purchase upgrade
    try {
        // use userId to update player's coins
        const player = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                coins: {
                    decrement: price
                }
            }
        });

        // use userId to update Upgrade purchased to true
        const upgrade = await prisma.upgrade.update({
            where: {
                id: upgradeId
            },
            data: {
                purchased: true
            }
            
        });    

        if (businessName === "All Businesses") {
            // update all business with userId=userId to update profits x3
            const business = await prisma.business.updateMany({
                where: {
                    userId: userId
                },
                data: {
                    revenue: { multiply: 3 }
                }
            })

            if (business && player && upgrade) {
                // refresh the page
                // return NextResponse.redirect(`/game`);
                return NextResponse.json({ success: `${upgradeDescription} upgrade purchased!` })    
            }
        }
        else {
            // use one business that has userId=userId and name=businessName to update profits x3
            const business = await prisma.business.updateMany({
                where: {
                    
                    AND: [
                        { name: { equals: businessName} },
                        { userId: { equals: userId} },
                    ],
                },
                data: {
                    revenue: { multiply: 3 }
                }
            });

            if (business && player && upgrade) {
                // refresh the page
                // return NextResponse.redirect(`/game`);
                return NextResponse.json({ success: `${upgradeDescription} upgrade purchased!` })    
            }

        }    

    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" })
    }

}