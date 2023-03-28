import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { customProvider } from "../context/StateContext";
import "./cart.css";
import { Tooltip } from "@mantine/core";

const Cart = ({ item, increaseTotal, decreaseTotal }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = customProvider();

  const increaseQty = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };

  // console.log(quantity);

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };

  const itemPrice = item.price * quantity;

  const deleteItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreaseTotal(itemPrice);
  };
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-10">
          <img src={item.image} alt="" className="select-none w-[150px]" />
          <div className="">
            <h1 className=" text-lg font-medium w-60 mb-3 ">{item.title}</h1>
            <p className=" select-none bg-gray-200 w-[69px] rounded px-1 py-1 font-medium flex items-center justify-center align-middle">
              <span className=" text-xs ">$</span>
              {itemPrice.toFixed(2)}
            </p>
            <Tooltip label="View Detail" color="gray" withArrow offset={-10}>
              <Link to={`/detail/${item.id}`}>
                <p className="w-[300px] md:w-[400px] description text-gray-600 mt-3">
                  {item.description}
                </p>
              </Link>
            </Tooltip>
            <div className=" flex justify-between">
              <div className="border  mt-3 rounded-lg shadow-lg w-[85px] ">
                <p className="text-xs text-center text-gray-600">QTY</p>
                <div className="flex justify-center gap-2 align-middle items-center ">
                  <p className=" cursor-pointer " onClick={increaseQty}>
                    <AiOutlinePlus />
                  </p>
                  <span className=" select-none text-sm">{quantity}</span>
                  <p className=" cursor-pointer " onClick={decreaseQty}>
                    <AiOutlineMinus />
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Tooltip label="remove" color="red" withArrow offset={-10}>
                <p
                  className=" text-red-500 text-xl cursor-pointer"
                  onClick={deleteItem}
                >
                  <BsTrash/>
                </p>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10 md:w-[55%] w-[70%] mx-auto shadow" />

      </div>
    </>
  );
};

export default Cart;
