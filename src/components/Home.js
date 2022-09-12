import React from 'react'
import ProductDiv from './ProductDiv'
import ProductSlider from './ProductSlider'
import Electronics from './Electronics'
import KitchensEssentials from './KitchensEssentials'
import BeautyToys from './BeautyToys'
import FooterAbove from './FooterAbove'

function Home() {
  return (
    <div id='home'>
    <ProductDiv/>
   <ProductSlider/>
   <Electronics/>
   <KitchensEssentials/>
   <BeautyToys/>
   <FooterAbove/>
    </div>
  )
}

export default Home
