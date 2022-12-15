import './contactForm.css';
import React from 'react'
import Button from './Button';
import { RiMailSendLine } from 'react-icons/ri';

function ContactForm() {
  return (
    <div className='container'>
        <h1>Contact Us</h1>
        <form>
            <input placeholder='Write your Name'/>
            <input placeholder='What is your Email?'/>
            <input placeholder='Subject '/>
            <textarea placeholder='Message' rows='4'></textarea>
            <Button
                title = 'Send '
                icon = {<RiMailSendLine />}
            />
        </form>
    </div>
  )
}

export default ContactForm; 