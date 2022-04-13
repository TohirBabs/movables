import React from 'react'

import relax from './relax-image 1.png'
import rightarrow from './right-arrow.png'
import './Waitlist.css'

const Waitlist = () => {
  return (
    <div className='waitlist flex'>
        <img src={relax}></img>
        <div className='waitlist__text'>
            <h2>Relax and let us do the heavylifting for you</h2>
            <h3>Onboard and get client. Simple, Fast, Secure.</h3>
            <p>Register your Company or Vehicle with us as a service provider and let us handle, clients sourcing, 
            supply chain operations and cutomer support.</p>
            <button><p>Join waitlist</p> <img src={rightarrow}></img></button>
        </div>
    </div>
  )
}

export default Waitlist