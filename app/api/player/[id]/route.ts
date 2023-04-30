import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { id: string }}) {

    // get the user from users db by email
    // console.log(`params.id: ${params.id}`)
    const email = params.id
    const player = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    // return player as a json
    return NextResponse.json(player);
}

export async function POST(request: Request, { params }: { params: { playerId: string }}) {

    const playerId = params.playerId;

    const player = await prisma.user.update({
        where: {
            id: playerId
        },
        data: {
            businesses: {
                create: {
                    name: 'Lemonade Stand',
                    owned: 1,
                }
            }
        }
    });

    return NextResponse.redirect(`/game?playerId=${player.id}`);
                        
}
