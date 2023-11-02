import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearVideos,changeSearchTerm, clearSearchTerm } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";


export default function Navbar() {

  const location=useLocation();
  const naviagte =useNavigate();
  const dispatch=useAppDispatch();
  const searchTerm=useAppSelector((state)=>state.youtubeApp.searchTerm);

  const handleSearch=()=>{
    if(location.pathname!=='/search') naviagte("/search");
    else{
      dispatch(clearVideos())
      dispatch(getSearchPageVideos(false))
    }
  }
  return (
    <div className="flex justify-between items-center px-14 h-14  bg-[#212121] opacity-95 sticky top-0 z-15">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium"> Youtube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form onSubmit={e=>{
          e.preventDefault();
          handleSearch()
        }}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e)=>dispatch(changeSearchTerm(e.target.value))}
              ></input>
              <AiOutlineClose className={`text-xl crursor-pointer ${!searchTerm? "invisible":"visible"}`
             } onClick={()=>dispatch(clearSearchTerm())}/>
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
                     </form> 
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
        <div className="flex gap-5 items-center text-xl">
          <BsCameraVideo /> <IoAppsSharp />
          <div className="relative">
            <BsBell />
            <span className=" absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">1+</span>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/142480934?v=4"
            className="w-9 h-9 rounded-full"
            alt="logo"
          />

        </div>
        <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Options
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Edit</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Duplicate</a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Archive</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Move</a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">Share</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-5">Add to favorites</a>
        </div>
        <div className="py-1" role="none">
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-6">Delete</a>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
