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
                    <button className="bg-green4 text-green11 shadow-blackA7 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-bold leading-none shadow-[0_2px_10px] text-lg">
                        Let's play!
                    </button>
                </Link>
            ) : (
                <RegisterModal>
                    <button className="bg-rose-100 text-rose-500 shadow-blackA7 hover:bg-rose-200 focus:shadow-rose-200 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-bold leading-none shadow-[0_2px_10px] text-lg">
                        Ready to play?
                    </button>
                </RegisterModal>
            )}
        </>
    )
}

export default CTA