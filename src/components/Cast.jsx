import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cast = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      setData(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className=" w-full flex justify-center mt-5 lg:mt-5">
      <div className=" md:w-[90%] w-full">
        <h1 className=" text-zinc-200 text-2xl font-bold ml-5">Top Cast</h1>

        <div className=" no-scrollbar scrollbar-hide my-3 px-3 flex gap-5 overflow-x-scroll mt-5">
          {data.filter((item)=>item.known_for_department === "Acting").map((item, index) => {
            return (
              <div className="">
                <div key={index} className="">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt=""
                    loading="lazy"
                    className=" h-44 w-40 rounded-full"
                  />
                  <div className=" w-44 flex justify-center">
                    <h1 className=" text-zinc-200 text-md font-semibold">
                      {item.name}
                    </h1>
                  </div>
                  <div className=" w-44 flex justify-center">
                    <h1 className=" text-zinc-400 text-md text-center font-semibold">
                      {item.character}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cast;
