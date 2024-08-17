import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ searchResults, setCategory, category }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-center">
      
      <div className=" w-[95%] sm:w-[90%] no-scrollbar scrollbar-hide my-3 flex flex-wrap justify-center gap-5 sm:gap-8 lg:gap-10  mt-5 ">
        {searchResults.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                if (category === "Movie") {
                  navigate(`/description/${item.id}`);
                }
                if (category === "Series") {
                  navigate(`/descriptiontv/${item.id}`);
                }
              }}
              className=" cursor-pointer w-40"
            >
              <div className=" w-40 h-60 overflow-hidden flex">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=""
                  loading="lazy"
                  className=" w-full rounded-md h-full"
                />
              </div>
              <h1 className=" text-zinc-200 font-medium text-center">
                {item.title ? item.title : item.name}
              </h1>
              <h1 className=" text-zinc-400 text-center">
                {item.release_date}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
