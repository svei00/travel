import React from 'react'
import { GrFormClose } from 'react-icons/gr';

function Modal() {
  return (
    <section className='modalBG'>
        <div className='container'>
            <input type='button'
                value={<GrFormClose />} 
            />
            <head className='title'>
                <h1>Form</h1>
            </head>
            <section className='body'>
                <p>Whasup</p>
            </section>
            <footer className='footer'>
                <input type='button'
                    className='button'
                    value='Cancel' 
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