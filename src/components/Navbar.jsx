import React from "react";
import { DiBingSmall } from "react-icons/di";
import { BsCartPlus } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { customProvider } from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = customProvider();
  // console.log(cart)
  return (
    <div className="navbar">
      <div className=" p-3 shadow flex justify-around items-center align-middle bg-white  ">
        <div className="f">
          <Link to={"/"}>
            <h1 className=" text-4xl ">
              <DiBingSmall />
            </h1>
          </Link>
        </div>
        <div className=" flex gap-2 align-middle items-center">
          <Link to={"/addToCart"}>
            <div className=" relative">
              <BsCartPlus className=" text-3xl" />
              <h2 className="rounded-[100%] px-1 flex justify-center absolute bottom-5 left-5 w-5 h-5 bg-black">
                <span className=" text-white  text-sm ">{cart.length}</span>
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
