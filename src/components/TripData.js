import './trip.css'
import React from 'react'

function TripData(props) {
  return (
    <div className='t-card'>
        <div className='t-img'>
            <img alt='v-card' src={props.image}/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.description}</p>
    </div>
  )
}

export default TripData