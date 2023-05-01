'use client'

import { useStore } from "@/app/store/GameStore"

interface RevenueProgressBarProps {
    revenue: number,
    quantity: number,
    index: number,
}

const RevenueProgressBar: React.FC<RevenueProgressBarProps> = ({ revenue, quantity, index }) => {
    const [
        biz1Quantity,
        biz2Quantity,
        biz3Quantity,
        biz4Quantity,
        biz5Quantity,
        biz6Quantity,
        biz7Quantity,
        biz8Quantity,
        biz9Quantity,
        biz10Quantity,
    ] = useStore(
        (state) => [
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
    )

    return (
        <div className="border">
            {quantity === 0 ? (
                <>-</>
            ) : (
                index === 0 ? (
                    <>Revenue: {revenue * biz1Quantity}</>
                ) : (
                    index === 1 ? (<>Revenue: {revenue * biz2Quantity}</>) : (
                        index === 2 ? (<>Revenue: {revenue * biz3Quantity}</>) : (
                            index === 3 ? (<>Revenue: {revenue * biz4Quantity}</>) : (
                                index === 4 ? (<>Revenue: {revenue * biz5Quantity}</>) : (
                                    index === 5 ? (<>Revenue: {revenue * biz6Quantity}</>) : (
                                        index === 6 ? (<>Revenue: {revenue * biz7Quantity}</>) : (
                                            index === 7 ? (<>Revenue: {revenue * biz8Quantity}</>) : (
                                                index === 8 ? (<>Revenue: {revenue * biz9Quantity}</>) : (
                                                    index === 9 ? (<>Revenue: {revenue * biz10Quantity}</>) : (
                                                        <>-</>
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )}
        </div>
    )
}

export default RevenueProgressBar