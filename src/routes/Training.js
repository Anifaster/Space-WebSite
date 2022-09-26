import React from 'react'
import Footer from '../component/Footer'
import HeroImg from '../component/HeroImg'
import Navbar from '../component/Navbar'
import TrainingTwo from '../component/TrainingTwo'

const Training = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading='TRAINING.' text='Pre-Flight & In-Flight Training.'/>
      <TrainingTwo/> 
      <Footer/>
    </div>
  )
}

export default Training
