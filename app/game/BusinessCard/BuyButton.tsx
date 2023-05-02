'use client'

import { toast } from "react-hot-toast"

import { useStore } from "@/app/store/GameStore"
import { useEffect } from "react"

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
        addBiz1Quantity,
        addBiz2Quantity,
        addBiz3Quantity,
        addBiz4Quantity,
        addBiz5Quantity,
        addBiz6Quantity,
        addBiz7Quantity,
        addBiz8Quantity,
        addBiz9Quantity,
        addBiz10Quantity,
    ] = useStore(
        (state) => [
            state.userCoins,
            state.addCoins,
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
        ]
    )

    useEffect(() => {
        console.log(`userCoins has changed to ${userCoins}`)
    }, [userCoins])


    let thisQuantity = 1;

    if (index === 0) thisQuantity = biz1Quantity
    else if (index === 1) thisQuantity = biz2Quantity
    else if (index === 2) thisQuantity = biz3Quantity
    else if (index === 3) thisQuantity = biz4Quantity
    else if (index === 4) thisQuantity = biz5Quantity
    else if (index === 5) thisQuantity = biz6Quantity
    else if (index === 6) thisQuantity = biz7Quantity
    else if (index === 7) thisQuantity = biz8Quantity
    else if (index === 8) thisQuantity = biz9Quantity
    else if (index === 9) thisQuantity = biz10Quantity

    const currentPrice = (cost * (((multiplier ** thisQuantity) * (multiplier ** 1 - 1)) / (multiplier - 1)))

    const priceFormatted = Number(currentPrice.toFixed(2))

    const purchaseHandler = async () => {

        // if player doesn't have enough coins, return
        if (userCoins < currentPrice) {
            toast.error(`You have not enough coins!`)
            return
        }

        // if player has enough coins, then purchase
        try {


            const response = await fetch(`/api/player/business/buy/${userId}?quantity=${1}&amount=${priceFormatted}&businessId=${id}`)

            addCoins(-priceFormatted)

            if (index === 0) addBiz1Quantity(1)
            else if (index === 1) addBiz2Quantity(1)
            else if (index === 2) addBiz3Quantity(1)
            else if (index === 3) addBiz4Quantity(1)
            else if (index === 4) addBiz5Quantity(1)
            else if (index === 5) addBiz6Quantity(1)
            else if (index === 6) addBiz7Quantity(1)
            else if (index === 7) addBiz8Quantity(1)
            else if (index === 8) addBiz9Quantity(1)
            else if (index === 9) addBiz10Quantity(1)

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
            <div className="text-xl">${priceFormatted.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        </div>
    )
}

export default BuyButton