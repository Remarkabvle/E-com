import React from "react";
import {FaSearch} from "react-icons/fa"
import "./Search.scss"


const Search = () => {
  return (
    <div className="site-header__search">
      <FaSearch className="site-header__search-icon" />
      <input
        type="text"
        className="site-header__search-input"
        placeholder="Search for products..."
      />
    </div>
  );
};

export default Search;
