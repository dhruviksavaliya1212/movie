import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Poster = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      setData(response.data.backdrops);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className=" w-full flex flex-col items-center justify-cente mt-5 ">
        <div className=" w-[90%] text-start">
          <h1 className=" text-zinc-200 text-2xl font-semibold">Related Banner</h1>
        </div>
      <div className="w-[95%] sm:w-[90%] no-scrollbar scrollbar-hide my-3 flex gap-7 overflow-x-scroll mt-5 ">
        { data.map((item, index) => {
              return (
                <div key={index}
                  className=" cursor-pointer"
                >
                  <div className=" w-64 h-40 overflow-hidden flex">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                      alt=""
                      loading="lazy"
                      placeholder="blur"
                      
                      className=" w-full rounded-md h-full"
                    />
                  </div>
                  <h1 className=" text-zinc-200 font-medium text-center">{item.title}</h1>
                  <h1 className=" text-zinc-400 text-center">{item.release_date}</h1>
                </div>
              );
            })
          }
      </div>
    </div>
  );
};

export default Poster;
