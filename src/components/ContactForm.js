import './contactForm.css';
import React, { useRef } from 'react'
import Button from './Button';
import { RiMailSendLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'svei00',
                'template_f2vnjd2',
                refForm.current,
                'Ff-0XRmnMhpWt9tDR'
            )
            .then (
                () => {
                    alert('Message Successfully sent!!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    
  return (
    <div className='container'>
        <h1>Contact Us</h1>
        <form ref={refForm} onSubmit={sendEmail}>
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