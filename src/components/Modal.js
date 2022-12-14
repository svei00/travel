import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { TbClick } from 'react-icons/tb';
import Button from './Button';
import './modal.css';
import Register from './Register';

function Modal() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
        <Button 
            title = 'Sign Up '
            icon = {<TbClick />}
            class = 'button'
            clicktHandler = {toggleModal}    
        />
        {modal && (
            <div className='modal'>
                <div onClick={toggleModal} className='overlay'> {/* // Overlay means to put it in gray/black, etc */}
                    <div className='container'>
                        <Button 
                            class = 'button'
                            
                            icon = {<GrFormClose />}
                        />
                        <Register />
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Modal