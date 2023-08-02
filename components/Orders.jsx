"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const products = useSelector((state) => state.order.products);

  return (
    <>
      <div className="flex flex-col items-center justify-between mb-8">
        <h4 className="text-sm font-bold text-gray-700">Recent Orders</h4>

        {/* loop */}
        {products.length > 0
          ? products.map((product, index) => (
              <div
                key={index}
                className="flex my-2 items-center p-1 w-[100%] justify-between"
              >
                <Image
                  src={product.img}
                  width={25}
                  height={25}
                  alt="logo"
                  className="bg-blue-100 text-blue-800 rounded-md"
                />
                <div className="flex flex-col items-start justify-start">
                  <p className="text-sm text-gray-700">{product.name}</p>
                  <p className="text-xs text-gray-700 font-bold">
                    N{product.price}
                  </p>
                </div>
                <p>
                  {product.status === "completed" ? (
                    <div className="bg-green-200 rounded p-1">
                      <p className="text-xs text-green-700 font-bold">
                        Completed
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-200 rounded p-1">
                      <p className="text-xs text-red-700 font-bold">Pending</p>
                    </div>
                  )}
                </p>
              </div>
            ))
          : "No products"}

        {/* loop */}
      </div>
    </>
  );
};

export default Orders;
