import React from "react";
import { Link } from "react-router-dom";
import { customProvider } from "../context/StateContext";
import { Badge } from '@mantine/core';
import "./Product.css"

const Product = (props) => {
  const { id, title, image, price, category } = props;
  const { dispatch } = customProvider();
  return (
    <div>
      <div className=" shadow-lg rounded-lg border border-gray-200  card">
        <img
          src={image}
          alt=""
          className="w-[250px] h-[250px] object-contain mb-2 p-4 "
        />
        <div className="p-4">
          <div className="">
            <h1 className=" text-gray-700 font-medium text-lg mb-2">
              {title.substring(0, 25) + "..."}
            </h1>
            <div className=" flex justify-between">
              <Badge radius="lg" variant={"outline"} className=" mb-3 p-2  border-gray-500 text-black">
                {category}
              </Badge>
              <p className=" text-black mb-5 font-medium">${price}</p>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
              className=" bg-stone-600 text-white rounded px-2 py-1"
            >
              Add to cart
            </button>
            <Link to={`/detail/${id}`}>
              <button className=" bg-stone-600 text-white rounded px-2 py-1">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
