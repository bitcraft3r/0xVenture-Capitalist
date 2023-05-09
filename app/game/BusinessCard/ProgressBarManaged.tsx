'use client'

import { useState, useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

import { useStore } from "@/app/store/GameStore"

interface ProgressBarManagedProps {
    time: number,
    index: number,
    revenue: number,
    userId: string,
}

// https://www.radix-ui.com/docs/primitives/components/progress

const ProgressBarManaged: React.FC<ProgressBarManagedProps> = ({ time, index, revenue, userId }) => {

    const [
        addCoins,
        bizQuantities,
        addOwedRevenue,
    ] = useStore((state) => [
        state.addCoins,
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
        state.addOwedRevenue,
    ])

    let businessDuration = time * 1000
    const [progress, setProgress] = useState(0);
    const [timer, setTimer] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    // reset timer to initial value when it reaches 0
                    return time
                } else {
                    return prevTimer - 1
                }
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        // auto collect revenue every `time` seconds
        let timer: NodeJS.Timeout;

        // function to collect revenue
        const collectRevenue = async () => {
            let finalRevenue = revenue * bizQuantities[index];

            if (finalRevenue) {

                // if i add something to Zustand store here, get following error:
                // Warning: Cannot update a component (`OfflineProfits`) while rendering a different component (`ProgressBarManaged`). To locate the bad setState() call inside `ProgressBarManaged`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
                // at ProgressBarManaged (webpack-internal:///(app-client)/./app/game/BusinessCard/ProgressBarManaged.tsx:14:11)
                // whereas if it is added after my fetch, there is no error (maybe coz there is some delay so they are not trying to render at the exact same time?)

                // ==> add a 0.1s delay before adding to store to avoid error
                const intervalId = setInterval(() => {
                    // console.log(`adding ${finalRevenue} to store after 0.1 seconds`)

                    // update coins in store that shows on UI balances
                    addCoins(finalRevenue)

                    // update revenueOwed in store that is used in OwedRevenueUpdater.tsx to update db every 30s
                    addOwedRevenue(finalRevenue)

                    clearInterval(intervalId);
                }, 100)

            }

        }

        // function to restart the timer and progress state
        const restartTimer = () => {
            setProgress(0);
            clearInterval(timer);
            timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
                    if (newProgress >= 100) {
                        // recursively call restartTimer() when progress reaches 100
                        restartTimer();
                        // collect revenue
                        collectRevenue();
                    }
                    return newProgress;
                })
            }, businessDuration / 100)
        }

        if (businessDuration > 0) {
            restartTimer()
        }

        return () => {
            clearInterval(timer);
        }
    }, [businessDuration, bizQuantities[index]])

    function formatDuration(duration: number): string {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        let seconds = duration % 60;

        if (seconds < 1) seconds = 0

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = Math.floor(Number(seconds)).toString().padStart(2, '0');

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

export default ProgressBarManaged;
