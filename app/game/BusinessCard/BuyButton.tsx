'use client'

import { toast } from "react-hot-toast"

interface BuyButtonProps {
    id: string,
    name: string,
    cost: number,
    multiplier: number,
    quantity: number,
    userId: string,
    coins: number,
}

const BuyButton: React.FC<BuyButtonProps> = ({ id, name, cost, multiplier, quantity, userId, coins }) => {

    const currentPrice = (cost * (((multiplier ** quantity) * (multiplier ** 1 - 1)) / (multiplier - 1)))

    const priceFormatted = Number(currentPrice.toFixed(2))

    const purchaseHandler = async () => {

        // if player doesn't have enough coins, return
        if (coins < currentPrice) {
            toast.error(`You have not enough coins!`)
            return
        }

        // if player has enough coins, then purchase
        try {


            const response = await fetch(`/api/player/business/buy/${userId}?quantity=${1}&amount=${priceFormatted}&businessId=${id}`)


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
                border w-3/5 flex justify-between
                ${coins >= currentPrice ? (
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