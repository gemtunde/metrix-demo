//import create slice
import { createSlice } from "@reduxjs/toolkit";

//initiate state
const initialState = {
  products: [
    {
      name: "Galaxy A32",
      price: 580000,
      quantity: 10,
      date: "12 sept, 2034",
      status: "pending",
      img: "/assets/1.jpg",
      //img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4991532/1.jpg?3617",
    },
    {
      name: "Tecno 200",
      price: 240000,
      quantity: 4,
      date: "12 April, 2034",
      status: "completed",
      img: "/assets/2.jpg",
      // img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/3538632/1.jpg?0019",
    },
    {
      name: "Infinity Hotlix",
      price: 550000,
      quantity: 20,
      date: "22 May, 2034",
      status: "pending",
      img: "/assets/3.png",
      // img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4991532/1.jpg?3617",
    },
    {
      name: "AGM NOTE",
      price: 758000,
      quantity: 3,
      date: "9 June, 2034",
      status: "completed",
      img: "/assets/4.png",
      //img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4991532/1.jpg?3617",
    },
    {
      name: "Samsung A12",
      price: 45800,
      quantity: 45,
      date: "12 Feb, 2034",
      status: "pending",
      img: "/assets/5.png",

      // img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4991532/1.jpg?3617",
    },
  ],
};

// initiate slice
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    order: (state) => {
      state.products;
    },
  },
});

//export reducer
export default orderSlice.reducer;

//export actions
export const { order } = orderSlice.actions;
