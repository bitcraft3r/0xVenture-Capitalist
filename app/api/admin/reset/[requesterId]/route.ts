import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

interface Params extends Request {
    nextUrl: any
}

export async function GET(request: Params, { params }: { params: { requesterId: string }}) {

    console.log(`Hello from /api/admin/reset/[requesterId]/route.ts !`)

    // get the userId sent via params
    const requesterId = params.requesterId
    
    // if requesterId is invalid, return error msg
    if (requesterId === "" || requesterId === undefined || requesterId === null || requesterId.length !== 24) {
        return NextResponse.json({ error: "Invalid requesterId" })
    }

    // get the userId sent via url params
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");

    // if userId is invalid, return error msg
    if (userId === "" || userId === undefined || userId === null || userId.length !== 24) {
        return NextResponse.json({ error: "Invalid userId" })
    }

    // check if requesterId is valid (has user.admin === true)
    const requester = await prisma.user.findUnique({
        where: {
            id: requesterId
        },
        select: {
            admin: true
        }
    })

    // if requester is not admin, return error msg
    if (requester?.admin === false) {
        return NextResponse.json({ error: "You are not authorized to reset this player's data" })
    }

    // any other checks
    // ...

    // if all checks passed, continue to reset player's data
    // delete all businesses and upgrades for that player
    // also increase `user.resets` by 1, and `user.coins` to 0
    // while ensuring all three queries succeed together or none at all

    try {
        // The `prisma.$transaction()` method is used to group the three database operations (deleting businesses, deleting upgrades, and updating user) into a single transaction.
        // The result array will contain the results of each operation, and we check if all the operations succeeded using the every() method. If all the operations succeeded, we return a success message. Otherwise, we return an error message.
        const result = await prisma.$transaction([
            prisma.business.deleteMany({
                where: {
                    userId: userId,
                },
            }),
            prisma.upgrade.deleteMany({
                where: {
                    userId: userId,
                },
            }),
            prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    resets: {
                        increment: 1,
                    },
                    coins: 0,
                },
            }),
        ]);

        // check if all operations succeeded
        if (result.every((operationResult) => operationResult)) {
            // if all succeeded, return the operation result
            return NextResponse.json(result);
        } else {
            // if any operation failed, log theresult, and return error message
            console.error(result);
            return NextResponse.json({ error: "An error occurred" });
        }
    } catch (error) {
        // if any operation failed, return error message
        console.error(error);
        return NextResponse.json({ error: "An error occurred" });
    }

}

export async function POST() {

}
