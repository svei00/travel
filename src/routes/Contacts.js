import React from 'react'
import contact from '../assets/images/contact.jpg'
import { RiCustomerService2Line } from 'react-icons/ri'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function Contacts() {
  return (
    <>
         <Navbar />
         <Hero
            cName = 'hero-mid' 
            image =  {contact}
            title = 'Contact us'
            icon = {<RiCustomerService2Line style={{color: "white"}}/>} 
            btnClass = 'hidden'
        />
        <Footer/>
    </>
  )
}

export default Contacts