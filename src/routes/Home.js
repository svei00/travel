import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import hero from '../assets/images/riviera_nayarit_002.jpg'

function Home() {
  return (
    <>
        <Navbar />
        <Hero
            cName = 'hero'
            image = {hero}
            title = 'Your Journey, Your Story'
            text = 'Choose your Favourite Destination'
            btn = 'Travel Plan '
            url = '/contact'
            btnClass = 'show'
        />
    </>
  )
}

export default Home