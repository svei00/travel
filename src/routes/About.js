import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import about from '../assets/images/about.jpg'
import { RiQuestionnaireLine } from 'react-icons/ri'
import Footer from '../components/Footer'

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
        <Footer/>
    </>
  )
}

export default About