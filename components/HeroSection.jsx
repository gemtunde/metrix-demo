import Image from "next/image";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="flex flex-col p-4 md:flex-row ">
      <div className="flex flex-col w-[320px] p-4 bg-white rounded-lg m-2">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/assets/icon.svg"
            width={30}
            height={30}
            alt="logo"
            className="bg-blue-100 text-blue-800 rounded-md"
          />
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-400">This week</p>
            <MdArrowDropDown size={20} className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Sales</p>
            <p className="text-sm text-gray-400 mr-10">Volume</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-700">N4,000,000</p>
            <p className="text-xl font-bold text-gray-700  flex items-center justify-center">
              N450 <span className="text-xs text-green-800">+20.00%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[320px] p-4 bg-white rounded-lg m-2">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/assets/icon.svg"
            width={30}
            height={30}
            className="bg-blue-100 text-blue-800 rounded-md"
            alt="logo"
          />
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-400">This week</p>
            <MdArrowDropDown size={20} className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">All Orders</p>
            <p className="text-sm text-gray-400 mr-10">Pending</p>
            <p className="text-sm text-gray-400 mr-10">Completed</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-700">400</p>
            <p className="text-xl font-bold text-gray-700">100</p>
            <p className="text-xl font-bold text-gray-700">230</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[320px] p-4 bg-white rounded-lg m-2">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/assets/icon.svg"
            width={30}
            height={30}
            className="bg-blue-100 text-blue-800 rounded-md"
            alt="logo"
          />
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-400">This week</p>
            <MdArrowDropDown size={20} className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Customers</p>
            <p className="text-sm text-gray-400 mr-10">Active</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-700 flex items-center justify-center">
              N1,250 <span className="text-xs text-green-800">+20.00%</span>
            </p>
            <p className="text-xl font-bold text-gray-700  flex items-center justify-center">
              N450 <span className="text-xs text-green-800">+20.00%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
