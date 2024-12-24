import React from 'react'
import banner from './../assets/pictures/home_banner.jpg'
import SearchSection from './user/SearchSection';

const HomeBanner = () => {
    return (
        <div className="relative h-[680px] max-h-[680px] w-full">
          {/* Background Image */}
          <img
            src={banner}
            alt="Banner Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Text Content */}
          <header className="relative w-[1000px] max-w-[1000px] mx-auto z-10 flex flex-col items-start justify-center h-full text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Welcome to Hoteling.com</h1>
            <p className="mt-2 text-sm md:text-lg">Explore, learn, and grow with us.</p>
            <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-blue-600 rounded-lg text-white font-semibold">
              Get Started
            </button>
          </header>
          <div className='w-full self-center absolute -bottom-10'>
            <SearchSection/>
          </div>
        </div>
      );
}

export default HomeBanner