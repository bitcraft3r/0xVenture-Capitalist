import getCurrentUserFull from "../actions/getCurrentUserFull"
import getPlayerBusinesses from "../actions/getPlayerBusinesses"
import StartButton from "./StartButton"
import BusinessCard from "./BusinessCard"
import Balances from "./Balances"

const Game = async () => {
    const currentUser = await getCurrentUserFull();

    let playerBusinesses = [];


    if (currentUser) {

        try {

            playerBusinesses = await getPlayerBusinesses(currentUser?.id)

            // console.log(`player has ${playerBusinesses.length} businesses`)

        } catch (error) {

        }

    }



    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-extrabold mb-[2rem]">Blockchain Billionaire</h1>
            {currentUser && playerBusinesses?.length === 10 ? (
                // Logged in & has all businesses
                <div className="w-[80vw]">
                    {/* => show player's coin balances */}
                    <Balances coins={currentUser.coins} playerBusinesses={playerBusinesses} currentUser={currentUser} />
                    {/* => show all businesses */}
                    {playerBusinesses.map((business: any) => (
                        <BusinessCard {...business} currentUser={currentUser} key={business.name} />
                    ))}
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