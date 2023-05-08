'use client'

import { useEffect } from "react"
import { toast } from "react-hot-toast"

import { useStore } from "@/app/store/GameStore"

interface OfflineProfitsProps {
    offlineProfits: number,
    userId: string,
}

const OfflineProfits: React.FC<OfflineProfitsProps> = ({
    offlineProfits,
    userId,
}) => {

    const [addCoins] = useStore((state) => [state.addCoins])

    useEffect(() => {
        try {
            collectOfflineProfits()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const collectOfflineProfits = async () => {
        const response = await fetch(`/api/player/business/collect/${userId}?amount=${offlineProfits}`)
        const data = await response.json()

        if (data.coins) {
            toast.success(`Earned $${offlineProfits.toLocaleString(undefined, { maximumFractionDigits: 2 })} while you were away!`)

            // add to store
            addCoins(offlineProfits)

        } else {
            toast.error(`Something went wrong collecting offline profits.`)
        }

    }

    return (
        <></>
    )
}

export default OfflineProfits