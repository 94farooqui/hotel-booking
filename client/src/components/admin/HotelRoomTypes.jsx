import React from 'react'

const roomTypesData = ["Deluxe" , "Premium" , "Premium Plus" , "Non-deluxe" , "Economic"]

const HotelRoomTypes = () => {
  return (
    <div className='w-full mt-4'>
      <div className='flex w-full justify-between items-center '>
        <h4 className='text-xl font-semibold text-gray-700'>Room Types</h4>
        <button className='bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md'>Add New</button>
      </div>
      <div className='flex gap-4 mt-4'>
        {roomTypesData.map(room => <div className='px-4 border rounded-md py-2 shadow-sm font-semibold text-gray-600 bg-gradient-to-r from-gray-100 to-white'>{room}</div>)}
      </div>
    </div>
  )
}

export default HotelRoomTypes