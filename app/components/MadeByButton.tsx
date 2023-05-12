import Link from 'next/link'

const MadeByButton = () => {
    return (
        <>
            <Link href="https://github.com/sov3333/0xVenture-Capitalist" target="_blank" rel="noopener noreferrer">
                <button
                    className="
                            border-4 border-neutral-500 px-4 py-2 rounded-full font-semibold
                            bg-gradient-to-br from-pink-400 to-purple-500 
                            hover:bg-gradient-to-br hover:from-pink-300 hover:to-purple-400
                            hover:text-white
                            hover:shadow-pink-400 hover:shadow-[0_0_15px] hover:border-fuchsia-400
                            focus:shadow-pink-300 focus:border-neutral-600
                        "
                >
                    Made with ❤️ by sov3333
                </button>
            </Link>
        </>
    )
}

export default MadeByButton