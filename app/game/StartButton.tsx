'use client'

const StartButton = () => {
    const handleStart = () => {
        console.log(`h3llo`)
    }

    return (
        <button
            onClick={() => handleStart()}
            className="border rounded-xl px-4 py-2 font-bold text-xl shadow-md hover:bg-emerald-500 hover:shadow-xl"
        >
            START
        </button>
    )
}

export default StartButton