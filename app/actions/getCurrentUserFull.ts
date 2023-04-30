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

        try {
            const email = session.user.email
            const response = await fetch(`${process.env.NEXTAUTH_URL}/api/player/${email}`, { 'method': 'GET' })
            const data = await response.json()
            
            return data
            
        } catch (error) {
            console.log(`error: ${error}`)
            return session.user            
        }


    } catch (error: any) {
        return null;
    }
}