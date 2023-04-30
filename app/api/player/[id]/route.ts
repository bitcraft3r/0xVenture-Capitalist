import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET() {

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
