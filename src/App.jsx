import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
};

export default App;
