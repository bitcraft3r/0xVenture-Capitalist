'use client'

import Image from "next/image"
import { toast } from "react-hot-toast";

import { useStore } from "@/app/store/GameStore"
import { useEffect, useState, MouseEventHandler } from "react";
import RevenueProgressBar from "./RevenueProgressBar";
import ProgressBar from "./ProgressBar";
import ProgressBarManaged from "./ProgressBarManaged";
import QuantityBar from "./QuantityBar";

interface QuantityProps {
    name: string,
    image: string,
    revenue: number,
    time: number,
    quantity: number,
    managerOwned: boolean,
    index: number,
    userId: string,
}

const Quantity: React.FC<QuantityProps> = ({ name, image, revenue, time, quantity, managerOwned, index, userId, }) => {

    const [
        addCoins,
        bizQuantities,
        addBizQuantities,
        setBizQuantities,
    ] = useStore((state) => [
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
            state.setBiz1Quantity,
            state.setBiz2Quantity,
            state.setBiz3Quantity,
            state.setBiz4Quantity,
            state.setBiz5Quantity,
            state.setBiz6Quantity,
            state.setBiz7Quantity,
            state.setBiz8Quantity,
            state.setBiz9Quantity,
            state.setBiz10Quantity,
        ],
    ])

    const [thisQuantity, setThisQuantity] = useState(bizQuantities[index])
    const [disabled, setDisabled] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [hasManager, setHasManager] = useState(false)

    useEffect(() => {
        setBizQuantities[index](quantity);
        setHasManager(managerOwned)
    }, [])

    useEffect(() => {
        setThisQuantity(bizQuantities[index]);
    }, [bizQuantities[index]])

    const collectHandler: MouseEventHandler<HTMLDivElement> = async () => {
        // if player doesn't own any of this business, return
        if (bizQuantities[index] < 1) {
            toast.error(`You must own at least one ${name}!`)
            return
        }

        // if player owns a manager for this business, return
        if (managerOwned) {
            toast.error(`You already have a manager running ${name}!`)
            return
        }

        // TODO: Add a timer of `time` seconds before executing the collect function, and while the timer is running, disable the button
        setDisabled(true)
        setButtonClicked(true)

        setTimeout(async () => {
            try {
                let finalRevenue = revenue * bizQuantities[index];

                const response = await fetch(`/api/player/business/collect/${userId}?amount=${finalRevenue}`)
                const data = await response.json()

                if (data.coins) {
                    // success!
                    addCoins(finalRevenue)
                    toast.success(`Collected ${finalRevenue.toLocaleString("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })} from ${name}! New balance is ${(data.coins).toLocaleString("en-US", { style: "currency", currency: "USD" })}.`)
                } else {
                    toast.error(data.error)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setDisabled(false)
                setButtonClicked(false)
            }
        }, time * 1000)
    }

    return (
        <div className="flex">
            {/* COLLECT BUTTON */}
            <div
                onClick={!disabled ? collectHandler : undefined}
                className={`
                    flex flex-col justify-center items-center
                `}
            >
                <Image
                    src={image} alt={name} width={75} height={75}
                    className={`
                        rounded-full  p-3 m-1 border-slate-700 border-4 hover:border-slate-500
                        ${managerOwned ? (
                            'hover:cursor-not-allowed bg-green-400 hover:bg-green-500'
                        ) : (
                            bizQuantities[index] > 0
                                ? disabled
                                    ? 'bg-green-200 hover:bg-green-400'
                                    : 'bg-cyan-600 hover:bg-sky-500 hover:cursor-pointer'
                                : 'hover:cursor-not-allowed bg-gray-400 hover:bg-gray-600'
                        )}
                        
                        
                    `} />
                <QuantityBar index={index} />
                <div className="w-[100%] text-white -mt-6 font-bold z-10">
                    {bizQuantities[index]}
                </div>
            </div>
            {/* PROGRESS BARS */}
            {bizQuantities[index] > 0 &&
                <div className="flex flex-col w-4/5 items-center">
                    <RevenueProgressBar
                        revenue={revenue}
                        time={time}
                        quantity={bizQuantities[index]}
                        index={index}
                    />
                    <div>Timer: {time}</div>
                    <div className="w-[100%] flex justify-center">
                        {managerOwned && <ProgressBarManaged time={time} index={index} revenue={revenue} userId={userId} />}
                        {buttonClicked && !managerOwned && <ProgressBar time={time} />}
                    </div>
                </div>
            }
        </div>
    )
}

export default Quantity