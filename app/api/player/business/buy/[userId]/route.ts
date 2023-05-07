import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

interface Params extends Request {
    nextUrl: any
}

export async function GET(request: Params, { params }: { params: { userId: string }}) {


    // purchase 1x of the business
    // -> deduct quantity of coins from user
    // -> increase quantity of business by 1


    // get the quantity to buy sent via url params
    const { searchParams } = request.nextUrl;
    const quantity = Number(searchParams.get("quantity"));
    // console.log(`quantityToBuy via params`, quantity)
    const amount = Number(searchParams.get("amount"));
    // console.log(`amount via params`, amount)
    const businessId = searchParams.get("businessId");
    const quantityBefore = searchParams.get("quantityBefore");

    // get the user id sent via params
    // console.log(`params.id in getBusiness: ${params.userId}`)
    const userId = params.userId

    try {
        // get player's coins
        const checkPlayerCoins: { coins: number } | null | undefined = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                coins: true
            }
        })

        // if coins < cost, return error
        if (checkPlayerCoins && checkPlayerCoins?.coins < amount) return NextResponse.json({ error: "Not enough coins" })

    } catch (error) {
        console.log(error)
    }

    // if all checks pass, continue to purchase business
    try {
        // update the player's `coins` in User model
        const updateCoinsOfPlayer = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                coins: {
                    decrement: amount // use variable amount sent via url params
                }
            }
        })
        // console.log(`updateCoinsOfPlayer`, updateCoinsOfPlayer.coins)


        // update the business of id businessId, with `quantity` to `quantity + 1`
        const updatedBusiness = await prisma.business.update({
            where: {
                id: businessId
            },
            data: {
                quantity: { increment: quantity }
            }
        })
        // console.log(`updatedBusiness`, updatedBusiness.quantity)

        // console.log(`latest quantity updatedBusiness`, updatedBusiness.quantity)
        // console.log(`gonna try to upgrade business`)

        if (
            quantityBefore < 25 && updatedBusiness.quantity >= 25
        ) {
            // profit speed doubled
            const updatedSpeed = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    time: { divide: 2 }
                }
            })
        }
        if (
            quantityBefore < 50 && updatedBusiness.quantity >= 50
        ) {
            // profit speed doubled
            const updatedSpeed = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    time: { divide: 2 }
                }
            })
        }
        if (
            quantityBefore < 100 && updatedBusiness.quantity >= 100 || 
            quantityBefore < 200 && updatedBusiness.quantity >= 200 || 
            quantityBefore < 300 && updatedBusiness.quantity >= 300 || 
            quantityBefore < 400 && updatedBusiness.quantity >= 400
        ) {
            // profit speed doubled
            const updatedSpeed = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    time: { divide: 2 }
                }
            })
            return NextResponse.json(updatedSpeed);
        }
        else if (
            quantityBefore < 500 && updatedBusiness.quantity >= 500 || 
            quantityBefore < 600 && updatedBusiness.quantity >= 600 || 
            quantityBefore < 700 && updatedBusiness.quantity >= 700 || 
            quantityBefore < 800 && updatedBusiness.quantity >= 800 || 
            quantityBefore < 900 && updatedBusiness.quantity >= 900 || 
            quantityBefore < 1100 && updatedBusiness.quantity >= 1100 || 
            quantityBefore < 1200 && updatedBusiness.quantity >= 1200 || 
            quantityBefore < 1300 && updatedBusiness.quantity >= 1300 || 
            quantityBefore < 1400 && updatedBusiness.quantity >= 1400 || 
            quantityBefore < 1500 && updatedBusiness.quantity >= 1500 || 
            quantityBefore < 1600 && updatedBusiness.quantity >= 1600 || 
            quantityBefore < 1700 && updatedBusiness.quantity >= 1700 || 
            quantityBefore < 1800 && updatedBusiness.quantity >= 1800 || 
            quantityBefore < 1900 && updatedBusiness.quantity >= 1900
        ) {
            // revenue x4
            const updatedRevenue = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    revenue: { multiply: 4 }
                }
            })
            return NextResponse.json(updatedRevenue);
        }
        else if (
            quantityBefore < 2250 && updatedBusiness.quantity >= 2250 || 
            quantityBefore < 2500 && updatedBusiness.quantity >= 2500 || 
            quantityBefore < 2750 && updatedBusiness.quantity >= 2750 || 
            quantityBefore < 3250 && updatedBusiness.quantity >= 3250 || 
            quantityBefore < 3500 && updatedBusiness.quantity >= 3500 || 
            quantityBefore < 3750 && updatedBusiness.quantity >= 3750 || 
            quantityBefore < 4250 && updatedBusiness.quantity >= 4250 || 
            quantityBefore < 4500 && updatedBusiness.quantity >= 4500 || 
            quantityBefore < 4750 && updatedBusiness.quantity >= 4750
        ) {
            // revenue x2
            const updatedRevenue = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    revenue: { multiply: 2 }
                }
            })
            return NextResponse.json(updatedRevenue);
        }
        else if (
            quantityBefore < 1000 && updatedBusiness.quantity >= 1000 || 
            quantityBefore < 2000 && updatedBusiness.quantity >= 2000 || 
            quantityBefore < 3000 && updatedBusiness.quantity >= 3000 || 
            quantityBefore < 4000 && updatedBusiness.quantity >= 4000 || 
            quantityBefore < 5000 && updatedBusiness.quantity >= 5000
        ) {
            // revenue x5
            const updatedRevenue = await prisma.business.update({
                where: {
                    id: businessId
                },
                data: {
                    revenue: { multiply: 5 }
                }
            })
            return NextResponse.json(updatedRevenue);
        }

        if (updateCoinsOfPlayer && updatedBusiness) {
            return NextResponse.json(updatedBusiness);
        } else return NextResponse.json({ error: "Something went wrong."})
        
    } catch (error) {
        return NextResponse.json(error);
    }

}