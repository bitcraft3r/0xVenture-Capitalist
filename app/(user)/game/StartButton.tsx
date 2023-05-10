'use client'

import { useState, useTransition } from "react"
import { useRouter } from 'next/navigation';
import RegisterModal from "../../components/navbar/RegisterModal"

interface StartButtonProps {
    userId: string
}

const StartButton: React.FC<StartButtonProps> = ({ userId }) => {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    // Create inline loading UI
    const isMutating = isFetching || isPending;


    const handleStart = async () => {
        // console.log(`userId in StartButton comp: ${userId}`)

        try {
            setIsFetching(true);

            const response = await fetch(`/api/player/business/seed/${userId}`, { method: 'GET' })
            // console.log(`res`, response)

            const data = await response.json()
            // console.log(`data rcvd in StartButton comp: ${data}`)

            setIsFetching(false);

            startTransition(() => {
                // refresh current route
                // https://beta.nextjs.org/docs/data-fetching/mutating
                router.refresh();
            })


        } catch (error) {
            console.log(error)
        }


    }

    return (
        <>
            {userId ? (
                <button
                    onClick={() => handleStart()}
                    className="border rounded-xl px-4 py-2 font-bold text-xl shadow-md hover:bg-emerald-500 hover:shadow-xl"
                    disabled={isMutating}
                >
                    Start
                </button>

            ) : (
                <RegisterModal>
                    <button
                        className="border rounded-xl px-4 py-2 font-bold text-xl shadow-md hover:bg-emerald-500 hover:shadow-xl"
                    >
                        Sign In
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default StartButton