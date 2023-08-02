"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import Orders from "./Orders";
import BarChart from "./BarChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Charts = () => {
  return (
    <div className="flex flex-col p-4 md:flex-row w-[1050px]">
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="flex flex-col w-[320px] h-[380px] p-4 bg-white rounded-lg m-2">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-sm font-bold text-gray-800">Marketing</h4>
            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-400">This week</p>
              <MdArrowDropDown size={20} className="text-gray-400" />
            </div>
          </div>
          <Doughnut data={data} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-[320px] h-[180px] p-4 bg-blue-900 rounded-lg m-2">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/assets/icon.svg"
                width={30}
                height={30}
                className="bg-blue-100 text-blue-800 rounded-md"
              />
              <div className="flex items-center justify-center">
                <p className="text-sm text-gray-200">This week</p>
                <MdArrowDropDown size={20} className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-100">All Orders</p>
                <p className="text-sm text-gray-100 mr-10">Pending</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-gray-100">400</p>
                <p className="text-xl font-bold text-gray-100 mr-11">100</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[320px] h-[180px] p-4 bg-white rounded-lg m-2">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/assets/icon.svg"
                width={30}
                height={30}
                className="bg-blue-100 text-blue-800 rounded-md"
              />
              <div className="flex items-center justify-center">
                <p className="text-sm text-gray-400">This week</p>
                <MdArrowDropDown size={20} className="text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-sm text-red-700">Abandon cart</p>
                <p className="text-sm text-gray-400 mr-10">Customers</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-gray-700">400</p>
                <p className="text-xl font-bold text-gray-700 mr-10">100</p>
              </div>
            </div>
          </div>
        </div>
        <BarChart />
      </div>
      <div className="flex flex-col w-[320px] h-[380px] p-4 bg-white rounded-lg m-2">
        <Orders />
      </div>
    </div>
  );
};

export default Charts;
