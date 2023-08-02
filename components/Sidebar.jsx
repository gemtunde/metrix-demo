import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[18vw] h-[130vh] p-4 bg-white border-r-[1px] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div className="flex mb-8 items-center ml-[-40px]">
          <Image src="/assets/Group.svg" width={40} height={40} alt="chat" />
          <h3 className="text-black text-xl font-bold ml-1 hidden md:block">
            Metrix
          </h3>
        </div>
        <Link href="/">
          <div className="flex py-2 px-4 bg-blue-500 rounded-lg w-[12vw]">
            <Image
              src="/assets/Category.svg"
              width={20}
              height={20}
              alt="chat"
            />
            <h3 className="text-sm text-white ml-2 hidden md:block">
              Dashboard
            </h3>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 mt-4 mb-2 rounded-lg w-[12vw] items-center">
            <Image src="/assets/Bag.svg" width={20} height={20} alt="chat" />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Orders
            </h3>
            <span className="w-[20px] h-[20px] rounded-2xl ml-2 bg-cyan-300 text-gray-800 flex items-center justify-center hidden md:block">
              {" "}
              <p className="text-xs flex items-center">3</p>
            </span>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 my-2 rounded-lg w-[12vw] items-center">
            <Image src="/assets/User.svg" width={20} height={20} alt="chat" />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Customers
            </h3>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 my-2 rounded-lg w-[12vw] items-center">
            <Image src="/assets/Folder.svg" width={20} height={20} alt="chat" />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Inventory
            </h3>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 my-2 rounded-lg w-[12vw] items-center">
            <Image src="/assets/Chat.svg" width={20} height={20} alt="chat" />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Conversations
            </h3>
            <span className="w-[20px] h-[20px] rounded-2xl ml-2 bg-cyan-300 text-gray-800 flex items-center justify-center hidden md:block">
              {" "}
              <p className="text-xs flex items-center">18</p>
            </span>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 my-2 rounded-lg w-[12vw] items-center">
            <Image
              src="/assets/Setting.svg"
              width={20}
              height={20}
              alt="chat"
            />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Settings
            </h3>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-start">
        <Link href="/">
          <div className="flex py-2 px-4 rounded-lg bg-gray-200 w-[12vw] items-center">
            <Image
              src="/assets/fi_headphones.svg"
              width={20}
              height={20}
              alt="chat"
            />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Contact Support
            </h3>
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col items-start justify-start p-2 my-2 rounded-lg bg-orange-100">
            <div className="flex py-2 px-4 my-1 rounded-lg w-[12vw] items-center">
              <Image
                src="/assets/fi_gift.svg"
                width={20}
                height={20}
                alt="chat"
              />
              <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
                Free gifts
              </h3>
            </div>
            <p className="text-xs text-gray-700">Upgrade your account</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex py-2 px-4 rounded-lg my-1 w-[12vw] items-center">
            <Image src="/assets/Logout.svg" width={20} height={20} alt="chat" />
            <h3 className="text-sm text-gray-700 ml-2 hidden md:block">
              Logout
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
