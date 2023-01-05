import React from 'react';
import Button from './Button';
import './Hero.css';

function Hero(props) {
  return (
    <>
        <div className={props.cName}>
            <img alt='Hero' src={props.image}/>

            <div className='text'>
                <h1>{props.title} {props.icon}</h1>
                <p>{props.text}</p>
                <a 
                    href={props.url}
                    className={props.btnClass}>
                    <Button title={props.btn} icon={props.btnIcon} class='button'/>
                </a>            
            </div> 
        </div>    
    </>
  )
}

export default Hero