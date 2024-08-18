import React, { useState } from "react";
import "./Header.scss";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Search from "../Search/Search";

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <nav className="site-header__navigation container">
        <div className="site-header__logo">
          <h1>SHOP.CO</h1>
        </div>
        <ul
          className={`site-header__navigation-links ${
            menuOpen ? "site-header__navigation-show" : ""
          }`}
        >
          <li className="site-header__navigation-item">Shop</li>
          <li className="site-header__navigation-item">On Sale</li>
          <li className="site-header__navigation-item">New Arrivals</li>
          <li className="site-header__navigation-item">Brands</li>
          <button
            className="site-header__close-button"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
        </ul>
        <div className="site-header__search">
          <Search />
        </div>
        <div className="site-header__icons">
          <FaShoppingCart className="site-header__icon" />
          <FaUserCircle className="site-header__icon" />
          <button className="site-header__menu-button" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
