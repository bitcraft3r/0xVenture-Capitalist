import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb';

export async function GET(request: Request, { params }: { params: { businessId: string }}) {

    // get the business id sent via params
    console.log(`params.id in getBusiness: ${params.businessId}`)
    const businessId = params.businessId

    // update the business of id businessId, with `quantity` to `quantity + 1`
    const updatedBusiness = await prisma.business.update({
        where: {
            id: businessId
        },
        data: {
            quantity: { increment: 1 }
        }
    })

    // return updatedBusiness as a json
    return NextResponse.json(updatedBusiness);

}