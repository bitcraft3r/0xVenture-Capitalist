import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET() {
    // return all players in an array
    // for each player, return `user.name`, `user.image`, `user.updatedAt`, `user.coins`, total no of `business.managerOwned = true`, total no of `upgrade.purchased = true, total `revenue per second`.
    // sort by `revenue per second` descending


    // display all players in a table on frontend
    
}

export async function POST() {

}
