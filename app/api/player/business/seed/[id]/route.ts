import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { id: string }}) {

    // Used to seed the initial 10 businesses for a new player
    // TODO: Add check for if user already has businesses initialized, then this will should not proceed.

    // get the userId sent via params
    console.log(`params.id: ${params.id}`)
    const userId = params.id

    // create the seed businesses data
    const businesses = [
        {
            name: "Lemonade Stand",
            image: "",
            cost: 3.738,
            revenue: 1,
            time: 0.5,
            multiplier: 1.07,
            managerName: "Sam Lemman",
            managerCost: 1_000,
            quantity: 1,
            managerOwned: false,
        },
        {
            name: "Mining Rig",
            image: "",
            cost: 60,
            revenue: 60,
            time: 3,
            multiplier: 1.15,
            managerName: "Wuhan Ji",
            managerCost: 15_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Tuxedo Tailor",
            image: "",
            cost: 720,
            revenue: 540,
            time: 6,
            multiplier: 1.14,
            managerName: "Cuck Marbeles",
            managerCost: 100_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Vegetable Farm",
            image: "",
            cost: 8640,
            revenue: 4320,
            time: 12,
            multiplier: 1.13,
            managerName: "Arthur Hays",
            managerCost: 500_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Ramen Store",
            image: "",
            cost: 103_680,
            revenue: 51_840,
            time: 24,
            multiplier: 1.12,
            managerName: "Ko Dwon",
            managerCost: 1_200_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Shrimp Boat",
            image: "",
            cost: 1_244_160,
            revenue: 622_080,
            time: 96,
            multiplier: 1.11,
            managerName: "Suzie Krylebaby",
            managerCost: 10_000_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "eSports Team",
            image: "",
            cost: 14_929_920,
            revenue: 7_464_960,
            time: 384,
            multiplier: 1.1,
            managerName: "Justina San",
            managerCost: 111_111_111,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Cryptocurrency Exchange",
            image: "",
            cost: 179_159_040,
            revenue: 89_579_520,
            time: 1536,
            multiplier: 1.09,
            managerName: "Chao Zi Pang",
            managerCost: 555_555_555,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Metaverse Company",
            image: "",
            cost: 2_149_908_480,
            revenue: 1_074_954_240,
            time: 6144,
            multiplier: 1.08,
            managerName: "Bear Shillbert",
            managerCost: 10_000_000_000,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Blockchain Currency",
            image: "",
            cost: 25_798_901_760,
            revenue: 29_668_737_024,
            time: 36864,
            multiplier: 1.07,
            managerName: "Carlos Matos",
            managerCost: 100_000_000_000,
            quantity: 0,
            managerOwned: false,
        }
    ]

    // update the seed businesses data with the userId
    const finalBusinessesData = businesses.map((business) => ({
        ...business,
        userId,
    }))

    // create the businesses in the db
    const createdBusinesses = await prisma.business.createMany({
        data: finalBusinessesData,
    })

    // return createdBusinesses as a json
    return NextResponse.json(createdBusinesses);
}
