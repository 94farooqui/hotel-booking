import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import { getHotels } from "./../api/hotel";
import HomeBanner from "../components/user/HomeBanner";
import FeaturedHotels from "../components/user/FeaturedHotels";
import MemberPrices from "../components/user/MemberPrices";
import LastMinuteDeals from "../components/user/LastMinuteDeals";
import Footer from "../components/shared/Footer";
import FavoriteStay from "../components/user/FavoriteStay";
import PopularDestinations from "../components/user/PopularDestinations";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <main className="'w-[1000px] mt-16">
        <FavoriteStay/>
        <FeaturedHotels />
        <MemberPrices />
        <PopularDestinations/>
        <LastMinuteDeals />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
