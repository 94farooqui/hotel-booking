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
      <main className="mt-16">
        <FeaturedHotels />
      </main>
    </div>
  );
};

export default Home;
