import React from "react";
import { customProvider } from "../context/StateContext";
import Product from "./Product";
import SearchBar from "./SearchBar";

const Products = () => {
  const {
    state: { products },
  } = customProvider();

  //  console.log(productList);

  return (
    <>
    <SearchBar/>
    <div className=" flex flex-wrap justify-center gap-10 mt-10">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
    </>
  );
};

export default Products;
