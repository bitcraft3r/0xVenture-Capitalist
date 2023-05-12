'use client'

import { useState, useTransition } from "react"
import { useRouter } from 'next/navigation';
import useSound from 'use-sound'

import RegisterModal from "../../components/navbar/RegisterModal"

interface StartButtonProps {
    userId: string
}

const buttonStyle = ""

const StartButton: React.FC<StartButtonProps> = ({ userId }) => {
    const [popSound, { stop: stopPopSound }] = useSound('/audio/pop.mp3')
    const [successSound] = useSound('/audio/success.mp3')
    const [welcomeSound] = useSound('/audio/welcome.mp3')
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
            welcomeSound()

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
                    className={`
                        ${buttonStyle}
                        border-4 px-8 py-3 rounded-full font-semibold 
                        bg-gradient-to-br from-green-400 to-blue-500 border-teal-400
                        hover:bg-gradient-to-br hover:from-emerald-300 hover:to-blue-400
                        hover:text-white hover:border-teal-100
                        hover:shadow-green10 hover:shadow-[0_0_20px]
                        focus:shadow-green7 
                    `}
                    disabled={isMutating}
                    onMouseEnter={() => popSound()}
                    onMouseLeave={() => stopPopSound()}
                >
                    Start
                </button>

            ) : (
                <RegisterModal>
                    <button
                        className={`
                        ${buttonStyle}
                        border-4 px-8 py-3 rounded-full font-semibold 
                        bg-gradient-to-br from-amber-400 to-pink-500 border-amber-400
                        hover:bg-gradient-to-br hover:from-amber-300 hover:to-pink-400
                        hover:text-white hover:border-amber-100
                        hover:shadow-amber-500 hover:shadow-[0_0_20px]
                        focus:shadow-amber-300 
                        `}
                        // @ts-ignore
                        onClick={successSound}
                        onMouseEnter={() => popSound()}
                        onMouseLeave={() => stopPopSound()}
                    >
                        Sign In To Play
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default StartButton