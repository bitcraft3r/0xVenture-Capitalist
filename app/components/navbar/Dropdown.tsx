'use client'

// https://www.radix-ui.com/docs/primitives/components/dropdown-menu
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

interface MenuProps { currentUser?: any }

const Dropdown: React.FC<MenuProps> = ({ currentUser }) => {
    const router = useRouter();

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <img
                    className="h-8 w-8 rounded-full hover:cursor-pointer hover:shadow-gray-500 shadow-[0_2px_10px] shadow-gray-400 outline-none"
                    src={currentUser.image || "images/placeholder.jpg"}
                    alt="profile"
                />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[175px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-20"
                    sideOffset={5}
                >
                    <DropdownMenu.Item
                        onClick={() => router.push('/profile')}
                        className="group text-[13px] leading-none text-mauve11 rounded-[3px] flex justify-center items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-mauve9 data-[highlighted]:text-mauve1 hover:cursor-pointer"
                    >
                        Profile
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-[1px] bg-mauve6 m-[5px]" />
                    <DropdownMenu.Item
                        onClick={() => signOut()}
                        className="group text-[13px] leading-none text-mauve11 rounded-[3px] flex justify-center items-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-mauve9 data-[highlighted]:text-mauve1 hover:cursor-pointer"
                    >
                        Sign Out
                    </DropdownMenu.Item>
                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Dropdown;
