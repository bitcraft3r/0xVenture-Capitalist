'use client'

import { useEffect, useState } from "react"

interface User {
    name: string
}

interface WelcomeProps {
    currentUser?: any
}

const Welcome: React.FC<WelcomeProps> = ({ currentUser }) => {
    const [user, setUser] = useState<User | null>(currentUser || null)

    useEffect(() => {
        if (currentUser && !user) {
            setUser(currentUser)
        }
    }, [user, currentUser])

    return (
        <>
            {user ? (
                `Welcome back ${user.name}!`
            ) : (
                "Hello Billionaire-2-B!"
            )}
        </>
    )
}

export default Welcome