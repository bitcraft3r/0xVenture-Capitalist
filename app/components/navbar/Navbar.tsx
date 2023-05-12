import Link from "next/link"
import Menu from "./Menu"
import Music from "../Music"

interface NavbarProps { currentUser?: any }

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    const buttonClass = "rounded-md md:py-2 py-1 md:px-4 sm:px-3 px-2 hover:cursor-pointer hover:shadow-md hover:bg-[#706960] focus:shadow-neutral-200"
    const navItems = [
        { heading: "Play", slug: "/game" },
        // { heading: "Leaderboard", slug: "/leaderboard" },
    ]

    return (
        <nav className="fixed w-full bg-[#555046] text-neutral-200 z-10 shadow-md p-[1rem] flex justify-between items-center h-[4rem]">
            <div className="flex items-center">
                <Link href='/'>
                    <code className={`${buttonClass} sm:mr-[1rem] mr-0 tracking-widest`}>0xVC</code>
                </Link>
                <div className="flex">
                    {navItems.map(item => (
                        <Link key={item.heading} href={`${item.slug}`}>
                            <div className={`${buttonClass} text-sm`}>
                                {item.heading}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center">
                <Music />
                <Menu currentUser={currentUser} />
            </div>
        </nav>
    )
}

export default Navbar