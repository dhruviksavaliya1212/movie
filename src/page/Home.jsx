import React from "react";
import Banner from "../components/Banner";
import Upcoming from "../components/Upcoming";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Person from "../components/Person";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className=" h-full">
      <Banner />
      <div className=" w-full flex justify-center">
      <div className=" w-[100%] lg:w-[90%]">
        <Trending/>
        <Upcoming />
        <NowPlaying />
        <Popular />
        <TopRated />
        <Person />
      </div>
      </div>
    </div>
  );
};

export default Home;
