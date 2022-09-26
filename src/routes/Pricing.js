import React from 'react'
import Footer from '../component/Footer'
import HeroImg from '../component/HeroImg'
import Navbar from '../component/Navbar'
import PricingI from '../component/Pricing'
const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg heading='PRICING.' text='Choose your trip.'/>
        <PricingI/>
        <Footer/>
    </div>
  )
}

export default Pricing
