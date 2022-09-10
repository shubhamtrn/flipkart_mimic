import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="space"></div>
        <div>
        <Link to="/"><img src="/images/flipkart_logo.png" alt="flipkart" id="logo" /></Link></div>
        <input
          type="text"
          id="search"
          placeholder="Search for products and more"
        />
        <input type="button" value="Search" id="searchBtn" />
        <ul>
        <Link to="/sellersite" style={{textDecoration:"None"}}><li>Become a seller</li></Link>

          <img
            src="/images/cart.png"
            alt="cart"
            style={{ width: "25px", height: "25px", margin: "15px 0 12px 30px" }}
          />

          <Link to="/cart" style={{textDecoration:"None"}}><li style={
            {margin:"15px 0px"}
          }> Cart</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
