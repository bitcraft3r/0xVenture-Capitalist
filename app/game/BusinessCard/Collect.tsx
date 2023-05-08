'use client'

import Image from "next/image"
import { toast } from "react-hot-toast";

import { useStore } from "@/app/store/GameStore"
import { useEffect, useState, MouseEventHandler } from "react";
import RevenueProgressBar from "./RevenueProgressBar";
import ProgressBar from "./ProgressBar";
import ProgressBarManaged from "./ProgressBarManaged";
import QuantityBar from "./QuantityBar";
import BuyButton from "./BuyButton";

interface CollectProps {
    name: string,
    image: string,
    revenue: number,
    time: number,
    quantity: number,
    managerOwned: boolean,
    index: number,
    userId: string,
    id: string,
    cost: number,
    multiplier: number,
    coins: number,
}

const Collect: React.FC<CollectProps> = ({ name, image, revenue, time, quantity, managerOwned, index, userId, id, cost, multiplier, coins }) => {

    const [
        addCoins,
        bizQuantities,
        addBizQuantities,
        setBizQuantities,
        bizTime,
        setBizTime,
        bizRevenue,
        setBizRevenue,
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
    ])

    const [thisQuantity, setThisQuantity] = useState(bizQuantities[index])
    const [thisTime, setThisTime] = useState(bizTime[index])
    const [thisRevenue, setThisRevenue] = useState(bizRevenue[index])
    const [disabled, setDisabled] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [hasManager, setHasManager] = useState(false)

    useEffect(() => {
        setBizQuantities[index](quantity);
        setHasManager(managerOwned)
        setBizTime[index](time);
        setBizRevenue[index](revenue);
    }, [])

    useEffect(() => {
        setThisQuantity(bizQuantities[index]);
        setThisTime(bizTime[index]);
        setThisRevenue(bizRevenue[index]);
    }, [bizQuantities[index], bizTime[index], bizRevenue[index]])

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
        }, bizTime[index] * 1000)
    }

    return (
        <div className="flex">
            {/* COLLECT BUTTON */}
            <div
                onClick={!disabled ? collectHandler : undefined}
                className={`
                    flex flex-col justify-center items-center h-[120px]
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
                                    ? 'bg-green-200 hover:bg-green-400 hover:cursor-not-allowed'
                                    : 'bg-cyan-600 hover:bg-sky-500 hover:cursor-pointer'
                                : 'hover:cursor-not-allowed bg-gray-400 hover:bg-gray-600'
                        )}
                        
                        
                    `} />
                <QuantityBar index={index} />
                <div className="w-[100%] text-white -mt-6 font-bold z-10">
                    {bizQuantities[index]}
                </div>
            </div>
            <div className="flex flex-col w-4/5 items-center">
                {/* BUY BUTTON */}
                <div className="w-[100%] px-2 mb-2">
                    <BuyButton
                        id={id}
                        name={name}
                        cost={cost}
                        multiplier={multiplier}
                        quantity={quantity}
                        index={index}
                        userId={userId}
                        coins={coins}
                    />
                </div>
                {/* PROGRESS BARS */}
                <div className="w-[100%] flex items-center flex-col">
                    {bizQuantities[index] > 0 &&
                        <>
                            <div className="absolute z-10 text-orange-950 font-extrabold">
                                <RevenueProgressBar
                                    revenue={revenue}
                                    time={bizTime[index]}
                                    quantity={bizQuantities[index]}
                                    index={index}
                                />
                            </div>
                            <div className="w-[100%] flex justify-center">
                                {managerOwned && <ProgressBarManaged time={bizTime[index]} index={index} revenue={revenue} userId={userId} />}
                                {buttonClicked && !managerOwned && <ProgressBar time={bizTime[index]} />}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Collect