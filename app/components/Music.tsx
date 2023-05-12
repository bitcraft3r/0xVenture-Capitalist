'use client'

import { useEffect, useState } from 'react'
import useSound from 'use-sound'

const Music = () => {
    const [playMusic1, { stop: stopMusic1 }] = useSound('/audio/blackjack.mp3')
    const [playMusic2, { stop: stopMusic2 }] = useSound('/audio/streetlights.mp3')
    const [playMusic3, { stop: stopMusic3 }] = useSound('/audio/smooth-driving.mp3')
    const [playMusic4, { stop: stopMusic4 }] = useSound('/audio/refreshing-dawn.mp3')
    const [playMusic5, { stop: stopMusic5 }] = useSound('/audio/beach-vibes.mp3')
    const [currentMusic, setCurrentMusic] = useState(1);

    const stopFunctions = [stopMusic1, stopMusic2, stopMusic3, stopMusic4, stopMusic5];

    const stopAllMusic = () => {
        stopFunctions.forEach(stopFunction => stopFunction());
    };

    const handleMusic = () => {
        setCurrentMusic(current => {
            const nextMusic = current === 6 ? 1 : current + 1; // Loop back to playMusic1() when currentMusic is 6
            return nextMusic;
        });

        switch (currentMusic) {
            case 1:
                stopAllMusic();
                playMusic1();
                break;
            case 2:
                stopAllMusic();
                playMusic2();
                break;
            case 3:
                stopAllMusic();
                playMusic3();
                break;
            case 4:
                stopAllMusic();
                playMusic4();
                break;
            case 5:
                stopAllMusic();
                playMusic5();
                break;
            case 6:
                stopAllMusic();
                break;
            default:
                break;
        }
    };

    return (
        <div
            onClick={() => handleMusic()}
            className="mr-[1rem] p-1 px-2 rounded-full border-2 hover:cursor-pointer border-purple-400 
            bg-gradient-to-br from-pink-400 to-purple-500 
            hover:bg-gradient-to-br hover:from-pink-300 hover:to-purple-400
            hover:text-white
            hover:shadow-pink-400 hover:shadow-[0_0_15px] hover:border-purple-100
            focus:shadow-pink-300 focus:border-purple-300"
        >
            🎵
        </div>
    )
}

export default Music