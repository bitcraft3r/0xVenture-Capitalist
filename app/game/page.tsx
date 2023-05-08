import getCurrentUserFull from "../actions/getCurrentUserFull"
import getPlayerBusinesses from "../actions/getPlayerBusinesses"
import getPlayerUpgrades from "../actions/getPlayerUpgrades"
import StartButton from "./StartButton"
import BusinessCard from "./BusinessCard"
import Balances from "./Balances"
import BuyQuantity from "./BuyQuantity"
import OfflineProfits from "./OfflineProfits"

const Game = async () => {
    const currentUser = await getCurrentUserFull();

    let playerBusinesses = [];
    let playerUpgrades = [];
    let totalOfflineProfits = 0;

    if (currentUser) {

        try {

            playerBusinesses = await getPlayerBusinesses(currentUser?.id)
            playerUpgrades = await getPlayerUpgrades(currentUser?.id)

            // console.log(`player has ${playerBusinesses.length} businesses`)
            // console.log(`player has ${playerUpgrades.length} upgrades`)

            // get user's last updatedAt timestamp for calculating offline profits
            const dateStr = currentUser.updatedAt
            const unixTimestampLastUpdated = Math.floor(Date.parse(dateStr))

            // calculate milliseconds since last update
            let timeSinceLastUpate = Date.now() - unixTimestampLastUpdated
            // console.log(`milliseconds since last update`, timeSinceLastUpate)

            // calculate offline profits for all businesses with managerOwned = true
            playerBusinesses.map((business: any) => {
                if (business.managerOwned) {
                    // console.log(`collect offline profits for ${business.name}`)
                    // console.log(`offline profits: revenue is ${business.revenue}, quantity is ${business.quantity}, time is ${business.time}`)
                    // console.log(`offline profits: ${business.revenue * business.quantity * timeSinceLastUpate / 1000 / business.time}`)

                    // add this business' offline profits to totalOfflineProfits
                    totalOfflineProfits += business.revenue * business.quantity * timeSinceLastUpate / 1000 / business.time
                }
            })

            // console.log(`totalOfflineProfits`, totalOfflineProfits)

        } catch (error) {

        }

    }



    return (
        <div className="flex flex-col justify-center items-center text-center">
            {/* <h1 className="text-2xl font-extrabold mb-[2rem]">Blockchain Billionaire</h1> */}
            {currentUser && playerBusinesses?.length === 10 ? (
                // Logged in & has all businesses
                <div className="w-[80vw]">
                    <BuyQuantity />
                    <OfflineProfits offlineProfits={totalOfflineProfits} userId={currentUser.id} />
                    {/* => show player's coin balances */}
                    <Balances coins={currentUser.coins} playerBusinesses={playerBusinesses} currentUser={currentUser} playerUpgrades={playerUpgrades} />
                    {/* => show all businesses */}
                    <div className="flex">
                        <div>
                            {playerBusinesses.map((business: any) => (
                                business.index < 5 ? (
                                    <BusinessCard {...business} currentUser={currentUser} key={business.name} />
                                ) : (<></>)
                            ))}
                        </div>
                        <div>
                            {playerBusinesses.map((business: any) => (
                                business.index >= 5 ? (
                                    <BusinessCard {...business} currentUser={currentUser} key={business.name} />
                                ) : (<></>)
                            ))}
                        </div>
                    </div>

                </div>
            ) : (

                currentUser ? (
                    // Logged in but doesn't have all businesses
                    // => show start button
                    <StartButton userId={currentUser?.id} />
                ) : (
                    // Not logged in
                    // => show login button
                    <StartButton userId={currentUser?.id} />
                )
            )}

        </div>
    )
}

export default Game


// {currentUser && currentUser.businesses ? (
//     // {currentUser && playerBusinesses.length > 1 ? (
//     <div className="w-[80vw]">
//         <div className="border h-[5vh] mb-[1rem]">{currentUser.coins} coins</div>
//         <div className="border h-[70vh] flex">
//             <div className="flex-1">
//                 BUSINESSES
//                 {/* {playerBusinesses.map((business: any) => (
//                     <BusinessCard {...business} currentUser={currentUser} key={business.name} />
//                 )
//                 )} */}
//             </div>
//         </div>
//     </div>
// ) : (
//     <StartButton userId={currentUser?.id} />
// )}