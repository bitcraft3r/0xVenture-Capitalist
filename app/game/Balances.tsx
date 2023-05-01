'use client'

import { useStore } from "@/app/store/GameStore"
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
        <div className="w-[80vw] h-[10vh] border mb-[2rem]">
            Balances
            <div>Coins: ${userCoins?.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        </div>
    )
}

export default Balances