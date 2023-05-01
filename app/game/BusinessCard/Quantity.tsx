'use client'

import Image from "next/image"
import { toast } from "react-hot-toast";

import { useStore } from "@/app/store/GameStore"
import { useEffect } from "react";

interface QuantityProps {
    name: string,
    image: string,
    revenue: number,
    time: number,
    quantity: number,
    userId: string,
}

const Quantity: React.FC<QuantityProps> = ({ name, image, revenue, time, quantity, userId, }) => {

    const [
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

    const collectHandler = async () => {
        // console.log(`Clicked ${name}`)

        // if player doesn't own any of this business, return
        if (quantity < 1) {
            // console.log(`You must own at least one ${name}!`)
            toast.error(`You must own at least one ${name}!`)
            return
        }

        // TODO: Add other checks here, like if `lastCollected` is less than `time` seconds ago, return




        // TODO: add `revenue * quantity` to `coins` in User model via prisma
        // console.log(`userId in Quantity component is ${userId}`)
        // if player owns at least one of this business, and passes all other checks, then collect revenue

        try {

            let finalRevenue = 0;

            if (name === 'Lemonade Stand') finalRevenue = revenue * biz1Quantity
            else if (name === 'Mining Rig') finalRevenue = revenue * biz2Quantity
            else if (name === 'Tuxedo Tailor') finalRevenue = revenue * biz3Quantity
            else if (name === 'Vegetable Farm') finalRevenue = revenue * biz4Quantity
            else if (name === 'Ramen Store') finalRevenue = revenue * biz5Quantity
            else if (name === 'Shrimp Boat') finalRevenue = revenue * biz6Quantity
            else if (name === 'eSports Team') finalRevenue = revenue * biz7Quantity
            else if (name === 'Cryptocurrency Exchange') finalRevenue = revenue * biz8Quantity
            else if (name === 'Oil Company') finalRevenue = revenue * biz9Quantity
            else if (name === 'Space Rocket') finalRevenue = revenue * biz10Quantity

            const response = await fetch(`/api/player/business/collect/${userId}?amount=${finalRevenue}`)
            const data = await response.json()

            if (data.coins) {
                // success!
                // console.log(`data`, data)
                // console.log(`updated coins to:`, data.coins)
                // console.log(`Collected $${revenue * quantity} from ${name}!`)
                addCoins(finalRevenue)
                toast.success(`Collected $${finalRevenue} from ${name}! New balance is $${data.coins}.`)


            } else {
                toast.error(data.error)
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (name === 'Lemonade Stand') addBiz1Quantity(quantity)
        if (name === 'Mining Rig') addBiz2Quantity(quantity)
        if (name === 'Tuxedo Tailor') addBiz3Quantity(quantity)
        if (name === 'Vegetable Farm') addBiz4Quantity(quantity)
        if (name === 'Ramen Store') addBiz5Quantity(quantity)
        if (name === 'Shrimp Boat') addBiz6Quantity(quantity)
        if (name === 'eSports Team') addBiz7Quantity(quantity)
        if (name === 'Cryptocurrency Exchange') addBiz8Quantity(quantity)
        if (name === 'Metaverse Company') addBiz9Quantity(quantity)
        if (name === 'Blockchain Currency') addBiz10Quantity(quantity)

    }, [])


    return (
        <div
            onClick={() => collectHandler()}
            className={`

                ${quantity > 0 ? (
                    'bg-emerald-100 hover:bg-emerald-300 hover:cursor-pointer'
                ) : (
                    'bg-gray-200 hover:cursor-not-allowed hover:bg-gray-300'
                )}
            `}
        >
            <div className="flex justify-center">
                <Image src={image} alt={name} width={50} height={50} />
            </div>
            <div className="border">
                {name === 'Lemonade Stand' && (biz1Quantity)}
                {name === 'Mining Rig' && (biz2Quantity)}
                {name === 'Tuxedo Tailor' && (biz3Quantity)}
                {name === 'Vegetable Farm' && (biz4Quantity)}
                {name === 'Ramen Store' && (biz5Quantity)}
                {name === 'Shrimp Boat' && (biz6Quantity)}
                {name === 'eSports Team' && (biz7Quantity)}
                {name === 'Cryptocurrency Exchange' && (biz8Quantity)}
                {name === 'Metaverse Company' && (biz9Quantity)}
                {name === 'Blockchain Currency' && (biz10Quantity)} Owned
            </div>
        </div>
    )
}

export default Quantity