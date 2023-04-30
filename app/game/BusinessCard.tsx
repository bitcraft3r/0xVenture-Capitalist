interface BusinessCardProps {
    name: string,
    image: string,
    cost: number,
    revenue: number,
    time: number,
    multiplier: number,
    owned: number,
    managerName: string,
    managerCost: number,
    playerId: string,
    id: number,
    currentUser?: any
}

const BusinessCard: React.FC<BusinessCardProps> = ({
    name,
    image,
    cost,
    revenue,
    time,
    multiplier,
    owned,
    managerName,
    managerCost,
    playerId,
    id,
    currentUser,
}) => {
    return (
        <>
            <div>{name}</div>
            {owned > 1 ? (
                <div className="mb-[2rem]">BUY: ${(cost * (((multiplier ** owned) * (multiplier ** 1 - 1)) / (multiplier - 1))).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            ) : (
                <div className="border flex m-[1rem] p-[1rem]">
                    {/* Left */}
                    <div className="border w-1/4">
                        <div className="h-[50px]">Logo ({id})</div>
                        <div className="border"># Purchased</div>
                    </div>
                    {/* Right */}
                    <div className="w-3/4">
                        <div className="border">Progress bar + Revenue</div>
                        <div className="flex">

                            {/* BUY BUTTON */}
                            <div className="border w-3/5 flex justify-between hover:cursor-pointer">
                                <div>Buy<br />x1</div>
                                <div className="text-xl">${(cost * (((multiplier ** owned) * (multiplier ** 1 - 1)) / (multiplier - 1))).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
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
