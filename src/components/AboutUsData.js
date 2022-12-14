import './aboutus.css'
import React from 'react'

function AboutUsData(props) {
  return (
    <div className='container'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default AboutUsData