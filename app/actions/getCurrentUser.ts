import { getServerSession } from 'next-auth/next'

import { authOptions } from "@/pages/api/auth/[...nextauth]"

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null
        }

        return session.user
    } catch (error: any) {
        return null;
    }
}