import React, { useEffect, useState } from "react";
import BarChart from "./../../assets/dashboard/icons/bar_chart.svg";
import Dollar from "./../../assets/dashboard/icons/dollar.svg";
import Envelope from "./../../assets/dashboard/icons/envelope.svg";
import Profile from "./../../assets/dashboard/icons/profile.svg";
import DashboardCard from "./DashboardCard";
import { getDashboardData } from "../../api/dashboard";

const dashboard_data = [
  {
    icon: BarChart,
    color: "#228be6",
    title: "Today's Bookings",
    value: "220",
  },
  {
    icon: Dollar,
    color: "#37b24d",
    title: "Earnings",
    value: "22,520",
  },
  {
    icon: Profile,
    color: "#5B5EA6",
    title: "New Users",
    value: "506",
  },
  {
    icon: Envelope,
    color: "#CB4154",
    title: "New Hotels",
    value: "22",
  },
];

const DashboardCards = () => {
  const [dashboard, setDashboard] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const getDashboard = async () => {
      try {
        const data = await getDashboardData();
        if (data) {
          setLoading(false);
          setDashboard(data);
        }
      } catch (error) {
        setLoading(false);
        setError("Unable to Fetch");
      }
    };
    getDashboard();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if(error){
    return <p>Error in fetching the data</p>
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {dashboard_data.map((data) => (
          <DashboardCard data={data} />
        ))}
        {dashboard && dashboard.map(data => <DashboardCard data={data}/>)}
      </div>
    </div>
  );
};

export default DashboardCards;
