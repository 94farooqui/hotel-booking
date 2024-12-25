import React from "react";

const DashboardCard = ({ data }) => {
  return (
    <div className="flex rounded-md overflow-hidden border shadow-sm">
      <div
        style={{ backgroundColor: data.color }}
        className="w-24 h-24 flex items-center justify-center py-6"
      >
        <img src={data.icon} className="w-10" />
      </div>
      <div className="flex-1 bg-white flex flex-col items-start justify-center gap-y-2 p-4">
        <p className="text-indigo-900 opacity-60">{data.title}</p>
        <p className="text-2xl font-semibold" style={{ color: data.color }}>
          {data.value}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
