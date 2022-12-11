import './destination.css'
import React from 'react'
import img1 from '../assets/images/penita1.jpg'
import img2 from '../assets/images/penita2.jpg'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>

        <div className='descOne'>
            <div className='descTwo'>
                <h2>Pe&#241;ita de Jaltemba</h2>
                <p>
                    As the sun rises in La Pe&#241;ita Mexico (aka La Pe&#241;ita de Jaltemba) it is common to see fishermen’s 
                    nets spread out on the beach next to their small boats. You will also witness dozens of pelicans 
                    hovering overhead and gently floating on the waves nearby.

                    La Pe&#241;ita is a warm Riviera Nayarit vacation destination with all the charms of a small fishing village. 
                    This inviting Mexican retreat offers its visitors tranquility and exceptional natural beauty. 
                    It is no wonder that numerous foreigners have made this Nayarit treasure their second home.
                </p>
            </div>
            <div className='pics'>
                <img alt='firts one' src={img1} />
                <img alt='Second one' src={img2} />
            </div>
        </div>
    </div>
  )
}

export default Destination