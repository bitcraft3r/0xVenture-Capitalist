'use client'

import { useStore } from "@/app/store/GameStore"

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

    return (
        <div>
            {quantity === 0
                ? (
                    <>-</>
                ) : (
                    <>Revenue: {revenue * bizQuantity[index]}</>
                )
            }
        </div>
    )
}

export default RevenueProgressBar