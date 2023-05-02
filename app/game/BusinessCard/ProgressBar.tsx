import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
    time: number,
}

// https://www.radix-ui.com/docs/primitives/components/progress

const ProgressBar: React.FC<ProgressBarProps> = (time) => {

    // get `time` from props
    let businessDuration = time.time * 1000
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        // start timer only when buttonClicked is true & duration > 0
        if (businessDuration > 0) {
            timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
                    if (newProgress >= 100) {
                        clearInterval(timer)
                    }
                    return newProgress;
                })
            }, businessDuration / 100)
        }

        return () => {
            clearInterval(timer);
        }
    }, [businessDuration])

    return (
        <Progress.Root
            className="relative overflow-hidden bg-blackA7 rounded-full w-[300px] h-[25px]"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
            }}
            value={progress}
        >
            <Progress.Indicator
                className="bg-green-500 w-full h-full transition-transform duration-[0ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default ProgressBar;
