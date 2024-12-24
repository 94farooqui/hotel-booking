import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import HotelCard from "../components/HotelCard";
import { getHotels } from "./../api/hotel";
import HomeBanner from "../components/HomeBanner";
import FeaturedHotels from "../components/FeaturedHotels";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />

      <div className="w-[1000px] mx-auto mt-4 ">
        <form className="flex w-full gap-2 ">
          <div className="flex-1 border-2 p-4 bg-white rounded-lg overflow-hidden flex items-center justify-between">
          <input
            placeholder="Search"
            className=" text-xl  py-2 focus:outline-none bg-transparent"
          />
          <input type="date" />
          <p>Travellers</p>
          </div>
          
          <button className="px-8 bg-indigo-500 text-white text-xl font-bold rounded-lg">
            Go
          </button>
        </form>
      </div>
      <main className="mt-8">
        <FeaturedHotels />
      </main>
    </div>
  );
};

export default Home;
