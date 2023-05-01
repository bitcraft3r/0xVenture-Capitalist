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

    // get the user id sent via params
    // console.log(`params.id in getBusiness: ${params.userId}`)
    const userId = params.userId




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



        return NextResponse.json(updatedBusiness);
        
    } catch (error) {
        return NextResponse.json(error);
    }

    // update the business of id userId, with `quantity` to `quantity + 1`
    // const updatedUser = await prisma.user.update({
    //     where: {
    //         id: userId
    //     },
    //     data: {
    //         coins: { increment: -1 }
    //     }
    // })

    // return updatedUser as a json
    return NextResponse.json(userId);

}