import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import about from '../assets/images/about.jpg'
import { RiQuestionnaireLine } from 'react-icons/ri'

function About() {
  return (
    <>
        <Navbar />
        <Hero
            cName = 'hero-mid' 
            image =  {about}
            title = 'About us'
            icon = {<RiQuestionnaireLine style={{color: "white"}}/>} 
            btnClass = 'hidden'
        />
    </>
  )
}

export default About