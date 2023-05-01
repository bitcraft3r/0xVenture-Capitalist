interface BusinessCardProps {
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
            {quantity > 1 ? (
                <div className="mb-[2rem]">BUY: ${(cost * (((multiplier ** quantity) * (multiplier ** 1 - 1)) / (multiplier - 1))).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            ) : (
                <div className="border flex m-[1rem] p-[1rem]">
                    {/* Left */}
                    <div className="border w-1/4">
                        <div className="h-[50px]">Logo ()</div>
                        <div className="border">{quantity} Purchased</div>
                    </div>
                    {/* Right */}
                    <div className="w-3/4">
                        <div className="border">Progress bar + Revenue</div>
                        <div className="flex">

                            {/* BUY BUTTON */}
                            <div className="border w-3/5 flex justify-between hover:cursor-pointer">
                                <div>Buy<br />x1</div>
                                <div className="text-xl">${(cost * (((multiplier ** quantity) * (multiplier ** 1 - 1)) / (multiplier - 1))).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                            </div>

                            <div className="border w-2/5">Timer</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BusinessCard
