import React from 'react'

function Electronics() {
  return (
    <>
    <div className="clust_item">
    <div className='titlebar' >
        <h2>Best of Electronics</h2> 
    </div>
    <div className='item_cont'>
        <div className="item">
            <img className='item_image' src="/images/elct1.webp" alt="" />
            <h3 className='item_details'>Monitors</h3>
            <p className='price'>From ₹20,000</p>
            <p className="details">LG OLED TV</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/elect2.webp" alt="" />
            <h3 className='item_details'>12th Gen Laptops</h3>
            <p className='price'>From ₹47,000</p>
            <p className="details">High Performance Laptops</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/elect4.webp" alt="" />
            <h3 className='item_details'>ASUS Laptops</h3>
            <p className='price'>From ₹54,999</p>
            <p className="details">ASUS</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/elect3.webp" alt="" />
            <h3 className='item_details'>Printers</h3>
            <p className='price'>From ₹14,999</p>
            <p className="details">HP</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/elect5.webp" alt="" />
            <h3 className='item_details'>Dell Laptops</h3>
            <p className='price'>From ₹35,000</p>
            <p className="details">New Dell Collections</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/elect6.webp" alt="" />
            <h3 className='item_details' >Sony OLED </h3>
            <p className='price'>From ₹85,000</p>
            <p className="details">High Quality HD TV</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Electronics
