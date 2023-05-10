import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET() {
    // reset a player's `user.coins` to 0, and delete all `business` and `upgrade` records for that player
    // require `user.admin === true` to access this route


    // on frontend
    // have a protected page, only user.admin = true can access
    // list all players in a table
    // have a button for each player to reset their coins to 0 and delete all their businesses and upgrades (require extra popup to confirm)
    // have a button to reset all players' coins to 0 and delete all their businesses and upgrades (require extra popup to confirm)


}

export async function POST() {

}
