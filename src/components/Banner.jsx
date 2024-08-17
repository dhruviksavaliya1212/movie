import React from "react";
import img from "../assets/banner1.jpg";
// import Search from "./Search";

const Banner = () => {
  return (
    <div className="h-screen w-full grid place-items-center overflow-hidden">
      <div className=" relative w-full h-full">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className=" absolute top-0 flex items-center justify-center pt-14 w-full h-full  gap-10 lg:gap-3 flex-col lg:flex-row  bg-gradient-to-b to-zinc-900 from-black/60">
          <div className="   text-white">
            <div className=" relative">
              <h1 className=" w-[100%] absolute left-[3px] text-zinc-200 font-bold text-5xl text-center">
                Discover the World of Streaming
              </h1>
              <h1 className=" w-[100%] text-orange-900 font-bold text-5xl text-center">
                Discover the World of Streaming
              </h1>
            </div>
            <div className=" w-full flex justify-center">
            <p className=" w-[90%] mt-5 text-xl font-semibold text-center">
              Experience an unparalleled entertainment experience with Netflix's
              vast library of movies, TV shows, and original content. Discover
              new favorites, explore unique genres, and enjoy unlimited
              streaming on any device. Join the world of streaming today!
            </p>
            </div>
            <div className=" w-full grid place-items-center mt-5">
              <button className=" bg-zinc-200 px-7 py-1 text-lg font-bold text-zinc-800 rounded-full shadow-md shadow-orange-800 ">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
