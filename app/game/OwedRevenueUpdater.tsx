'use client'

import { useEffect, useRef } from "react";

import { useStore } from "@/app/store/GameStore"

type CallbackFunction = () => void;

// Define custom useInterval hook
function useInterval(callback: CallbackFunction, delay: number | null): void {
    // Use useRef to save the callback function
    const savedCallback = useRef<CallbackFunction | null>(null);

    // Update the saved callback whenever the callback prop changes
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval timer
    useEffect(() => {
        function tick() {
            savedCallback.current?.();
        }

        // Check that the delay is not null before setting the interval
        if (delay !== null) {
            const id = setInterval(tick, delay);

            // Return a function that clears the interval to clean up when the component unmounts
            return () => clearInterval(id);
        }
    }, [delay]);

    // Clean up the interval when the component unmounts
    useEffect(() => {
        return () => {
            if (savedCallback.current) {
                clearInterval(savedCallback.current as unknown as number);
            }
        };
    }, []);
}

const OwedRevenueUpdater = ({ userId }: { userId: string }): JSX.Element => {
    const [owedRevenue, setOwedRevenue] = useStore((state) => [state.owedRevenue, state.setOwedRevenue]);

    // Define the function to fetch owed revenue
    const fetchOwedRevenue = async () => {
        const response = await fetch(`/api/player/business/collect/${userId}?amount=${owedRevenue}`);
        const data = await response.json();
        if (data.coins) {
            // reset store owedRevenue to 0 after updating db
            setOwedRevenue(0);
        }
    };

    // Call the useInterval hook to periodically fetch owed revenue
    useInterval(() => {
        fetchOwedRevenue();
    }, 30000); // 30 seconds

    // Render the component here...
    return <></>;
}

export default OwedRevenueUpdater;
