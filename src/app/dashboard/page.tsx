"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { FiDroplet, FiThermometer, FiWind, FiBarChart } from "react-icons/fi";

/** Types */
interface SensorData {
  time: string;
  moisture: number;
  temperature: number;
  humidity: number;
  waterUsage: number;
}

const Dashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [isIrrigating, setIsIrrigating] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      // Dummy Data for Charts
      setSensorData(
        Array.from({ length: 10 }, (_, i) => ({
          time: `Day ${i + 1}`,
          moisture: Math.random() * 100,
          temperature: 20 + Math.random() * 10,
          humidity: 50 + Math.random() * 20,
          waterUsage: 10 + Math.random() * 5,
        }))
      );
    };
    fetchData();
  }, []);

  const toggleIrrigation = async () => {
    setIsIrrigating(!isIrrigating);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#18c24b] text-white p-6">
      <a href='/'>
        <h2 className="text-2xl font-bold mb-6">Irrigation System</h2></a>
        <ul className="space-y-4">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">Reports</li>
          <li className="cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-6">Smart Irrigation Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Soil Moisture</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="moisture" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Temperature</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sensorData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="temperature" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Humidity</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={sensorData} dataKey="humidity" nameKey="time" cx="50%" cy="50%" outerRadius={60}>
                  {sensorData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#3b82f6" : "#06b6d4"} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Irrigation Control</h2>
          <button
            className={`px-4 py-2 rounded-md text-white font-semibold transition ${
              isIrrigating ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={toggleIrrigation}
          >
            {isIrrigating ? "Stop Irrigation" : "Start Irrigation"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
