interface BalancesProps {
    coins: number
}

const Balances: React.FC<BalancesProps> = ({ coins }) => {
    return (
        <div className="w-[80vw] h-[10vh] border mb-[2rem]">
            Balances
            <div>Coins: ${coins}</div>
        </div>
    )
}

export default Balances