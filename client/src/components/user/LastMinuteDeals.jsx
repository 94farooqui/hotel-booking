import React, { useRef, useState } from "react";
import LastMinuteDealCard from "./LastMinuteDealCard";
import BackgroundPicture from "./../../assets/pictures/home_banner.jpg";
import { FaAngleLeft } from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa";

// const lastMinuteDeals = [
//     {

//     }
// ]

const lastMinuteDeals = Array(10).fill("*");
const deal = {
  country: "Abu Dhabi",
  hotel: "Al Raha Beach resort and Spa",
  ratings: 9,
  discount_price: "AED 1346",
  actual_price: "AED 1921",
};

const LastMinuteDeals = () => {
  const scrollContainerRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);

  const cardWidth = 25; // Percentage width of a single card
  const cardsToScroll = 4; // Number of cards to scroll per click

  const scrollNext = () => {
    setSlideNumber((slideNumber) => slideNumber + 1);
    console.log(slideNumber);
    if (scrollContainerRef.current) {
      const scrollAmount =
        (cardWidth * cardsToScroll * scrollContainerRef.current.offsetWidth) /
        100;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollPrevious = () => {
    setSlideNumber((slideNumber) => slideNumber - 1);
    console.log(slideNumber);
    if (scrollContainerRef.current) {
      const scrollAmount =
        (cardWidth * cardsToScroll * scrollContainerRef.current.offsetWidth) /
        100;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-[1200px] mx-auto my-8 ">
      <div className=" p-8 flex flex-col gap-4  rounded-[24px] relative overflow-hidden">
        <img
          src={BackgroundPicture}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-500 via-slate-800 to-slate-900 opacity-70">
          {" "}
        </div>
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-center  z-30 py-4 px-2">
            <div className="">
              <h2 className="text-white text-2xl font-semibold">
                Last-minute weekend deals
              </h2>
              <p className="text-white">Showing deals for : <span className="font-bold">Dec 27 - Dec 29</span></p>
            </div>
            <button className="bg-white px-4 py-2 rounded-full text-indigo-400 font-bold">
              See all deals
            </button>
          </div>
          <div className="relative group">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-hidden scroll-smooth relative"
            >
              {lastMinuteDeals.map((data) => (
                <LastMinuteDealCard deal={deal} />
              ))}
            </div>
            {slideNumber > 0 && (
              <button
                onClick={scrollPrevious}
                className="absolute hidden group-hover:flex items-center justify-center transition-opacity ease-in-out opacity-0 group-hover:opacity-100 duration-300 top-[60%] left-2 w-8 h-8  text-xl rounded-full  bg-slate-100 text-gray-600"
              >
                <FaAngleLeft />
              </button>
            )}

            {slideNumber < 2 && (
              <button
                onClick={scrollNext}
                className="absolute hidden group-hover:flex items-center justify-center transition-opacity ease-in-out opacity-0 group-hover:opacity-100 duration-300 top-[60%] right-2 w-8 h-8   text-xl rounded-full bg-slate-100 text-gray-600"
              >
                <FaAngleRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteDeals;
