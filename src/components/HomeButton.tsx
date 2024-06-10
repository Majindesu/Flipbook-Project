import React from "react";
import { IoHome } from "react-icons/io5";

interface Props {
    onClick: () => void;
}

const HomeButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2">
      <div className="relative group">
        <button
          onClick={onClick}
          className="bg-[#C2A27F] text-white p-3 rounded-full shadow-lg"
        >
          <IoHome color="white" className="w-[25px] h-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default HomeButton;
