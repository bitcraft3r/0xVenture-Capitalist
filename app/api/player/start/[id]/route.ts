import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { id: string }}) {

    // get the user from users db by id
    console.log(`params.id: ${params.id}`)
    const id = params.id

    const businesses = [
        {
            name: "Lemonade Stand",
            image: "",
            cost: 3.738,
            revenue: 1,
            time: 0.5,
            multiplier: 1.07,
            owned: 1,
            managerName: "Sam Lemman",
            managerCost: 1_000,
        },
        {
            name: "Mining Rig",
            image: "",
            cost: 60,
            revenue: 60,
            time: 3,
            multiplier: 1.15,
            owned: 0,
            managerName: "Wuhan Ji",
            managerCost: 15_000,
        },
        {
            name: "Tuxedo Tailor",
            image: "",
            cost: 720,
            revenue: 540,
            time: 6,
            multiplier: 1.14,
            owned: 0,
            managerName: "Cuck Marbeles",
            managerCost: 100_000,
        },
        {
            name: "Vegetable Farm",
            image: "",
            cost: 8640,
            revenue: 4320,
            time: 12,
            multiplier: 1.13,
            owned: 0,
            managerName: "Arthur Hays",
            managerCost: 500_000,
        },
        {
            name: "Ramen Store",
            image: "",
            cost: 103_680,
            revenue: 51_840,
            time: 24,
            multiplier: 1.12,
            owned: 0,
            managerName: "Ko Dwon",
            managerCost: 1_200_000,
        },
        {
            name: "Shrimp Boat",
            image: "",
            cost: 1_244_160,
            revenue: 622_080,
            time: 96,
            multiplier: 1.11,
            owned: 0,
            managerName: "Suzie Krylebaby",
            managerCost: 10_000_000,
        },
        {
            name: "eSports Team",
            image: "",
            cost: 14_929_920,
            revenue: 7_464_960,
            time: 384,
            multiplier: 1.1,
            owned: 0,
            managerName: "Justina San",
            managerCost: 111_111_111,
        },
        {
            name: "Cryptocurrency Exchange",
            image: "",
            cost: 179_159_040,
            revenue: 89_579_520,
            time: 1536,
            multiplier: 1.09,
            owned: 0,
            managerName: "Chao Zi Pang",
            managerCost: 555_555_555,
        },
        {
            name: "Metaverse Company",
            image: "",
            cost: 2_149_908_480,
            revenue: 1_074_954_240,
            time: 6144,
            multiplier: 1.08,
            owned: 0,
            managerName: "Bear Shillbert",
            managerCost: 10_000_000_000,
        },
        {
            name: "Blockchain Currency",
            image: "",
            cost: 25_798_901_760,
            revenue: 29_668_737_024,
            time: 36864,
            multiplier: 1.07,
            owned: 0,
            managerName: "Carlos Matos",
            managerCost: 100_000_000_000,
        }
    ]


    for (const business of businesses) {
        const newBusinesses = await prisma.business.create({
            data: {
                ...business,
                player: {
                    connect: { id: id }
                }
            }
        }) 
    }

    // no changes are made to the player!!
    // const updatedPlayer = await prisma.user.findUnique({
    //     where: {
    //         id: id
    //     }
    // });
    // console.log(`updatedPlayer`, updatedPlayer)

    // business table has 10 new businesses added, each linked to the user's id (playerId)
    
    // for all the items in business table that has playerId === id, return all of them in an array

    const businessesByPlayerId = await prisma.business.findMany({
        where: {
            playerId: id
        }
    })

    


    // return updatedPlayer as a json
    return NextResponse.json(businessesByPlayerId);
}

// export async function POST(request: Request, { params }: { params: { playerId: string }}) {

//     const playerId = params.playerId;

//     const player = await prisma.user.update({
//         where: {
//             id: playerId
//         },
//         data: {
//             businesses: {
//                 create: {
//                     name: 'Lemonade Stand',
//                     owned: 1,
//                 }
//             }
//         }
//     });

//     return NextResponse.redirect(`/game?playerId=${player.id}`);
                        
// }
