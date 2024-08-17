import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className=' w-full flex justify-center items-center h-80 bg-zinc-950 text-white'>
       <div className=' w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]'>
        <div className=' w-full flex justify-center mb-5'>
        <img src={logo} alt="" className='h-14 lg:h-16 text-center'/>
        </div>
         <p className=' text-zinc-400 text-center text-md font-medium leading-[1.15]'>Welcome to our website. explore the collection of movies and TV shows. In this website you get movies and series information such as release date, overview, genres, cast etc. And you can watch trailer of movies or TV shows. In this platform you can find movies or TV shows.</p>
         <div className=' w-full flex justify-evenly mt-8 text-3xl'>
         <FaInstagram  className=' cursor-pointer text-red-500'/>
         <FaFacebook className=' cursor-pointer text-blue-600'/>
         <FaLinkedin className=' cursor-pointer text-blue-500'/>
         <FaTwitter className=' cursor-pointer text-blue-700'/>
         </div>
       </div>
    </div>
  )
}

export default Footer