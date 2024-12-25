import React from 'react'
import MemberPricePicture from './../../assets/pictures/member_price.jpg'

const MemberPrices = () => {
  return (
    <div className="w-[1200px] mx-auto my-8">
      <div className="w-full h-[480px] relative rounded-[24px] overflow-hidden">
        <img
          src={MemberPricePicture}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-[50%] -translate-y-[50%] left-8 w-[40%] p-4 bg-white rounded-[16px] flex flex-col gap-4">
          <h2 className='text-3xl font-semibold'>Save instantly with Member Prices</h2>
          <p>
            When you sign up or sign in, you can instantly save 10% or more on
            over 100,000 hotels worldwide. Terms may apply.
          </p>
          <button className='bg-indigo-400 px-4 py-2 font-semibold text-white rounded-full self-start'>Get Member Prices</button>
        </div>
      </div>
    </div>
  );
}

export default MemberPrices