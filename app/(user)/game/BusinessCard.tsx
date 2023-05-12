import Collect from './BusinessCard/Collect';

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
    managerOwned: boolean,
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
    managerOwned,
    index,
    userId,

    currentUser,
}) => {

    // console.log(`things in business card`, name, cost, multiplier, quantity, userId)
    // console.log(`currentUser in business card`, currentUser)


    return (
        <>
            {/* <div>{name}</div> */}
            <div className="flex m-[1rem] p-[0.5rem] w-[40vw]">

                <div className="w-[100%]">
                    <Collect
                        name={name}
                        image={image}
                        revenue={revenue}
                        time={time}
                        quantity={quantity}
                        index={index}
                        userId={userId}
                        managerOwned={managerOwned}

                        id={id}
                        cost={cost}
                        multiplier={multiplier}
                        coins={currentUser.coins}
                    />

                </div>

            </div>
        </>
    )
}

export default BusinessCard
