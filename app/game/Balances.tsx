interface BalancesProps {
    coins: number
}

const Balances: React.FC<BalancesProps> = ({ coins }) => {
    return (
        <div className="w-[80vw] h-[10vh] border mb-[2rem]">
            Balances
            <div>Coins: ${coins.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
        </div>
    )
}

export default Balances