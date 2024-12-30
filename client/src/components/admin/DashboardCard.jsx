import React from "react";

const DashboardCard = ({ data }) => {
  return (
    <div className="flex rounded-md overflow-hidden border shadow-sm">
      <div
        
        className="w-24 h-24 flex items-center justify-center py-6 bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <img src={data.icon} className="w-10" />
      </div>
      <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-start justify-center gap-y-2 p-4 shadow-sm">
        <p className="text-gray-900 opacity-80">{data.title}</p>
        <p className="text-2xl font-semibold" >
          {data.value}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
