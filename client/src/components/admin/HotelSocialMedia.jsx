import React, { useEffect } from "react";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: "https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png",
 
  },
  {
    name: "Twitter",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-512.png",
  
  },
  {
    name: "Instagram",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
   
  },
  {
    name: "LinkedIn",
    icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png",
  
  },
];

const HotelSocialMedia = ({ social_media }) => {

  useEffect(()=>{
    console.log(social_media)
  },[])
  return (
    <div className="w-full mt-4">
      <div className="flex w-full justify-between items-center ">
        <h3 className="text-2xl font-bold mt-6">Social Media</h3>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {social_media.map((link) => {
          let icon = socialMediaLinks.find(icon => icon.name == link.platform)
          //console.log(icon.icon)
          return (
          <div className="flex justify-between items-center border rounded-lg  p-4">
            {icon && <img src={icon.icon} className="w-12 h-12 object-cover" />}
            <a href={link.url} className="text-blue-500 underline text-sm">
              {link.url}
            </a>
            <button className="border px-4 py-1 rounded-md text-gray-400 font-medium">
              Edit
            </button>
          </div>
        )})}
      </div>
    </div>
  );
};

export default HotelSocialMedia;
