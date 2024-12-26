import React from 'react'
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

const HotelContactInfo = ({hotel}) => {
  return (
    <div className="w-full mt-4">
      <div className="flex w-full justify-between items-center ">
        <h3 className="text-2xl font-bold mt-6">Contact Info</h3>
        <button className="bg-gray-200 text-gray-700 font-bold text-sm px-4 py-2 rounded-md">
          Add New
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {contactInfo.map((field) => (
          <div>
            <p>
              <span className={`font-semibold text-gray-600`}>
                {field.name} :
              </span>{" "}
              <span
                className={` ${
                  field.name == "Email" ? "text-blue-400 underline" : ""
                }`}
              >
                {field.value}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelContactInfo