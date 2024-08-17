import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cast from "../components/Cast";
import Similar from "../components/similar";
import Recomendation from "../components/Recomendation";
import logo from "../assets/logoyoutube.webp";
import Poster from "../components/Poster";
import Poster2 from "../components/Poster2";
import Similar2 from "../components/Similar2";
import Recomendation2 from "../components/Recomendation2";
import Cast2 from "../components/Cast2";

const Details2 = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchTrailer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      const trailerKey = response.data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      ).key;
      const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
      setTrailerUrl(trailerUrl);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return loading ? (
    <div class="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div>
        <h1 class="text-xl md:text-3xl font-bold flex items-center">
          L
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="animate-spin"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z"></path>
          </svg>{" "}
          ading . . .
        </h1>
      </div>
    </div>
  ) : (
    <div className="h-full w-full overflow-hidden">
      <div className=" h-full">
        <div className=" w-full h-full absolute flex justify-center items-center">
          {trailerUrl && (
            <div className="absolute z-40">
              <button
                onClick={() => setTrailerUrl(null)}
                className=" absolute right-2 -top-10 text-zinc-200  text-4xl font-thin"
              >
                x
              </button>
              <iframe
                className=" w-[90vw] h-[60vw] md:w-[650px] md:h-[400px]"
                src={trailerUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <div
          className={
            trailerUrl
              ? " blur-sm w-full h-full  bg-cover bg-center bg-no-repeat "
              : " blur-0 w-full h-full  bg-cover bg-center bg-no-repeat "
          }
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
          }}
        >
          <div className=" w-full flex justify-center bg-gradient-to-b to-zinc-900 from-black/80">
            <div className=" w-full sm:w-[95%] lg:w-[90%] pt-14  h-full flex gap-10 lg:gap-3 flex-col lg:flex-row  ">
              <div className=" lg:w-[35rem] w-[100vw] h-[25rem] sm:h-[30rem]  flex justify-center  lg:h-full ">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt=""
                  className="  h-full mt-5 rounded-lg"
                />
              </div>
              <div className=" lg:w-full w-[100vw] h-min  lg:h-full  ml-0 sm:ml-4">
                <div className=" ml-5">
                  <h1 className=" text-3xl text-zinc-200 font-bold ">
                    {data.original_name} ({data.first_air_date?.substring(0, 4)})
                  </h1>
                  <p className=" text-lg font-semibold text-zinc-400 italic">
                    {data.tagline}
                  </p>
                  <div className=" mt-3">
                    {data.genres?.map((item, index) => {
                      return (
                        <a
                          key={index}
                          href=""
                          className=" bg-zinc-500 mx-2 px-2 py-1 font-bold text-zinc-900 rounded-md text-[15px] shadow-md shadow-zinc-900"
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                  <div className=" mt-3 flex w-fit ">
                    <p className=" w-fit bg-green-600 mx-2 px-2 py-1 font-bold text-zinc-900 rounded-md text-lg shadow-md shadow-zinc-900">
                      Vote :{" "}
                      <span className="">{data.vote_average?.toFixed(1)}</span>
                    </p>
                    <button
                      onClick={fetchTrailer}
                      className="bg-zinc-200 mx-2 flex items-center gap-2 px-2 py-1 font-bold text-zinc-900 rounded-md text-[15px] shadow-md shadow-zinc-900"
                    >
                      <img src={logo} alt="" className=" w-7" /> Watch Trailer
                    </button>
                  </div>
                  <div className=" text-zinc-200 mt-5">
                    <h1 className=" font-bold text-2xl">Overview</h1>
                    {
                      data.overview ? <p className=" w-[80%] sm:w-[70%] md:w-[45rem] lg:w-[80%] xl:w-[70%] text-md font-medium mt-2">
                      {data.overview}
                    </p> : <p className=" w-[80%] sm:w-[70%] md:w-[45rem] lg:w-[80%] xl:w-[70%] text-md font-medium mt-2">
                     Overview is not available
                    </p>
                    }
                  </div>
                  <div className=" mt-10 flex flex-col sm:flex-row justify-between w-[80%] sm:w-[80%] pr-3">
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Status :{" "}
                      <span className=" text-zinc-400">{data.status}</span>
                    </p>
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Created By :{" "}
                      
                        {data.created_by.map(item => <span className=" text-zinc-400">{item.name}, </span>)}
                    </p>

                  </div>
                  <hr className=" border border-zinc-800 w-[80%] mt-3" />
                  <div className=" mt-3 flex flex-col sm:flex-row justify-between w-[80%] sm:w-[80%] pr-3">
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Number of episodes :{" "}
                      <span className=" text-zinc-400">{data.number_of_episodes}</span>
                    </p>
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Number of seasons :{" "}
                      <span className=" text-zinc-400">{data.number_of_seasons}</span>
                    </p>  

                  </div>
                  <hr className=" border border-zinc-800 w-[80%] mt-3" />
                  <div className=" mt-3 flex justify-between w-[80%]">
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Origin Country :{" "}
                      <span className=" text-zinc-400">
                        {data.origin_country}
                      </span>
                    </p>
                  </div>
                  <hr className=" border border-zinc-800 w-[80%] mt-3" />
                  <div className=" mt-3 w-[80%] text-zinc-200">
                    <p className=" text-lg font-semibold">Production Company</p>
                    <div className=" mt-2">
                      {data.production_companies?.map((item, index) => {
                        return (
                          <div className="">
                            <p className=" font-medium text-zinc-400 ">
                              • {item.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cast2 />
      <Poster2 />
      <Similar2 />
      <Recomendation2 />
    </div>
  );
};

export default Details2;
