import React, { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";

const contactInfo = [
  {
    name:"Call",
    value : "+919700123456",
  },
  {
    name:"WhatsApp",
    value : "+919700123456"
  },
  {
    name:"Email",
    value: "abc.xyz@example.com"
  },
  {
    name:"Website",
    value:"www.hotelabc.com"
  }
]

const HotelContactInfo = ({ contact }) => {
  useEffect(() => {
    console.log(contact);
  }, []);
  return (
    <div className="w-full mt-4">
      <div className="flex w-full justify-between items-center ">
        <h3 className="text-2xl font-bold mt-6">Contact Info</h3>
        
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {contact &&
          contact.map((field) => (
            <div>
              <p>
                <span className={`font-semibold text-gray-600`}>
                  {field.mode} :
                </span>{" "}
                <span
                  className={` ${
                    field.name == "Email" ? "text-blue-400 underline" : ""
                  }`}
                >
                  {field.detail}
                </span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotelContactInfo