import React from 'react'
import HeroImage from '../assets/HeroImage.jpg'
import {SlArrowRight} from 'react-icons/sl'
const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-black'>
        <div 
        className='max-w-screen-lg mx-auto 
        flex flex-col items-center justify-center
        h-full px-4 md:flex-row'>
            <div 
            className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold bg-gradient-to-r from-amber-900 via-yellow-400 to-amber-100
                bg-clip-text text-transparent'>
                    Hi there! <br />I'm Vratik Zade, Full-stack Developer.
                </h2>
                <p className='text-gray-400 py-4 max-w-md'>
                I'm just getting started with web application development and design.
                I enjoy developing websites with technologies like React, Tailwind, Node.js, and MongoDB.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-cyan-500 to-blue-900 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <SlArrowRight size={20} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                    <img src={HeroImage} alt="myprofile" className='rounded-full  mx-auto w-1/2 border-yellow-200 border-2 md:w-full shadow-md shadow-gray-400' />
            </div>
        </div>
        
    </div>
  )
}

export default Home