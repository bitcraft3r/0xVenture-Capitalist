'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import useSound from 'use-sound'

import RegisterModal from "../navbar/RegisterModal"

interface User {
    name: string
}

interface CTAProps {
    currentUser?: any
}

const commonButtonClass = "shadow-blackA8 shadow-[0_0_10px] inline-flex my-[0.5rem] items-center justify-center rounded-full px-6 py-4 font-bold leading-none text-lg text-neutral-100 border-4"

const CTA: React.FC<CTAProps> = ({ currentUser }) => {
    const [popSound, { stop: stopPopSound }] = useSound('/audio/pop.mp3')
    const [successSound] = useSound('/audio/success.mp3')

    const [user, setUser] = useState<User | null>(currentUser || null)

    useEffect(() => {
        if (currentUser && !user) {
            setUser(currentUser)
        }
    }, [user, currentUser])

    return (
        <>
            {user ? (
                <Link href="/game">
                    <button className={`
                        ${commonButtonClass}
                        bg-gradient-to-br from-green-400 to-blue-500 border-teal-400
                        hover:bg-gradient-to-br hover:from-emerald-300 hover:to-blue-400
                        hover:text-white hover:border-teal-100
                        hover:shadow-green10 hover:shadow-[0_0_20px]
                        focus:shadow-green7 
                        `}
                        // @ts-ignore
                        onClick={successSound}
                        onMouseEnter={() => popSound()}
                        onMouseLeave={() => stopPopSound()}
                    >
                        Play Now!
                    </button>
                </Link>
            ) : (
                <RegisterModal>
                    <button className={`
                        ${commonButtonClass}
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
                        Ready to play?
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default CTA