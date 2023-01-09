import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import Button from './Button';
import './modal.css';

const Modal = (props) => {
  return (
    <section className='modalBG'>
        <div className='modalContainer'>
            <Button
                title='Jotavia'
            />
            <header className='title'>
                <h1>Form</h1>
            </header>
            <section className='body'>
                <p>Whasup</p>
            </section>
            <footer className='footer'>
                <Button class='button' clicktHandler = {props.openModal}
                    title='Can.cel'
                />
                <input type='button'
                value='Continue' 
            />        
            </footer>
        </div>
    </section>
  )
}

export default Modal;