'use client'

import { useStore } from "@/app/store/GameStore"

const BuyQuantity = () => {

    const [buyQuantity, setBuyQuantity] = useStore(
        (state) => [
            state.buyQuantity,
            state.setBuyQuantity
        ]
    )

    const handleBuyQuantity = () => {
        if (buyQuantity === 1) setBuyQuantity(10)
        else if (buyQuantity === 10) setBuyQuantity(100)
        else if (buyQuantity === 100) setBuyQuantity(1)
        // how to set quantity to 'max' ?
    }

    return (
        <button
            onClick={() => handleBuyQuantity()}
            className="px-4 py-2 border-slate-700 border-4 rounded-xl bg-orange-400 hover:bg-orange-500 hover:border-slate-600 hover:shadow-xl"
        >
            Buy x{buyQuantity}
        </button>
    )
}

export default BuyQuantity