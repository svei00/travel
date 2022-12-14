import './aboutus.css';
import React from 'react'
import AboutUsData from './AboutUsData';

function AboutUs() {
  return (
    <div className='container'>
        <AboutUsData
            title = 'Our History'
            description = 'The ultimate resource for our bungalow us to bring you a world class experiencie. 
            La Estancia de Lupita was created to assist those who want to stay in one of these magical rooms, 
            by listing every single property in the world that has them.'
        />

        <AboutUsData
            title = 'Our Mission'
            description = 'Serving our customer, searching their entire satisfaction and providing touristic services of quality, 
            committing to the social, cultural and environmental reality of our region.'
        />

        <AboutUsData
            title = 'Our Vision'
            description = 'Being part of the exclusive leaders in the Riviera Nayarit tourism sector; as well as being 
            recognized for the quality of our services and the contribution that we make to the development of our region.'
        />
    </div>
  )
}

export default AboutUs