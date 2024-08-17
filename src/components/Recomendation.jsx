import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Recomendation = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      setData(response.data.results);
      check();
    } catch (error) {
      console.log(error);
    }
  };



  const onClickHandler = () => {
    window.scrollTo({ top:0 })
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className=" w-full flex flex-col items-center justify-center">
        <div className=" w-[90%] text-start">
          <h1 className=" text-zinc-200 text-2xl font-semibold">Recomendations</h1>
        </div>
      <div className=" w-[95%] sm:w-[90%] no-scrollbar scrollbar-hide my-3 flex gap-7 overflow-x-scroll mt-5 ">
        { data.map((item, index) => {
              return (
                <div key={index}
                  onClick={() => {navigate(`/description/${item.id}`); onClickHandler()}}
                  className=" cursor-pointer"
                >
                  <div className=" w-40 h-60 overflow-hidden flex">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt=""
                      loading="lazy"
                      className=" w-full rounded-md h-full"
                    />
                  </div>
                  <h1 className=" text-zinc-200 font-medium text-center">{item.title ? item.title : item.name}</h1>
                  <h1 className=" text-zinc-400 text-center">{item.release_date ? item.release_date : item.first_air_date}</h1>
                </div>
              );
            })
          }
      </div>
    </div>
  );
};

export default Recomendation;