export default async function getPlayerBusinesses(playerId: string) {
    try {

        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/player/business/${playerId}`, { 'method': 'GET' })
        const data = await response.json()

        // console.log(`user data in getPlayerBusinesses:`, data)
        
        return data


    } catch (error: any) {
        return null;
    }
}