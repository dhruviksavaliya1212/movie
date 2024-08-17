import React, { useContext, useState } from 'react'
import { SotreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const TopRated = () => {
  const { toprated, toprated2 } = useContext(SotreContext);

  const navigate = useNavigate();

  const [category, setCategory] = useState("movies");

  const hanldeClick = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className=" px-4 -mt-7 text-white pt-5 pb-4 rounded-t-xl  ">
      <div className=' flex items-center justify-between'>
      <h1 className=" text-2xl font-semibold"> { category === "movies" ? "Top Rated Movies" : "Top Rated Series"} </h1> 
      <div className=' flex gap-3'>
        <button onClick={()=>{category === "movies" ? setCategory("series") : setCategory("movies")}} className=' bg-zinc-200 px-5 sm:px-7 py-1 text-md sm:text-lg font-semibold sm:font-bold text-zinc-800 rounded-full shadow-md shadow-orange-800  '>{category === "movies" ? "TV Shows" : "Movies"}</button>
      </div>
      </div>
      <div className=" no-scrollbar scrollbar-hide my-3 w-full flex gap-7 overflow-x-scroll mt-5">
        {category === "movies" ? toprated.map((item, index) => {
          return (
            <div  key={index} onClick={()=> {navigate(`/description/${item.id}`); hanldeClick();}} className=" cursor-pointer">
              <div className=" w-40 h-60 overflow-hidden flex">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className=" w-full rounded-md h-full" loading='lazy' />
                
              </div>
              <h1>{item.title}</h1>
              <h1 className=" text-zinc-400">{item.release_date}</h1>
            </div>
          );
        }) : toprated2.map((item, index) => {
          return (
            <div key={index} onClick={()=> {navigate(`/descriptiontv/${item.id}`); hanldeClick();}} className=" cursor-pointer">
              <div className=" w-40 h-60 overflow-hidden flex">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className=" w-full rounded-md h-full" />
                
              </div>
              <h1>{item.name}</h1>
              <h1 className=" text-zinc-400">{item.first_air_date}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRated