'use client'

import { useEffect, useState } from "react"

import { useStore } from "@/app/store/GameStore"
import FormatNumber from "@/app/components/FormatNumber"

interface RevenueProgressBarProps {
    revenue: number,
    time: number,
    quantity: number,
    index: number,
}

const RevenueProgressBar: React.FC<RevenueProgressBarProps> = ({ revenue, time, quantity, index }) => {
    const [
        bizQuantity,
    ] = useStore(
        (state) => [
            [
                state.biz1Quantity,
                state.biz2Quantity,
                state.biz3Quantity,
                state.biz4Quantity,
                state.biz5Quantity,
                state.biz6Quantity,
                state.biz7Quantity,
                state.biz8Quantity,
                state.biz9Quantity,
                state.biz10Quantity,
            ]
        ]
    )

    const [formattedNumber, setFormattedNumber] = useState("")

    useEffect(() => {
        setFormattedNumber(FormatNumber(revenue * bizQuantity[index], false))
    }, [revenue, bizQuantity[index]])


    return (
        <div>
            {quantity === 0
                ? (
                    <>-</>
                ) : (
                    <>{formattedNumber}</>
                )
            }
        </div>
    )
}

export default RevenueProgressBar