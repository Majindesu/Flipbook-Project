// src/components/Flipbook.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

interface FlipbookProps {
  pages: string[];
}

const Flipbook: React.FC<FlipbookProps> = ({ pages }) => {
  return (
    //@ts-ignore
    <HTMLFlipBook showCover={true} width={375} height={667}>
      {pages.map((path, index) => (
        <img key={path} src={`/flipbook-pages/${path}.png`} alt={`Page ${index + 1}`} style={{ width: '100%', height: '100%' }} />
      ))}
    </HTMLFlipBook>
  );
};

export default Flipbook;
