interface RevenueProgressBarProps {
    revenue: number
}

const RevenueProgressBar: React.FC<RevenueProgressBarProps> = ({ revenue }) => {
    return (
        <div className="border">Revenue: {revenue}</div>
    )
}

export default RevenueProgressBar