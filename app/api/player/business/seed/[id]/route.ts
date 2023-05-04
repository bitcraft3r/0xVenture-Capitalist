import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { id: string }}) {

    // Used to seed the initial 10 businesses for a new player
    // TODO: Add check for if user already has businesses initialized, then this will should not proceed.

    // get the userId sent via params
    // console.log(`params.id: ${params.id}`)
    const userId = params.id

    // create the seed businesses data
    const businesses = [
        {
            name: "Lemonade Stand",
            image: "https://user-images.githubusercontent.com/8282076/235407980-8f0661ce-1285-48da-b2c5-f7ce217b9423.png",
            cost: 3.738,
            revenue: 1,
            time: 0.5,
            multiplier: 1.07,
            managerName: "Sam Lemman",
            managerCost: 1_000,
            index: 0,
            quantity: 1,
            managerOwned: false,
        },
        {
            name: "Mining Rig",
            image: "https://user-images.githubusercontent.com/8282076/235407954-8f96bb0b-b2b8-471f-b89a-38dfd826cb32.png",
            cost: 60,
            revenue: 60,
            time: 3,
            multiplier: 1.15,
            managerName: "Wuhan Ji",
            managerCost: 15_000,
            index: 1,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Tuxedo Tailor",
            image: "https://user-images.githubusercontent.com/8282076/235407956-1883bc4d-a8e0-451e-937b-b0d7b0225af6.png",
            cost: 720,
            revenue: 540,
            time: 6,
            multiplier: 1.14,
            managerName: "Cuck Marbeles",
            managerCost: 100_000,
            index: 2,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Vegetable Farm",
            image: "https://user-images.githubusercontent.com/8282076/235407958-22e297b9-3492-4b4d-b864-8e6bb448ee07.png",
            cost: 8640,
            revenue: 4320,
            time: 12,
            multiplier: 1.13,
            managerName: "Arthur Hays",
            managerCost: 500_000,
            index: 3,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Ramen Store",
            image: "https://user-images.githubusercontent.com/8282076/235407960-d86ab9f5-0fe2-442b-aae5-0fe3ca4ab28b.png",
            cost: 103_680,
            revenue: 51_840,
            time: 24,
            multiplier: 1.12,
            managerName: "Ko Dwon",
            managerCost: 1_200_000,
            index: 4,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Shrimp Boat",
            image: "https://user-images.githubusercontent.com/8282076/235407961-6c41678c-d9f8-425f-8306-e0a2c1c631a6.png",
            cost: 1_244_160,
            revenue: 622_080,
            time: 96,
            multiplier: 1.11,
            managerName: "Suzie Krylebaby",
            managerCost: 10_000_000,
            index: 5,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "eSports Team",
            image: "https://user-images.githubusercontent.com/8282076/235407963-68c676c6-13b4-4d82-a397-8cc421b9b5ed.png",
            cost: 14_929_920,
            revenue: 7_464_960,
            time: 384,
            multiplier: 1.1,
            managerName: "Justina San",
            managerCost: 111_111_111,
            index: 6,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Cryptocurrency Exchange",
            image: "https://user-images.githubusercontent.com/8282076/235407965-b18ee7f7-a38f-4abb-a271-559f708c7194.png",
            cost: 179_159_040,
            revenue: 89_579_520,
            time: 1536,
            multiplier: 1.09,
            managerName: "Chao Zi Pang",
            managerCost: 555_555_555,
            index: 7,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Metaverse Company",
            image: "https://user-images.githubusercontent.com/8282076/235407966-bc7f0d0c-17a4-4b9b-86ff-bc1fee0f5b31.png",
            cost: 2_149_908_480,
            revenue: 1_074_954_240,
            time: 6144,
            multiplier: 1.08,
            managerName: "Bear Shillbert",
            managerCost: 10_000_000_000,
            index: 8,
            quantity: 0,
            managerOwned: false,
        },
        {
            name: "Blockchain Currency",
            image: "https://user-images.githubusercontent.com/8282076/235407968-161510fa-500e-464e-8592-4318d52ae043.png",
            cost: 25_798_901_760,
            revenue: 29_668_737_024,
            time: 36864,
            multiplier: 1.07,
            managerName: "Carlos Matos",
            managerCost: 100_000_000_000,
            index: 9,
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


    // create the upgrades data
    const upgrades = [
        {
            name: "Little Umbrellas",
            business: "Lemonade Stand",
            price: 250_000,
            description: "Lemonade Stand Profits x3",
            purchased: false,
        },
        {
            name: "Overclocked CPU",
            business: "Mining Rig",
            price: 500_000,
            description: "Mining Rig Profits x3",
            purchased: false,
        },
        {
            name: "Sewing Machine",
            business: "Tuxedo Tailor",
            price: 1_000_000,
            description: "Tuxedo Tailor Profits x3",
            purchased: false,
        },
        {
            name: "Auto Sprinklers",
            business: "Vegetable Farm",
            price: 5_000_000,
            description: "Vegetable Farm Profits x3",
            purchased: false,
        },
        {
            name: "Pre-packaged Ramen",
            business: "Ramen Store",
            price: 10_000_000,
            description: "Ramen Store Profits x3",
            purchased: false,
        },
        {
            name: "Shrimp Satellite",
            business: "Shrimp Boat",
            price: 25_000_000,
            description: "Shrimp Boat Profits x3",
            purchased: false,
        },
        {
            name: "Gaming Equipment",
            business: "eSports Team",
            price: 500_000_000,
            description: "eSports Team Profits x3",
            purchased: false,
        },
        {
            name: "Market Making Team",
            business: "Cryptocurrency Exchange",
            price: 10_000_000_000,
            description: "Cryptocurrency Exchange Profits x3",
            purchased: false,
        },
        {
            name: "Land Sale",
            business: "Metaverse Company",
            price: 50_000_000_000,
            description: "Metaverse Company Profits x3",
            purchased: false,
        },
        {
            name: "Proof of Stake",
            business: "Blockchain Currency",
            price: 250_000_000_000,
            description: "Blockchain Currency Profits x3",
            purchased: false,
        },
        {
            name: "Monopoly",
            business: "All Businesses",
            price: 1_000_000_000_000,
            description: "All Profits x3",
            purchased: false,
        },
        {
            name: "Novelty Straws",
            business: "Lemonade Stand",
            price: 20_000_000_000_000,
            description: "Lemonade Stand Profits x3",
            purchased: false,
        },
        {
            name: "ASIC Upgrade",
            business: "Mining Rig",
            price: 50_000_000_000_000,
            description: "Mining Rig Profits x3",
            purchased: false,
        },
        {
            name: "Robot Tailors",
            business: "Tuxedo Tailor",
            price: 100_000_000_000_000,
            description: "Tuxedo Tailor Profits x3",
            purchased: false,
        },
        {
            name: "Automatic Weeders",
            business: "Vegetable Farm",
            price: 500_000_000_000_000,
            description: "Vegetable Farm Profits x3",
            purchased: false,
        },
        {
            name: "Truffle & Caviar",
            business: "Ramen Store",
            price: 1_000_000_000_000_000,
            description: "Ramen Store Profits x3",
            purchased: false,
        },
        {
            name: "Shrimp Magnets",
            business: "Shrimp Boat",
            price: 2_000_000_000_000_000,
            description: "Shrimp Boat Profits x3",
            purchased: false,
        },
        {
            name: "Energy Drink Sponsors",
            business: "eSports Team",
            price: 5_000_000_000_000_000,
            description: "eSports Team Profits x3",
            purchased: false,
        },
        {
            name: "Launch Blockchain",
            business: "Cryptocurrency Exchange",
            price: 10_000_000_000_000_000,
            description: "Cryptocurrency Exchange Profits x3",
            purchased: false,
        },
        {
            name: "VR Integration",
            business: "Metaverse Company",
            price: 20_000_000_000_000_000,
            description: "Metaverse Company Profits x3",
            purchased: false,
        },
        {
            name: "Deflationary Tokenomics",
            business: "Blockchain Currency",
            price: 50_000_000_000_000_000,
            description: "Blockchain Currency Profits x3",
            purchased: false,
        },
        {
            name: "Monopsony",
            business: "All Businesses",
            price: 100_000_000_000_000_000,
            description: "All Profits x3",
            purchased: false,
        },
    ]

    // update the upgrades data with the userId
    const finalUpgradesData = upgrades.map((upgrade) => ({
        ...upgrade,
        userId,
    }))

    // create the upgrades in the db
    const createdUpgrades = await prisma.upgrade.createMany({
        data: finalUpgradesData,
    })

    // return createdBusinesses as a json
    return NextResponse.json(createdBusinesses);
}
