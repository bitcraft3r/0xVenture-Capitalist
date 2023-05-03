'use client'

import { toast } from "react-hot-toast"

import { useStore } from "@/app/store/GameStore"
import { useEffect, useState } from "react"

interface BuyButtonProps {
    id: string,
    name: string,
    cost: number,
    multiplier: number,
    quantity: number,
    index: number,
    userId: string,
    coins: number,
}

const BuyButton: React.FC<BuyButtonProps> = ({ id, name, cost, multiplier, quantity, index, userId, coins }) => {

    const [
        userCoins,
        addCoins,
        bizQuantities,
        addBizQuantities,
    ] = useStore(
        (state) => [
            state.userCoins,
            state.addCoins,
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
            ],
            [
                state.addBiz1Quantity,
                state.addBiz2Quantity,
                state.addBiz3Quantity,
                state.addBiz4Quantity,
                state.addBiz5Quantity,
                state.addBiz6Quantity,
                state.addBiz7Quantity,
                state.addBiz8Quantity,
                state.addBiz9Quantity,
                state.addBiz10Quantity,
            ],
        ]
    )

    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentQuantity, setCurrentQuantity] = useState(0)


    useEffect(() => {
        // console.log(`userCoins has changed to ${userCoins}`)
        setCurrentQuantity(bizQuantities[index])

        const currentPrice = (cost * (((multiplier ** currentQuantity) * (multiplier ** 1 - 1)) / (multiplier - 1)))
        setCurrentPrice(Number(currentPrice.toFixed(2)))


    }, [userCoins, quantity, bizQuantities[index]])



    const purchaseHandler = async () => {

        console.log(`userCoins`, userCoins)
        console.log(`currentPrice`, currentPrice)

        // if player doesn't have enough coins, return
        if (userCoins < currentPrice) {
            toast.error(`You have not enough coins!`)
            return
        }

        // if player has enough coins, then purchase
        try {


            const response = await fetch(`/api/player/business/buy/${userId}?quantity=${1}&amount=${currentPrice}&businessId=${id}`)

            addCoins(-currentPrice)
            addBizQuantities[index](1)

            toast(`Purchased 1 ${name}!`, {
                icon: '🛒',
            })

        } catch (error) {

        }



    }

    return (
        <div
            onClick={() => purchaseHandler()}
            className={`
                border flex justify-between h-full
                ${userCoins >= currentPrice ? (
                    'bg-orange-200 hover:cursor-pointer hover:bg-orange-400'
                ) : (
                    'bg-gray-200 hover:cursor-not-allowed hover:bg-gray-300'
                )}
            `}
        >
            <div>Buy<br />x1</div>
            <div className="text-xl">${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        </div>
    )
}

export default BuyButton