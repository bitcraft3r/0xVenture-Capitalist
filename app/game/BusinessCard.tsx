import Image from 'next/image';

import Quantity from './BusinessCard/Quantity';
import RevenueProgressBar from './BusinessCard/RevenueProgressBar';
import BuyButton from './BusinessCard/BuyButton';

interface BusinessCardProps {
    id: string,
    name: string,
    image: string,
    cost: number,
    revenue: number,
    time: number,
    multiplier: number,
    quantity: number,
    managerName: string,
    managerCost: number,
    userId: string,

    currentUser?: any
}

const BusinessCard: React.FC<BusinessCardProps> = ({
    id,
    name,
    image,
    cost,
    revenue,
    time,
    multiplier,
    quantity,
    managerName,
    managerCost,
    userId,

    currentUser,
}) => {

    // console.log(`things in business card`, name, cost, multiplier, quantity, userId)
    // console.log(`currentUser in business card`, currentUser)


    return (
        <>
            <div>{name}</div>
            {/* {!quantity ? (
                <div className="flex justify-center items-center content-center">
                    <Image src={image} alt={name} width={50} height={50} />
                    <div className="mb-[2rem]">BUY: ${(cost * (((multiplier ** quantity) * (multiplier ** 1 - 1)) / (multiplier - 1))).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                </div>
            ) : ( */}
            <div className="border flex m-[1rem] p-[1rem]">
                {/* Left */}
                <div className="border w-1/4">
                    <Quantity
                        name={name}
                        image={image}
                        revenue={revenue}
                        time={time}
                        quantity={quantity}
                        userId={userId}
                    />
                </div>
                {/* Right */}
                <div className="w-3/4">
                    <RevenueProgressBar
                        revenue={revenue}
                        quantity={quantity}
                    />
                    <div className="flex">

                        {/* BUY BUTTON */}
                        <BuyButton
                            id={id}
                            name={name}
                            cost={cost}
                            multiplier={multiplier}
                            quantity={quantity}
                            userId={userId}
                            coins={currentUser.coins}
                        />

                        <div className="border w-2/5">Timer</div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    )
}

export default BusinessCard
