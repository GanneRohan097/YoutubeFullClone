import React, { useState } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { MdMic } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Hero = ({setSearchResult}) => {
  const navigate = useNavigate();
  const [inputSearch,setInputSearch] = useState("");
  function handleSearch(){
    setSearchResult(inputSearch);
    navigate("/");
  }
  return (
    <div className="flex items-center justify-between  px-4 py-2 bg-black text-white">

      <div className="flex items-center gap-4">
        <RxHamburgerMenu className="hidden md:block text-2xl cursor-pointer" />
        <div onClick={()=>navigate("/")} className="flex items-center gap-1 cursor-pointer">
          <FaYoutube className="text-red-500 text-3xl" />
          <span className="font-semibold text-xl">YouTube</span>
        </div>
      </div>

      <div className="flex items-center flex-1 max-w-[600px]">
        <input
          type="text"
          placeholder="Search"
           value={inputSearch} 
          className=" w-full ml-4 p-2 bg-black border border-gray-600 rounded-l-full outline-none"
          onChange={(e)=>setInputSearch(e.target.value)}
          onKeyDown={(e)=>e.key==="Enter" && handleSearch()}
        />

        <button onClick={()=>handleSearch()} className="bg-[#222222] px-4 py-2 border border-gray-600 rounded-r-full">
          <FaSearch size={24} />
        </button>

        <div className="hidden md:block ml-3 bg-[#222222] p-2 rounded-full cursor-pointer">
          <MdMic className="text-xl" />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <IoNotificationsOutline className="hidden md:block text-2xl cursor-pointer" />
        <CgProfile className=" hidden md:block text-2xl cursor-pointer" />
      </div>

    </div>
  );
};

export default Hero;