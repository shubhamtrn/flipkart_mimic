import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img src="/images/flipkart_logo.png" alt="flipkart" id="logo" />
        <input
          type="text"
          id="search"
          placeholder="Search for products and more"
        />
        <input type="button" value="Search" id="searchBtn" />
        <ul>
          <li>Become a seller</li>

          <img
            src="/images/cart.png"
            alt="cart"
            style={{ width: "25px", height: "25px", margin: "12px 0 12px 30px" }}
          />

          <li style={
            {margin:"12px 0px"}
          }> Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
