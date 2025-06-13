import React, { useRef } from "react";

interface CriesPlayerProps {
    sound_url: string
}

const CriesPlayer: React.FC<CriesPlayerProps> = ({sound_url}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const reproducirAudio = () => {
        console.log('w')
        audioRef.current?.play();
    };

    return (
        <div className="rounded-full bg-blue-700 p-2 w-[45px] h-[45px] m-4 hover:scale-110 transition ease-in-out">
            <audio autoPlay ref={audioRef} src={sound_url} />
            <button onClick={reproducirAudio}>
                <img src="/speaker.svg" alt="icon" width={30} height={30}/>
            </button>
        </div>
    );
};

export default CriesPlayer;