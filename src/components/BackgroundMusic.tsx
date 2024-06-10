import React, { useState, useRef } from 'react';
import { SlVolume1,  SlVolumeOff } from 'react-icons/sl';
import ReactPlayer from 'react-player/youtube';

interface BackgroundMusicProps {
  videoUrl: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

/*
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().volume = Number(e.target.value);
    }
  };
*/

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={isPlaying}
        volume={0.25} //volume
        loop
        style={{ display: 'none' }}
      />
      <div className="fixed bottom-4 right-4 flex items-center space-x-2">
        <div className="relative group">
          <button
            onClick={togglePlayPause}
            className="bg-[#C2A27F] text-white p-3 rounded-full shadow-lg"
          >
            {isPlaying ? <SlVolume1 color='white'/> : <SlVolumeOff color='white'/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
