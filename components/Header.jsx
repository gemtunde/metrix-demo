import Image from "next/image";
import React from "react";
import { AiFillHome, AiTwotoneBell } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between p-4 pt-4 bg-white h-[60px]">
      <div className="flex items-center justify-center">
        <AiFillHome color="blue" />
        <h2 className="text-gray-600 text-sm font-bold ml-2">Dashboard</h2>
      </div>
      <div className="flex items-center justify-center gap-1">
        <div className="flex items-center justify-between py-2 px-4 rounded-lg bg-pink-100">
          <h2 className="text-sm text-gray-700 mr-1">Nanny's Shop</h2>
          <MdArrowDropDown size={20} />
        </div>
        <AiTwotoneBell size={25} color="blue" />
        <Image
          src="/assets/mr-p.jpg"
          width={25}
          height={25}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
