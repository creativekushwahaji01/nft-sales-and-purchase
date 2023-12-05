// Import necessary libraries
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AppNavbar.css';
import Logo from "../imgs/NFTMart.png"

const AppNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Brand/logo */}
        <Link to="/" className="brand">
          <img className='Logo' src={Logo} alt='' />
        </Link>

        {/* Navbar links */}
        <div className="nav-links">
          <Link to="/about">What is NFT</Link>
          <Link to="/nft">NFT Marketplace</Link>
          <Link to="/sale-nft">Sale NFT</Link>
          <Link to="/crypto-converter">Crypto Converter</Link>
        </div>

        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search NFT or Creater" />
          <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="26" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z" ></path>
          </svg></button>

        </div>

        {/* Auth links */}
        <div className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
