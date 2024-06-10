import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Page2 from "./interactivePages/Page2";
import Page5 from "./interactivePages/Page5";
import Page6 from "./interactivePages/Page6";
import HomeButton from "./HomeButton";

interface FlipbookProps {
  onVideoSelect: (url: string) => void;
}

const Flipbook: React.FC<FlipbookProps> = ({ onVideoSelect }) => {
  const book = useRef();
  const goToPage = (pageIndex: Number) => {
    if (book.current) {
      //@ts-ignore
      book.current.pageFlip().flip(pageIndex);
    }
  };
  const goHome = () => {
    if (book.current) {
      //@ts-ignore
      book.current.pageFlip().flip(1);
    }
  };

  return (
    //@ts-ignore
    <HTMLFlipBook
      className="m-5 shadow-2xl"
      width={794}
      height={1123}
      maxWidth={794}
      maxHeight={1123}
      size="stretch"
      minWidth={350}
      minHeight={495}
      showCover={false}
      ref={book}
    >
      <div className="staticpage">
        <img
          key={1}
          src={`/flipbook-pages/1.png`}
          alt={`Page 1`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="interactivepage">
        <Page2 goToPage={goToPage} />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={3}
          src={`/flipbook-pages/3.png`}
          alt={`Page 3`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={4}
          src={`/flipbook-pages/4.png`}
          alt={`Page 4`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="interactivepage">
        <HomeButton onClick={goHome} />
        <Page5 onVideoSelect={onVideoSelect} />
      </div>
      <HomeButton onClick={goHome} />
      <div className="interactivepage">
        <HomeButton onClick={goHome} />
        <Page6 onVideoSelect={onVideoSelect} />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={7}
          src={`/flipbook-pages/7.png`}
          alt={`Page 7`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={8}
          src={`/flipbook-pages/8.png`}
          alt={`Page 8`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={9}
          src={`/flipbook-pages/9.png`}
          alt={`Page 9`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={10}
          src={`/flipbook-pages/10.png`}
          alt={`Page 10`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="staticpage">
        <HomeButton onClick={goHome} />
        <img
          key={11}
          src={`/flipbook-pages/11.png`}
          alt={`Page 11`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </HTMLFlipBook>
  );
};

export default Flipbook;
