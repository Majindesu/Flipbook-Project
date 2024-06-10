import React from 'react';

interface Page6Props {
  onVideoSelect: (url: string) => void;
}

const Page6: React.FC<Page6Props> = ({ onVideoSelect }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onVideoSelect('https://www.youtube.com/watch?v=lYznomaVWNc');
  };

  return (
    <div className="flex items-center justify-center">
      <img src={`/flipbook-pages/6_polos.png`} alt="Page 6" className="w-full h-full" />
      <button
        className="fixed top-48 md:top-50 lg:top-64 xl:top-80 2xl:top-96 z-10"
        onClick={handleClick}
      >
        <img
          src={`/videothumbnail2.png`}
          alt="Video Thumbnail"
          className="aspect-video h-24 md:h-32 lg:h-40 xl:h-52"
        /> {/* Adjust size as needed */}
      </button>
    </div>
  );
}

export default Page6;
