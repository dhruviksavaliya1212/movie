import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCredit from "../components/MovieCredit";
import ProfileImages from "../components/ProfileImages";
import SeriesCredit from "../components/SeriesCredit";

const Popular = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // const fetchTrailer = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/tv/${id}/videos?api_key=62a8ce5916fcd0a63bf87efca961b5bc`
  //     );
  //     const trailerKey = response.data.results.find(
  //       (video) => video.site === "YouTube" && video.type === "Trailer"
  //     ).key;
  //     const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
  //     setTrailerUrl(trailerUrl);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setLoading(false);
  // };

  // const formatRuntime = (runtime) => {
  //   const hours = Math.floor(runtime / 60);
  //   const minutes = runtime % 60;
  //   return `${hours}h ${minutes}m`;
  // };

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
        <div className=" w-full h-full absolute flex justify-center items-center"></div>
        <div
          className={" blur-0 w-full h-full  bg-cover bg-center bg-no-repeat "}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.profile_path})`,
          }}
        >
          <div className=" w-full flex justify-center bg-gradient-to-b to-zinc-900 from-black/80">
            <div className=" w-full sm:w-[95%] lg:w-[90%] pt-14  h-full flex gap-10 lg:gap-3 flex-col lg:flex-row  ">
              <div className=" lg:w-[35rem] w-[100vw] h-[25rem] sm:h-[30rem]  xl:mb-10  flex justify-center  lg:h-full ">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                  alt=""
                  className="  h-full mt-5 rounded-lg"
                />
              </div>
              <div className=" lg:w-full w-[100vw] h-min  lg:h-full  ml-0 sm:ml-4">
                <div className=" ml-5">
                  <h1 className=" text-3xl text-zinc-200 font-bold ">
                    {data.name} ({data.birthday?.substring(0, 4)})
                  </h1>
                  <p className=" text-lg font-semibold text-zinc-400 italic">
                    {data.known_for_department}
                  </p>
                  <div className=" mt-5 ">
                    <h1 className=" text-zinc-200 text-2xl font-semibold ">Biography</h1>
                    <p className=" text-zinc-400 w-[97%] sm:w-[90%] lg:w-[100%] text-justify">
                      {data.biography}
                    </p>
                  </div>
                  <div className=" mt-10 flex flex-col sm:flex-row justify-between w-[80%] sm:w-[80%] pr-3">
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Birth Date :{" "}
                      <span className=" text-zinc-400">{data.birthday}</span>
                    </p>
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Place Of Birth : <span className=" text-zinc-400">{data.place_of_birth}</span>
                    </p>
                  </div>
                  <hr className=" border border-zinc-800 w-[80%] mt-3" />
                  <div className=" mt-3 flex flex-col sm:flex-row justify-between w-[80%] sm:w-[80%] pr-3">
                    <p className=" text-zinc-200 font-medium text-md">
                      {" "}
                      Popularity :{" "}
                      <span className=" text-zinc-400">{data.popularity}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieCredit />
      <SeriesCredit />
      <ProfileImages />
    </div>
  );
};

export default Popular;
