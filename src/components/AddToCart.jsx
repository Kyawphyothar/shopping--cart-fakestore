import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { customProvider } from "../context/StateContext";
import Cart from "./Cart";
import { Tooltip, Button } from "@mantine/core";
const AddToCart = () => {
  const {
    state: { cart },
    dispatch,
  } = customProvider();
  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };
  const total = () => cart.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <>
      {cart.length === 0 ? (
        <div className=" flex justify-center mt-40 md:mt-52 ">
          <div className="p-10">
            <p className="mb-1 font-medium">There's nothing here.</p>

            <Tooltip label="Go To Shop" color="gray" position="right" withArrow>
              <Link to={"/"}>
                <p className="text-red-500 font-semibold uppercase tracking-wide">
                  Please buy something!
                </p>
              </Link>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="">
            {cart?.map((item) => {
              return (
                <Cart
                  key={item.id}
                  item={item}
                  increaseTotal={increaseTotal}
                  decreaseTotal={decreaseTotal}
                />
              );
            })}
          </div>
          <div className="mt-10 flex justify-around">
            <h1 className=" text-gray-800">Total</h1>
            <p className="">{mainTotal.toFixed(2)}</p>
          </div>
          <div className=" flex justify-center mt-10">
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className=" border bg-red-600 text-white rounded shadow px-3 py-1"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
