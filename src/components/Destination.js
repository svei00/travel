import './destination.css'
import React from 'react'
import DestinationData from './DestinationData'
import img1 from '../assets/images/penita1.jpg';
import img2 from '../assets/images/penita2.jpg';
import img3 from '../assets/images/punta1.jpg';
import img4 from '../assets/images/punta2.jpg';

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
    
        <DestinationData
            className = 'descOne'
            heading = 'Pe&#241;ita de Jaltemba'
            description = "As the sun rises in La Pe&#241;ita Mexico (aka La Pe&#241;ita de Jaltemba) it is common to see fishermen’s
            nets spread out on the beach next to their small boats. You will also witness dozens of pelicans 
            hovering overhead and gently floating on the waves nearby.

            La Pe&#241;ita is a warm Riviera Nayarit vacation destination with all the charms of a small fishing village. 
            This inviting Mexican retreat offers its visitors tranquility and exceptional natural beauty. 
            It is no wonder that numerous foreigners have made this Nayarit treasure their second home."

            img1 = {img1}
            img2 = {img2}
        />

        <DestinationData
            className = 'descOne-reverse'
            heading = 'Punta de Mita'
            description = "When you are looking at Nayarit destinations for a vacation you want to leave the world behind, 
            as if you were alone on a desert island, sheltered in a hidden refuge. This is an apt description of 
            Punta Mita Mexico. This exclusive and luxurious vacation getaway rises from the peninsula and includes almost
             10 kilometers (six miles) of virgin Pacific coast beaches, surrounded by rolling green hills. In fact, 
             Punta Mita beaches were voted #5 for 2020s Best Beaches in Mexico by US News & World Report.

            Here, the Pacific Ocean opens before those visitors who never seem to tire of admiring the endless turquoise-blue
             depths of the sea."

            img1 = {img3}
            img2 = {img4}
        />

    </div>
  )
}

export default Destination