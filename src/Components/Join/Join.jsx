import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='join'>
        <h2>Join Movables today</h2>
        <p>
        The rider enters their destination into the “Where to?” box; 
        reviews each ride option for vehicle size, price, and estimated dropoff time; 
        chooses the desired option; then confirms the pickup.
        </p>
        <div className='buttons'>
            <button>Join in as Dispatcher</button>
            <button>Join in as User</button>
        </div>
    </div>
  )
}

export default Join