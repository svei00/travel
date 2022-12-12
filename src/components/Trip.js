import './trip.css';
import trip1 from '../assets/images/trip1.jpg';
import trip2 from '../assets/images/trip2.jpg';
import trip3 from '../assets/images/trip3.jpg';

import React from 'react'
import TripData from './TripData';

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps. </p>

        <div className='tripcard'>
            <TripData 
                image = {trip1}
                heading = 'Trip in Puerto Vallarta'
                description = 'Puerto Vallarta is defined by the natural charm of its beaches embraced by the Sierra Madre mountains;
                 the essence of its culture, gastronomy and traditions; and the warmth and hospitality of being welcomed like a friend. 
                 This magical destination has an authentic Mexican taste and spirit.'
            />

            <TripData 
                image = {trip2}
                heading = 'Trip in Marietas Islands'
                description = 'The Marietas Islands are located a short distance from Banderas Bay, and provides many reasons to 
                visit such as sunbathing, birdwatching, and simply enjoying a romantic day with your partner. A day at the Marietas 
                Islands can provide you with plenty of adventure and activities toop. You can choose to explore some of the other 
                islands, or relax on the crater that is located in the middle of the main island, or just go snorkeling and diving to 
                experience the magic underwater.'
            />

            <TripData 
                image = {trip3}
                heading = 'Trip in Sayulita'
                description = "Just 33-km northwest of Nuevo Vallarta lies Sayulita Nayarit. When dusk falls on the beaches of 
                Sayulita Mexico in Riviera Nayarit, you will see silhouettes skim across the water like floating spirits. Watch 
                bodies dive and emerge, facing the sunset while awaiting the next perfect wave. Each evening, these scenes repeat, 
                painted in the dazzling tones of the sun’s descent into the Pacific Ocean."
            />
        </div>
    </div>
  )
}

export default Trip;