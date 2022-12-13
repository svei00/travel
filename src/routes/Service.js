import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import service from '../assets/images/service.jpg'
import { RiServiceLine } from 'react-icons/ri'
import Footer from '../components/Footer'

function Service() {
  return (
    <>
         <Navbar />
         <Hero
            cName = 'hero-mid' 
            image =  {service}
            title = 'Service'
            icon = {<RiServiceLine style={{color: "white"}}/>} 
            btnClass = 'hidden'
        />
        <Footer/>
    </>
  )
}

export default Service