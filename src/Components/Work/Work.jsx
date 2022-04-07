import React from 'react'


import './Work.css'

import step1 from './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import step4 from './step4.png'

const Work = () => {
  return (
    <section className='work'>
        <div className='work__about'>
            <h2>How we work?</h2>
            <p>As a service provider we treat each business as a partner help to 
                build an eco-system for fast and easy services
            </p>
        </div>
        <div className='work__divide'></div>
        <div className='work__steps'>
            <div className='work__step flex'>
                <img src={step1}></img>
                <div>
                    <span></span>
                    <h3>Step 1</h3>
                    <h3>A user Opens the app</h3>
                    <p>
                    The User has the need to transport his goods to a particular area 
                    or location, where the user enters their destination into the 
                    “Where to?” box; reviews each service option for vehicle size, 
                    price, and estimated dropoff time; chooses the desired option; 
                    then confirms the pickup.
                    </p>
                </div>
                
            </div>
            <div className='work__step flex'>
                <img src={step2}></img>
                <div>
                    <span></span>
                    <h3>Step 1</h3>
                    <h3>A user Opens the app</h3>
                    <p>
                    The User has the need to transport his goods to a particular area 
                    or location, where the user enters their destination into the 
                    “Where to?” box; reviews each service option for vehicle size, 
                    price, and estimated dropoff time; chooses the desired option; 
                    then confirms the pickup.
                    </p>
                </div>
                
            </div>
            <div className='work__step flex'>
                <img src={step3}></img>
                <div>
                    <span></span>
                    <h3>Step 1</h3>
                    <h3>A user Opens the app</h3>
                    <p>
                    The User has the need to transport his goods to a particular area 
                    or location, where the user enters their destination into the 
                    “Where to?” box; reviews each service option for vehicle size, 
                    price, and estimated dropoff time; chooses the desired option; 
                    then confirms the pickup.
                    </p>
                </div>
                
            </div>
            <div className='work__step flex'>
                <img src={step4}></img>
                <div>
                    <span></span>
                    <h3>Step 1</h3>
                    <h3>A user Opens the app</h3>
                    <p>
                    The User has the need to transport his goods to a particular area 
                    or location, where the user enters their destination into the 
                    “Where to?” box; reviews each service option for vehicle size, 
                    price, and estimated dropoff time; chooses the desired option; 
                    then confirms the pickup.
                    </p>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Work