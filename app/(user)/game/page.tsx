import getCurrentUserFull from "../../actions/getCurrentUserFull"
import getPlayerBusinesses from "../../actions/getPlayerBusinesses"
import getPlayerUpgrades from "../../actions/getPlayerUpgrades"
import BusinessCard from "./BusinessCard"
import Balances from "./Balances"
import OfflineProfits from "./OfflineProfits"
import OwedRevenueUpdater from "./OwedRevenueUpdater"
import About from "./About"

export const metadata = {
    title: `0xVenture Capitalist - Play, Earn, Learn about Investing in Crypto`,
    description: `0xVC is an idle clicker game, where players aim to become the wealthiest crypto tycoon in the world. Learn about investing in crypto, DeFi, and NFTs, while playing a fun game!`,
}

const Game = async () => {
    const currentUser = await getCurrentUserFull();

    let playerBusinesses = [];
    let playerUpgrades = [];
    let totalOfflineProfits = 0;

    if (currentUser) {
        try {
            playerBusinesses = await getPlayerBusinesses(currentUser?.id)
            playerUpgrades = await getPlayerUpgrades(currentUser?.id)

            // get user's last updatedAt timestamp for calculating offline profits
            const dateStr = currentUser.updatedAt
            const unixTimestampLastUpdated = Math.floor(Date.parse(dateStr))
            let timeSinceLastUpate = Date.now() - unixTimestampLastUpdated // calculate milliseconds since last update

            // calculate offline profits for all businesses with managerOwned = true
            playerBusinesses.map((business: any) => {
                if (business.managerOwned) {
                    // add this business' offline profits to totalOfflineProfits
                    totalOfflineProfits += business.revenue * business.quantity * timeSinceLastUpate / 1000 / business.time
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center text-center">
            {/* If player is logged in and has offline profits to collect */}
            {currentUser && totalOfflineProfits > 0 ? (
                <OfflineProfits offlineProfits={totalOfflineProfits} userId={currentUser.id} />
            ) : (<></>)}

            {/* If player is logged in and has 10 exactly businesses, show the game components */}
            {currentUser && playerBusinesses?.length === 10 ? (
                <div className="w-[90vw]">
                    {/* helper function to aggregate managerOwned profits to update db every 30s */}
                    <OwedRevenueUpdater userId={currentUser.id} />

                    {/* show player's coin balances */}
                    <Balances coins={currentUser.coins} playerBusinesses={playerBusinesses} currentUser={currentUser} playerUpgrades={playerUpgrades} />

                    {/* show all businesses, split into two columns */}
                    <div className="flex mt-[2rem] justify-around md:text-[14px] sm:text-[12px] text-[10px]">
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
                <div>
                    <About userId={currentUser?.id} />
                </div>
            )}

        </div>
    )
}

export default Game
