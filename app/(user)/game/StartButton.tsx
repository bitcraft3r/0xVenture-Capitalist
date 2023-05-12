'use client'

import { useState, useTransition } from "react"
import { useRouter } from 'next/navigation';
import RegisterModal from "../../components/navbar/RegisterModal"

interface StartButtonProps {
    userId: string
}

const buttonStyle = "border-4 border-neutral-500 px-8 py-3 rounded-full font-semibold bg-gradient-to-br from-green-400 to-blue-500 hover:bg-gradient-to-br hover:from-emerald-300 hover:to-blue-400 hover:text-white hover:shadow-sky-400 hover:shadow-[0_0_15px] focus:shadow-blue-300 focus:border-neutral-600"

const StartButton: React.FC<StartButtonProps> = ({ userId }) => {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    // Create inline loading UI
    const isMutating = isFetching || isPending;

    const handleStart = async () => {
        try {
            setIsFetching(true);

            const response = await fetch(`/api/player/business/seed/${userId}`, { method: 'GET' })
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
                    className={`${buttonStyle}`}
                    disabled={isMutating}
                >
                    Start
                </button>

            ) : (
                <RegisterModal>
                    <button
                        className={`${buttonStyle}`}
                    >
                        Sign In To Play
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default StartButton