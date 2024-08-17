import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {

  const hanldeClick = ()=>{
    window.scrollTo(0, 0)
  }

  const navigate = useNavigate();
  return (
    <div className=" fixed z-50 h-14 w-full flex justify-center bg-zinc-900/60">
      <div className="  w-full sm:w-[90%] lg:w-[90%] text-white h-full px-5 flex items-center justify-between ">
        <div>
          <img onClick={()=> {navigate('/'); hanldeClick}} src={logo} alt="" className="lg:h-16 h h-10 sm:h-14 cursor-pointer"/>
        </div>
        <div className=" flex gap-6 items-center">
          <a href="" onClick={()=> {navigate('/search'); hanldeClick}}><FaSearch className=" text-xl sm:text-2xl"/></a>
          <a href="/"><FaHome className=" text-xl sm:text-2xl"/></a>
          <a href="" className=" hidden sm:block text-lg font-semibold">Movies</a>
          <a href="" className=" hidden sm:block text-lg font-semibold">Series</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
