'use client'

import { useStore } from "@/app/store/GameStore"
import Image from "next/image"
import { useEffect } from "react"

interface BalancesProps {
    coins: number
}

const Balances: React.FC<BalancesProps> = ({ coins }) => {

    const [userCoins, addCoins] = useStore(
        (state) => [
            state.userCoins,
            state.addCoins,
        ]
    )

    useEffect(() => {
        addCoins(coins)
    }, [])

    return (
        <div className="h-[120px] border mb-[2rem]">
            <div className="flex justify-between items-center">
                <Image src="/images/mascot.png" alt="mascot" height="120" width="120" />
                <div className="text-3xl font-bold">${userCoins?.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                <div className="flex flex-col">
                    <button className="border rounded-lg px-4 py-1 mr-[1rem] my-1">Managers</button>
                    <button className="border rounded-lg px-4 py-1 mr-[1rem] my-1">Upgrades</button>

                </div>
            </div>
        </div>
    )
}

export default Balances