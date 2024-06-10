import { useState } from "react";
import "./App.css";
import Flipbook from "./components/Flipbook";
import Videomodal from "./components/Videomodal";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
  };

  const handleClose = () => {
    setVideoUrl(null);
  };

  return (
    <>
      {videoUrl && <Videomodal videoUrl={videoUrl} onClose={handleClose} />}
      <BackgroundMusic videoUrl="https://www.youtube.com/watch?v=i43tkaTXtwI&t=16s"/>
      <Flipbook onVideoSelect={handleVideoSelect} />
    </>
  );
}

export default App;
