'use client'

import { useEffect, useState } from "react"
import { toast } from "react-hot-toast";

import Dropdown from "./Dropdown"
import RegisterModal from "./RegisterModal";

interface MenuProps { currentUser?: any }

const Menu: React.FC<MenuProps> = ({ currentUser }) => {
    const buttonClass = "rounded-md py-1 px-2 hover:cursor-pointer hover:shadow-md hover:bg-gray-300 text-sm"
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (currentUser && !user) {
            setUser(currentUser)
            toast.success(`Hello ${currentUser.name}!`)
        }
    }, [user])

    return (
        <>
            {user ? (
                <div className="flex">
                    <Dropdown currentUser={currentUser} />
                </div>
            ) : (

                <RegisterModal>
                    <button className="text-black shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] text-sm">
                        Sign In
                    </button>
                </RegisterModal>

            )}
        </>
    )
}

export default Menu