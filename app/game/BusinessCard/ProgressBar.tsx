import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
    time: number,
}

// https://www.radix-ui.com/docs/primitives/components/progress

const ProgressBar: React.FC<ProgressBarProps> = ({ time }) => {

    // get `time` from props
    let businessDuration = time * 1000
    const [progress, setProgress] = useState(0);
    const [timer, setTimer] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                return prevTimer - 1
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);



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

    function formatDuration(duration: number): string {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        let seconds = duration % 60;

        if (seconds < 1) seconds = 0

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <div className="flex flex-col justify-center items-center w-[100%]">
            <Progress.Root
                className="relative overflow-hidden bg-blackA7 rounded-full w-[90%] h-[25px]"
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
            <div>
                {formatDuration(timer)}
            </div>
        </div>
    );
};

export default ProgressBar;
