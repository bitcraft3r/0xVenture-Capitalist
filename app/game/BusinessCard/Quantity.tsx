'use client'

import Image from "next/image"
import { toast } from "react-hot-toast";

interface QuantityProps {
    name: string,
    image: string,
    revenue: number,
    time: number,
    quantity: number,
    userId: string,
}

const Quantity: React.FC<QuantityProps> = ({ name, image, revenue, time, quantity, userId, }) => {

    const collectHandler = () => {
        console.log(`Clicked ${name}`)

        // if player doesn't own any of this business, return
        if (quantity < 1) {
            console.log(`You must own at least one ${name}!`)
            toast.error(`You must own at least one ${name}!`)
            return
        }

        // TODO: Add other checks here, like if `lastCollected` is less than `time` seconds ago, return



        // if player owns at least one of this business, and passes all other checks, then collect revenue
        console.log(`Collected $${revenue * quantity} from ${name}!`)
        toast.success(`Collected $${revenue * quantity} from ${name}!`)

        // TODO: add `revenue * quantity` to `coins` in User model via prisma
        console.log(`userId in Quantity component is ${userId}`)

    }

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
            <div className="border">{quantity} Owned</div>
        </div>
    )
}

export default Quantity