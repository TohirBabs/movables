import React from 'react'
import Header from './Header/Header'
import Welcome from './Welcome/Welcome'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero flex' id='home'>
        <Header />
        <Welcome />
    </div>
  )
}

export default Hero