'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

import RegisterModal from "../navbar/RegisterModal"

interface User {
    name: string
}

interface CTAProps {
    currentUser?: any
}

const commonButtonClass = "shadow-blackA8 shadow-[0_0_10px] inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-bold leading-none text-lg text-neutral-100"

const CTA: React.FC<CTAProps> = ({ currentUser }) => {
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
                        bg-gradient-to-br from-green-400 to-blue-500 
                        hover:bg-gradient-to-br hover:from-emerald-300 hover:to-blue-400
                        hover:text-white
                        hover:shadow-green10 hover:shadow-[0_0_20px]
                        focus:shadow-green7 
                    `}>
                        Play Now!
                    </button>
                </Link>
            ) : (
                <RegisterModal>
                    <button className={`
                        ${commonButtonClass}
                        bg-gradient-to-br from-amber-400 to-pink-500 
                        hover:bg-gradient-to-br hover:from-amber-300 hover:to-pink-400
                        hover:text-white
                        hover:shadow-amber-500 hover:shadow-[0_0_20px]
                        focus:shadow-amber-300 
                        
                    `}>
                        Ready to play?
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default CTA