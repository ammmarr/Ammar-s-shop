/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Badge } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import "../componentsStyles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../fireBase";


const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    try {
      auth.currentUser.email;
      setLoggedIn(true);
    } catch (error) {
      setLoggedIn(false);
    }

    return () => {
      setLoggedIn(false);
    };
  }, []);
  const navigate = useNavigate();
  function cartButtonClick() {
    if (loggedIn) {
      navigate("Cart");
    } else alert("You need to Log in first to access your cart");
  }

  let lineStyle;
  let navLinkStyles = {
    color: "white",
    textDecoration: "none",
  };

  if (location.pathname != "/") {
    lineStyle = {
      color: "#000000",
      backgroundColor: "black",
      boxShadow: "white",
      textShadow: "none",
    };
    navLinkStyles = {
      color: "black",
      textDecoration: "none",
      textShadow: "none",
    };
  }

  let menuAppearance = "";
  if (menuToggle) {
    menuAppearance = {
      transform: "translateX(0vw)",
    };
  } else {
    menuAppearance = {
      transform: "translateX(60vw)",
    };
  }
  const cartItemsNumber = useSelector((state) => state.cart.itemsList).length;

  return (
    <>
      <nav className="header-container">
        <div className="info" style={navLinkStyles}>
          <div className="email-number info-item">
            ammarrelkosii@yahoo.com<span>"my actual email"</span> / +2012341231
          </div>
          <div className="open-times info-item">
            open from 9am to 5pm - closed on weekends
          </div>
        </div>
        <div className="navbar-wrapper">
          <span id="header-seperation-line" style={lineStyle}></span>

          <div className="left-section">
            <div className="logo">
              <Link to="/" style={navLinkStyles}>
                <span>Ammar's shop</span>
              </Link>
            </div>
            <div className="nav-links">
              <Link to="/" style={navLinkStyles}>
                <span className="nav-link">Home</span>
              </Link>
              <Link to="/Me" style={navLinkStyles}>
                <span className="nav-link">About Me</span>
              </Link>
              <Link to="../Shop" style={navLinkStyles}>
                <span className="nav-link">Shop</span>
              </Link>
            </div>
          </div>
          <div className="right-section">
            <Link to="/" style={navLinkStyles}>
              <span className="nav-link">
                Search
                <div className="icon">
                  <SearchOutlined />
                </div>
              </span>
            </Link>

            <span
              className="nav-link"
              onClick={cartButtonClick}
              style={navLinkStyles}
            >
              Cart
              <div className="icon">
                <Badge badgeContent={cartItemsNumber} showZero>
                  <LocalMallOutlinedIcon />
                </Badge>
              </div>
            </span>

            <Link to="../LogIn" style={navLinkStyles}>
              <span className="nav-link">
                {loggedIn ? auth.currentUser.email : "login"}
                <div className="icon">
                  <Person2OutlinedIcon />
                </div>
              </span>
            </Link>
          </div>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuToggle((prev) => !prev)}
        >
          <MenuIcon />
        </div>
        <div className="mobile-menu" style={menuAppearance}>
            <Link to="../LogIn" style={navLinkStyles}>
          <span className="mobile-nav-link">
            Log in
            <div className="icon">
              <Person2OutlinedIcon />
            </div>
          </span>
          </Link>
          <span className="mobile-nav-link">
            Cart
            <div className="icon">
              <Badge badgeContent={30} showZero>
                <LocalMallOutlinedIcon />
              </Badge>
            </div>
          </span>
          <span className="mobile-nav-link">
            Search
            <div className="icon">
              <SearchOutlined />
            </div>
          </span>
          <span className="mobile-nav-link"></span>
          <span className="mobile-nav-link">
            <a>Pages</a>
          </span>
          <span className="mobile-nav-link">
            <a>Shop</a>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
