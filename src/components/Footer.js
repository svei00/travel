import './footer.css';
import '../components/navbar.css';
import React from 'react'
import { GiPalmTree } from 'react-icons/gi'
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1 className='logo'>La Estancia de Lupita <GiPalmTree style={{color: 'aquamarine'}}/></h1>
                <p>Choose yout favorite destination</p>
            </div>
            <div>
                <a href='https://github.com/svei00'><SiGithub onMouseOver={({target})=>target.style.color="#171515"}
                onMouseOut={({target})=>target.style.color="white"}/></a>
                <a href='https://www.FaceBook.com'><SiFacebook onMouseOver={({target})=>target.style.color="#3B5998"}
                onMouseOut={({target})=>target.style.color="white"}/></a>
                <a href='https://twitter.com/svei00'><SiTwitter onMouseOver={({target})=>target.style.color="#00ACEE"}
                onMouseOut={({target})=>target.style.color="white"}/></a>
                <a href='https://www.linkedin.com/in/ivan-e-villanueva-26253157/'><SiLinkedin onMouseOver={({target})=>target.style.color="#0072B1"}
                onMouseOut={({target})=>target.style.color="white"}/></a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h4>Comunity</h4>
                <a href='https://github.com/svei00'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='https://twitter.com/svei00'>Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troubleshoting</a>
                <a href='/'>Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'>Terms of Service</a>
                <a href='/'>Provacy Policy</a>
                <a href='/'>License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer