import getCurrentUser from "../actions/getCurrentUser"
import StartButton from "./StartButton"
import BusinessCard from "./BusinessCard"

interface BusinessCardProps {
    name: string,
    image: string,
    cost: number,
    revenue: number,
    time: number,
    multiplier: number,
    owned: number,
    managerName: string,
    managerCost: number,
    playerId: string,
    id: number,
}

const Game = async () => {
    const currentUser = await getCurrentUser();

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-extrabold mb-[2rem]">Blockchain Billionaire</h1>
            {currentUser ? (
                <div className="w-[80vw]">
                    <div className="border h-[5vh] mb-[1rem]">COINS</div>
                    <div className="border h-[70vh] flex">
                        <div className="flex-1">
                            {businesses.map((business) => (
                                <BusinessCard {...business} />
                            )
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <StartButton />
            )}
        </div>
    )
}

export default Game


let businesses: BusinessCardProps[] = [
    {
        name: "Lemonade Stand",
        image: "",
        cost: 3.738,
        revenue: 1,
        time: 0.5,
        multiplier: 1.07,
        owned: 1,
        managerName: "Sam Lemman",
        managerCost: 1_000,
        playerId: "userId",
        id: 1,
    },
    {
        name: "Mining Rig",
        image: "",
        cost: 60,
        revenue: 60,
        time: 3,
        multiplier: 1.15,
        owned: 0,
        managerName: "Wuhan Ji",
        managerCost: 15_000,
        playerId: "userId",
        id: 2,
    },
    {
        name: "Tuxedo Tailor",
        image: "",
        cost: 720,
        revenue: 540,
        time: 6,
        multiplier: 1.14,
        owned: 0,
        managerName: "Cuck Marbeles",
        managerCost: 100_000,
        playerId: "userId",
        id: 3,
    },
    {
        name: "Vegetable Farm",
        image: "",
        cost: 8640,
        revenue: 4320,
        time: 12,
        multiplier: 1.13,
        owned: 0,
        managerName: "Arthur Hays",
        managerCost: 500_000,
        playerId: "userId",
        id: 4,
    },
    {
        name: "Ramen Store",
        image: "",
        cost: 103_680,
        revenue: 51_840,
        time: 24,
        multiplier: 1.12,
        owned: 0,
        managerName: "Ko Dwon",
        managerCost: 1_200_000,
        playerId: "userId",
        id: 5,
    },
    {
        name: "Shrimp Boat",
        image: "",
        cost: 1_244_160,
        revenue: 622_080,
        time: 96,
        multiplier: 1.11,
        owned: 0,
        managerName: "Suzie Krylebaby",
        managerCost: 10_000_000,
        playerId: "userId",
        id: 6,
    },
    {
        name: "eSports Team",
        image: "",
        cost: 14_929_920,
        revenue: 7_464_960,
        time: 384,
        multiplier: 1.1,
        owned: 0,
        managerName: "Justina San",
        managerCost: 111_111_111,
        playerId: "userId",
        id: 7,
    },
    {
        name: "Cryptocurrency Exchange",
        image: "",
        cost: 179_159_040,
        revenue: 89_579_520,
        time: 1536,
        multiplier: 1.09,
        owned: 0,
        managerName: "Chao Zi Pang",
        managerCost: 555_555_555,
        playerId: "userId",
        id: 8,
    },
    {
        name: "Metaverse Company",
        image: "",
        cost: 2_149_908_480,
        revenue: 1_074_954_240,
        time: 6144,
        multiplier: 1.08,
        owned: 0,
        managerName: "Bear Shillbert",
        managerCost: 10_000_000_000,
        playerId: "userId",
        id: 9,
    },
    {
        name: "Blockchain Currency",
        image: "",
        cost: 25_798_901_760,
        revenue: 29_668_737_024,
        time: 36864,
        multiplier: 1.07,
        owned: 0,
        managerName: "Carlos Matos",
        managerCost: 100_000_000_000,
        playerId: "userId",
        id: 10,
    }
]