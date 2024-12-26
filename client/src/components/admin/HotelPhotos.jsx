import React from 'react'

const photosLinks = [
  "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8fDB8fHww",
];

const HotelPhotos = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center py-4">
        <h4 className="text-xl font-semibold text-gray-700">Photos</h4>
        <button className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md">
          Add New
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {photosLinks.map((link) => (
          <div className="w-full h-40 overflow-hidden  rounded-[10px]">
            <img
              src={link}
              className="w-full h-40  object-cover rounded-[10px]  hover:scale-110 transition-transform ease-in-out duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelPhotos