import React from 'react'
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decoder';

const google = window.google;

function Sign() {

    const {user, setUser } = useState({}) // Remember to don't use useState to save the user in a fullstack app. Instead of that you can use Redux or globalState

    function handleCallbackResponse(response) {
      console.log('Encode JWT ID Token: ' + response.credential);
      let userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);    
    }
  
    useEffect(() => {
      /* Globla Google */
      google.accounts.id.initialize({
        client_id: '',
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        { theme: 'outline', size: 'large' }
      );
  
    }, []);
  

  return (
    <div>Sign</div>
  )
}

export default Sign