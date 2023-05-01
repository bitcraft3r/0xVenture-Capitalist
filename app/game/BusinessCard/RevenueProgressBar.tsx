interface RevenueProgressBarProps {
    revenue: number,
    quantity: number,
}

const RevenueProgressBar: React.FC<RevenueProgressBarProps> = ({ revenue, quantity }) => {
    return (
        <div className="border">
            {quantity === 0 ? (
                <>-</>
            ) : (
                <>Revenue: {revenue * quantity}</>
            )}
        </div>
    )
}

export default RevenueProgressBar