'use client'

import { useStore } from "@/app/store/GameStore"
import Image from "next/image"
import { useEffect } from "react"
import ManagersModal from "./Balances/ManagersModal"
import UpgradesModal from "./Balances/UpgradesModal"
import UnlocksModal from "./Balances/UnlocksModal"
import BuyQuantity from "./BuyQuantity"

interface BalancesProps {
    coins: number,
    playerBusinesses: any[],
    currentUser: any,
    playerUpgrades: any[],
}

const Balances: React.FC<BalancesProps> = ({ coins, playerBusinesses, currentUser, playerUpgrades }) => {

    const [userCoins, setCoins] = useStore(
        (state) => [
            state.userCoins,
            state.setCoins,
        ]
    )

    useEffect(() => {
        setCoins(coins)
    }, [])

    return (
        <div className="mb-[2rem] bg-[#555046] p-5 rounded-xl shadow-lg">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <Image src="/images/mascot.jpeg" alt="mascot" height="135" width="135" className="rounded-lg border-4 border-orange-950 shadow-xl" />

                    <div className="flex flex-col ml-[1rem] justify-around">
                        <ManagersModal playerBusinesses={playerBusinesses} userCoins={userCoins} currentUser={currentUser}>
                            <button className="border-4 border-slate-700 rounded-lg px-4 py-1 my-1 bg-neutral-200 text-yellow-950 text-sm font-semibold hover:bg-neutral-300 hover:border-slate-600 hover:shadow-xl">Managers</button>
                        </ManagersModal>
                        <UpgradesModal playerUpgrades={playerUpgrades} userCoins={userCoins} currentUser={currentUser}>
                            <button className="border-4 border-slate-700 rounded-lg px-4 py-1 my-1 bg-neutral-200 text-yellow-950 text-sm font-semibold hover:bg-neutral-300 hover:border-slate-600 hover:shadow-xl">Upgrades</button>
                        </UpgradesModal>
                        <UnlocksModal playerBusinesses={playerBusinesses} >
                            <button className="border-4 border-slate-700 rounded-lg px-4 py-1 my-1 bg-neutral-200 text-yellow-950 text-sm font-semibold hover:bg-neutral-300 hover:border-slate-600 hover:shadow-xl">Unlocks</button>
                        </UnlocksModal>
                    </div>
                </div>
                <div className="text-3xl font-bold">${userCoins?.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                <div>
                    <BuyQuantity />
                </div>
            </div>
        </div>
    )
}

export default Balances