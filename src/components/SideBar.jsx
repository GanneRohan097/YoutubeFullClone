import React from "react";
import { MdHome, MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="hidden md:block w-60 h-full bg-black text-white p-4 space-y-4">

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <MdHome className="text-xl" />
        <span>Home</span>
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <SiYoutubeshorts className="text-xl" />
        <span>Shorts</span>
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <MdSubscriptions className="text-xl" />
        <span>Subscriptions</span>
      </div>

      <hr className="border-gray-700" />

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <MdOutlineVideoLibrary className="text-xl" />
        <span>Library</span>
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <FaHistory className="text-xl" />
        <span>History</span>
      </div>

      <div className="flex items-center gap-4 cursor-pointer hover:bg-[#222222] p-2 rounded-lg">
        <CgProfile className="text-xl" />
        <span>Your channel</span>
      </div>

    </div>
  );
};

export default SideBar;