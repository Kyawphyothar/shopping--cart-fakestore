import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating, Group } from "@mantine/core";
import { customProvider } from "../context/StateContext";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { dispatch } = customProvider();


  useEffect(() => {
    const fetchProductForDetail = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await api.json();
      setProduct(product);
    };
    fetchProductForDetail();
  }, [id]);
  // console.log(product.rating);
  const productRating = parseFloat(product.rating?.rate) || 0;
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-wrap  p-3 justify-center md:gap-5 md:p-5">
          <div className="flex flex-wrap gap-5 md:gap-10 ">
            <img src={product.image} alt="" className=" w-[150px] md:w-[200px]" />
            <div className="p-3">
              <h3 className="">
                <span className=" font-medium">Product Category:</span>
                <br />
                <span className=" text-gray-700">{product.category}</span>
              </h3>
              <h3 className="mt-3">
                <span className="font-medium">
                  Rating:
                </span>
              <Rating value={productRating}  fractions={2} readOnly />
              </h3>
              <p className="mt-3">
                <span className=" font-medium">
                  Price:
                </span>
                <br />
                <span className="">
                $ {product.price}
                </span>
              </p>
              <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
              className="mt-3 bg-gray-500 text-white rounded-lg px-3 py-1"
            >
              Buy Now
            </button>
            </div>
          </div>
          <div className="mt-5 p-3">
            <h1 className="mb-3 text-lg font-semibold text-gray-700">
              {product.title}
            </h1>
            <p className=" text-gray-500 leading-7">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
