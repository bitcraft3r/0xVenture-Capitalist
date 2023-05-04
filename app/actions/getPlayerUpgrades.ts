export default async function getPlayerUpgrades(userId: string) {
    try {

        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/player/upgrade/${userId}`, { 'method': 'GET' })
        const data = await response.json()

        // console.log(`user data in getPlayerUpgrades:`, data)
        
        return data


    } catch (error: any) {
        return null;
    }
}