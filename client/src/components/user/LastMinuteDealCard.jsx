import React from "react";
import PlaceHolderImage from './../../assets/placeholder.svg'

const LastMinuteDealCard = ({ deal }) => {
  return (
    <div className="flex-none w-[25%] rounded-lg p-2">
      <img
        src={PlaceHolderImage}
        className="w-full h-[200px] object-cover rounded-[20px]"
      />
      <div className="text-white mt-4 flex flex-col gap-4">
        <p className="text-xl font-semibold">{deal.hotel}</p>
        <p>
          <span className="bg-yellow-200 text-sm py-1 px-4 rounded-md text-black">
            {deal.ratings}
          </span>{" "}
          Wonderful
        </p>
        <div>
          <p className="text-xl font-semibold">
            {deal.discount_price}{" "}
            <span className="text-sm line-through">{deal.actual_price}</span>
          </p>
          <p className="text-xs opacity-90 leading-1">per night</p>
          <p className="text-xs opacity-90 leading-1">AED 3326 total</p>
          <p className="text-xs opacity-90 leading-1"> includes taxes & fees</p>
        </div>
        <div>
          <p>Member Price available</p>
        </div>
        <p className="bg-yellow-500 p-1 rounded-md self-start text-gray-800">Sign in for Member Price</p>
      </div>
    </div>
  );
};

export default LastMinuteDealCard;
