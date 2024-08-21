import React, { useState, useEffect, useContext } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import "./Header.scss";

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const { wishlist } = useContext(WishlistContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeTopBar = () => {
    setTopBarVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {topBarVisible && (
        <div className="top-bar">
          <div className="container bar-container">
            <div
              className="top-bar__text"
              style={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Sign up and get 20% off your first order.
              <a href="#signup">Sign Up Now</a>
            </div>
            <button className="top-bar__close" onClick={closeTopBar}>
              &times;
            </button>
          </div>
        </div>
      )}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="site-header__navigation container">
          <div className="site-header__logo">
            <Link to="/">
              <h1>SHOP.CO</h1>
            </Link>
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
            <button className="site-header__close-button" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </ul>
          <div className="site-header__search">
            <input
              type="text"
              placeholder="Search..."
              className="site-header__search-input"
            />
          </div>
          <div className="site-header__icons">
            <Link to="/cart">
              <div className="site-header__cart-icon">
                <FaShoppingCart className="site-header__icon" />
                {/* {wishlist.length > 0 && (
                  <span className="site-header__cart-count">
                    {wishlist.length}
                  </span>
                )} */}
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="site-header__wishlist-icon">
                <FaHeart className="site-header__icon" />
                {wishlist.length > 0 && (
                  <span className="site-header__wishlist-count">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/login">
              <div className="site-header__wishlist-icon">
                {/* <FaHeart className="site-header__icon" /> */}
              </div>
            <FaUserCircle className="site-header__icon" />
            </Link>
            <button className="site-header__menu-button" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SiteHeader;
