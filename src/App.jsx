import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import NowPlaying from './components/NowPlaying';
// import TopRated from './components/TopRated';
// import Upcoming from './components/Upcoming';
// import Popular from './components/Popular';
// import Person from './components/Person';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Details from './page/Details';
import Details2 from './page/Details2';
import Popular from './page/Popular';
import Search from './page/Search';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div className=' w-full h-full bg-zinc-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/description/:id' element={<Details/>}/>
        <Route path='/descriptiontv/:id' element={<Details2/>}/>
        <Route path='/person/:id' element={<Popular/>}/>
        <Route path='/search' element={<Search/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;