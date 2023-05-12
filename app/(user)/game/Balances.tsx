'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import useSound from 'use-sound'

import { useStore } from "@/app/store/GameStore"
import ManagersModal from "./Balances/ManagersModal"
import UpgradesModal from "./Balances/UpgradesModal"
import UnlocksModal from "./Balances/UnlocksModal"
import BuyQuantity from "./BuyQuantity"
import FormatNumber from "@/app/components/FormatNumber"

interface BalancesProps {
    coins: number,
    playerBusinesses: any[],
    currentUser: any,
    playerUpgrades: any[],
}

const buttonClass = "border-4 border-neutral-700 shadow-md rounded-lg px-4 py-1 my-1 bg-[#857d75] text-neutral-100 text-sm font-semibold hover:text-neutral-600 hover:bg-neutral-300 hover:border-neutral-600 hover:shadow-xl focus:bg-neutral-400 focus:border-neutral-800"

const Balances: React.FC<BalancesProps> = ({ coins, playerBusinesses, currentUser, playerUpgrades }) => {
    const [popSound, { stop: stopPopSound }] = useSound('/audio/pop.mp3', { volume: 0.75 })
    const [successSound] = useSound('/audio/success.mp3')

    const [userCoins, setCoins] = useStore(
        (state) => [
            state.userCoins,
            state.setCoins,
        ]
    )

    const [formattedNumber, setFormattedNumber] = useState("")

    useEffect(() => {
        setCoins(coins)
    }, [])

    useEffect(() => {
        setFormattedNumber(FormatNumber(userCoins, true))
    }, [userCoins])

    return (
        <div className="mb-[2rem] bg-[#555046] p-5 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <Image src="/images/mascot-256px.jpeg" alt="mascot" height="128" width="128" className="rounded-lg border-4 border-neutral-700 shadow-xl" />

                    <div className="flex flex-col ml-[1rem] justify-around">
                        <ManagersModal playerBusinesses={playerBusinesses} userCoins={userCoins} currentUser={currentUser}>
                            <button
                                onClick={() => successSound()}
                                onMouseEnter={() => popSound()}
                                onMouseLeave={() => stopPopSound()}
                                className={`${buttonClass}`}
                            >
                                Managers
                            </button>
                        </ManagersModal>
                        <UpgradesModal playerUpgrades={playerUpgrades} currentUser={currentUser}>
                            <button
                                onClick={() => successSound()}
                                onMouseEnter={() => popSound()}
                                onMouseLeave={() => stopPopSound()}
                                className={`${buttonClass}`}>
                                Upgrades
                            </button>
                        </UpgradesModal>
                        <UnlocksModal playerBusinesses={playerBusinesses} >
                            <button
                                onClick={() => successSound()}
                                onMouseEnter={() => popSound()}
                                onMouseLeave={() => stopPopSound()}
                                className={`${buttonClass}`}
                            >
                                Unlocks
                            </button>
                        </UnlocksModal>
                    </div>
                </div>
                <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold">${formattedNumber}</div>
                <div>
                    <BuyQuantity />
                </div>
            </div>
        </div>
    )
}

export default Balances