import React from "react";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png",
    link: "www.facebook.com",
  },
  {
    name: "Twitter",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png",
    link: "www.twitter.com",
  },
  {
    name: "Instagram",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
    link: "www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png",
    link: "www.linkedin.com",
  },
];

const HotelSocialMedia = ({hotel}) => {
  return (
    <div className="w-full mt-4">
      <div className="flex w-full justify-between items-center ">
        <h3 className="text-2xl font-bold mt-6">Social Media</h3>
        <button className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md">
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {socialMediaLinks.map((link) => (
          <div className="flex justify-between items-center border rounded-lg  p-4">
            <img src={link.icon} className="w-12 h-12 object-cover" />
            <a href={link.link} className="text-blue-500 underline text-sm">
              {link.link}/Hotel{hotel.name}
            </a>
            <button className="border px-4 py-1 rounded-md text-gray-400 font-medium">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSocialMedia;
