import React, { useContext } from 'react'
import { SotreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const { trending } = useContext(SotreContext);
  const navigate = useNavigate();

  const hanldeClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className=" px-4 text-white pt-5 rounded-t-xl  ">
      <div className=' flex items-center justify-between'>
      <h1 className=" text-2xl font-semibold"> Trending Movie </h1> 
      </div>
      <div className=" no-scrollbar scrollbar-hide my-3 w-full flex gap-7 overflow-x-scroll mt-5">
        {trending.map((item, index) => {
          return (
            <div onClick={()=>{navigate(`/description/${item.id}`); hanldeClick();}} key={index} className=" cursor-pointer">
              <div className=" w-40 h-60 overflow-hidden flex">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" className=" w-full rounded-md h-full" />
              </div>
              <h1>{item.title}</h1>
              <h1 className=" text-zinc-400">{item.release_date}</h1>
            </div>
          );
        })};
      </div>
    </div>
  );
}

export default Trending