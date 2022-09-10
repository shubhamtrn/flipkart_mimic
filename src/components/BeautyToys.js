import React from 'react'

function BeautyToys() {
  return (
    <>
    <div className="clust_item">
    <div className='titlebar' >
        <h2>Beauty, Food, Toys & more</h2> 
    </div>
    <div className='item_cont'>
        <div className="item">
            <img className='item_image' src="/images/toy1.webp" alt="" />
            <h3 className='item_details'>Fiction Books</h3>
            <p className='price'>Up to 70% off</p>
            <p className="details">Shop Now!</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/toy2.webp" alt="" />
            <h3 className='item_details'>Cricket, Football & More</h3>
            <p className='price'>Up to 70% off</p>
            <p className="details">Ceat, Nivia, Li-Ning...</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/toy4.webp" alt="" />
            <h3 className='item_details'>Dumbbell</h3>
            <p className='price'>Up to 50% off</p>
            <p className="details">PROWL, HRX & KRX</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/toy3.webp" alt="" />
            <h3 className='item_details'>Studio Headphones</h3>
            <p className='price'>Up to 80% off</p>
            <p className="details">Explore Now!</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/toy5.webp" alt="" />
            <h3 className='item_details'>Microphones</h3>
            <p className='price'>Up to 70% off</p>
            <p className="details">Explore Now!</p>
        </div>

        <div className="item">
            <img className='item_image' src="/images/toy6.webp" alt="" />
            <h3 className='item_details'>String Instruments</h3>
            <p className='price'>Up to 70% off</p>
            <p className="details">Guitars, Ukuleles & More</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default BeautyToys
