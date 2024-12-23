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
        <form className="flex w-full gap-2">
          <input
            placeholder="Search"
            className="p-4 text-xl border-2 rounded-full flex-1"
          />
          <button className="px-8 bg-indigo-500 text-white text-xl font-bold rounded-full">
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
