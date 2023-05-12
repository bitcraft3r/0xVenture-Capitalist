'use client'

import { useState } from 'react'
import useSound from 'use-sound'

const Music = () => {
    const [playMusic1, { stop: stopMusic1 }] = useSound('/audio/blackjack.mp3')
    const [playMusic2, { stop: stopMusic2 }] = useSound('/audio/streetlights.mp3')
    const [playMusic3, { stop: stopMusic3 }] = useSound('/audio/smooth-driving.mp3')
    const [playMusic4, { stop: stopMusic4 }] = useSound('/audio/refreshing-dawn.mp3')
    const [playMusic5, { stop: stopMusic5 }] = useSound('/audio/beach-vibes.mp3')
    const [currentMusic, setCurrentMusic] = useState(1);


    const handleMusic = () => {
        switch (currentMusic) {
            case 1:
                playMusic1();
                setCurrentMusic(2);
                break;
            case 2:
                stopMusic1();
                playMusic2();
                setCurrentMusic(3);
                break;
            case 3:
                stopMusic2();
                playMusic3();
                setCurrentMusic(4);
                break;
            case 4:
                stopMusic3();
                playMusic4();
                setCurrentMusic(5);
                break;
            case 5:
                stopMusic4();
                playMusic5();
                setCurrentMusic(6);
                break;
            case 6:
                stopMusic5();
                setCurrentMusic(1); // Loop back to playMusic1()
                break;
            default:
                break;
        }
    }

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