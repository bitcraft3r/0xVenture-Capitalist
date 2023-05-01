'use client'

import { useState } from "react"
import RegisterModal from "../components/navbar/RegisterModal"

interface StartButtonProps {
    userId: string
}

const StartButton: React.FC<StartButtonProps> = ({ userId }) => {

    const [loading, setLoading] = useState(false)



    const handleStart = async () => {
        console.log(`userId in StartButton comp: ${userId}`)

        try {
            setLoading(true)

            const response = await fetch(`/api/player/start/${userId}`, { method: 'GET' })
            console.log(`res`, response)

            const data = await response.json()
            console.log(`data rcvd in StartButton comp: ${data}`)

            setLoading(false)
        } catch (error) {
            console.log(error)
        }

        // if user not logged in
        // button will show SIGN UP


        // if userId exists == user is logged in
        // and this component only show if user also has no businesses
        // ==> button will show START
        // when button clicked, 
        // add starter businesses objects to the player's businesses[] array
    }

    return (
        <>
            {userId ? (
                <button
                    onClick={() => handleStart()}
                    className="border rounded-xl px-4 py-2 font-bold text-xl shadow-md hover:bg-emerald-500 hover:shadow-xl"
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