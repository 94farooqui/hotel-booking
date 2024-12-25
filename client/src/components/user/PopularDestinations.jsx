import React, { useRef } from "react";
import PopularDestinationCard from "./PopularDestinationCard";
import { FaAngleLeft } from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa";

const popularDestinations = [
  {
    city: "Bangkok",
    province: "Bangkok Province",
    country: "Thailand",
  },
  {
    city: "Mumbai",
    province: "Maharashtra",
    country: "India",
  },
  {
    city: "Phuket",
    province: "Phuket Province",
    country: "Thailand",
  },
  {
    city: "Krabi",
    province: "Krabi Province",
    country: "Thailand",
  },
  {
    city: "Mahe Islands",
    province: "",
    country: "Seychelles",
  },
  {
    city: "Khor Fakkan",
    province: "Sharjah",
    country: "UAE",
  },
  {
    city: "Koh Samui",
    province: "Surat Thani Province",
    country: "Thailand",
  },
  {
    city: "Antalya",
    province: "Antalya Region",
    country: "Turkiye",
  },
];

const PopularDestinations = () => {
    const scrollRef = useRef()
    //const scrollAmount = 260 * 4;
  const scrollNext = () => {
    if(scrollRef.current){
        scrollRef.current.scrollBy({left: 1040, behavior: "smooth"})
        
    }
  };

  const scrollPrevious = () => {
    if(scrollRef.current){
        scrollRef.current.scrollBy({left: -1040, behavior: "smooth"})
        
    }
  };

  return (
    <div className="w-[1200px] mx-auto py-8 relative group">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore stays in popular destinations</h2>
      <div
      ref={scrollRef}
        className="flex overflow-x-scroll gap-x-4"
        style={{ scrollbarWidth: "none" }}
      >
        {popularDestinations.map((destination,index) => (
          <PopularDestinationCard destination={destination} index={index} />
        ))}
      </div>
      <button onClick={scrollPrevious} className=" hidden group-hover:flex items-center justify-center text-xl bg-white border w-8 h-8 rounded-full absolute top-[50%] -left-4">
        <FaAngleLeft />
      </button>
      <button onClick={scrollNext} className=" hidden group-hover:flex items-center justify-center text-xl bg-white border w-8 h-8 rounded-full absolute top-[50%] -right-4 z-40">
        <FaAngleRight />
      </button>
    </div>
  );
};

export default PopularDestinations;
