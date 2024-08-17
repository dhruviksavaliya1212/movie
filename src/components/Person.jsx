import React,{useState, useContext} from 'react'
import { SotreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Person = () => {
  const { person } = useContext(SotreContext);

  const navigate = useNavigate();


  const hanldeClick = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className=" -mt-7 px-4 text-white py-5 rounded-t-xl  ">
      <div className=' flex items-center justify-between'>
      <h1 className=" text-2xl font-semibold">Popular Person </h1> 
      </div>
      <div className=" no-scrollbar scrollbar-hide my-3 w-full flex gap-7 overflow-x-scroll mt-5 ">
        { person.map((item, index) => {
          return (
            <div onClick={()=> {navigate(`/person/${item.id}`); hanldeClick()}} key={index} className=" cursor-pointer">
              <div className=" w-40 h-60 overflow-hidden flex">
                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" className=" w-full rounded-md h-full" />
                
              </div>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Person