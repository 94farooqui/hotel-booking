import React from 'react'

const SearchSection = () => {
  return (
    <div className="w-[1000px] h-20 mx-auto mt-4 bg-white border-2 p-4 rounded-lg shadow-sm ">
      <form className="flex h-full w-full gap-2 ">
        <div className="flex-1  h-full   overflow-hidden flex items-center justify-between">
          <input
            placeholder="Search"
            className=" flex-1 text-lg focus:outline-none bg-transparent border-r"
          />
          <input type="date" className='flex-1 border-r p-2 text-lg' />
          <p className='flex-1 p-2 text-lg'>Travellers</p>
        </div>

        <button className="px-8 bg-indigo-500 text-white text-xl font-bold rounded-lg">
          Go
        </button>
      </form>
    </div>
  );
}

export default SearchSection