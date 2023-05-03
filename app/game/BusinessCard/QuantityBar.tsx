import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

import { useStore } from '@/app/store/GameStore';

interface QuantityBarProps {
    index: number,
}

// https://www.radix-ui.com/docs/primitives/components/progress

const QuantityBar: React.FC<QuantityBarProps> = ({ index }) => {

    const [
        bizQuantity
    ] = useStore(
        (state) => [
            [
                state.biz1Quantity,
                state.biz2Quantity,
                state.biz3Quantity,
                state.biz4Quantity,
                state.biz5Quantity,
                state.biz6Quantity,
                state.biz7Quantity,
                state.biz8Quantity,
                state.biz9Quantity,
                state.biz10Quantity,
            ],
        ]
    )

    const [quantity, setQuantity] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        setQuantity(bizQuantity[index]);

        let quantity = bizQuantity[index]

        let adjustedQuantity: number = 0;

        if (quantity < 25) adjustedQuantity = quantity * 4
        else if (quantity < 50) adjustedQuantity = (quantity - 25) * 4
        else if (quantity < 100) adjustedQuantity = (quantity - 50) * 2
        else if (quantity < 200) adjustedQuantity = (quantity - 100)
        else if (quantity < 300) adjustedQuantity = (quantity - 200)
        else if (quantity < 400) adjustedQuantity = (quantity - 300)
        else if (quantity < 500) adjustedQuantity = (quantity - 400)
        else if (quantity < 600) adjustedQuantity = (quantity - 500)
        else if (quantity < 700) adjustedQuantity = (quantity - 600)
        else if (quantity < 800) adjustedQuantity = (quantity - 700)
        else if (quantity < 900) adjustedQuantity = (quantity - 800)
        else if (quantity < 1000) adjustedQuantity = (quantity - 900)
        else if (quantity < 1100) adjustedQuantity = (quantity - 1000)
        else if (quantity < 1200) adjustedQuantity = (quantity - 1100)
        else if (quantity < 1300) adjustedQuantity = (quantity - 1200)
        else if (quantity < 1400) adjustedQuantity = (quantity - 1300)
        else if (quantity < 1500) adjustedQuantity = (quantity - 1400)
        else if (quantity < 1600) adjustedQuantity = (quantity - 1500)
        else if (quantity < 1700) adjustedQuantity = (quantity - 1600)
        else if (quantity < 1800) adjustedQuantity = (quantity - 1700)
        else if (quantity < 1900) adjustedQuantity = (quantity - 1800)
        else if (quantity < 2000) adjustedQuantity = (quantity - 1900)
        else if (quantity < 2250) adjustedQuantity = (quantity - 2000) * 2 / 5
        else if (quantity < 2500) adjustedQuantity = (quantity - 2250) * 2 / 5
        else if (quantity < 2750) adjustedQuantity = (quantity - 2500) * 2 / 5
        else if (quantity < 3000) adjustedQuantity = (quantity - 2750) * 2 / 5
        else if (quantity < 3250) adjustedQuantity = (quantity - 3000) * 2 / 5
        else if (quantity < 3500) adjustedQuantity = (quantity - 3250) * 2 / 5
        else if (quantity < 3750) adjustedQuantity = (quantity - 3500) * 2 / 5
        else if (quantity < 4000) adjustedQuantity = (quantity - 3750) * 2 / 5
        else if (quantity < 4250) adjustedQuantity = (quantity - 4000) * 2 / 5
        else if (quantity < 4500) adjustedQuantity = (quantity - 4250) * 2 / 5
        else if (quantity < 4750) adjustedQuantity = (quantity - 4500) * 2 / 5
        else if (quantity < 5000) adjustedQuantity = (quantity - 4750) * 2 / 5

        setProgress(adjustedQuantity);

    }, [bizQuantity[index]])


    useEffect(() => {

    }, []);

    return (
        <Progress.Root
            className="relative overflow-hidden bg-slate-500 rounded-full w-[100%] h-[25px] -mt-3"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
            }}
            value={progress}
        >

            <Progress.Indicator
                className="bg-orange-300 text-white w-full h-full transition-transform duration-[0ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default QuantityBar;