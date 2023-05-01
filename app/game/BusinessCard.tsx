import Quantity from './BusinessCard/Quantity';
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
    index: number,
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
    index,
    userId,

    currentUser,
}) => {

    // console.log(`things in business card`, name, cost, multiplier, quantity, userId)
    // console.log(`currentUser in business card`, currentUser)


    return (
        <>
            <div>{name}</div>
            <div className="border flex m-[1rem] p-[1rem]">
                {/* Left */}
                <div className="border w-2/3">
                    <Quantity
                        name={name}
                        image={image}
                        revenue={revenue}
                        time={time}
                        quantity={quantity}
                        index={index}
                        userId={userId}
                    />
                </div>
                {/* Right */}
                <div className="w-1/3">
                    {/* BUY BUTTON */}
                    <BuyButton
                        id={id}
                        name={name}
                        cost={cost}
                        multiplier={multiplier}
                        quantity={quantity}
                        index={index}
                        userId={userId}
                        coins={currentUser.coins}
                    />
                </div>
            </div>
        </>
    )
}

export default BusinessCard
