import './trip.css';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import React from 'react'
import TripData from './TripData';
import Sign from './Sign';

function Trip() {
  return (
    <div className='trip'>
        <h1>Tours &amp; Excursions</h1>
        <p>You can discover unique destinations in any of out excursions. </p>
        
        <div className='tripcard'>
            <TripData 
                image = {service1}
                heading = 'Jungle Buggies'
                description = 'Discover the jungles of the Sierra Madre! Get prepared to get dirty as you drive your own dune buggy. 
                We offer discounts on the best Dune Buggy tours in Puerto Vallarta.'
            />

            <TripData 
                image = {service2}
                heading = 'Snorkeling'
                description = "You'll be opened up to a whole new world - one of striking beauty and strange and unusual creatures.  
                You might see a spotted eagle ray flying gently by you, a funny looking needlefish, or even a giant lobster!  In whale 
                season, you can hear the songs of the humpbacks underwater, and often see them jumping off the bow of your boat.  
                It's truly an amazing sight - one you won't want to miss!"
            />

            <TripData 
                image = {service3}
                heading = 'Horseback Riding'
                description = "You can go from waterfalls to rivers to sunset horseback riding tours. We're sure that you'll love our 
                horseback riding tours - we've done them ourselves and loved every minute!  A great cruise shore excursion or part of 
                your vacation in Puerto Vallarta.  Let's go horseback riding."
            />
        </div>
    </div>
  )
}

export default Trip;

