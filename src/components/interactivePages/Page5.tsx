import React from 'react';

interface Page5Props {
  onVideoSelect: (url: string) => void;
}

const Page5: React.FC<Page5Props> = ({ onVideoSelect }) => {

  const handleClick = () => {
    onVideoSelect('https://www.youtube.com/watch?v=KTSJNRVbAfQ');
  };
  
  return (
    <div className='flex items-center justify-center'>
      <img src={`/flipbook-pages/5_polos.webp`} alt="Page 5" />
      <button
        className="fixed bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-7 z-10"
        onClick={handleClick}
      >
        <img
          src={`/videothumbnail1.png`}
          alt="Video Thumbnail"
          className="aspect-video h-24 md:h-34 lg:h-40 xl:h-44"
        />
      </button>
    </div>
  );
}

export default Page5;
