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
        bizTime,
        setBizTime,
        bizRevenue,
        setBizRevenue,
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
            [
                state.biz1Time,
                state.biz2Time,
                state.biz3Time,
                state.biz4Time,
                state.biz5Time,
                state.biz6Time,
                state.biz7Time,
                state.biz8Time,
                state.biz9Time,
                state.biz10Time,
            ],
            [
                state.setBiz1Time,
                state.setBiz2Time,
                state.setBiz3Time,
                state.setBiz4Time,
                state.setBiz5Time,
                state.setBiz6Time,
                state.setBiz7Time,
                state.setBiz8Time,
                state.setBiz9Time,
                state.setBiz10Time,
            ],
            [
                state.biz1Revenue,
                state.biz2Revenue,
                state.biz3Revenue,
                state.biz4Revenue,
                state.biz5Revenue,
                state.biz6Revenue,
                state.biz7Revenue,
                state.biz8Revenue,
                state.biz9Revenue,
                state.biz10Revenue,
            ],
            [
                state.setBiz1Revenue,
                state.setBiz2Revenue,
                state.setBiz3Revenue,
                state.setBiz4Revenue,
                state.setBiz5Revenue,
                state.setBiz6Revenue,
                state.setBiz7Revenue,
                state.setBiz8Revenue,
                state.setBiz9Revenue,
                state.setBiz10Revenue,
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

        // console.log(`userCoins`, userCoins)
        // console.log(`currentPrice`, currentPrice)

        // if player doesn't have enough coins, return
        if (userCoins < currentPrice) {
            toast.error(`You have not enough coins!`)
            return
        }

        // if player has enough coins, then purchase
        try {


            const response = await fetch(`/api/player/business/buy/${userId}?quantity=${1}&amount=${currentPrice}&businessId=${id}`)

            // console.log(`bizQuantities[index] before`, bizQuantities[index])            
            if (bizQuantities[index] === 24 || bizQuantities[index] === 49 || bizQuantities[index] === 99 || bizQuantities[index] === 199 || bizQuantities[index] === 299 || bizQuantities[index] === 399) {
                toast.success(`2x speed on your ${name}!`)
                // set store's bizTime[index] to x0.5
                setBizTime[index](bizTime[index] / 2)
            }
            if (bizQuantities[index] === 499 || bizQuantities[index] === 599 || bizQuantities[index] === 699 || bizQuantities[index] === 799 || bizQuantities[index] === 899 || bizQuantities[index] === 1099 || bizQuantities[index] === 1199 || bizQuantities[index] === 1299 || bizQuantities[index] === 1399 || bizQuantities[index] === 1499 || bizQuantities[index] === 1599 || bizQuantities[index] === 1699 || bizQuantities[index] === 1799 || bizQuantities[index] === 1899) {
                toast.success(`4x revenue on your ${name}!`)
                // set store's bizRevenue[index] to x4
                setBizRevenue[index](bizRevenue[index] * 4)
            }
            if (bizQuantities[index] === 2249 || bizQuantities[index] === 2499 || bizQuantities[index] === 2749 || bizQuantities[index] === 3249 || bizQuantities[index] === 3499 || bizQuantities[index] === 3749 || bizQuantities[index] === 4249 || bizQuantities[index] === 4499 || bizQuantities[index] === 4749) {
                toast.success(`2x revenue on your ${name}!`)
                // set store's bizRevenue[index] to x2
                setBizRevenue[index](bizRevenue[index] * 2)
            }
            if (bizQuantities[index] === 999 || bizQuantities[index] === 1999 || bizQuantities[index] === 2999 || bizQuantities[index] === 3999 || bizQuantities[index] === 4999) {
                toast.success(`5x revenue on your ${name}!`)
                // set store's bizRevenue[index] to x5
                setBizRevenue[index](bizRevenue[index] * 2)
            }

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