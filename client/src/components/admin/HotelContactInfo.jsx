import React from 'react'

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
      <div className="flex flex-col gap-4">
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