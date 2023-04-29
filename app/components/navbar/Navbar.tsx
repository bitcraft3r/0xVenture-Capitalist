import Link from "next/link"
import Menu from "./Menu"

interface NavbarProps { currentUser?: any }

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    const buttonClass = "rounded-md py-1 px-2 hover:cursor-pointer hover:shadow-md hover:bg-gray-300"
    const navItems = [
        { heading: "Game", slug: "/game" },
        { heading: "About", slug: "/about" },
    ]

    return (
        <nav className="fixed w-full bg-gray-100 z-10 shadow-md p-[1rem] flex justify-between items-center h-[4rem]">
            <div className="flex items-center">
                <Link href='/'>
                    <code className={`${buttonClass} mr-[1rem] tracking-widest`}>BB</code>
                </Link>
                <div className="flex">
                    {navItems.map(item => (
                        <Link key={item.heading} href={`${item.slug}`}>
                            <div className={`${buttonClass} mr-[1rem] text-sm`}>
                                {item.heading}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <Menu currentUser={currentUser} />
            </div>
        </nav>
    )
}

export default Navbar