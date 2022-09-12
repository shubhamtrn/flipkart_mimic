import React from 'react'
import { Link } from 'react-router-dom'

function ProductDiv() {
  return (
    <div className='pro_container'>
      <Link to='/top_offer' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/top_offers.webp" alt="top_offers" />
        <h4>Top Offers</h4>
      </div></Link>
      <Link to='/grocery' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/grocery.webp" alt="top_offers" />
        <h4>Grocery</h4></div></Link>
      <Link to='/mobile' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/Mobile.webp" alt="top_offers" />
        <h4>Mobiles</h4></div></Link>
      <Link to='/fashion' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/fashions.webp" alt="top_offers" />
        <h4>Fashion</h4></div></Link>
      <Link to='/laptops' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/electronics.webp" alt="top_offers" />
        <h4>Electronics</h4></div></Link>
      <Link to='/homepage' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/home.webp" alt="top_offers" />
        <h4>Home</h4></div></Link>
      <Link to='/appliance' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/Appliances.webp" alt="top_offers" />
        <h4>Appliances</h4></div></Link>
      <Link to='/travel' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/travel.webp" alt="top_offers" />
        <h4>Travel</h4></div></Link>
      <Link to='/beauty' style={{textDecoration:"None",color:"black"}}><div className="items">
        <img src="/images/Beauty_toys.webp" alt="top_offers" />
        <h4>Beauty & Toys</h4></div></Link>
    </div>
  )
}

export default ProductDiv
