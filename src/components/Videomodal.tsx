import React from "react";

interface VideomodalProps {
  videoUrl: string;
  onClose: () => void;
}

const getYoutubeEmbedUrl = (url: string) => {
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
};

const Videomodal: React.FC<VideomodalProps> = ({ videoUrl, onClose }) => {
  const embedUrl = getYoutubeEmbedUrl(videoUrl);

  return (
    <div
      className="fixed z-20 bg-[#000000DD] w-full h-full flex justify-center items-center"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={embedUrl}
          className="aspect-video w-screen z-40 max-w-[360px] md:max-w-[700px] lg:max-w-[1120px] xl:max-w-[1280px]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video"
        />
      </div>
    </div>
  );
};

export default Videomodal;
