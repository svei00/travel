import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import hero from '../assets/images/riviera_nayarit_002.jpg'
import Destination from '../components/Destination'
import { GiBookmarklet } from 'react-icons/gi'

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
            btnIcon = {<GiBookmarklet style={{fontSize: 16}}/>}
            url = '/contact'
            btnClass = 'show'
        />
        <Destination />
    </>
  )
}

export default Home