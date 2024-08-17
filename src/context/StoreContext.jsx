import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SotreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [nowplaying, setNowplaying] = useState([]);
  const [trending, setTrending] = useState([]);
  const [ontv, setOntv] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [toprated2, setToprated2] = useState([]);
  const [popular, setPopular] = useState([]);
  const [popular2, setPopular2] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [upcoming2, setUpcoming2] = useState([]);
  const [person, setPerson] = useState([]);


  const fetchData = async() => {

    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setTrending(response.data.results);
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setNowplaying(response.data.results);
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setToprated(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setUpcoming(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setPopular(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setUpcoming2(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setOntv(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setPopular2(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setToprated2(response.data.results);
    } catch (error) {
      console.log(error)
    }
    try {
      const response = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=62a8ce5916fcd0a63bf87efca961b5bc');
      setPerson(response.data.results);
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    fetchData();
  },[])

  const contextValue = {
    nowplaying,
    trending,
    toprated,
    upcoming,
    upcoming2,
    popular,
    ontv,
    popular2,
    toprated2,
    person
  } 

  return (
    <SotreContext.Provider value={contextValue}>
      {props.children}
    </SotreContext.Provider>
  )
}

export default StoreContextProvider;