import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import HotelCard from "../components/HotelCard";
import { getHotels } from "./../api/hotel";
import HomeBanner from "../components/HomeBanner";
import FeaturedHotels from "../components/FeaturedHotels";
import FavoriteStay from "../components/user/FavoriteStay";
import PopularDestinations from "../components/user/PopularDestinations";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <FavoriteStay/>
      <PopularDestinations/>
      <main className="mt-16">
        <FeaturedHotels />
      </main>
    </div>
  );
};

export default Home;
