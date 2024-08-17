import React, { useEffect, useState, useMemo } from "react";
import img from "../assets/banner1.jpg";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import SearchResult from "../components/SearchResult";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("Movie");

  const handleSearch = async () => {
    if (category === "Movie") {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=62a8ce5916fcd0a63bf87efca961b5bc&query=${searchQuery}&language=en-US`
        );
        setSearchResults(response.data.results);

        // Store search results in local storage
        sessionStorage.setItem("searchResults", JSON.stringify(response.data.results));

      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
    if (category === "Series") {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=62a8ce5916fcd0a63bf87efca961b5bc&query=${searchQuery}&language=en-US`
        );
        setSearchResults(response.data.results);

         // Store search results in local storage
         sessionStorage.setItem("searchResults", JSON.stringify(response.data.results));

      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  useEffect(() => {
    const storedSearchQuery = sessionStorage.getItem("searchQuery");
    const storedSearchResults = sessionStorage.getItem("searchResults");
    const storedCategory = sessionStorage.getItem("category");
    if (storedSearchQuery) {
      setSearchQuery(storedSearchQuery);
    }
    if (storedSearchResults) {
      setSearchResults(JSON.parse(storedSearchResults));
    }
    if(storedCategory)
{
  setCategory(storedCategory);  
}  }, []);

  useEffect(() => {
    sessionStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  return (
    <div className=" min-h-screen h-full w-full grid place-items-center overflow-hidden">
      <div className=" relative w-full h-full">
        <div className=" flex flex-col items-center gap-10 pt-20 w-full h-full  bg-gradient-to-b to-zinc-900 from-black/80">
          <div className="relative h-fit w-fit">
            <input
              type="text"
              placeholder="Search Here."
              className=" border-2 border-zinc-300 bg-transparent placeholder:text-zinc-400 text-lg font-medium text-zinc-200 px-3 py-1 rounded-full w-[350px] sm:w-[450px]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              
            />

            <button onClick={()=> {handleSearch()}} className="absolute right-1 top-1 bg-zinc-900 border border-zinc-200 text-zinc-200 px-[12px] py-[3px] text-md font-semibold rounded-full">
              Search
            </button>
          </div>
          <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          sessionStorage.setItem("category", e.target.value);
        }}
        className="border-2 border-zinc-300 bg-transparent  text-lg font-medium text-zinc-200 px-3 py-1 rounded-full "
      >
        <option value="Movie" className=" text-zinc-200 bg-black">
          Movie
        </option>
        <option value="Series" className=" text-zinc-200 bg-black">
          Series
        </option>
      </select>
              <SearchResult searchResults={searchResults} category={category} setCategory={setCategory}/>
        </div>
      </div>
    </div>
  );
};

export default Search;