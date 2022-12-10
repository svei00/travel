import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import service from '../assets/images/service.jpg'
import { MdNetworkWifi } from 'react-icons/md'

function Service() {
  return (
    <>
         <Navbar />
         <Hero
            cName = 'hero-mid' 
            image =  {service}
            title = 'Service'
            icon = {<MdNetworkWifi style={{color: "white"}}/>} 
            btnClass = 'hidden'
        />
    </>
  )
}

export default Service