import React from 'react'
import { customProvider } from "../context/StateContext";
import "./Searchbar.css";


const SearchBar = () => {
  const {search,setSearch} = customProvider();
  return (
    <div>
      <div className="mt-20 flex justify-center">
      <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" px-2 py-1 rounded md:w-[500px] search-input"
            placeholder="search products.."
          />
      </div>
    </div>
  )
}

export default SearchBar